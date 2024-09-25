import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { Writer } from 'src/app/Models/Writer';
import { BookOnLoanService } from 'src/app/Services/book-on-loan.service';
import { BookService } from 'src/app/Services/book.service';
import { WriterService } from 'src/app/Services/writer.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private bookOnLoanservice:BookOnLoanService,private bookService:BookService,private writerService:WriterService){

      this.writerService.getwriters().subscribe(a=>{
           this.writers=a
  })
    }
  
  @Input() id!:number;
  @Input() name!:string;
  @Input() count!:number;
  @Input() writerId!:number;
  @Input()sumCounter!:boolean
  @Input()lendId!:number
  @Input() book!:Book;
  @Input() nameBtn!:string
  @Output()clickBtn:EventEmitter<Book>=new EventEmitter()
     writers!:Writer[]
  flag:boolean=false
  bookOnLoanId!:number
  
  addCounter(){
    if(this.nameBtn=="add me"){
      
    if(this.sumCounter==false){
        this.flag==true
    }
     else{
       if(this.book.count<=0)
        {
          console.log("b",this.book.count)
          this.flag=true
          alert("הספר נגמר מהמלאי")
        }
        else{
        this.clickBtn.emit();
        this.bookOnLoanservice.addBoogOnLoan(this.lendId,this.id).subscribe(a=>{
          console.log(a)
          this.bookOnLoanId=a
          console.log(this.bookOnLoanId)
        })
        this.bookService.putBook(this.id,this.book.count-1).subscribe(a=>{
          this.book=a
            console.log("a",a)})
      }
      //  })
       
        console.log("1",this.book)
     }
  }
  else{
    this.bookService.putBook(this.id,this.book.count+1).subscribe(a=>{
      this.book=a
    })
    console.log("IDDDDDD",this.id)
     this.bookOnLoanservice.deleteBook(this.id).subscribe({})
  }
    
}
}
