# Oxford

## Comma separated lists without the hassle or hubbub!

Oxford renders comma-separated lists in [Angular](https://angular.io/) templates for you. Just give
it a list of items and a conjunction (and, or, nor, and/or, etc).

Use it as a pipe or component, and stop worrying about getting the spacing and commas right for
every possibility, etc. For example:

```
[]                       ⇢  ""
['bunny']                ⇢  "bunny"
['bunny', 'cat']         ⇢  "bunny and cat"
['bunny', 'cat', 'dog']  ⇢  "bunny, cat, and dog"
```

## Install it

Install [ngx-oxford](https://www.npmjs.com/package/ngx-oxford) from npm:

```shell
npm i -s ngx-oxford
```

Then add `OxfordModule` to your imports:

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

### ...as a pipe

For simple text lists:

```html
"{{ list | oxford:'and' }}"
```

With truncate:

```html
"{{ list | oxford:'and' : {trial: '...', wordCount: 5}}}"
```

### ...as a component

For HTML, links, style, etc:

```html
"<ng-container *ngFor="let x of list; let i = index">
  <a [href]="'https://www.google.com/search?q=' + x">{{ x }}</a>
  <ngx-oxford [index]="i" [length]="list.length">or</ngx-oxford>
</ng-container>"
```

## Future

- Get it working as a structural directive. E.g. `*ngFor="let x of list; oxford: 'and'"`. Help?
- An "etc" or ellipsis option to truncate the list if too many items. E.g.: "bunny, cat, dog, etc."
