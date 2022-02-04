import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { GooglePlacesComponent } from './google-places/google-places.component';
// import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { InterceptorService } from './core/services/http/interceptor.service';
import { LocalStorageService } from './core/services/storage/local-storage.service';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    // GooglePlaceModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // HomeComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // GooglePlacesComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
},
LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
