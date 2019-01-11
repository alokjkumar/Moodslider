import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SlidersComponent } from './sliders/sliders.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MoodFilterPipe } from './mood-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SlidersComponent,
    ProgrammesComponent,
    ProgrammeComponent,
    MoodFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
