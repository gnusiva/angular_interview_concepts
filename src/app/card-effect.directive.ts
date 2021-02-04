import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardEffect]'
})
export class CardEffectDirective {

  constructor(public el: ElementRef ) {
    el.nativeElement.innerText = 'Hello.. ' + el.nativeElement.innerText;
  }

}
