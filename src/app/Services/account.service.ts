import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../Models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account:Account=new Account()
  constructor(private http:HttpClient) { }
 
getAccount():Observable<Account[]>{
    return this.http.get<Account[]>(`https://localhost:7267/api/Account`)
}
addAccount(id:number,month:number):Observable<number>{
  this.account.customerId=id
  this.account.month=month
  this.account.pay=false
  debugger
  return this.http.post<number>('https://localhost:7267/api/Account',this.account)
}
updatePay(accountIdt:number,flag:boolean):Observable<Account>{
    return this.http.put<Account>(`https://localhost:7267/api/Account/${accountIdt}`,flag)
}
}
