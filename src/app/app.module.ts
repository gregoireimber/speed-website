import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConsentComponent } from './components/consent/consent.component';
import { HeaderComponent } from './components/header/header.component';
import { SpeedComponent } from './components/speed/speed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsentComponent,
    HeaderComponent,
    SpeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
