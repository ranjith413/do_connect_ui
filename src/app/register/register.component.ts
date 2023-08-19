import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credential={
    uname:'',
    uemail:'',
    upassword:''
  }
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  addUser(){
    if((this.credential.uname!='' && this.credential.uemail!='' && this.credential.upassword!='') && 
    (this.credential.uname!=null && this.credential.uemail!=null && this.credential.upassword!=null)){
      console.log("Form is submitted");
      this.userservice.register(this.credential).subscribe(
        response=>{
          console.log( response);
          if(response){
          window.location.href=""
          }
          else{
            alert("Email already registered")
          }
        }
      )
      }
      else{
        console.log("Fields are empty");
        
      }
    }
}
