import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  stopVideos(): void {
    // Stop HTML5 video
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video && video.paused !== true && video.ended !== true) {
      video.pause();
    }

    // Stop YouTube videos using postMessage API
    const youtubeVideos = document.getElementsByClassName('youtube-video') as HTMLCollectionOf<HTMLIFrameElement>;
    if (youtubeVideos && youtubeVideos.length > 0) {
      youtubeVideos[0].contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }
}
