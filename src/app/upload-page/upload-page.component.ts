import { Component, ElementRef, ViewChild } from '@angular/core';
import {  RestapiService } from '../service/restapi.service';
@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent {
  @ViewChild('fileInput') fileInput!: ElementRef; 
  selectFile() {
    this.fileInput.nativeElement.click();
  }
  url!: string;
  result!: any;

  constructor(private graphqlService: RestapiService) {}

  fetchData() {
    this.graphqlService.fetchDataFromDjango(this.url).subscribe(
      (response) => {
        this.result = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      
    }
  }
}
