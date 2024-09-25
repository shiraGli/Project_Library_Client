import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';
import { NewCustomer } from '../Models/NewCustomer';

@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private http:HttpClient) { }
  postCustomer(customer:NewCustomer):Observable<Customer>{
          return this.http.post<Customer>('https://localhost:7267/api/Customer',customer)
 
        }
}
 