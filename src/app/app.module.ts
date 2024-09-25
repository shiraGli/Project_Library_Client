import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import {  ManagerComponent } from './Component/manager/manager.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { DebtComponent } from './Component/debt/debt.component';
import { BookComponent } from './Component/book/book.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewCustomerComponent } from './Component/new-customer/new-customer.component';
const routes:Routes=[{path:'manager',component:ManagerComponent},{path:'newCustomer',component:NewCustomerComponent},
{path:'',component:LoginComponent},{path:'customer/:id',component:CustomerComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManagerComponent,
    CustomerComponent,
    DebtComponent,
    BookComponent,
    NewCustomerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule ,HttpClientModule,RouterModule.forRoot(routes), BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
