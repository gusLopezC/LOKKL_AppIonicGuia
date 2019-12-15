import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/public/tabs/tabs.module').then(m => m.TabsPageModule) },

  // Login
  { path: 'login', loadChildren: () => import('./pages/login/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/login/register/register.module').then(m => m.RegisterPageModule) },

  // Soporte
  // tslint:disable-next-line: max-line-length
  { path: 'termsandcondicions', loadChildren: () => import('./pages/public/support/termsandcondicions/termsandcondicions.module').then(m => m.TermsandcondicionsPageModule) },
  { path: 'help', loadChildren: () => import('./pages/public/support/help/help.module').then(m => m.HelpPageModule) },

  // Profile
  // tslint:disable-next-line: max-line-length
  { path: 'payment-guide', loadChildren: () => import('./pages/public/user/payment-guide/payment-guide.module').then(m => m.PaymentGuidePageModule) },

  // Mis tours
  // tslint:disable-next-line: max-line-length
  { path: 'cancel-reservation', loadChildren: () => import('./pages/public/reservation/cancel-reservation/cancel-reservation.module').then(m => m.CancelReservationPageModule) },
  { path: 'chat', loadChildren: () => import('./pages/public/reservation/chat/chat.module').then(m => m.ChatPageModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'createtour', loadChildren: () => import('./pages/public/mistours/createtour/createtour.module').then(m => m.CreatetourPageModule) }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
