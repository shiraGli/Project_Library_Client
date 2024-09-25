import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Customer } from '../Models/Customer';
import { Login } from '../Models/Login';
import { Account } from '../Models/Account';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url="https://localhost:7267/api/Customer"
  url2="https://localhost:7267/api/Login"
  constructor(private http:HttpClient) { }
 
  getCustomerByLogin(log:Login):Observable<string>{
     
     return this.http.post<string>(this.url2,log);
  }
  getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url)
  }
  deletecust(id:number):Observable<Number>{
         return this.http.delete<Number>(`https://localhost:7267/api/Customer/${id}`)
  }
  getById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`https://localhost:7267/api/Customer/${id}`)
  }
}