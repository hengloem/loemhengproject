import { SafeUrl } from "@angular/platform-browser";

export interface ImageMetadata {
    fileName: string;
    captureDate: Date;
    location: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    cameraModel: string;
    description: string;
}

export interface OriginalMetadata {
    fileName: string;
    fileSize: string;
    captureDate: any;
    location: string;
    coordinates: string;
    cameraModel: string;
    cameraMake: string;
    imageSize: string;
    orientation: string;
    iso: string;
    aperture: string;
    shutterSpeed: string;
    flash: string;
    software: string;
}

export interface ProcessedImage {
    id: string;
    originalFile: File;
    originalImageUrl: SafeUrl;
    processedImageUrl: SafeUrl | null;
    processedBlobUrl: string | null;
    originalMetadata: OriginalMetadata | null;
    editedMetadata: ImageMetadata;
    isProcessing: boolean;
}

export interface AntiDetectionSettings {
    addNoise: boolean;
    adjustColors: boolean;
    addWatermark: boolean;
    resizeSlightly: boolean;
    compressRecompress: boolean;
    randomRotation: boolean;
}