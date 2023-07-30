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
import { AcceptedMasjidComponent } from './pages/user-forms/accepted-masjid/accepted-masjid.component';
import { AcceptedMadrasaComponent } from './pages/user-forms/accepted-madrasa/accepted-madrasa.component';
import { DashboardComponent } from './pages/user-forms/dashboard/dashboard.component';
import { OrphanReqComponent } from './pages/user-forms/orphan-req/orphan-req.component';
import { PrivateReqComponent } from './pages/user-forms/private-req/private-req.component';
import { OrphanListComponent } from './pages/user-forms/orphan-list/orphan-list.component';
import { PrivateListComponent } from './pages/user-forms/private-list/private-list.component';
import { OrphanAcceptedComponent } from './pages/user-forms/orphan-accepted/orphan-accepted.component';
import { PrivateAcceptedComponent } from './pages/user-forms/private-accepted/private-accepted.component';
import { OrphanDetailsComponent } from './pages/user-forms/orphan-details/orphan-details.component';
import { PrivateDetailsComponent } from './pages/user-forms/private-details/private-details.component';
import { OrphanUpdateComponent } from './pages/user-forms/orphan-update/orphan-update.component';
import { PrivateUpdateComponent } from './pages/user-forms/private-update/private-update.component';
import { RejectedMasjidComponent } from './pages/user-forms/rejected-masjid/rejected-masjid.component';
import { RejectedMadrasaComponent } from './pages/user-forms/rejected-madrasa/rejected-madrasa.component';
import { RejectedOrphanComponent } from './pages/user-forms/rejected-orphan/rejected-orphan.component';
import { RejectedPrivateComponent } from './pages/user-forms/rejected-private/rejected-private.component';

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
        path:'orphanreq',
        component:OrphanReqComponent
      },
      {
        path:'privatereq',
        component:PrivateReqComponent
      },
      {
        path:'updatemasjid/:id',
        component:UpdateMasjidComponent
      },
      {
        path:'updateorphan/:id',
        component:OrphanUpdateComponent
      },
      {
        path:'updateprivate/:id',
        component:PrivateUpdateComponent
      },
      {
        path:'view/:id',
        component:MasjidDetailsComponent
      },
      {
        path:'orpView/:id',
        component:OrphanDetailsComponent
      },
      {
        path:'priView/:id',
        component:PrivateDetailsComponent
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
        path:'viewStaff/:id',
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
        component:OrphanListComponent
      },
      {
        path:'private',
        component:PrivateListComponent
      },
      {
        path:'madrasaView/:id',
        component:MadrasaDetailsComponent
      },
      {
        path:'updateMadrasa/:id',
        component:UpdateMadrasaComponent
      },
     {
      path:'acceptmasjid',
      component:AcceptedMasjidComponent
     },
     {
      path:'acceptmadrasa',
      component:AcceptedMadrasaComponent
     },
     
     {
      path:'acceptedorphan',
      component:OrphanAcceptedComponent
     },
     {
      path:'acceptedprivate',
      component:PrivateAcceptedComponent
     },
     {
      path:'rejectedMasjid',
      component:RejectedMasjidComponent
     },
     {
      path:'rejectedMadrasa',
      component:RejectedMadrasaComponent
     },
     {
      path:'rejectedOrphan',
      component:RejectedOrphanComponent
     },
     {
       path:'rejectedPrivate',
       component:RejectedPrivateComponent
     },
     {
      path:'dashboard',
      component:DashboardComponent
     }
      ]
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
