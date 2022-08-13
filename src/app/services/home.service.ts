import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cat } from '../models/cat.interface'
import { CatImage } from '../models/catImage.interface'
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url: string="https://api.thecatapi.com/v1";

  constructor(private http:HttpClient) { }
  getCats() :Observable<Cat[]>{
    return  this.http.get<Cat[]>(`${this.url}/breeds?limit=30&page=0`);
  }
  getCatsId(id:string|null) :Observable<Cat>{
    return  this.http.get<Cat>(`${this.url}/breeds/${id}`);
  }
  getCatsIdImage(id:string|null): Observable<CatImage> {
    return  this.http.get<CatImage>(`${this.url}/images/${id}`);
  }
}
