import { PlayersService } from './services/players.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// kendo moudules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import 'hammerjs';

import { AppComponent } from './components/app.component';

// services
import { TeamsService } from './services/teams.service';
import { PlayersPartialComponent } from './components/players-partial/players-partial.component';
import { FormPartialComponent } from './components/form-partial/form-partial.component';
import { TeamsGridComponent } from './components/grid/grid.component';
import { PointsChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersPartialComponent,
    FormPartialComponent,
    TeamsGridComponent,
    PointsChartComponent
  ],
  imports: [
    JsonpModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DialogModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PDFModule,
    ExcelModule,
    ChartsModule,
    ReactiveFormsModule,
    DateInputsModule
  ],
  providers: [
    TeamsService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
