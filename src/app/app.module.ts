import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { AboutMeComponent } from './page-components/about-me/about-me.component';
import { ContactComponent } from './page-components/contact/contact.component';
import { HeroComponent } from './page-components/hero/hero.component';
import { LayoutComponent } from './core/layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutMeComponent,
    ContactComponent,
    HeroComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
