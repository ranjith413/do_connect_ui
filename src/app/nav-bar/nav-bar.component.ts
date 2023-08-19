import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';

export class User {
  private uid!: number;
  private uname!: string;
  private uemail!: string;
  private upassword!: string;
}


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  user!: User[];
  constructor(private http:HttpClient, private adminservice:AdminService, private userservice:UserService) { }

  public message=false; 
  ngOnInit(): void {    
  }

  filteredString:string = '';
  public data:any = [] ;
  getValue(values:string){
    console.log(values);
    this.adminservice.serachByKey(values).subscribe(
      result=>{
        console.log(result);
        
        this.data=result;
        
      }
    )

  }

  uname!:string;
  loggedInUser(){
    if(localStorage.getItem('User')){
      const data = JSON.parse(localStorage.getItem('User') || '{}');
      this.uname = data[0].uname;
      
      
      const temp = localStorage.getItem('User');
      return temp;
    }else{
      const temp2 = localStorage.getItem('Admin');
      return temp2;
    }
  }

  // loggedInAdmin(){
  //   const temp = localStorage.getItem('Admin');
  //   return temp
  // }

  onLogout(){
    console.log("logout successfully");
    localStorage.removeItem('User');
    localStorage.removeItem('Admin');
  }


}
