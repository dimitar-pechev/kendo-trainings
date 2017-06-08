import { PlayersService } from './../../services/players.service';
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players-partial',
  templateUrl: './players-partial.component.html'
})
export class PlayersPartialComponent implements OnInit {
  @Input() dataSourceUrl: string;
  @Input() teamName: string;
  data: GridDataResult;
  state: State;
  sortable: boolean;
  pageable: boolean;
  scrollable: string;
  noRecordsMessage: string;

  constructor(private service: PlayersService) { }

  ngOnInit() {
    this.state = {
      take: 10,
      skip: 0
    };
    this.noRecordsMessage = 'Loading players data...';
    this.sortable = false;
    this.pageable = true;
    this.scrollable = 'none';
    this.getPlayersData();
  }

  dataStateChange(state: DataStateChangeEvent) {
    this.state = state;
    this.getPlayersData();
  }

  private getPlayersData() {
    this.service.getPlayers(this.dataSourceUrl, this.state.take, this.state.skip)
      .subscribe(response => {
        this.data = response;
      });
  }
}
