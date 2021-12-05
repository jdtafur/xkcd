import {Directive, HostBinding, HostListener, Inject, Input} from '@angular/core';
import {QualifyDirective} from './qualify.directive';

@Directive({
  selector: '[appQualifyItem]'
})
export class QualifyItemDirective {

  // @ts-ignore
  protected _selected: boolean;
  protected qualify: QualifyDirective;
  // @ts-ignore
  @Input() selector: string;

  @HostBinding('class.selected')
  @Input()
  get selected(): boolean {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;

    if (value) {
      this.qualify.unselectOtherItems(this);
      this.qualify.selectedChange(this);
    }
  }

  @HostListener('click', ['$event'])
  onClick(e: any): void {
    if (this.qualify.activeSelector !== this.selector) {
      this.selected = !this.selected;
    }
  }

  public constructor(@Inject(QualifyDirective) qualify: QualifyDirective) {
    this.qualify = qualify;
  }

  ngOnInit(): void {
    this.qualify.addItem(this);
  }

}
