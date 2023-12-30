import { Component } from '@angular/core';

@Component({
  selector: 'app-id-card-form',
  templateUrl: './id-card-form.component.html',
  styleUrls: ['./id-card-form.component.scss'] // Import the SCSS file here
})
export class IdCardFormComponent {
  selectedIdType: string = ''; // Initialize to an empty string
  formData: any = {
    firstName: 'Test',
    lastName: 'Test',
    socialNumber: 'EE825544',
    address: 'Marrakech, Maroc',
    fatherFirstName: 'Test',
    fatherLastName: 'Test',
    studentId: '256115TT',
    schoolName: 'EMSI',
    yearOfStudies: '2023/2024'
  };

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

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted with data:', this.formData);
  }
}
