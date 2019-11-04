import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OxfordPipe } from './oxford.pipe';
import { OxfordComponent } from './oxford.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OxfordPipe, OxfordComponent],
  exports: [OxfordPipe, OxfordComponent],
})
export class OxfordModule {}
