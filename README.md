# Oxford

## Comma separated lists without the hassle or hubbub!

Oxford handles rendering comma-separated lists in [Angular](https://angular.io/) templates for you.

Use it as a pipe or component, and stop worrying about how many items you have, getting spacing
right, etc.

For example, using 'and' as the conjunction:

```
[]                       ⇢  ""
['bunny']                ⇢  "bunny"
['bunny', 'cat']         ⇢  "bunny and cat"
['bunny', 'cat', 'dog']  ⇢  "bunny, cat, and dog"
```

## Get started

```shell
npm i -s ngx-oxford
```

Then include the OxfordModule in your module:

```ts
import { OxfordModule } from 'ngx-oxford';

@NgModule({
  ...
  imports: [
    OxfordModule,
  ],
  ...
})
```

## Use it

You need to provide a conjunction ('and', 'or', 'nor', 'and/or', etc).

### ...as a pipe

For simple text lists:

```html
"{{ list | oxford:'and' }}"
```

### ...as a component

For HTML, links, style, etc:

```html
"<ng-container *ngFor="let x of list; let i = index">
  <a [href]="'https://www.google.com/search?q=' + x">{{ '{{' }} x }}</a>
  <ngx-oxford [index]="i" [length]="list.length">or</ngx-oxford> </ng-container
>"
```
