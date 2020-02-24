import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SomeDirective } from './some.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '', pathMatch: 'full',
        redirectTo: 'initial'
      },
      {
        path: 'initial',
        loadChildren: () => import('./initial.module').then(m => m.InitialModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./table.module').then(m => m.TableModule)
      }
    ])
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
