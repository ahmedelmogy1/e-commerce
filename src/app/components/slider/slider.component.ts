import { NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  standalone:true,
  imports:[NgStyle]
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  @Input() images: any[] = [];
  @Output() slideChanged = new EventEmitter<number>();
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  currentIndex = 0;
  sliderWidth = 0;
  autoPlayInterval: any;
  isDragging = false;
  startPosition = 0;
  currentTranslate = 0;
  prevTranslate = 0;

  ngAfterViewInit() {
    this.sliderWidth = this.sliderTrack.nativeElement.offsetWidth;
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); 
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateSliderPosition();
    this.slideChanged.emit(index);
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
    this.updateSliderPosition();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; 
    }
    this.updateSliderPosition();
  }

  private updateSliderPosition() {
    const offset = -this.currentIndex * this.sliderWidth;
    this.sliderTrack.nativeElement.style.transform = `translateX(${offset}px)`;
  }

  // Mouse Events
  @HostListener('mousedown', ['$event'])
  onDragStart(event: MouseEvent) {
    event.preventDefault(); 
    this.isDragging = true;
    this.startPosition = event.clientX;
    this.prevTranslate = this.currentTranslate;
    this.stopAutoPlay();
  }

  @HostListener('mouseup', ['$event'])
  onDragEnd(event: MouseEvent) {
    if (!this.isDragging) return;
    this.isDragging = false;
    const movedBy = this.currentTranslate - this.prevTranslate;

    if (movedBy < -100 && this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }

    if (movedBy > 100 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.updateSliderPosition();
    this.startAutoPlay();
  }

  @HostListener('mousemove', ['$event'])
  onDragMove(event: MouseEvent) {
    if (this.isDragging) {
      const currentPosition = event.clientX;
      this.currentTranslate = this.prevTranslate + currentPosition - this.startPosition;
      this.sliderTrack.nativeElement.style.transform = `translateX(${this.currentTranslate}px)`;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onDragLeave(event: MouseEvent) {
    if (this.isDragging) {
      this.onDragEnd(event);
    }
  }


  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    event.preventDefault(); 
    this.isDragging = true;
    this.startPosition = event.touches[0].clientX;
    this.prevTranslate = this.currentTranslate;
    this.stopAutoPlay();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (!this.isDragging) return;
    this.isDragging = false;
    const movedBy = this.currentTranslate - this.prevTranslate;

    if (movedBy < -100 && this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }

    if (movedBy > 100 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.updateSliderPosition();
    this.startAutoPlay();
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      const currentPosition = event.touches[0].clientX;
      this.currentTranslate = this.prevTranslate + currentPosition - this.startPosition;
      this.sliderTrack.nativeElement.style.transform = `translateX(${this.currentTranslate}px)`;
    }
  }
}