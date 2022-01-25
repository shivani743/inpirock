import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GooglePlacesComponent } from './google-places/google-places.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    GooglePlaceModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // HomeComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GooglePlacesComponent
    // HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
