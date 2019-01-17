import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

import { GetdataService } from './getdata.service';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
