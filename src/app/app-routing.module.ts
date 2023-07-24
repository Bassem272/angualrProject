import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
// import { HomeComponent } from './home/home.component';
import {LayoutsModule} from './layouts/layouts.module';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HomeComponent } from './views/front-views/home/home/home.component';
import { ContactComponent } from './views/front-views/contact/contact/contact.component';
import { AboutComponent } from './views/front-views/about/about/about.component';
const routes: Routes = [
  // { path: '', component: HomeComponent },
 // { path: '', redirectTo: 'front', component: FrontLayoutComponent },
  { path: '', component: FrontLayoutComponent ,children: [
    { path: 'home', loadChildren: () => import('./views/front-views/home/home.module').then(m => m.HomeModule) },
    { path: 'contact',  loadChildren:()=> import('./views/front-views/contact/contact.module').then(m=>m.ContactModule) },
    { path: 'about', loadChildren:()=> import ('./views/front-views/about/about.module').then(m=>m.AboutModule) },
  ]},
  { path: 'admin', component: AdminLayoutComponent ,children: [
    {path:'dashboard', loadChildren:()=> import('./views/admin-views/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'addUser', loadChildren:()=> import('./views/admin-views/add-user/add-user.module').then(m=>m.AddUserModule)},
  {path:'addProduct', loadChildren:()=> import('./views/admin-views/addproduct/addproduct.module').then(m=>m.AddproductModule)}
  ]},
  { path: 'user', component: UserLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

