import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomElementsRoutingModule } from './custom-elements.routing';
import { AnimationsComponent } from './components/animations/animations.component';
import { CustomPipePreviewComponent } from './components/custom-pipe-preview/custom-pipe-preview.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
	imports: [
		CommonModule,
		CustomElementsRoutingModule
	],
	declarations: [
		CustomPipePreviewComponent,
		AnimationsComponent,
		SortPipe
	]
})
export class CustomElementsModule { }
