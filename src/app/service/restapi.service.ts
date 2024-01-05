import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  private baseUrl = 'http://localhost:8000/'; // Update with your Django backend URL

  constructor(private http: HttpClient) {}

  fetchDataFromDjango(url: string): Observable<any> {
    const apiUrl = `${this.baseUrl}get_data_from_angular/?url=${url}`;
    return this.http.get(apiUrl);
  }
}
