import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { InicialComponent } from './views/inicial/inicial.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: "", component:HomeComponent},  
  {path: "login", component:LoginComponent},
  {path: "inicial", component:InicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
