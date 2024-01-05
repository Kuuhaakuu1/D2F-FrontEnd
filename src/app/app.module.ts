import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Make sure to include this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCardFormComponent } from './id-card-form/id-card-form.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IdCardFormComponent,
    LandingPageComponent,
    UploadPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
