import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-animations',
	templateUrl: './animations.component.html',
	animations: [
		trigger('buttonState', [
			state('inactive', style({
				transform: 'scale(1)'
			})),
			state('active', style({
				backgroundColor: '#761c19',
				transform: 'scale(1.5)'
			})),
			transition('inactive => active', animate('200ms ease-in')),
			transition('active => inactive', animate('200ms ease-out'))
		]),
		trigger('headingState', [
			state('in', style({ transform: 'translateX(0)' })),
			transition('void => *', [
				style({
					transform: 'translateX(-100%)'
				}),
				animate(250)
			]),
			transition('* => void', [
				animate(250, style({
					transform: 'translateX(-100%)'
				}))
			])
		])
	]
})
export class AnimationsComponent implements OnInit {
	btnState: string;
	hidden = true;

	ngOnInit() {
		this.btnState = 'inactive';
	}

	toggleButtonState() {
		this.btnState = this.btnState === 'inactive' ? 'active' : 'inactive';
	}

	toggleHeadingState() {
		this.hidden = !this.hidden;
	}
}
