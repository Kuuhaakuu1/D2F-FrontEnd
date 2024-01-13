// src/app/service/restapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestapiService {
  private baseUrl = 'http://localhost:8000/'; // Replace with your Django backend URL

  constructor(private http: HttpClient) {}

  fetchDataFromDjango(url: string): Observable<any> {
    const apiUrl = `${this.baseUrl}get_data_from_angular/?url=${url}`;
    return this.http.get(apiUrl);
  }

  uploadFile(url: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const uploadUrl = `${this.baseUrl}upload_file/`; // Replace with your Django endpoint for file upload

    return this.http.post(uploadUrl, formData);
  }
}
