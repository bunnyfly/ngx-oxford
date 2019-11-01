import { Input, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'oxford',
  styleUrls: ['./ngx-oxford.component.scss'],
  templateUrl: './ngx-oxford.component.html',
})
export class NgxOxfordComponent implements OnChanges {
  @Input() index: number;
  @Input('length') len: number;

  constructor() {}

  ngOnChanges() {
    if (!(typeof this.index === 'number' && this.index >= 0)) {
      throw 'index must be >= 0';
    }

    if (!(typeof this.len === 'number' && this.len >= 0)) {
      throw 'length must be >= 0';
    }
  }
}
