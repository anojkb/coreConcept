import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { CompanyComponent } from './company/company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {path:'about',component:AboutComponent,
    children:[{path:'company', component:CompanyComponent},{path:'aboutMe',component:AboutMeComponent}] //child routing
  },
  {path:'user',component:UserComponent},
  // {path:'user/:id',component:UserComponent},//dynamic routing
  {path:'',component:HomeComponent},
  {path:'**',component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
