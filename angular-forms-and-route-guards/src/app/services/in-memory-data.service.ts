import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const users = [
			{
				id: 1,
				username: 'asdasd',
				password: 'asdasd',
				fullName: 'Michy Batshuayi',
				email: 'email@email.bg',
				admin: true
			},
			{
				id: 2,
				username: 'azsymnakon',
				password: 'asdasd',
				fullName: 'Kazenga LuaLua',
				email: 'email@asd.bg',
				admin: false
			}
		];

		return {
			users
		};
	}
}
