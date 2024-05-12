import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  // url="https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
  url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  employee(){
    return this.http.get(this.url);
  }
}
