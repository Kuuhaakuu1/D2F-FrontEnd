import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-id-card-form',
  templateUrl: './id-card-form.component.html',
  styleUrls: ['./id-card-form.component.scss'] // Import the SCSS file here
})
export class IdCardFormComponent implements OnInit{
  formData: any = {
    firstName: 'Test',
    lastName: 'Test',
    socialNumber: 'EE825544',
    givenNames: 'Test',
    address: 'Marrakech, Maroc',
    fatherFirstName: 'Test',
    fatherLastName: 'Test',
    studentId: '256115TT',
    schoolName: 'EMSI',
    yearOfStudies: '2023/2024'
  };
  givenNames!: any;
  dateOfBirth!: any;
  dlClass = "is not set";
  documentNumber!: any;
  firstIssueDate!: any;
  issuingStateCode!: any;
  name!: any;
  personalNumber!: any;
  placeOfBirth!: any;
  surname!: any;
  dateOfExpiry!: any;
  selectedIdType: string = '';
  ngOnInit() {
    // Retrieve the OCR data from the query parameters
    this.route.queryParams.subscribe((params) => {
      const ocrData = params['givenNames'];
      this.givenNames = params['givenNames'];
      this.dateOfBirth = params['dateOfBirth'];
      this.dlClass = params['dlClass']!= null ? params['dlClass']: this.dlClass;
      this.documentNumber = params['documentNumber'];
      this.firstIssueDate = params['firstIssueDate'];
      this.issuingStateCode = params['issuingStateCode'];
      this.name = params['name'];
      this.personalNumber = params['personalNumber'];
      this.placeOfBirth = params['placeOfBirth'];
      this.surname = params['surname'];
      this.dateOfExpiry = params['dateOfExpiry'];

      
      console.log('Received OCR Data:', ocrData);
  
      // You can now use ocrData in your component logic
    });

    if (this.dlClass !=  "is not set") {
      console.log( "ach had chi daba wach kitprinta wla la" + this.dlClass);
      this.selectedIdType = 'DriverLicense';
    }
    else {
      console.log(this.dlClass);
      this.selectedIdType = 'idCard';
    }
  }
   // Initialize to an empty string
  

  onIdTypeChange() {
    
    // Reset the form data based on the selected ID type
    if (this.selectedIdType === 'idCard') {
      this.formData = {
        firstName: 'Test',
        lastName: 'Test',
        socialNumber: 'EE825544',
        address: 'Marrakech, Maroc',
        fatherFirstName: 'Test',
        fatherLastName: 'Test'
      };
    } else if (this.selectedIdType === 'studentCard') {
      this.formData = {
        firstName: 'Test',
        lastName: 'Test',
        socialNumber: 'EE825544',
        address: 'Marrakech, Maroc',
        studentId: '256115TT',
        schoolName: 'EMSI',
        yearOfStudies: '2023/2024'
      };
    }
  }

  constructor(private route: ActivatedRoute) {}


  onSubmit() {
    // Handle form submission here
    console.log('Form submitted with data:', this.formData);
  }
}
