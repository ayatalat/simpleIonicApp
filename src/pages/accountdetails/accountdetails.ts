import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { accountService } from "../../services/account.service";


/**
 * Generated class for the AccountdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-accountdetails',
  templateUrl: 'accountdetails.html',
})
export class AccountdetailsPage {
  id:number;
  account={};
  constructor(public service :accountService,public navCtrl: NavController, public navParams: NavParams) {
    this.id=navParams.get("id");
    console.log(this.id);
    this.getdetails();
    
  
  }
getdetails(){
  return this.service.getAccountdetails(this.id).subscribe(data=>{
    console.log(data);
    this.account=data;
    console.log(this.account);
  },
  err=> console.log(`error happen in get account details ${err}`))
}


get Account(){
  console.log(this.account);
  return this.account;
}
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AccountdetailsPage');
  }

  


}
