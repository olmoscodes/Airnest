import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurNestsComponent } from './our-nests/our-nests.component';
import { AboutAirnestComponent } from './about-airnest/about-airnest.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { IslandsComponent } from './islands/islands.component';
import { RemoteWorkingComponent } from './remote-working/remote-working.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurNestsComponent,
    AboutAirnestComponent,
    ExperiencesComponent,
    IslandsComponent,
    RemoteWorkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
