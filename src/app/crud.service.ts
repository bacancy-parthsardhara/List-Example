import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Listinterface, UserDataInterface } from "./listinterface";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'https://reqres.in/';
  // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient : HttpClient) { }

  getdata(pageNo) : Observable <UserDataInterface> {
    return this.httpClient.get<UserDataInterface>(this.url + "api/users?page=" + pageNo);
  }

  edit(post) {
    return this.httpClient.put(this.url + "api/users"  + post.id, {
      "FirstName": "Parth",
      "LastName": "Sardhara"
    });
  }

  delete(post): Observable<void> {
    // console.log(post.id);
    return this.httpClient.delete<void>(this.url + "api/users"  + post.id);
  }

}
