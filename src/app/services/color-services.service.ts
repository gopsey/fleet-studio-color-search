import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorServicesService {

  constructor(private httpClient: HttpClient) { }

  getRelatedColors(inputWord: string): Observable<any> {
    const url = `https://api.color.pizza/v1/names/${inputWord}`;
    return this.httpClient.get(url);
  }
}
