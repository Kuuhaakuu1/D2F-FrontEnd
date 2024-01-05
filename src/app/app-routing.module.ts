import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IdCardFormComponent } from './id-card-form/id-card-form.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'form', component: IdCardFormComponent },
  { path: 'upload', component: UploadPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
