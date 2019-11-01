import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOxfordPipe } from './ngx-oxford.pipe';
import { NgxOxfordComponent } from './ngx-oxford.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxOxfordPipe, NgxOxfordComponent],
  exports: [NgxOxfordPipe, NgxOxfordComponent],
})
export class NgxOxfordModule {}
