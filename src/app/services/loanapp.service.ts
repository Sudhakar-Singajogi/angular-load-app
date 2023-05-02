import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoanappService {
url="http://localhost:3000";
  constructor(private http:HttpClient) { }

  getData(resource:string) {
   return this.http.get(this.url+"/"+resource);
  }

 postData(data:any, resource:string) {
    return this.http.post(this.url+"/"+resource, data);
  }

  applicantLogin(resource:string) {
    return this.http.get(this.url+"/"+resource);
  }
}
