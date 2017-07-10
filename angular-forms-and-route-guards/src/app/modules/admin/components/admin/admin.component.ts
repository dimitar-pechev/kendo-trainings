import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { State } from '@progress/kendo-data-query/dist/es/state';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/services/auth.service';
import 'rxjs/add/observable/interval';

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

	constructor(private authService: AuthService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.data.subscribe(data => this.data = data[0]);

		this.state = {
			skip: 0,
			take: 10
		};
		this.pageable = true;
		this.sortable = true;
		this.noRecordsMessage = 'Loading users data...';
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
