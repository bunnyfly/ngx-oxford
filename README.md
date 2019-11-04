# Oxford

Oxford handles comma-separated lists in [Angular](https://angular.io/) for you.

You can use Oxford as a pipe or component. You won't need to worry about 1 vs 2 vs 3+ item lists,
getting spacing right, etc.

For example, we can render these lists:

    []
    ['bunny']
    ['bunny', 'cat']
    ['bunny', 'cat', 'dog']

Like this:

    ""
    "bunny"
    "bunny and cat"
    "bunny, cat, and dog"

## Install it

    npm i ngx-oxford

Then include the OxfordModule in your module:

    import { OxfordModule } from 'ngx-oxford';

    @NgModule({
      ...
      imports: [
        OxfordModule,
      ],
      ...
    })

## Use it

### As a pipe

For simple text lists:

    "{{ list | oxford:'and' }}"

### As a component

Use it as a component enables style and HTML (e.g. links):

    "<ng-container *ngFor="let x of list; let i = index">
      <a [href]="'https://www.google.com/search?q=' + x">{{ '{{' }} x }}</a>
      <ngx-oxford [index]="i" [length]="list.length">or</ngx-oxford>
    </ng-container>"
