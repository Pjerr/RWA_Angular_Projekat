import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  private stop$ = new Subject();
  private audioObj = new Audio();

  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'next',
    'pause',
    'canplay',
    'loadedmetadata',
    'loadstart',
    'timeupdate',
  ];

  private streamObservable(url: string): Observable<any> {
    return new Observable((observer) => {
      //Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        this.removeEvents(this.audioObj, this.audioEvents, handler);
      };
    });
  }

  private addEvents(obj: any, events: any, handler: any) {
    events.forEach((event: any) => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj: any, events: any, handler: any) {
    events.forEach((event: any) => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url: string) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObj.play();
  }
  pause() {
    this.audioObj.pause();
  }
  stop() {
    this.stop$.next();
  }
  seekTo(seconds: number) {
    this.audioObj.currentTime = seconds;
  }
  formatTime(time: number, format: string = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
