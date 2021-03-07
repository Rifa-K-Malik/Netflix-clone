import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Section1Component } from './components/home/section1/section1.component';
import { Section2Component } from './components/home/section2/section2.component';
import { Section3Component } from './components/home/section3/section3.component';
import { Section4Component } from './components/home/section4/section4.component';
import { Section5Component } from './components/home/section5/section5.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainpaheComponent } from './components/mainpahe/mainpahe.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    FooterComponent,
    MainpaheComponent,
    SliderComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
