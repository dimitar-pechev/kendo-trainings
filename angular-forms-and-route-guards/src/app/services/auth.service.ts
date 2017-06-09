import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
	private baseUrl: string;

	constructor(private http: Http) {
		this.baseUrl = 'api/users';
	}

	getAllUsers(take: number, skip: number) {
		return this.http.get(this.baseUrl)
			.map(res => {
				const data = res.json().data;
				const result = {
					data: data.slice(skip, skip + take),
					total: data.length
				};

				return result;
			});
	}

	register(user) {
		return this.http.post(this.baseUrl, user)
			.map(result => {
				result = result.json().data;
				localStorage.setItem('user', JSON.stringify(result));
				return result;
			});
	}

	login({ username, password }) {
		return this.http.get(`${this.baseUrl}?username=${username}`)
			.map(res => {
				const data = res.json().data;
				if (!data.length) {
					return false;
				} else if (data[0].password !== password) {
					return false;
				} else {
					localStorage.setItem('user', JSON.stringify(data[0]));
					return true;
				}
			});
	}

	getUserInfo() {
		const user = JSON.parse(localStorage.getItem('user'));
		return user;
	}

	isLoggedIn() {
		const user = localStorage.getItem('user');
		if (!user) {
			return false;
		}

		return true;
	}

	isAdmin() {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user || !user['admin']) {
			return false;
		}

		return true;
	}
}
