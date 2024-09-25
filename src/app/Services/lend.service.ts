import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lend } from '../Models/Lend';

@Injectable({
  providedIn: 'root'
})
export class LendService {
   lend:Lend=new Lend()
  constructor(private http:HttpClient) { }
  getLend():Observable<Lend[]>{
    return this.http.get<Lend[]>(`https://localhost:7267/api/Lend`)
  }
  addlend(data2:Date,id:number):Observable<number>{
    this.lend.date=data2
    this.lend.count_Book=0
    this.lend.customerId=id
    return this.http.post<number>('https://localhost:7267/api/Lend',this.lend)
  }
  putLend(lendId:number,counter:number):Observable<Lend>{
    return this.http.put<Lend>(`https://localhost:7267/api/Lend/${lendId}`,counter)
  }
}
