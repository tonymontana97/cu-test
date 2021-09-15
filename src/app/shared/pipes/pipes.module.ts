import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SearchPipe} from "./search.pipe";

const PIPES = [
  SearchPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class PipesModule {
}
