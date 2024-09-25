import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { CustomerService } from 'src/app/Services/customer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 ans:any
// customer!:Customer
name:string=""
password:string=""
id!:number
login:Login=new Login()
constructor(private custService:CustomerService,private router:Router,private route:ActivatedRoute){
  //this.getcust 
  this.router.navigate((['']))
 }
  getCustByLogin()
 {
  console.log(this.login.name)
  console.log(this.login.password)
   this.custService.getCustomerByLogin(this.login).subscribe(a=>{
   this.ans=a;
   console.log("ans",this.ans)
   if(this.ans!=null){
     if(this.ans.password=="manager"){
        debugger
        this.router.navigate(['/manager'])
     }
     else{
     this.id=this.ans.id
     this.router.navigate([`/customer/${this.id}`])
     }
    }
    else
    {
      this.router.navigate(['newCustomer'])
    }
   
})
}}

