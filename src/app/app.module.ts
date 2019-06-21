import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpLoadComponent } from './up-load/up-load.component';
import { DownLoadComponent } from './down-load/down-load.component';

import { NzProgressModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UpLoadComponent,
    DownLoadComponent
  ],
  imports: [
    BrowserModule,
    NzProgressModule, NzButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
