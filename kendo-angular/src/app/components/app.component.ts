import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { Observable } from 'rxjs/Rx';
import { TeamsService } from './../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  data: GridDataResult;
  state: State;
  editDataItem: Object;
  isNew: boolean;
  chartData: any[];
  selectedChartData: Object;

  constructor(private service: TeamsService) {
    this.excelData = this.excelData.bind(this);
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

    this.getTeamsData();
    this.getChartData();
  }

  dataStateChange(state: State): void {
    this.state = state;
    this.getTeamsData();
  }

  addHandler() {
    this.editDataItem = {};
    this.isNew = true;
  }

  saveHandler(newTeamData) {
    this.service.saveData(newTeamData, this.isNew)
      .subscribe(() => {
        this.getTeamsData();
        this.getChartData();
      });

    this.isNew = false;
  }

  editHandler(dataItem) {
    this.editDataItem = dataItem;
    this.isNew = false;
  }

  removeHandler(teamId) {
    this.service.deleteTeam(teamId)
      .subscribe(() => {
        this.getTeamsData();
        this.getChartData();
      });
  }

  cancelHandler() {
    this.editDataItem = undefined;
  }

  onSeriesClick(data): void {
    if (this.selectedChartData && this.selectedChartData['lowest'] === data['lowest']) {
      this.selectedChartData = undefined;
      return;
    }

    this.selectedChartData = data;
  }

  clearSelection() {
    this.selectedChartData = undefined;
  }

  excelData(): Observable<ExcelExportData> {
    const result = this.service.getAllTeams(this.data.total, 0, null);
    return result;
  }

  private getChartData() {
    this.service.getChartData()
      .subscribe(data => {
        this.chartData = data;
      });
  }

  private getTeamsData() {
    const take = this.state.take;
    const skip = this.state.skip;
    const sortQuery = this.state.sort;

    this.service.getAllTeams(take, skip, sortQuery)
      .subscribe(response => {
        this.data = response;
      });
  }
}
