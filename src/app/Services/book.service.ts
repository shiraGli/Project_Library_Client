import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { 
  }
  getBook():Observable<Book[]>{
       return  this.http.get<Book[]>('https://localhost:7267/api/Book')
}
putBook(id:number,count:number):Observable<Book>{
  return this.http.put<Book>(`https://localhost:7267/api/Book/${id}`,count)
}

}