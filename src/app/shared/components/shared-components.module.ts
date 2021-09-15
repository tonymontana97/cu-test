import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SortableTableComponent} from "./sortable-table/sortable-table.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../pipes/pipes.module";

const COMPONENTS = [
  SortableTableComponent
]

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    PipesModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedComponentsModule {}
