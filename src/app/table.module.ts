import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableColumnComponent } from './table-column.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableContainerComponent } from './table-container.component';
import { SomeDirective } from './some.directive';

@NgModule({
  declarations: [
    TableComponent,
    TableColumnComponent,
    TableContainerComponent,
    SomeDirective,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: TableContainerComponent,
        children: [
          { path: 'first', component: TableComponent }
        ]
      }
    ])
  ]
})
export class TableModule {
}
