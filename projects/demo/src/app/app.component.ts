import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  lists = [
    [],
    ['rabbit'],
    ['rabbit', 'cat'],
    ['rabbit', 'cat', 'dog'],
    ['rabbit', 'cat', 'dog', 'duck'],
  ];
}
