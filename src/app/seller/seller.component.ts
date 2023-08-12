import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from 'src/data-type';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent  implements OnInit{

  showLogin=false
  authError:String='';
  constructor(private seller:SellerService){}


  ngOnInit(): void{
    this.seller.reloadSeller
  }

  signUp(data:signUp):void{
    console.warn(data)
    this.seller.userSignUp(data);
  }
  login(data:signUp):void{
    console.warn(data)
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
