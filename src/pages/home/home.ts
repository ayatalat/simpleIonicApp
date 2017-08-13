import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { accountService } from "../../services/account.service";
import {AccountdetailsPage } from "../accountdetails/accountdetails";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highligh'
})



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements PipeTransform {
  searchTerm: any;
  isChecked: boolean = false;
  count = 0;
  total:number=0;
  myInput:string;
  select:boolean=false;

  accounts: any = [];
  constructor(public navCtrl: NavController, public service: accountService) {
    this.getAccounts();

  }
   transform(value: any, args: any): any {
        var re = new RegExp(args, 'gi'); 
        return value.replace(re, "<mark>" + args + "</mark>");
    }
  getAccounts() {
    return this.service.Accounts;
  }

  setFilteredItems() {
    console.log("r", this.service.filterItems(this.searchTerm))
    this.accounts = this.service.filterItems(this.searchTerm);
  }

gettotal(){
  return this.total;
}

  addprop1(e,totalbill) {
    console.log(totalbill);
    if (e.target.checked) {
      this.count += 1;
      this.select=false;
      this.total+=parseFloat(totalbill);
    } else {
      this.count -= 1;
       this.total-=parseFloat(totalbill);
    }
   
  }

ischeck(){
  if(this.count>0){
    this.isChecked=true;
  }else{
    this.isChecked=false;
  }
  return this.isChecked;
}
isselect(){
  return this.select;
}
unselectAll(){
  this.total=0;
  this.select=true;
  this.count=0;
}

selectAll(){
  this.select=false;
}
 onInput() {
    console.log( this.service.filterItems(this.myInput))
    return this.service.filterItems(this.myInput);
  }
  showDetails(id:number){
    console.log("id",id);
     this.navCtrl.push(AccountdetailsPage,{
      "id":id
    })
  }

}