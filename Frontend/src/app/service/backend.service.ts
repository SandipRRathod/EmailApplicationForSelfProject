
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BackendService {


  private baseUrl: string = "http://localhost:3677";


  constructor(private http: HttpClient) { }

  sendEmail(formData: FormData) {
    return this.http.post(`${this.baseUrl}/sendEmail`, formData,{responseType:'text'});
  }

  sendEmailwithoutAttachment(data: any) {
    return this.http.post(`${this.baseUrl}/send`, data,{responseType:'text'});
  }

}
