import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/site/body/home/home.component';
import { OurNestsComponent } from './components/site/body/our-nests/our-nests.component';
import { AboutAirnestComponent } from './components/site/body/about-airnest/about-airnest.component';
import { ExperiencesComponent } from './components/site/body/experiences/experiences.component';
import { IslandsComponent } from './components/site/body/islands/islands.component';
import { RemoteWorkingComponent } from './components/site/body/remote-working/remote-working.component';
import { OwnersComponent } from './components/site/body/owners/owners.component';
import { NavbarComponent } from './components/site/navbar/navbar.component';
import { FooterComponent } from './components/site/footer/footer.component';
import { NotFoundComponent } from './components/site/body/not-found/not-found.component';
import { NestComponent, SafePipe } from './components/site/body/our-nests/nest/nest.component';
import { IslandComponent } from './components/site/body/islands/island/island.component';
import { AdminComponent } from './components/admin/admin.component';
import { SiteComponent } from './components/site/site.component';
import { BodyComponent } from './components/site/body/body.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { TermsAndConditionsComponent } from './components/site/body/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/site/body/privacy-policy/privacy-policy.component';
import { BlogComponent } from './components/site/body/blog/blog.component';
import { ArticleComponent } from './components/site/body/blog/article/article.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

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
    BodyComponent,
    LoginComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    BlogComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
