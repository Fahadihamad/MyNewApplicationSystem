import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { CardComponent } from './Utils/card/card.component';
import { NavbarComponent } from './Utils/navbar/navbar.component';
import { FooterComponent } from './Utils/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';


import { Router, RouterModule } from '@angular/router';
import { UserSidebarComponent } from './sidebar/user-sidebar/user-sidebar.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { MasjidReqComponent } from './pages/user-forms/masjid-req/masjid-req.component';
import { MadrasaReqComponent } from './pages/user-forms/madrasa-req/madrasa-req.component';

import { StafflistComponent } from './dashboard/admindashboard/stafflist/stafflist.component';

import { RegisterStaffComponent } from './dashboard/admindashboard/register-staff/register-staff.component';
import { UpdateStaffComponent } from './dashboard/admindashboard/update-staff/update-staff.component';
import { StaffdetailsComponent } from './dashboard/admindashboard/staffdetails/staffdetails.component';
import { MadrasaReqListComponent } from './dashboard/staffdashboard/madrasa-req-list/madrasa-req-list.component';
import { OrphansReqListComponent } from './dashboard/staffdashboard/orphans-req-list/orphans-req-list.component';
import { PrivateReqListComponent } from './dashboard/staffdashboard/private-req-list/private-req-list.component';

import { MasjidreqListComponent } from './pages/user-forms/masjidreq-list/masjidreq-list.component';
import { MadrasareqListComponent } from './pages/user-forms/madrasareq-list/madrasareq-list.component';
import { UpdateMasjidComponent } from './pages/user-forms/update-masjid/update-masjid.component';
import { MasjidDetailsComponent } from './pages/user-forms/masjid-details/masjid-details.component';
import { SponsorSignComponent } from './pages/sponsor-sign/sponsor-sign.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SrviceshomeComponent } from './pages/srviceshome/srviceshome.component';
import { TeamComponent } from './pages/team/team.component';
import { UpdateMadrasaComponent } from './pages/user-forms/update-madrasa/update-madrasa.component';
import { AcceptedMasjidComponent } from './pages/user-forms/accepted-masjid/accepted-masjid.component';
import { AcceptedMadrasaComponent } from './pages/user-forms/accepted-madrasa/accepted-madrasa.component';
import { MadrasaDetailsComponent } from './pages/user-forms/madrasa-details/madrasa-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserDetailsComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    
    UserSidebarComponent,
    UserHomeComponent,
    MasjidReqComponent,
    MadrasaReqComponent,

    StafflistComponent,
    RegisterStaffComponent,
    UpdateStaffComponent,
    StaffdetailsComponent,
    MadrasaReqListComponent,
    OrphansReqListComponent,
    PrivateReqListComponent,
    
    MasjidreqListComponent,
    MadrasareqListComponent,
    UpdateMasjidComponent,
    MasjidDetailsComponent,
    SponsorSignComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    SrviceshomeComponent,
    TeamComponent,
    UpdateMadrasaComponent,
    MasjidDetailsComponent,
    AcceptedMasjidComponent,
    AcceptedMadrasaComponent,
    MadrasaDetailsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
    MatListModule
    
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
