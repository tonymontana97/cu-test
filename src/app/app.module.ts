import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CdkTableModule} from "@angular/cdk/table";
import {SortableTableDirective} from "./sortable-table.directive";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SortableTableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
