import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDemo]',
  exportAs: 'appHighlightDemo'
})

export class HighlightDemoDirective implements OnInit, OnChanges{
  private _color: string = 'black';

  set color(value: string) {
    this._color = value;
    this.renderer.setStyle(this.el.nativeElement, 'color', this._color);
  }
  @Input() backgroundColor: string = 'yellow';

  @HostListener('mouseenter')
  handleMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    this.colorChange.emit('red');
  }

  @HostListener('mouseleave')
  handleMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    this.colorChange.emit('black');
  }

  @Output() colorChange: EventEmitter<string> = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    // (this.el.nativeElement as HTMLElement).addEventListener('mouseenter', () => {
    //   this.renderer.setStyle(this.el.nativeElement, 'color', 'green')
    // });
  }

  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.backgroundColor;
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
  }

  ngOnChanges(): void {
    console.log('Change');
  }
}
