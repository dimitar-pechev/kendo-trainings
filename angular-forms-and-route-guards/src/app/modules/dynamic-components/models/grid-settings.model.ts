import { State } from '@progress/kendo-data-query/dist/es/state';

export class GridSettings {
	sourceUrl: string;
	state: State;
	sortable: boolean;
	pageable: boolean;
	noRecordsMessage: string;
	selectable: boolean;

	constructor({ sourceUrl, state, sortable, pageable, noRecordsMessage, selectable }) {
		this.sourceUrl = sourceUrl;
		this.state = state;
		this.sortable = sortable;
		this.pageable = pageable;
		this.noRecordsMessage = noRecordsMessage;
		this.selectable = selectable;
	}
}
