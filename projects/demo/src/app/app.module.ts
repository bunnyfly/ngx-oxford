import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OxfordModule } from 'ngx-oxford';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OxfordModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
