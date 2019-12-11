import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/public/tabs/tabs.module').then(m => m.TabsPageModule) },

  // Login
  { path: 'login', loadChildren: () => import('./pages/login/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/login/register/register.module').then(m => m.RegisterPageModule) },


  // Profile

  // Soporte
  // tslint:disable-next-line: max-line-length
  { path: 'termsandcondicions', loadChildren: () => import('./pages/public/support/termsandcondicions/termsandcondicions.module').then(m => m.TermsandcondicionsPageModule) },
  { path: 'help', loadChildren: () => import('./pages/public/support/help/help.module').then(m => m.HelpPageModule) }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
