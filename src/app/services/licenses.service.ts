import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

  private Key: string = "$2b$10$1ycRzB0lfp6fcdPx11.RNOToVg3jXR3fr3861ltnKXOd70sagPh8C"
  private Url: string = "https://api.jsonbin.io/b/5f0887eb5d4af74b0129dd77"
  public dataLicenses = new BehaviorSubject<any>([])
  public licensesSubject$ = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getlicenses()  {

    const headers = new HttpHeaders({"secret-key": this.Key})

    return this.http.get(this.Url, {headers})
  }

  getLicensesMap() {    
    const headers = new HttpHeaders({"secret-key": this.Key})

    return this.http.get(this.Url, {headers}).pipe(
      map( (x:any) => x.content)
    )
  }

  addLicenses(page : any[]){
    
    let licenses = {...this.dataLicenses.value, page}
    this.dataLicenses.next(licenses)
  }

  getDataLicenses() : Observable<any[]>{
    return this.dataLicenses.asObservable();
  }

}
