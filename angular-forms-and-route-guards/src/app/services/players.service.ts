import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

const cache = {};

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

		const headers = new Headers({ 'X-Auth-Token': 'd0063ff1d3264556a92143db04f9b24a' });
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
}
