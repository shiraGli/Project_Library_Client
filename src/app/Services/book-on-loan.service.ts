import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Models/Book';
import { Book_On_loan } from '../Models/Book_on_loan';

@Injectable({
  providedIn: 'root'
})
export class BookOnLoanService {
  bookOnLoan:Book_On_loan=new Book_On_loan()
  constructor(private http:HttpClient) { }
  getBookOnLoan():Observable<Book_On_loan[]>{
    return this.http.get<Book_On_loan[]>(`https://localhost:7267/api/Book_on_loan`)
  }
  addBoogOnLoan(lendId:number,id:number):Observable<number>{
    this.bookOnLoan.bookId=id
    this.bookOnLoan.lendId=lendId
  
    return this.http.post<number>('https://localhost:7267/api/Book_on_loan',this.bookOnLoan)
  }
  deleteBook(id:number):Observable<number>{
    return this.http.delete<number>(`https://localhost:7267/api/Book_on_loan/${id}`)
  }
}
