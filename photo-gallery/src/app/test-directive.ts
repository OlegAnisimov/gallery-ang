import { AfterViewInit, ChangeDetectionStrategy, Directive, ElementRef, input, OnInit, Query, QueryList } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
  }
)
export class TestDirective implements OnInit, AfterViewInit {

  // viewChildren!: QueryList<any>;

  color = input<string>('red');

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
      console.log(this.el);
      
  }

  ngAfterViewInit(): void {
      this.el.nativeElement.style.backgroundColor = this.color();
  }
}
