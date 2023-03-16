import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceServiceService {

  constructor(private http:HttpClient) { }

  getQuery( query:String ){
    const url = `https://api.adviceslip.com/${query}`;
    return this.http.get( url );
  }

  getAdvice(){
    return this.getQuery("advice").pipe(map((data:any)=>data));
  }
}
