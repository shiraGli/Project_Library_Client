import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/Models/Account';
import { Book } from 'src/app/Models/Book';
import { Book_On_loan } from 'src/app/Models/Book_on_loan';
import { Customer } from 'src/app/Models/Customer';
import { Lend } from 'src/app/Models/Lend';
import { AccountService } from 'src/app/Services/account.service';
import { BookOnLoanService } from 'src/app/Services/book-on-loan.service';
import { BookService } from 'src/app/Services/book.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { LendService } from 'src/app/Services/lend.service';
import * as moment from 'moment';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  id!:number
  customer!:Customer
  account!:Account[]
  book!:Book[]
  counter:number=0
  flag:boolean=true
  newLend:boolean=false
  new:string="new"
  dateToLend:Date=new Date()
  lendId:number=0
  bookOnLoan!:Book_On_loan[]
  lendArr!:Lend[]
  yourLoan:boolean=false
  nameBtn1:string="add me"
  nameBtn2:string="delete me"
  accountId!:number
  flag2:boolean=true
  monthNumber!:number

  
constructor(private router:Router,private route:ActivatedRoute,private customerService:CustomerService,private accountservice:AccountService,
  private bookservice:BookService,private lendservice:LendService,private bookOnLoanservice:BookOnLoanService){
     this.route.params.subscribe(params=>{
        this.id=params['id']
        console.log("idcust",this.id)
     })
     this.customerService.getById(this.id).subscribe(a=>{
         this.customer=a;
         console.log("cust",this.customer)
     })
     this.accountservice.getAccount().subscribe(a=>{
          this.account=a
     })
     this.bookservice.getBook().subscribe(a=>{
      this.book=a;
      console.log(this.book)
     })
}
click(){
   if(this.customer.max-1<=this.counter){
    this.flag=false
    alert("כמות הספרים שלך להפעם נגמרה")
    this.counter++
  }
  else{
  this.counter++
  }
}
openNewLend(){
   this.newLend=!this.newLend
   this.newLend?this.new="close":this.new="new"
   if(this.new=="close")
     this.postLend()
}

putPay(event:number){
  //לעשות פונקצית put לתשלום
   console.log(event)
   console.log(this.account)
   console.log(this.account[event].id)
   this.accountId=this.account[event].id
   this.accountservice.updatePay(this.account[event].id,true).subscribe(a=>{
   })
}

putLend(){
  this.lendservice.putLend(this.lendId,this.counter).subscribe({
  })
  debugger
  this.monthNumber= parseInt(moment(this.dateToLend).format('M'))
  this.accountservice.addAccount(this.id,this.monthNumber).subscribe(a=>{
    this.accountId=a
    this.new="new"
  })
  this.newLend=false
}
postLend(){
  console.log(this.dateToLend)
  this.lendservice.addlend(this.dateToLend,this.customer.id).subscribe(a=>{
    this.lendId=a
    console.log("idddd",this.lendId)
  })
}
openyourbook(){
  this.bookOnLoanservice.getBookOnLoan().subscribe(a=>{
    this.bookOnLoan=a
  })
  this.lendservice.getLend().subscribe(a=>{
    this.lendArr=a
  })
  this.yourLoan=!this.yourLoan
}
}