import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAirnestComponent } from './components/site/body/about-airnest/about-airnest.component';
import { ExperiencesComponent } from './components/site/body/experiences/experiences.component';
import { HomeComponent } from './components/site/body/home/home.component';
import { IslandsComponent } from './components/site/body/islands/islands.component';
import { NestComponent } from './components/site/body/our-nests/nest/nest.component';
import { NotFoundComponent } from './components/site/body/not-found/not-found.component';
import { OurNestsComponent } from './components/site/body/our-nests/our-nests.component';
import { OwnersComponent } from './components/site/body/owners/owners.component';
import { RemoteWorkingComponent } from './components/site/body/remote-working/remote-working.component';
import { IslandComponent } from './components/site/body/islands/island/island.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { RoleGuard } from './services/role.guard';
import { TermsAndConditionsComponent } from './components/site/body/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/site/body/privacy-policy/privacy-policy.component';
import { BlogComponent } from './components/site/body/blog/blog.component';
import { ArticleComponent } from './components/site/body/blog/article/article.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'our-nests', component: OurNestsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'islands', component: IslandsComponent },
  { path: 'remote-working', component: RemoteWorkingComponent },
  { path: 'about', component: AboutAirnestComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'our-nests/:link', component: NestComponent},
  { path: 'islands/:island', component: IslandComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:article', component: ArticleComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
