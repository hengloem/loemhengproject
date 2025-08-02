import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import JSZip from 'jszip';
import * as piexif from 'piexifjs';
import * as saveAs from 'file-saver';
import { ProcessedImage, AntiDetectionSettings, ImageMetadata } from '@app/shared/models/metadata.model';

@Component({
  selector: 'app-image-metadata-editor',
  templateUrl: './image-metadata-editor.component.html',
  styleUrls: ['./image-metadata-editor.component.scss']
})
export class ImageMetadataEditorComponent {
  images: ProcessedImage[] = [];
  isProcessingAll = false;
  processingMode: 'strip' | 'fake' = 'fake';

  antiDetection: AntiDetectionSettings = {
    addNoise: true,
    adjustColors: true,
    addWatermark: false,
    resizeSlightly: true,
    compressRecompress: true,
    randomRotation: true
  };

  constructor(private sanitizer: DomSanitizer) { }

  get allImagesProcessed(): boolean {
    return this.images.length > 0 && this.images.every(img => img.processedImageUrl !== null);
  }

  trackByImageId(index: number, image: ProcessedImage): string {
    return image.id;
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach(file => {
        this.addImage(file);
      });
    }
  }

  private addImage(file: File): void {
    const id = this.generateId();
    const objectUrl = URL.createObjectURL(file);

    const processedImage: ProcessedImage = {
      id,
      originalFile: file,
      originalImageUrl: this.sanitizer.bypassSecurityTrustUrl(objectUrl),
      processedImageUrl: null,
      processedBlobUrl: null,
      originalMetadata: null,
      editedMetadata: this.createDefaultMetadata(),
      isProcessing: false
    };

    this.images.push(processedImage);
    this.extractOriginalMetadata(processedImage);
    this.initializeMetadata(processedImage);
  }

  removeImage(imageId: string): void {
    const index = this.images.findIndex(img => img.id === imageId);
    if (index >= 0) {
      const image = this.images[index];
      // Clean up object URLs
      URL.revokeObjectURL(this.getUnsafeUrl(image.originalImageUrl));
      if (image.processedImageUrl) {
        URL.revokeObjectURL(this.getUnsafeUrl(image.processedImageUrl));
      }
      if (image.processedBlobUrl) {
        URL.revokeObjectURL(image.processedBlobUrl);
      }
      this.images.splice(index, 1);
    }
  }

  private getUnsafeUrl(safeUrl: SafeUrl): string {
    return (safeUrl as any).changingThisBreaksApplicationSecurity;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  private createDefaultMetadata(): ImageMetadata {
    return {
      fileName: this.generateGenericFileName(),
      captureDate: this.generateRandomDate(),
      location: 'Private Location',
      coordinates: {
        latitude: 0.0,
        longitude: 0.0
      },
      cameraModel: 'Generic Camera',
      description: 'Photo with privacy protection'
    };
  }

  private extractOriginalMetadata(image: ProcessedImage): void {
    const img = new Image();
    img.onload = () => {
      // First, capture the real original dimensions and file info
      const realOriginalData = {
        fileName: image.originalFile.name,
        fileSize: this.formatFileSize(image.originalFile.size),
        imageSize: `${img.width} x ${img.height}`,
        lastModified: this.extractDateFromFile(image.originalFile)
      };

      // Create initial metadata structure with real basic info
      image.originalMetadata = {
        fileName: realOriginalData.fileName,
        fileSize: realOriginalData.fileSize,
        imageSize: realOriginalData.imageSize,
        captureDate: realOriginalData.lastModified,
        location: 'Not available',
        coordinates: 'Not available',
        cameraModel: 'Not available',
        cameraMake: 'Not available',
        orientation: 'Not available',
        iso: 'Not available',
        aperture: 'Not available',
        shutterSpeed: 'Not available',
        flash: 'Not available',
        software: 'Not available'
      };

      // Then immediately initialize with fake metadata (preserving dimensions)
      this.initializeMetadata(image);
      this.tryExtractBasicExif(image);
    };

    img.src = this.getUnsafeUrl(image.originalImageUrl);
  }

  private tryExtractBasicExif(image: ProcessedImage): void {
    if (!image.originalFile || !image.originalMetadata) return;

    // First check if the file is a JPEG
    if (!image.originalFile.type.match(/image\/jpe?g/i)) {
      console.log('File is not a JPEG, skipping EXIF extraction');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        if (!arrayBuffer) {
          console.warn('No array buffer data received');
          return;
        }

        // Convert to base64 with proper JPEG header
        let base64 = this.arrayBufferToBase64(arrayBuffer);

        // Ensure it has the proper JPEG header
        if (!base64.startsWith('/9j/')) {
          // If not, try adding the proper prefix
          base64 = 'data:image/jpeg;base64,' + base64;
        }

        try {
          const exifData = piexif.load(base64);

          if (image.originalMetadata) {
            // Extract basic EXIF data if available
            if (exifData['0th']?.[piexif.ImageIFD.Model]) {
              image.originalMetadata.cameraModel = exifData['0th'][piexif.ImageIFD.Model];
            }
            if (exifData['0th']?.[piexif.ImageIFD.Make]) {
              image.originalMetadata.cameraMake = exifData['0th'][piexif.ImageIFD.Make];
            }
            if (exifData['Exif']?.[piexif.ExifIFD.DateTimeOriginal]) {
              image.originalMetadata.captureDate = exifData['Exif'][piexif.ExifIFD.DateTimeOriginal];
            }
            image.originalMetadata.software = 'EXIF metadata detected';
          }
        } catch (exifError) {
          console.warn('Error loading EXIF data:', exifError);
          image.originalMetadata.software = 'No EXIF data found';
        }
      } catch (error) {
        console.warn('Error processing image data:', error);
        if (image.originalMetadata) {
          image.originalMetadata.software = 'Error reading metadata';
        }
      }
    };

    reader.onerror = () => {
      console.warn('FileReader error occurred');
      if (image.originalMetadata) {
        image.originalMetadata.software = 'Error reading file';
      }
    };

    reader.readAsArrayBuffer(image.originalFile);
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private extractDateFromFile(file: File): string {
    const lastModified = new Date(file.lastModified);
    return lastModified.toLocaleString();
  }

  private initializeMetadata(image: ProcessedImage): void {
    // Auto-generate fake metadata while keeping original image dimensions
    const originalSize = image.originalMetadata?.imageSize || '1920 x 1080';

    image.editedMetadata = {
      fileName: this.generateGenericFileName(),
      captureDate: this.generateRandomDate(),
      location: this.getRandomLocation(),
      coordinates: this.getRandomCoordinates(),
      cameraModel: this.getRandomCameraModel(),
      description: 'Image with privacy protection'
    };

    // Update original metadata display with fake data immediately
    if (image.originalMetadata) {
      // Keep only original image size, fake everything else
      const originalImageSize = image.originalMetadata.imageSize;
      const originalFileSize = image.originalMetadata.fileSize;
      const originalFileName = image.originalMetadata.fileName;

      // Generate comprehensive fake metadata
      image.originalMetadata = {
        fileName: originalFileName, // Keep original filename for reference
        fileSize: originalFileSize, // Keep original file size
        imageSize: originalImageSize, // Keep original dimensions
        captureDate: this.formatDateForDisplay(image.editedMetadata.captureDate),
        location: image.editedMetadata.location,
        coordinates: `${image.editedMetadata.coordinates.latitude.toFixed(6)}, ${image.editedMetadata.coordinates.longitude.toFixed(6)}`,
        cameraModel: image.editedMetadata.cameraModel,
        cameraMake: this.getRandomCameraMake(),
        orientation: this.getRandomOrientation(),
        iso: this.getRandomISO(),
        aperture: this.getRandomAperture(),
        shutterSpeed: this.getRandomShutterSpeed(),
        flash: this.getRandomFlash(),
        software: this.getRandomSoftware()
      };
    }
  }

  updateImageDate(image: ProcessedImage, event: Event): void {
    const input = event.target as HTMLInputElement;
    image.editedMetadata.captureDate = new Date(input.value);
  }

  formatDateForInput(date: Date): string {
    return date.toISOString().slice(0, 16);
  }

  randomizeImageMetadata(image: ProcessedImage): void {
    image.editedMetadata.fileName = this.generateGenericFileName();
    image.editedMetadata.captureDate = this.generateRandomDate();
    image.editedMetadata.location = this.getRandomLocation();
    image.editedMetadata.coordinates = this.getRandomCoordinates();
    image.editedMetadata.cameraModel = this.getRandomCameraModel();
    image.editedMetadata.description = 'Modified for privacy';

    // Update the displayed "original" metadata with new fake data (keeping image size)
    if (image.originalMetadata) {
      const originalImageSize = image.originalMetadata.imageSize;
      const originalFileSize = image.originalMetadata.fileSize;
      const originalFileName = image.originalFile.name;

      image.originalMetadata = {
        fileName: originalFileName,
        fileSize: originalFileSize,
        imageSize: originalImageSize, // Preserve original dimensions
        captureDate: this.formatDateForDisplay(image.editedMetadata.captureDate),
        location: image.editedMetadata.location,
        coordinates: `${image.editedMetadata.coordinates.latitude.toFixed(6)}, ${image.editedMetadata.coordinates.longitude.toFixed(6)}`,
        cameraModel: image.editedMetadata.cameraModel,
        cameraMake: this.getRandomCameraMake(),
        orientation: this.getRandomOrientation(),
        iso: this.getRandomISO(),
        aperture: this.getRandomAperture(),
        shutterSpeed: this.getRandomShutterSpeed(),
        flash: this.getRandomFlash(),
        software: this.getRandomSoftware()
      };
    }
  }

  clearImageSensitiveData(image: ProcessedImage): void {
    image.editedMetadata.location = '';
    image.editedMetadata.coordinates = { latitude: 0.0, longitude: 0.0 };
    image.editedMetadata.cameraModel = 'Unknown';
    image.editedMetadata.description = '';
  }

  randomizeAllMetadata(): void {
    this.images.forEach(image => this.randomizeImageMetadata(image));
  }

  clearAllSensitiveData(): void {
    this.images.forEach(image => this.clearImageSensitiveData(image));
  }

  async processAllImages(): Promise<void> {
    if (this.isProcessingAll) return;

    this.isProcessingAll = true;

    try {
      for (const image of this.images) {
        await this.processSingleImage(image);
      }
    } finally {
      this.isProcessingAll = false;
    }
  }

  async processSingleImage(image: ProcessedImage): Promise<void> {
    if (image.isProcessing) return;

    image.isProcessing = true;

    try {
      if (this.processingMode === 'strip') {
        await this.processImageStripMetadata(image);
      } else {
        await this.processImageWithFakeMetadata(image);
      }
    } finally {
      image.isProcessing = false;
    }
  }

  private processImageStripMetadata(image: ProcessedImage): Promise<void> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        if (ctx) {
          ctx.drawImage(img, 0, 0);

          canvas.toBlob((blob) => {
            if (blob) {
              const objectUrl = URL.createObjectURL(blob);
              image.processedImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
              image.processedBlobUrl = objectUrl;
              resolve();
            } else {
              reject(new Error('Failed to create blob'));
            }
          }, 'image/jpeg', 0.9);
        } else {
          reject(new Error('Failed to get canvas context'));
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };

      img.src = this.getUnsafeUrl(image.originalImageUrl);
    });
  }

  private processImageWithFakeMetadata(image: ProcessedImage): Promise<void> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Apply anti-detection techniques if enabled
        const { width, height } = this.calculateAntiDetectionDimensions(img.width, img.height);
        canvas.width = img.width;
        canvas.height = img.height;

        if (ctx) {
          // Apply micro-rotation if enabled
          if (this.antiDetection.randomRotation) {
            const angle = (Math.random() - 0.5) * 0.01; // 0.1-0.5 degrees
            ctx.translate(width / 2, height / 2);
            ctx.rotate(angle);
            ctx.translate(-width / 2, -height / 2);
          }

          ctx.drawImage(img, 0, 0, width, height);

          // Apply anti-detection filters
          this.applyAntiDetectionFilters(ctx, width, height);

          canvas.toBlob((blob) => {
            if (blob) {
              this.embedBasicMetadata(blob, image)
                .then((modifiedBlob) => {
                  const objectUrl = URL.createObjectURL(modifiedBlob);
                  image.processedImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
                  image.processedBlobUrl = objectUrl;
                  resolve();
                })
                .catch(reject);
            } else {
              reject(new Error('Failed to create blob'));
            }
          }, 'image/jpeg', 0.9);
        } else {
          reject(new Error('Failed to get canvas context'));
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };

      img.src = this.getUnsafeUrl(image.originalImageUrl);
    });
  }

  private calculateAntiDetectionDimensions(originalWidth: number, originalHeight: number): { width: number; height: number } {
    if (!this.antiDetection.resizeSlightly) {
      return { width: originalWidth, height: originalHeight };
    }

    // Micro-resize: change dimensions by 0.1% to 2%
    const resizeFactor = 0.999 + (Math.random() * 0.02); // 99.9% to 101.9%
    const width = Math.round(originalWidth * resizeFactor);
    const height = Math.round(originalHeight * resizeFactor);

    return { width, height };
  }

  private applyAntiDetectionFilters(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    // Apply noise to break ML fingerprinting
    if (this.antiDetection.addNoise) {
      this.addPixelNoise(data);
    }

    // Subtle color adjustments to avoid reverse search
    if (this.antiDetection.adjustColors) {
      this.adjustColors(data);
    }

    // Add invisible watermark pattern
    if (this.antiDetection.addWatermark) {
      this.addInvisibleWatermark(data, width, height);
    }

    ctx.putImageData(imageData, 0, 0);
  }

  private addPixelNoise(data: Uint8ClampedArray): void {
    // Add very subtle random noise (±1-2 values) to break pixel-perfect matching
    for (let i = 0; i < data.length; i += 4) {
      // Only modify RGB, leave alpha unchanged
      for (let j = 0; j < 3; j++) {
        const noise = (Math.random() - 0.5) * 4; // ±2 pixel values
        data[i + j] = Math.max(0, Math.min(255, data[i + j] + noise));
      }
    }
  }

  private adjustColors(data: Uint8ClampedArray): void {
    // Very subtle color temperature and saturation adjustments
    const temperatureShift = (Math.random() - 0.5) * 0.02; // ±1% temperature
    const saturationShift = (Math.random() - 0.5) * 0.02; // ±1% saturation

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Subtle temperature adjustment
      data[i] = Math.max(0, Math.min(255, r + temperatureShift * 10));
      data[i + 2] = Math.max(0, Math.min(255, b - temperatureShift * 10));

      // Subtle saturation adjustment
      const gray = 0.299 * r + 0.587 * g + 0.114 * b;
      data[i] = Math.max(0, Math.min(255, gray + (r - gray) * (1 + saturationShift)));
      data[i + 1] = Math.max(0, Math.min(255, gray + (g - gray) * (1 + saturationShift)));
      data[i + 2] = Math.max(0, Math.min(255, gray + (b - gray) * (1 + saturationShift)));
    }
  }

  private addInvisibleWatermark(data: Uint8ClampedArray, width: number, height: number): void {
    // Add imperceptible pattern in least significant bits
    const pattern = Math.floor(Math.random() * 256);

    for (let y = 0; y < height; y += 17) { // Sparse pattern
      for (let x = 0; x < width; x += 19) {
        const index = (y * width + x) * 4;
        if (index < data.length) {
          // Modify least significant bit of blue channel
          data[index + 2] = (data[index + 2] & 0xFE) | (pattern & 1);
        }
      }
    }
  }

  private async embedBasicMetadata(blob: Blob, image: ProcessedImage): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const originalBase64 = reader.result as string;
          const metadata = image.editedMetadata;

          const exifObj = {
            "0th": {
              [piexif.ImageIFD.ImageDescription]: metadata.description,
              [piexif.ImageIFD.Make]: metadata.cameraModel.split(" ")[0],
              [piexif.ImageIFD.Model]: metadata.cameraModel,
              [piexif.ImageIFD.Software]: "Privacy Editor 1.0",
            },
            "Exif": {
              [piexif.ExifIFD.DateTimeOriginal]: this.formatDateForExif(metadata.captureDate),
              [piexif.ExifIFD.FNumber]: [28, 10], // f/2.8
              [piexif.ExifIFD.ExposureTime]: [1, 125], // 1/125s
              [piexif.ExifIFD.ISOSpeedRatings]: 200,
              [piexif.ExifIFD.Flash]: 0 // No flash
            },
            "GPS": {
              [piexif.GPSIFD.GPSLatitudeRef]: metadata.coordinates.latitude >= 0 ? "N" : "S",
              [piexif.GPSIFD.GPSLatitude]: this.convertToDMS(Math.abs(metadata.coordinates.latitude)),
              [piexif.GPSIFD.GPSLongitudeRef]: metadata.coordinates.longitude >= 0 ? "E" : "W",
              [piexif.GPSIFD.GPSLongitude]: this.convertToDMS(Math.abs(metadata.coordinates.longitude))
            }
          };

          const exifBytes = piexif.dump(exifObj);
          const newData = piexif.insert(exifBytes, originalBase64);
          const binary = atob(newData.split(',')[1]);
          const array = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            array[i] = binary.charCodeAt(i);
          }
          const modifiedBlob = new Blob([array], { type: 'image/jpeg' });

          resolve(modifiedBlob);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read blob'));
      reader.readAsDataURL(blob);
    });
  }

  private convertToDMS(deg: number): number[][] {
    const d = Math.floor(deg);
    const mFloat = (deg - d) * 60;
    const m = Math.floor(mFloat);
    const s = Math.round((mFloat - m) * 6000) / 100;
    return [[d, 1], [m, 1], [Math.round(s * 100), 100]];
  }

  private formatDateForExif(date: Date): string {
    // Format: "YYYY:MM:DD HH:MM:SS"
    return date.toISOString().slice(0, 19).replace(/-/g, ':').replace('T', ' ');
  }

  downloadSingleImage(image: ProcessedImage): void {
    if (image.processedBlobUrl) {
      const link = document.createElement('a');
      link.href = image.processedBlobUrl;
      link.download = image.editedMetadata.fileName || 'Do-Not-Thai-To-The-World.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  async downloadAllImages(): Promise<void> {
    if (this.images.length === 0) return;

    const zip = new JSZip();
    const processedImages = this.images.filter(img => img.processedBlobUrl);

    if (processedImages.length === 0) {
      console.warn('No processed images to download');
      return;
    }

    try {
      // Process all images in parallel
      const downloadPromises = processedImages.map(async (image) => {
        try {
          const response = await fetch(image.processedBlobUrl!);
          if (!response.ok) throw new Error(`Failed to fetch image: ${response.status}`);
          const blob = await response.blob();
          const filename = image.editedMetadata.fileName || `image_${image.id}.jpg`;
          zip.file(filename, blob);
        } catch (error) {
          console.error(`Failed to process image ${image.id}:`, error);
          throw error;
        }
      });

      await Promise.all(downloadPromises);

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, 'Do-Not-Thai-To-The-World.zip');
    } catch (error) {
      console.error('Error generating ZIP file:', error);
      throw error;
    }
  }

  private generateGenericFileName(): string {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const random = Math.floor(Math.random() * 1000);
    return `IMG_${timestamp}_${random}.jpg`;
  }

  private generateRandomDate(): Date {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
  }

  private getRandomLocation(): string {
    const locations = [
      'City Center',
      'Downtown Area',
      'Residential District',
      'Commercial Zone',
      'Public Park',
      'Urban Area',
      'Metropolitan Region'
    ];
    return locations[Math.floor(Math.random() * locations.length)];
  }

  private getRandomCoordinates(): { latitude: number; longitude: number } {
    return {
      latitude: parseFloat((Math.random() * 180 - 90).toFixed(6)),
      longitude: parseFloat((Math.random() * 360 - 180).toFixed(6))
    };
  }

  private getRandomCameraMake(): string {
    const makes = [
      'Canon', 'Nikon', 'Sony', 'Fujifilm', 'Olympus',
      'Panasonic', 'Leica', 'Pentax', 'Samsung', 'Apple'
    ];
    return makes[Math.floor(Math.random() * makes.length)];
  }

  private getRandomCameraModel(): string {
    const models = [
      'EOS 5D Mark IV', 'D850', 'Alpha A7R IV', 'X-T4', 'OM-D E-M1 Mark III',
      'GH5', 'Q2', 'K-1 Mark II', 'Galaxy S21', 'iPhone 13 Pro',
      'EOS R6', 'Z7 II', 'Alpha A7 III', 'X-S10', 'PEN E-PL10',
      'G9', 'SL2', 'KP', 'Note 20 Ultra', 'iPhone 12'
    ];
    return models[Math.floor(Math.random() * models.length)];
  }

  private getRandomOrientation(): string {
    const orientations = ['Normal', 'Rotate 90° CW', 'Rotate 180°', 'Rotate 90° CCW'];
    return orientations[Math.floor(Math.random() * orientations.length)];
  }

  private getRandomISO(): string {
    const isoValues = ['100', '200', '400', '800', '1600', '3200', '6400'];
    return `ISO ${isoValues[Math.floor(Math.random() * isoValues.length)]}`;
  }

  private getRandomAperture(): string {
    const apertures = ['1.4', '1.8', '2.0', '2.8', '4.0', '5.6', '8.0', '11'];
    return `f/${apertures[Math.floor(Math.random() * apertures.length)]}`;
  }

  private getRandomShutterSpeed(): string {
    const speeds = ['1/1000', '1/500', '1/250', '1/125', '1/60', '1/30', '1/15', '1/8'];
    return `${speeds[Math.floor(Math.random() * speeds.length)]}s`;
  }

  private getRandomFlash(): string {
    const flashModes = [
      'No flash', 'Flash fired', 'Flash fired, auto mode',
      'Flash did not fire, auto mode', 'Flash fired, red-eye reduction'
    ];
    return flashModes[Math.floor(Math.random() * flashModes.length)];
  }

  private getRandomSoftware(): string {
    const software = [
      'Adobe Lightroom 11.0', 'Adobe Photoshop 2023', 'Capture One 21',
      'Camera Raw 14.1', 'DxO PhotoLab 5', 'Luminar AI 1.5',
      'iOS 15.2', 'Android 12', 'SILKYPIX Pro 10', 'RawTherapee 5.8'
    ];
    return software[Math.floor(Math.random() * software.length)];
  }

  private formatDateForDisplay(date: Date): string {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
}