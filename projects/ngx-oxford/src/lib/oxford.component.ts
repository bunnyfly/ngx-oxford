import { Input, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'ngx-oxford',
  styleUrls: ['./oxford.component.scss'],
  templateUrl: './oxford.component.html',
})
export class OxfordComponent implements OnChanges {
  @Input() index: number;
  @Input() length: number;

  constructor() {}

  ngOnChanges() {
    if (!(typeof this.index === 'number' && this.index >= 0)) {
      throw Error('index must be >= 0');
    }

    if (!(typeof this.length === 'number' && this.length >= 0)) {
      throw Error('length must be >= 0');
    }
  }
}
