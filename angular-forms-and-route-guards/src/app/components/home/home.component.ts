import { PartialItem } from './../../models/partial-item';
import { PartialsService } from './../../services/partials.service';
import {
	Component,
	OnInit,
	ComponentFactoryResolver,
	ViewChild,
	TemplateRef,
	ViewContainerRef,
	Injector,
	ReflectiveInjector
} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	partials: PartialItem[];
	@ViewChild('placeholder', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
	@ViewChild('template') template: TemplateRef<any>;

	private componentsCache: Object;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private partialsService: PartialsService
	) { }

	ngOnInit() {
		this.componentsCache = {};
		this.partials = this.partialsService.getPartials();
		this.loadComponent(this.partials[0]);
	}

	private loadComponent(partial: PartialItem) {
		this.viewContainerRef.detach(0);

		if (this.componentsCache[partial.name]) {
			this.viewContainerRef.insert(this.componentsCache[partial.name]);
			return;
		}

		const properties = Object.keys(partial.data)
			.map((propertyName) => {
				return {
					provide: propertyName,
					useValue: partial.data[propertyName]
				};
			});

		const injector = ReflectiveInjector.resolveAndCreate(properties);
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(partial.component);
		const componentRef = this.viewContainerRef.createComponent(componentFactory, 0, injector);

		// Object
		// 	.keys(partial.data)
		// 	.forEach(key => componentRef.instance[key] = partial.data[key]);

		this.componentsCache[partial.name] = componentRef.hostView;
	}

	private renderSimpleTemplate() {
		this.viewContainerRef.detach(0);
		this.viewContainerRef.createEmbeddedView(this.template, { data: 'this way comes...' });
	}
}
