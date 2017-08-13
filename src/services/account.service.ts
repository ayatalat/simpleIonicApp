import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class accountService {

  public accounts: any = [];
  public account:any=[];
  accountUrl = "http://localhost:3000/accounts";

  constructor(private http: Http) {
    this.getAllAccounts();
  }
  getAllAccounts() {
    return this.http.get(this.accountUrl).map((response: Response) => response.json()).subscribe(data => {
      this.accounts = data;
      console.log(data);
    },
      err => console.log(`error happened ${err}`)
    );

  }
  get Accounts() {
    for (let data of this.accounts) {
      data.checked = false;
    }
    return this.accounts;
  }
getAccountdetails(id){
  return this.http.get(this.accountUrl+"/"+id).map((response:Response)=>response.json());
}

  filterItems(searchTerm){
        if(searchTerm != null){
            return this.accounts.filter((item) => {
                return item.account_number.toString().indexOf(searchTerm.toString()) > -1;
            });     
        } 
 
    }











}