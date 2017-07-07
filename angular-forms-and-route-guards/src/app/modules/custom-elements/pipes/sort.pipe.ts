import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort',
	pure: true
})
export class SortPipe implements PipeTransform {

	transform(collection: any[], order?: string): any {
		order = order || 'asc';
		const dir = order === 'asc' ? 1 : -1;

		collection.sort((a, b): number => {
			if (a > b) {
				return 1 * dir;
			} else if (a < b) {
				return -1 * dir;
			} else {
				return 0;
			}
		});

		return collection;
	}
}
