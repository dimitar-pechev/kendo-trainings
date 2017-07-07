import { InMemoryDataService } from './services/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true })
	],
	providers: [
		AuthService,
		AdminGuard,
		UserGuard
	]
})
export class CoreModule { }
