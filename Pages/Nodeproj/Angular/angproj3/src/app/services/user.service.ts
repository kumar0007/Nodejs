import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private expressUsersRestfulUrl = 'http://localhost:7000/users'

  constructor(private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.expressUsersRestfulUrl)
  }
}
