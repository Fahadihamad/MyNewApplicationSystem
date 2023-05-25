import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { UserHomeComponent } from './pages/user-home/user-home.component';
import { MasjidReqComponent } from './pages/user-forms/masjid-req/masjid-req.component';
import { MadrasaReqComponent } from './pages/user-forms/madrasa-req/madrasa-req.component';

import { RegisterStaffComponent } from './dashboard/admindashboard/register-staff/register-staff.component';
import { StafflistComponent } from './dashboard/admindashboard/stafflist/stafflist.component';
import { UpdateStaffComponent } from './dashboard/admindashboard/update-staff/update-staff.component';
import { StaffdetailsComponent } from './dashboard/admindashboard/staffdetails/staffdetails.component';

import { MadrasaReqListComponent } from './dashboard/staffdashboard/madrasa-req-list/madrasa-req-list.component';
import { OrphansReqListComponent } from './dashboard/staffdashboard/orphans-req-list/orphans-req-list.component';
import { PrivateReqListComponent } from './dashboard/staffdashboard/private-req-list/private-req-list.component';

import { UpdateMasjidComponent } from './pages/user-forms/update-masjid/update-masjid.component';
import { MasjidDetailsComponent } from './pages/user-forms/masjid-details/masjid-details.component';
import { MasjidreqListComponent } from './pages/user-forms/masjidreq-list/masjidreq-list.component';
import { SponsorSignComponent } from './pages/sponsor-sign/sponsor-sign.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SrviceshomeComponent } from './pages/srviceshome/srviceshome.component';
import { MadrasaDetailsComponent } from './pages/user-forms/madrasa-details/madrasa-details.component';
import { UpdateMadrasaComponent } from './pages/user-forms/update-madrasa/update-madrasa.component';
import { MadrasareqListComponent } from './pages/user-forms/madrasareq-list/madrasareq-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'sign',
    component:SignupComponent
    
  },
  {
      path:'login',
      component:LoginComponent
  },
  {
     path:'sponsor',
     component:SponsorSignComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'service',
    component:SrviceshomeComponent
  },

  {
    path:'userdashh',
    component:UserDashboardComponent,
    children:[
      {
        path:'',
        component:UserDetailsComponent
      },
      {
        path:'userhome',
        component:UserHomeComponent
      },
      {
        path:'masjidreq',
        component:MasjidReqComponent
      },
      {
        path:'madrasareq',
        component:MadrasaReqComponent
      },
      {
        path:'madrasalist',
        component:MadrasaReqListComponent
      },
      {
        path:'updatemasjid/:id',
        component:UpdateMasjidComponent
      },
      {
        path:'view/:id',
        component:MasjidDetailsComponent
      },
      {
        path:'staffreg',
        component:RegisterStaffComponent
      },
      {
        path:'stafflist',
        component:StafflistComponent
      },
      {
        path:'updatestaff/:id',
        component:UpdateStaffComponent
      },
      {
        path:'view/:id',
        component:StaffdetailsComponent
      },
      
       {
        path:'masjid',
        component:MasjidreqListComponent
      },
      {
        path:'madrasa',
        component:MadrasareqListComponent
      },
      {
        path:'orphan',
        component:OrphansReqListComponent
      },
      {
        path:'private',
        component:PrivateReqListComponent
      },
      {
        path:'madrasaView/:id',
        component:MadrasaDetailsComponent
      },
      {
        path:'updateMadrasa/:id',
        component:UpdateMadrasaComponent
      }
      ]
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
