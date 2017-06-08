import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayersService {
  constructor(private http: Http) { }

  getPlayers(url: string, take: number, skip: number) {
    const headers = new Headers({ 'X-Auth-Token': 'd0063ff1d3264556a92143db04f9b24a' });
    return this.http.get(`${url}/players`, { headers })
      .map((response: any) => {
        response = response.json();
        const result = {
          data: response.players.slice(skip, skip + take),
          total: response.count
        };

        return result;
      });
  }
}
