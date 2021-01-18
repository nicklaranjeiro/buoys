import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GOOGLE_API_KEY } from './variables.js';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { BuoyDetailsComponent } from './pages/dashboard/buoy-details/buoy-details.component';
import { MapComponent } from './components/map/map.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './pages/dashboard/dashboard-routing.module';
import { LakeAllComponent } from './pages/dashboard/lake-all/lake-all.component';
import { LakeErieComponent } from './pages/dashboard/lake-erie/lake-erie.component';
import { LakeHuronComponent } from './pages/dashboard/lake-huron/lake-huron.component';
import { LakeMichiganComponent } from './pages/dashboard/lake-michigan/lake-michigan.component';
import { LakeOntarioComponent } from './pages/dashboard/lake-ontario/lake-ontario.component';
import { LakeSuperiorComponent } from './pages/dashboard/lake-superior/lake-superior.component';
import { FavoritepageComponent} from './favoritepage/favoritepage.component'
import { GoogleMapsModule } from '@angular/google-maps';
import { MapKeyComponent } from './components/map-key/map-key.component';
import { FavoriteBuoyComponent } from './components/favorite-buoy/favorite-buoy.component';




@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    BuoyDetailsComponent,
    MapComponent,
    LoginpageComponent,
    RegisterpageComponent,
    DashboardComponent,
    LakeErieComponent,
    LakeHuronComponent,
    LakeAllComponent,
    LakeMichiganComponent,
    LakeOntarioComponent,
    LakeSuperiorComponent,
    FavoritepageComponent,
    MapKeyComponent,
    FavoriteBuoyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }