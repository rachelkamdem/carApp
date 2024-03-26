import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Garage } from './garage';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  readonly API_URL = "http://127.0.0.1:8080/api"
  readonly ENDPOINT_CARS = "/cars"
  readonly ENDPOINT_CARS2 = "/car"
  readonly ENDPOINT_CARS3 = "/cars/{id}"


  constructor(private httpclient : HttpClient) {

  }

  getCars(): Observable <Garage[]> {
    return this.httpclient.get <Garage[]> (this.API_URL+this.ENDPOINT_CARS)
  }
  postcar(car : Garage) {
    return this.httpclient.post (this.API_URL+this.ENDPOINT_CARS2, car)
  }
  deletecar(id : number): Observable <Garage["id"]>{
    return this.httpclient.delete<Garage["id"]>(this.API_URL+this.ENDPOINT_CARS3)
  }
}
