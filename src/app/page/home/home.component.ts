import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppInitService } from '@app/core/services/app-init.service';
import { HeaderTitleService } from '@app/core/services/header-title.service';
import { SeoService } from '@app/core/services/seo.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedTitle: string = '';
  displayedParagraph1: string = '';
  displayedParagraph2: string = '';

  titleText: string = "I'm Heng.";
  paragraph1Text: string = "I embarked on my journey as an IT guy in 2017, and over the years, I have cultivated a strong background in web development, design, data analysis, security, and algorithms.";
  paragraph2Text: string = "I am fast in collaboration with teamwork, problem-solving, well-organized, focused and have a detailed task approach to my work. I enjoy exploring new technologies and joining local workshops during my free time.";

  typewriterSpeed: number = 60; // Faster for smoother effect
  intervals: any[] = [];

  // Improved audio management
  private audioPool: HTMLAudioElement[] = [];
  private currentAudioIndex: number = 0;
  private soundEnabled: boolean = false;
  private audioReady: boolean = false;

  constructor(
    private headerTitleService: HeaderTitleService,
    private seoService: SeoService,
    private appInitService: AppInitService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setDocTitle('app.title');

    if (this.appInitService.isConfigLoaded()) {
      this.setSeoData();
    }

    this.initializeTypingSounds();

    // Small delay to ensure audio is ready
    setTimeout(() => {
      this.startTypewriter();
    }, 200);
  }

  ngOnDestroy(): void {
    this.intervals.forEach(interval => clearTimeout(interval));
    this.audioPool.forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
      sound.src = '';
    });
    this.audioPool = [];
  }

  private setSeoData() {
    this.seoService.updatePageSeo({
      title: 'Home',
      description: environment.siteDescription,
      keywords: 'Loem Heng, portfolio, tech blog, web development, Angular, programming, Cambodia developer',
      path: '/home',
      image: '/assets/img/photos/03_610_x_1020.jpg'
    });
  }

  private initializeTypingSounds(): void {
    const soundUrl = './assets/audio/typing.mp3';
    let loadedCount = 0;
    const poolSize = 8; // More audio instances for smoother playback

    for (let i = 0; i < poolSize; i++) {
      const audio = new Audio(soundUrl);
      audio.volume = 0.25; // Slightly lower volume for smoother sound
      audio.preload = 'auto';

      // Ensure audio is ready to play
      audio.addEventListener('canplaythrough', () => {
        loadedCount++;
        if (loadedCount === poolSize) {
          this.audioReady = true;
          console.log('All typing sounds loaded and ready');
        }
      });

      audio.addEventListener('error', () => {
        console.warn(`Audio file not found: ${soundUrl}`);
      });

      this.audioPool.push(audio);
    }

    // Enable sound after user interaction
    this.enableSoundOnUserInteraction();
  }

  private enableSoundOnUserInteraction(): void {
    const enableSound = () => {
      this.soundEnabled = true;
      console.log('Typing sound enabled - ready to play');

      // Test play all audio instances to unlock them
      this.audioPool.forEach((audio, index) => {
        setTimeout(() => {
          audio.play().then(() => {
            audio.pause();
            audio.currentTime = 0;
          }).catch(() => { });
        }, index * 50);
      });
    };

    // Enable on various user interactions
    ['click', 'keydown', 'touchstart'].forEach(event => {
      document.addEventListener(event, enableSound, { once: true });
    });
  }

  private playTypingSound(): void {
    if (!this.soundEnabled || !this.audioReady || this.audioPool.length === 0) {
      return;
    }

    try {
      const audio = this.audioPool[this.currentAudioIndex];

      // Only play if this audio instance is ready
      if (audio.readyState >= 2) { // HAVE_CURRENT_DATA or higher
        audio.currentTime = 0;

        const playPromise = audio.play();
        if (playPromise) {
          playPromise.catch(() => {
            // Silently handle play failures
          });
        }
      }

      // Cycle through audio instances for smooth overlap
      this.currentAudioIndex = (this.currentAudioIndex + 1) % this.audioPool.length;

    } catch (error) {
      // Silently handle errors to keep typing smooth
    }
  }

  private startTypewriter(): void {
    // Add initial delay to match when you want sound to start
    const initialDelay = 500; // 0.5 seconds delay

    setTimeout(() => {
      // Start title after initial delay
      this.typeText(this.titleText, 'title', 0);
    }, initialDelay);

    // Calculate delays for smooth transitions (add initialDelay to all)
    const titleDelay = initialDelay + this.titleText.length * this.typewriterSpeed + 400;
    const paragraph1Delay = titleDelay + this.paragraph1Text.length * this.typewriterSpeed + 600;

    // Start paragraph 1 after title finishes
    setTimeout(() => {
      this.typeText(this.paragraph1Text, 'paragraph1', 0);
    }, titleDelay);

    // Start paragraph 2 after paragraph 1 finishes
    setTimeout(() => {
      this.typeText(this.paragraph2Text, 'paragraph2', 0);
    }, paragraph1Delay);
  }

  private typeText(text: string, target: string, index: number): void {
    if (index < text.length) {
      const char = text[index];

      // Play sound for all characters except spaces
      if (char !== ' ' && char.trim() !== '') {
        this.playTypingSound();
      }

      // Update display text
      switch (target) {
        case 'title':
          this.displayedTitle += char;
          break;
        case 'paragraph1':
          this.displayedParagraph1 += char;
          break;
        case 'paragraph2':
          this.displayedParagraph2 += char;
          break;
      }

      // Add natural variation to typing speed
      const baseSpeed = this.typewriterSpeed;
      const variation = Math.random() * 20 - 10; // ±10ms variation
      const actualSpeed = Math.max(baseSpeed + variation, 30); // Minimum 30ms

      // Slightly longer pause after punctuation for natural rhythm
      const isPunctuation = /[.!?;,:]/.test(char);
      const pauseMultiplier = isPunctuation ? 1.5 : 1;

      const interval = setTimeout(() => {
        this.typeText(text, target, index + 1);
      }, actualSpeed * pauseMultiplier);

      this.intervals.push(interval);
    }
  }

  // Enhanced audio enable method
  enableAudio(): void {
    this.soundEnabled = true;

    if (this.audioPool.length > 0) {
      // Test each audio instance
      this.audioPool.forEach((audio, index) => {
        setTimeout(() => {
          audio.currentTime = 0;
          audio.play()
            .then(() => {
              setTimeout(() => audio.pause(), 100);
            })
            .catch(() => { });
        }, index * 100);
      });

      console.log('Audio test completed - typing sounds should work now');
    }
  }

  // Debug method to check audio status
  checkAudioStatus(): void {
    console.log('Sound enabled:', this.soundEnabled);
    console.log('Audio ready:', this.audioReady);
    console.log('Audio pool size:', this.audioPool.length);
    console.log('Audio states:', this.audioPool.map(a => ({
      readyState: a.readyState,
      paused: a.paused,
      volume: a.volume
    })));
  }
}