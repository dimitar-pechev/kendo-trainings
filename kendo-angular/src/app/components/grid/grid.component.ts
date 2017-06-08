import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { Observable } from 'rxjs/Rx';
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class TeamsGridComponent implements OnInit {
  @Input() data: GridDataResult;
  @Input() selectedChartData: Object;
  @Input() excelData: Observable<ExcelExportData>;

  @Output() add: EventEmitter<any>;
  @Output() edit: EventEmitter<any>;
  @Output() remove: EventEmitter<any>;
  @Output() selectedItem: EventEmitter<any>;
  @Output() stateChange: EventEmitter<State>;

  pageable: boolean;
  sortable: boolean;
  scrollable: string;
  state: State;
  pageSize: number;
  editDataItem: Object;
  isNew: boolean;
  editedRowIndex: number;
  height: number;
  rowHeight: number;
  selectable: boolean;
  noRecordsMessage: string;
  chartData: any[];

  constructor() {
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
    this.selectedItem = new EventEmitter();
    this.stateChange = new EventEmitter();

    this.isHighLighted = this.isHighLighted.bind(this);
  }

  ngOnInit() {
    this.state = {
      skip: 0,
      take: 10,
      sort: [{
        dir: 'desc',
        field: 'points'
      }]
    };
    this.pageable = true;
    this.scrollable = 'none';
    this.sortable = true;
    // this.height = 600;
    this.rowHeight = 60;
    this.selectable = true;
    this.noRecordsMessage = 'Loading team data...';
    this.isNew = false;
  }

  editHandler({ dataItem }) {
    this.edit.emit(dataItem);
  }

  addHandler() {
    this.add.emit();
  }

  itemSelected() {
    this.selectedItem.emit();
  }

  dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.stateChange.emit(this.state);
  }

  removeHandler({ dataItem }) {
    this.remove.emit(dataItem.id);
  }

  isHighLighted({ dataItem }) {
    if (this.selectedChartData) {
      if (dataItem.points >= this.selectedChartData['lowest'] && dataItem.points <= this.selectedChartData['highest']) {
        return 'selected-row';
      }
    }
  }
}
