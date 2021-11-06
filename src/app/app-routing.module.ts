import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAirnestComponent } from './body/about-airnest/about-airnest.component';
import { ExperiencesComponent } from './body/experiences/experiences.component';
import { HomeComponent } from './body/home/home.component';
import { IslandsComponent } from './body/islands/islands.component';
import { NotFoundComponent } from './body/not-found/not-found.component';
import { OurNestsComponent } from './body/our-nests/our-nests.component';
import { OwnersComponent } from './body/owners/owners.component';
import { RemoteWorkingComponent } from './body/remote-working/remote-working.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-nests', component: OurNestsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'islands', component: IslandsComponent },
  { path: 'remote-working', component: RemoteWorkingComponent },
  { path: 'about', component: AboutAirnestComponent },
  { path: 'owners', component: OwnersComponent },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
