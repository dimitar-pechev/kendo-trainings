import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class PointsChartComponent implements OnInit {
  title: string;
  @Input() chartData: any[];
  @Output() seriesClick: EventEmitter<any>;

  constructor() {
    this.seriesClick = new EventEmitter();
  }

  ngOnInit() {
    this.title = 'Teams Grouped by Points Tally';
  }

  onSeriesClick(data) {
    const lowestPointsLimit = +data.category.split(/[- ]/)[0];
    const highestPointsLimit = +data.category.split(/[- ]/)[1];

    this.seriesClick.emit({
      lowest: lowestPointsLimit,
      highest: highestPointsLimit
    });
  }
}
