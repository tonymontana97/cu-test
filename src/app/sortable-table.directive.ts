import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from "@angular/core";
import {CdkTable} from "@angular/cdk/table";

@Directive({
  selector: '[sortableTable]'
})
export class SortableTableDirective implements OnChanges {
  @Input()
  public dataSource: Array<any>;
  @Input()
  public sortField: string;
  @Input()
  public sort: 'ASC' | 'DESC';

  @Output()
  soringChanged: EventEmitter<Array<any>>;

  constructor() {
    this.dataSource = [];
    this.sortField = '';
    this.sort = 'ASC';
    this.soringChanged = new EventEmitter<Array<any>>();
  }

  public ngOnChanges(changes: SimpleChanges) {
    const  { sortField = null } = changes;
    if (sortField?.currentValue) {
      this.reSortData();
    }
  }

  public reSortData(): void {
    this.dataSource = this.dataSource.sort((a, b) => {
      if (a[this.sortField] < b[this.sortField]) {
        return  -1;
      }
      if (a[this.sortField] > b[this.sortField]) {
        return  1;
      }
      return 0;
    })
    this.soringChanged.emit(this.dataSource)
  }

  public changeSort(): void {

  }
}
