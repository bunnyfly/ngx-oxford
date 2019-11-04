import { Component } from '@angular/core';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOxfordComponent } from './ngx-oxford.component';

@Component({ template: '' })
class TestComponent {
  public items: any[];
}

let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;
let template: string;

describe('NgxOxfordComponent', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgxOxfordComponent, TestComponent],
    });
  }));

  describe('template simple', () => {
    beforeEach(fakeAsync(() => {
      template =
        '"<ng-container *ngFor="let item of items; let i = index">' +
        '{{ item }}' +
        '<oxford [index]="i" [length]="items.length">and</oxford>' +
        '</ng-container>"';
    }));

    it('should work with empty list', fakeAsync(() => {
      initialize(template, []);
      expect(textContentCollapsedSpaces()).toEqual('""');
    }));

    it('should work with 1 item', fakeAsync(() => {
      initialize(template, ['bunny']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny"');
    }));

    it('should work with 2 items', fakeAsync(() => {
      initialize(template, ['bunny', 'cat']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny and cat"');
    }));

    it('should work with 3 items', fakeAsync(() => {
      initialize(template, ['bunny', 'cat', 'dog']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny, cat, and dog"');
    }));

    it('should work with 4 items', fakeAsync(() => {
      initialize(template, ['bunny', 'cat', 'dog', 'duck']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny, cat, dog, and duck"');
    }));
  }); // describe('template simple', () => {

  describe('template with spacing', () => {
    beforeEach(fakeAsync(() => {
      template = `"<ng-container *ngFor="let item of items; let i = index">
            <a [href]="'https://' + item + '.com'">{{ item }}</a>
            <oxford [index]="i" [length]="items.length">and</oxford>
          </ng-container>"`;
    }));

    it('should work with empty list', fakeAsync(() => {
      initialize(template, []);
      expect(textContentCollapsedSpaces()).toEqual('""');
    }));

    it('should work with 1 item', fakeAsync(() => {
      initialize(template, ['bunny']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny"');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://bunny.com">bunny</a>');
    }));

    it('should work with 2 items', fakeAsync(() => {
      initialize(template, ['bunny', 'cat']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny and cat"');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://bunny.com">bunny</a>');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://cat.com">cat</a>');
    }));

    it('should work with 3 items', fakeAsync(() => {
      initialize(template, ['bunny', 'cat', 'dog']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny, cat, and dog"');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://bunny.com">bunny</a>');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://cat.com">cat</a>');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://dog.com">dog</a>');
    }));

    it('should work with 4 items', fakeAsync(() => {
      initialize(template, ['bunny', 'cat', 'dog', 'duck']);
      expect(textContentCollapsedSpaces()).toEqual('"bunny, cat, dog, and duck"');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://bunny.com">bunny</a>');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://cat.com">cat</a>');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://dog.com">dog</a>');
      expect(fixture.nativeElement.innerHTML).toContain('<a href="https://duck.com">duck</a>');
    }));
  }); // describe('template with spacing', () => {
});

function initialize(template: string, items: any[]) {
  TestBed.overrideTemplateUsingTestingModule(TestComponent, template);
  TestBed.compileComponents();
  fixture = TestBed.createComponent(TestComponent);
  component = fixture.componentInstance;
  component.items = items;
  fixture.detectChanges();
}

/** Gets the template's text content, collapsing duplicate spacing like HTML rendering does. */
function textContentCollapsedSpaces() {
  return fixture.nativeElement.textContent.replace(/ +/gi, ' ');
}
