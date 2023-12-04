import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoveService {
  url = 'https://1842bf46-0ebc-4c7c-93eb-39df5122531d.mock.pstmn.io/bank/movements';
  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get(this.url);
  }
}
