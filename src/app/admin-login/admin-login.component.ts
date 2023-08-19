import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
export class Admin {
  private aid!: number;
  private aname!: string;
  private aemail!: string;
  private apassword!: string;
}

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  credential={
    aemail:'',
    apassword:''
  }
  constructor(private http:HttpClient, private adminservice:AdminService) { }

  admin!: Admin[];

  ngOnInit(): void {
  }

  
  getAllAdmin(){
    let url="http://localhost:8080/admin/getAllUser";
    return this.http.get<any>(url).subscribe(
      response=>{
        console.log(response);
        this.admin = response;
        localStorage.setItem('Admin',JSON.stringify(Admin))
      }
    );
  }

  onlogin(){
    if((this.credential.aemail!='' && this.credential.apassword!='') && 
    ( this.credential.aemail!=null && this.credential.apassword!=null)){
      console.log("Form is submitted");
      this.adminservice.login(this.credential).subscribe(
        response=>{
          // console.log(response.constructor.name);
          if(response){   
            console.log(response);
            
            this.getAllAdmin();          
            window.location.href=""
          }
          else{
            alert("Invalid Credentials");
          }
        }
      )
      }
      else{
        console.log("Fields are empty");
        
        
      }
  }
}

