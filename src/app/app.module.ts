import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { MainimgComponent } from './mainimg/mainimg.component';
import { GridComponent } from './grid/grid.component';
import { Div1Component } from './div1/div1.component';
import { Div2Component } from './div2/div2.component';
import { F3Component } from './f3/f3.component';
import { F4Component } from './f4/f4.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { F5Component } from './f5/f5.component';
import { F6Component } from './f6/f6.component';
import { F7Component } from './f7/f7.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DownlaodComponent } from './downlaod/downlaod.component';
import { YtComponent } from './yt/yt.component';
import { MainheadComponent } from './mainhead/mainhead.component';
import { SbussComponent } from './sbuss/sbuss.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    MainimgComponent,
    GridComponent,
    Div1Component,
    Div2Component,
    F3Component,
    F4Component,
    SliderComponent,
    ContactComponent,
    F5Component,
    F6Component,
    F7Component,
    AboutComponent,
    FooterComponent,
    DownlaodComponent,
    YtComponent,
    MainheadComponent,
    SbussComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
