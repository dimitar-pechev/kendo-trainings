import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { SortDescriptor } from '@progress/kendo-data-query/dist/es/sort-descriptor';

const cache = {};
const headers = new Headers({ 'X-Auth-Token': 'd0063ff1d3264556a92143db04f9b24a' });

@Injectable()
export class PlayersService {
	constructor(private http: Http) { }

	getPlayers(url: string, take: number, skip: number, sort: SortDescriptor[]) {
		if (cache[url]) {
			const result = this.processPlayersData(cache[url].players, cache[url].count, take, skip, sort);
			return Observable.of(result);
		}

		return this.http.get(url, { headers })
			.map((response: any) => {
				response = response.json();
				cache[url] = response;

				const result = this.processPlayersData(response.players, response.count, take, skip, sort);

				return result;
			});
	}

	getPlayersPositionsData(url: string) {
		return this.http.get(url, { headers })
			.map((response: any) => {
				response = response.json();

				const result = this.groupPlayersByPositions(response.players);

				return result;
			});
	}

	private processPlayersData(data: Object[], playersCount: number, take: number, skip: number, sort: SortDescriptor[]) {
		data = JSON.parse(JSON.stringify(data));
		if (sort.length && sort[0].dir) {
			const sortOrder = sort[0].dir === 'asc' ? 1 : -1;
			const sortParam = sort[0].field;

			data.sort((first, second) => {
				if (first[sortParam] > second[sortParam]) {
					return 1 * sortOrder;
				} else if (first[sortParam] < second[sortParam]) {
					return -1 * sortOrder;
				} else {
					return 0;
				}
			});
		}

		const result = {
			data: data.slice(skip, skip + take),
			total: playersCount
		};

		return result;
	}

	private groupPlayersByPositions(players) {
		const groups = {};
		for (const player of players) {
			const key = player['position'];

			if (!groups[key]) {
				groups[key] = 1;
			} else {
				groups[key] += 1;
			}
		}

		const result = [];
		// tslint:disable-next-line:forin
		for (const key in groups) {
			result.push({
				group: key,
				value: groups[key]
			});
		}

		return result;
	}

}
