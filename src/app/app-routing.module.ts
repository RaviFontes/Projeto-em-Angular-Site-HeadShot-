import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HeaderComponent } from './header/header.component';
import { JogosEcommerceComponent } from './jogos-ecommerce/jogos-ecommerce.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavegacaoEcommerceComponent } from './navegacao-ecommerce/navegacao-ecommerce.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent, 
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
