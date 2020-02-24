import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  template: `<a routerLink="/table/first">GO TO BROKEN</a>`
})
export class InitialComponent {
}

@NgModule({
  declarations: [InitialComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: InitialComponent }
    ])
  ]
})
export class InitialModule {}


