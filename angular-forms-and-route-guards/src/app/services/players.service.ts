import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

const cache = {};
const headers = new Headers({ 'X-Auth-Token': 'd0063ff1d3264556a92143db04f9b24a' });

@Injectable()
export class PlayersService {
	constructor(private http: Http) { }

	getPlayers(url: string, take: number, skip: number) {
		if (cache[url] !== undefined) {
			const result = {
				data: cache[url].players.slice(skip, skip + take),
				total: cache[url].count
			};

			return Observable.of(result);
		}

		return this.http.get(url, { headers })
			.map((response: any) => {
				response = response.json();
				cache[url] = response;

				const result = {
					data: response.players.slice(skip, skip + take),
					total: response.count
				};

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
