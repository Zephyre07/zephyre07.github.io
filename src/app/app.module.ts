import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { ViewCertificationComponent } from './view-certification/view-certification.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatsCertificationComponent } from './stats-certification/stats-certification.component';
import { ComkartServiceService } from './comkart-service.service';
import { TestConnectionComponent } from './test-connection/test-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCertificationComponent,
    ViewCertificationComponent,
    WelcomeComponent,
    StatsCertificationComponent,
    TestConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'addcertificate', component: AddCertificationComponent},
      {path: 'viewcertificate' , component: ViewCertificationComponent},
      {path: 'stats-certificate', component: StatsCertificationComponent },
      {path: 'test-connection', component: TestConnectionComponent },
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}

  ])
  ],
  providers: [ComkartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
