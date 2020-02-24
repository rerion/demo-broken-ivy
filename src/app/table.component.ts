import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  template: `
    <div *ngIf="showSome" [appSome]="'asdasd'"></div>
    <mat-table [dataSource]="ds" style="width: 70vw">
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>
          NAME
        </th>
        <td mat-cell *matCellDef="let row">
          {{ row.name }}
        </td>
      </ng-container>

      <app-table-column [property]="'some'" name="DYNAMIC_COLUMN"></app-table-column>
    </mat-table>
  `
})
export class TableComponent implements OnInit {
  prop!: string;

  showSome = true;

  ds = new DataSource();
  displayedColumns = ['name', 'DYNAMIC_COLUMN'];

  constructor(protected router: Router) {
  }

  ngOnInit(): void {
    this.prop = 'hola';
  }
}
export class DataSource extends MatTableDataSource<{ name: string, some: number }> {

  connect(): BehaviorSubject<{ name: string; some: number }[]> {
    return new BehaviorSubject<{name: string, some: number}[]>([
      { name: 'Mike', some: 88 },
      { name: 'Josh', some: 44 }
    ]);
  }
}
