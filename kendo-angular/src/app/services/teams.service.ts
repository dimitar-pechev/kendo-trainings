import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {
  constructor(private http: Http) { }

  getAllTeams(take, skip, sort) {
    const sortQuery = (!sort || !sort.length) ? '' : `&sort=${sort[0].field}&order=${sort[0].dir}`;
    return this.http.get(`/get-all-teams?take=${take}&skip=${skip}${sortQuery}`)
      .map((res: any) => {
        res = res.json();

        const result = {
          data: res.teams,
          total: res.total
        };

        return result;
      });
  }

  getChartData() {
    return this.http.get(`/get-all-teams`)
      .map((res: any) => {
        res = res.json();
        const result = this.groupTeamsByPointsTally(res.teams);
        return result;
      });
  }

  saveData(newTeamData, isNew) {
    if (isNew) {
      return this.addNewTeam(newTeamData);
    } else {
      return this.editTeam(newTeamData);
    }
  }

  editTeam(newTeamData) {
    return this.http.put('/edit-team', newTeamData);
  }

  addNewTeam(newTeamData) {
    return this.http.post('/create-team', newTeamData);
  }

  deleteTeam(teamId) {
    return this.http.delete(`/delete-team/${teamId}`);
  }

  private groupTeamsByPointsTally(teams) {
    const groups = {};
    for (const team of teams) {
      const key = Math.floor(team['points'] / 10) * 10;

      if (!groups[key]) {
        groups[key] = 1;
      } else {
        groups[key] += 1;
      }
    }

    const result = [];
    for (const key in groups) {
      result.push({
        group: `${key}-${+key + 9} points`,
        value: groups[key]
      });
    }

    return result;
  }
}
