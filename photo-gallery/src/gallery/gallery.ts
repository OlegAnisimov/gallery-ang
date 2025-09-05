import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef,
  inject, Injector, input, OnDestroy, Query, QueryList, Renderer2, ViewChild, ViewChildren
} from '@angular/core';
import { IntersectionRoot } from '../intersection-root';

@Component({
  selector: 'app-gallery',
  imports: [IntersectionRoot],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery implements AfterViewInit, AfterViewChecked, AfterContentInit, OnDestroy {
  items = input<any[] | undefined>();

  @ViewChildren("item")
  itemsRef: QueryList<ElementRef> | undefined;

  private renderer = inject(Renderer2);
  private injector = inject(Injector);

  observer: IntersectionObserver | undefined;


  ngAfterContentInit(): void {
    // console.log(this.itemsRef);
  }

  ngAfterViewInit(): void {
    // console.log(this.itemsRef?.last.nativeElement);
    
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
      // this.observer = createObserver(this.itemsRef?.last.nativeElement);
    })

    window.onload = () => {
      // this.observer = createObserver(this.itemsRef?.last.nativeElement);
      this.itemsRef?.changes.subscribe(ch => {
        console.log(ch);
        
      })
    }
    // this.initIntersectionObserver(this.itemsRef?.last.nativeElement);


    // this.itemsRef?.changes.subscribe((items) => {
    //   console.log(items);
    //   this.initIntersectionObserver(this.itemsRef?.last.nativeElement);
    // });
  }

  ngAfterViewChecked(): void {
    // console.log(this.itemsRef?.last.nativeElement);

  }


  initIntersectionObserver(target: HTMLElement) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry);
        // if (entry.intersectionRatio === 1) {

        // }
      },
        { threshold: [1.0] });
    });

    this.observer.observe(target);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}


function createObserver(element: HTMLElement) {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(element);
  return observer;
}

function handleIntersect() {
  console.log('100%');
}
