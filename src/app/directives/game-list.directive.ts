import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGameList]'
})
export class GameListDirective {
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (sessionStorage.getItem('tipoUtente') == 'admin') {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
