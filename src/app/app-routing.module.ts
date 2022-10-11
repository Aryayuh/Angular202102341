import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent},
  { path: "login", component: LoginComponent},
  { path: "regis", component: RegisComponent},
  { path: "", redirectTo:"login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
