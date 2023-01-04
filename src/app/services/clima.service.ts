import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key='e3a70c056ae80ba01564b83d13fbf30d'
  url=`https://api.openweathermap.org/data/2.5/weather?&appid=`

  constructor(private http:HttpClient) {

   }
   getClima(ciudad:string):Observable<any>{
    const URL=this.url +this.key+'&q='+ ciudad 
   return this.http.get(URL)
   }
}
