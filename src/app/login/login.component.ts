import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

export class User {
  private uid!: number;
  private uname!: string;
  private uemail!: string;
  private upassword!: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential={
    uemail:'',
    upassword:''
  }
  constructor(private userservice:UserService, private authservice:AuthService, private http:HttpClient) { }

  public token:any;
  user!: User[];

  ngOnInit(): void {
  }
  public result=false;

  // login(loginForm:NgForm){
  //   console.log(loginForm.value);
  //   const user = this.authservice.authUser(loginForm.value);
  //   if(user){
  //     console.log('Godd');
  //   }
  //   else{
  //     console.log('shit');
      
  //   }
  //   }
  
  getAllUsers(){
    let url="http://localhost:8080/admin/getAllUser";
    return this.http.get<any>(url).subscribe(
      response=>{
        console.log(response);
        this.user = response;
        localStorage.setItem('User',JSON.stringify(this.user))
      }
    );
  }
  passemail(){
    this.userservice.passemail(this.email);
  }
  email:any;
  onlogin(){
    if((this.credential.uemail!='' && this.credential.upassword!='') && 
    ( this.credential.uemail!=null && this.credential.upassword!=null)){
      this.email = this.credential.uemail;
      
      console.log("Form is submitted");
      this.userservice.login(this.credential).subscribe(
        response=>{
          // console.log(response.constructor.name);
          if(response){   
            this.getAllUsers();          
            window.location.href=""
          }
          else{
            alert("Invalid Credentials");
          }
        }
      )
      }
      else{
        alert("Fields are empty");
        
        
      }
  }
}