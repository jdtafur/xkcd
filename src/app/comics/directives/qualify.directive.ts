import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {QualifyItemDirective} from './qualify-item.directive';

@Directive({
  selector: '[appQualify]'
})
export class QualifyDirective {

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  @Input() activeSelector = '';
  @Output() activeSelectorChange: EventEmitter<any> = new EventEmitter<any>();

  protected items: Array<QualifyItemDirective> = [];

  constructor() { }

  unselectOtherItems(selectedItem: QualifyItemDirective): void {
    this.items.forEach((item: QualifyItemDirective) => {
      if (item.selector !== selectedItem.selector) {
        item.selected = false;
      }
    });
  }

  selectedChange(item: QualifyItemDirective): void {
    this.activeSelector = item.selector;
    this.activeSelectorChange.emit(this.activeSelector);
    this.selected.emit(item.selector);
  }

  addItem(item: QualifyItemDirective): void {
    if (this.items.length === 0 ) {
      item.selected = true;
      this.selectedChange(item);
    }

    this.items.push(item);
  }

}
