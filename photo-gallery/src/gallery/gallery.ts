import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ElementRef,
  input, OnDestroy, QueryList, Renderer2, ViewChildren, 
} from '@angular/core';
import { IntersectionRoot } from '../intersection-root';
import { TestDirective } from '../app/test-directive';
import { TestComponent } from "../app/test-component/test-component";

@Component({
  selector: 'app-gallery',
  imports: [IntersectionRoot, TestDirective, TestComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery implements AfterViewInit, AfterViewChecked, AfterContentInit, OnDestroy {
  items = input<any[] | undefined>();

  @ViewChildren("item")
  itemsRef: QueryList<ElementRef> | undefined;

  observer: IntersectionObserver | undefined;

  constructor(
    private renderer:Renderer2,
  ) {

  }


  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {


    // this.itemsRef?.changes.subscribe((items) => {
    //   console.log(items);
    // });

  }

  ngAfterViewChecked(): void {

  }

  onVisible(e: HTMLElement) {
    console.log('onVisible', e);
  }

  ngOnDestroy(): void {
  }
}




// TODO:
/*
* https://stackoverflow.com/questions/67272516/intersection-observer-in-angular
https://giancarlobuomprisco.com/angular/intersection-observer-with-angular
*/