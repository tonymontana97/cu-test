import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SortableTableComponent} from "./sortable-table/sortable-table.component";
import {DragDropModule} from "@angular/cdk/drag-drop";

const COMPONENTS = [
  SortableTableComponent
]

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
    ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedComponentsModule {}
