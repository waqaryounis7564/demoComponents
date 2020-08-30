import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassDirective]',
})
export class ClassDirectiveDirective {
  constructor(private element: ElementRef) {
    console.log('hia');
  }
  @Input() set color(col: string) {
    this.element.nativeElement.style.backgroundColor = col;
  }
}
