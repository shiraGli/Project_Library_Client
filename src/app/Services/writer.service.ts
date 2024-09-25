import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Writer } from '../Models/Writer';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  constructor(private http:HttpClient) { }
  getwriters():Observable<Writer[]>{
    return this.http.get<Writer[]>('https://localhost:7267/api/Writer')
  }
}
