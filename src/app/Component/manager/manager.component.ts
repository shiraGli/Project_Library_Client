// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-manager',
//   templateUrl: './manager.component.html',
//   styleUrls: ['./manager.component.css']
// })
// export class ManagerComponent implements OnInit {




import { Component } from '@angular/core';
import { Account } from 'src/app/Models/Account';
import { Book_On_loan } from 'src/app/Models/Book_on_loan';
import { Customer } from 'src/app/Models/Customer';
import { Lend } from 'src/app/Models/Lend';
import { AccountService } from 'src/app/Services/account.service';
import { BookOnLoanService } from 'src/app/Services/book-on-loan.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { LendService } from 'src/app/Services/lend.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})

export class ManagerComponent {

  customers!:Customer[]
  account!:Account[]
  cust!:string
  open:boolean=false
  bookOnLoan!:Book_On_loan[]
  lend!:Lend[]
  pay:boolean=false
  constructor(private custservise:CustomerService,private accountservice:AccountService,private bookOnLoanservice:BookOnLoanService,
    private lendservice:LendService){
    this.custservise.getCustomer().subscribe(a=>{
      console.log("jjjjjjjjjjjj",a)
      this.customers=a
      console.log(this.customers[0].account)
    }
   )
   this.accountservice.getAccount().subscribe(a=>{
    console.log(a)
    this.account=a
    })
    this.bookOnLoanservice.getBookOnLoan().subscribe(a=>{
      this.bookOnLoan=a
    })
    this.lendservice.getLend().subscribe(a=>{
        this.lend=a
    })
}
openBook(){
  if(this.open==false)
    this.open=true
  else
   this.open=false
}  
  deleteCustomer(customer:Customer){
   console.log("llllllllllliiijhh",customer.id)
   this.custservise.deletecust(customer.id)
   .subscribe({
   })
  
  }
  payment(){
     this.pay=!this.pay
  }
   
  
}