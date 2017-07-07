import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationsComponent } from './components/animations/animations.component';
import { CustomPipePreviewComponent } from './components/custom-pipe-preview/custom-pipe-preview.component';

const routes: Routes = [
	{ path: 'animations', component: AnimationsComponent },
	{ path: 'pipe', component: CustomPipePreviewComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CustomElementsRoutingModule { }
