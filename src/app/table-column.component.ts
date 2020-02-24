import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table-column',
  template: `
  <ng-container matColumnDef>
    <th mat-header-cell *matHeaderCellDef >{{ header }}</th>

    <td mat-cell *matCellDef="let row">{{ row[property] }}</td>
  </ng-container>
  `
})
export class TableColumnComponent implements OnInit, OnDestroy {
  @Input() property!: string;
  header = 'other';

  @ViewChild(MatColumnDef, { static: true }) columnDef: MatColumnDef;

  @Input()
  set name(v: string) {
    this.columnDef.name = v;
  }
  get name() {
    return this.columnDef.name;
  }

  constructor(
    protected table: MatTable<any>,
    protected cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.table.addColumnDef(this.columnDef);
  }

  ngOnDestroy() {
    this.table.removeColumnDef(this.columnDef);
  }
}
