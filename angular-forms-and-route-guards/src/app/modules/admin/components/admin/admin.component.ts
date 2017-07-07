import { State } from '@progress/kendo-data-query/dist/es/state';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/services/auth.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
	data: GridDataResult;
	state: State
	pageable: boolean;
	sortable: boolean;
	noRecordsMessage: string;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.state = {
			skip: 0,
			take: 10
		};
		this.pageable = true;
		this.sortable = true;
		this.noRecordsMessage = 'Loading users data...';
		this.loadUsersData();
	}

	dataStateChange(state) {
		this.state = state;
		this.loadUsersData();
	}

	private loadUsersData() {
		this.authService.getAllUsers(this.state.take, this.state.skip)
			.subscribe(res => {
				this.data = res;
			});
	}
}
