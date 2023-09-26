import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./login/login.module";
import {HomeComponent} from './home/home.component';
import {HomeModule} from "./home/home.module";
import {AuthGuard} from "./shared/guards/auth.guard";
import {JwtInterceptor} from "./shared/interceptors/jwt.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
