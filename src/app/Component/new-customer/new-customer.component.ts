import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { NewCustomer } from 'src/app/Models/NewCustomer';
import { NewCustomerService } from 'src/app/Services/new-customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  // name!:string
  // password!:string
  // email!:string
  // sum!:number
  // count_Book!:number
  // max!:number
  //customer:Customer=new Customer()
newCustomer:NewCustomer=new NewCustomer()
  constructor(private newCustomerService:NewCustomerService,private router:Router,private route:ActivatedRoute){}
  customerId!:number 
  addCustomer(){
    if(this.newCustomer.sum==50)
       this.newCustomer.max=5
    else
       this.newCustomer.max=10
       console.log(this.newCustomer)
      this.newCustomerService.postCustomer(this.newCustomer).subscribe(a=>{
           this.customerId=a.id
           console.log(this.customerId)
           this.router.navigate([`/customer/${this.customerId}`])
          }
        )
        
  }
 
}
