import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-custom-pipe-preview',
	templateUrl: './custom-pipe-preview.component.html'
})
export class CustomPipePreviewComponent implements OnInit {
	strings: string[];
	dates: Date[];
	numbers: number[];

	ngOnInit() {
		this.strings = ['Timo Werner', 'Naby Keita', 'Hakkan Calhanoglu', 'Thomas Müller', 'Matts Hummmels'];
		this.dates = [new Date('16 June 1913'), new Date('13 March 1913'), new Date('26 Sept 1912'), new Date('17 May 1913')];
		this.numbers = [23, 231, 232, 453, 4123, 4678, 23, 4, 5678, 234, 676, 8, 9, 4, 233, 6, 7];
	}

}
