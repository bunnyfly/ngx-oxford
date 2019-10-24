import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxOxfordModule } from 'ngx-oxford';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxOxfordModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
