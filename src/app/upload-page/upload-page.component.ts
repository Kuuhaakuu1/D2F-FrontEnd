import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import {  RestapiService } from '../service/restapi.service';
import { json } from 'stream/consumers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  url!: string;
  result!: any;
  termsAccepted = false;
  @Output() jsonReponse = new EventEmitter<any>();

  constructor(private restapiService: RestapiService,private router: Router) {}

  selectFile() {
    this.fileInput.nativeElement.click();
  }

  fetchData() {
    this.restapiService.fetchDataFromDjango(this.url).subscribe(
      (response) => {
        this.result = response;
        console.log('Data fetched successfully:', response);
        console.log("this is just a test : ",this.result);
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

      // Call the new method to upload the file
      this.restapiService.uploadFile(this.url, selectedFile).subscribe(
        (response) => {
          const ocrData = (response.message)['data']['ocr'];
          console.log('JSON String:', ocrData);
        
          // Navigate to the '/form' route with the OCR data as a query parameter
          this.router.navigate(['/form'], { queryParams: { 
            dateOfBirth: ocrData["dateOfBirth"],
            dlClass: ocrData["dlClass"],
            documentNumber: ocrData["documentNumber"],
            firstIssueDate: ocrData["firstIssueDate"],
            givenNames: ocrData["givenNames"],
            issuingStateCode: ocrData["issuingStateCode"],
            name: ocrData["name"],
            personalNumber: ocrData["personalNumber"],
            placeOfBirth: ocrData["placeOfBirth"],
            surname: ocrData["surname"],
            dateOfExpiry: ocrData["dateOfExpiry"],

            

        
        } });
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
 // Call fetchData if needed after uploading the file
    }
  }
}