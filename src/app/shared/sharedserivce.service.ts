import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseurl = environment.baseurl

@Injectable({
  providedIn: 'root'
})


export class SharedserivceService {
  
  constructor(private httpClient: HttpClient) { }

  getAllData():Observable<any>{
    return this.httpClient.get(baseurl)
  }
}
