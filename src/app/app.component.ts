import { Component } from '@angular/core';

@Component({
  selector: 'app-inner',
  template: `
    <button (click)="var2 = !var2">toggle content</button>
    <app-inner>
      <div>
        <h2 *ngIf="var1">
          {{ title }}
        </h2>
      </div>
      <div *ngIf="var2">
        <div *ngIf="var3">
          {{ sectionTitle }}
        </div>
        {{ content }}
      </div>
    </app-inner>
  `
})
export class InnerComponent {

  title = 'demo-broken-ivy';
  sectionTitle = 'section title';
  content = 'some other text';

  var1 = true;
  var3 = true;
  var2 = true;
}

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
