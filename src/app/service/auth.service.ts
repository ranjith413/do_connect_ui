import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { User } from '../nav-bar/nav-bar.component';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userservice:UserService) { }

  credential={
    uemail:'',
    upassword:''
  }
  authUser(data: any){
    let user = [];
    if(localStorage.getItem('User')){
      console.log(localStorage.getItem('User'));
      
      user = JSON.parse(localStorage.getItem('User') || '{}');
    }
    return user.find((p: { uname: any; upassword: any; })=> p.uname===data.uname && p.upassword===data.upassword);
}
  

}

