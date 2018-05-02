import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './auth.guard';
import {SocialLinksComponent} from './social-links/social-links.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '',redirectTo: '/login',pathMatch: 'full'},
      {path: 'login',component: LoginComponent,data: {
        animation: 'login'
      }},
      {path: 'register',component: RegisterComponent, data: {animation: 'register'}},
      {path: 'user',component: UserComponent, canActivate: [AuthGuard]},
      {path: '**',redirectTo: '/login'}
    ],{
      useHash: true
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
