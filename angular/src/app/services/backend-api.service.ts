import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }
  create(data: any) {
    // alert(JSON.stringify(data));
    return this.http.post("http://localhost:3000/userData", data).subscribe();
  }

  
}
