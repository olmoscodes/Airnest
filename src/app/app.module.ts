import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './body/home/home.component';
import { OurNestsComponent } from './body/our-nests/our-nests.component';
import { AboutAirnestComponent } from './body/about-airnest/about-airnest.component';
import { ExperiencesComponent } from './body/experiences/experiences.component';
import { IslandsComponent } from './body/islands/islands.component';
import { RemoteWorkingComponent } from './body/remote-working/remote-working.component';
import { OwnersComponent } from './body/owners/owners.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './body/not-found/not-found.component';
import { NestComponent, SafePipe } from './body/our-nests/nest/nest.component';
import { IslandComponent } from './body/islands/island/island.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurNestsComponent,
    AboutAirnestComponent,
    ExperiencesComponent,
    IslandsComponent,
    RemoteWorkingComponent,
    OwnersComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    NestComponent,
    SafePipe,
    IslandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
