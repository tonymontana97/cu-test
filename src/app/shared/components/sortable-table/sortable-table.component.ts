import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {Sort} from "../../../types/enums/sort.enum";
import {CdkDragSortEvent, moveItemInArray} from "@angular/cdk/drag-drop";

/**
 * TODO:
 * - Implement custom templates for rows and headers
 */
@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortableTableComponent {
  @Input()
  public items: any[];
  @Input()
  public sortBy: string;
  @Input()
  public displayColumns: Array<{ label: string, key: string }>;

  @Output()
  public changeSort: EventEmitter<{ sortBy: any; sort: Sort }>;

  public sort: Sort;

  constructor() {
    this.items = [];
    this.sort = Sort.Asc;
    this.sortBy = '';
    this.displayColumns = [];
    this.changeSort = new EventEmitter<{ sortBy: any; sort: Sort }>();
  }

  public changeSortColumn(column: string): void {
    this.sort = column === this.sortBy ? this.sort === Sort.Asc ? Sort.Desc : Sort.Asc : Sort.Asc;
    this.sortBy = column;

    this.changeSort.emit({
      sort: this.sort,
      sortBy: this.sortBy
    })
  }

  public get isDESC(): boolean {
    return this.sort === Sort.Desc;
  }

  public changeColumnSort($event: CdkDragSortEvent<any>) {
    moveItemInArray(this.displayColumns, $event.previousIndex, $event.currentIndex)
  }

  public trackBy(index: number, item: any): string {
    return item.id;
  }
}
