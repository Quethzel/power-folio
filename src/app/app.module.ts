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
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from 'ngx-clipboard';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faStackOverflow, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ExperienceComponent } from './page-components/experience/experience.component';
import { ExperienceInfoComponent } from './components/experience-info/experience-info.component';
import { CredtisComponent } from './components/credtis/credtis.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutMeComponent,
    ContactComponent,
    HeroComponent,
    LayoutComponent,
    MapComponent,
    ExperienceComponent,
    ExperienceInfoComponent,
    CredtisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatChipsModule,
    MatDialogModule,
    FontAwesomeModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CredtisComponent
  ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    library.addIcons(faStackOverflow, faGithub, faLinkedinIn, faInstagram);
  }
}
