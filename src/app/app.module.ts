import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/body/home/home.component';
import { OurNestsComponent } from './site/body/our-nests/our-nests.component';
import { AboutAirnestComponent } from './site/body/about-airnest/about-airnest.component';
import { ExperiencesComponent } from './site/body/experiences/experiences.component';
import { IslandsComponent } from './site/body/islands/islands.component';
import { RemoteWorkingComponent } from './site/body/remote-working/remote-working.component';
import { OwnersComponent } from './site/body/owners/owners.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { FooterComponent } from './site/footer/footer.component';
import { NotFoundComponent } from './site/body/not-found/not-found.component';
import { NestComponent, SafePipe } from './site/body/our-nests/nest/nest.component';
import { IslandComponent } from './site/body/islands/island/island.component';
import { AdminComponent } from './admin/admin.component';
import { SiteComponent } from './site/site.component';
import { BodyComponent } from './site/body/body.component';
 
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
    AdminComponent,
    SiteComponent,
    BodyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
