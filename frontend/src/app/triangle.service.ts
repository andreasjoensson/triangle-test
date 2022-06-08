import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Triangle } from './models/triangle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://dry-dusk-33001.herokuapp.com';

  calculateTriangle(triangle: Triangle): Observable<String> {
    return this.http.post(this.rootURL + '/triangle', triangle,{responseType: 'text'});
  }

}