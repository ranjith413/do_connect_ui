import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  answeredBy = "kiran kumar";
  item:any=[]
  que:any=[]

  constructor(private ucontroller:UserService, private adminservice:AdminService ){
    this.ucontroller.getAllQuestions().subscribe(result=>{
      this.que=result;
      console.log(result);

      
    })
    
    this.ucontroller.getAllAns().subscribe(data=>{
      console.warn(data)
      this.item=data;
    });

  }

  getByTopic(topic:any){
    this.ucontroller.getByTopic(topic).subscribe(
      result=>{
        this.que=result;
        console.log(result);
      }
    )
  }

  getValue(values:string){
    console.log(values);
    this.adminservice.serachByKey(values).subscribe(
      result=>{
        this.que=result;
        console.warn(result);
        
      }
    )

  }

  uname!:string;

  postAnswer(ans:any, qid:any){
    this.ucontroller.postAnswer(ans,qid).subscribe(result=>{
      console.warn(result)
      window.location.href="/all-questions"
    })
} 

  loggedIn(){  
    if(localStorage.getItem('User')){
      const data = JSON.parse(localStorage.getItem('User') || '{}');
    this.uname = data[0].uname;
    const temp1 = localStorage.getItem('User');
    return temp1 && 'User';
    
    }
    else{
      const temp2 = localStorage.getItem('Admin');
      return temp2 && 'Admin';
    }
  }

  deleteQue(qid:any){
    this.adminservice.deleteQue(qid).subscribe();
    alert("Question is deleted, Please refresh the Page");

  }

  deleteAns(aid:any){
    this.adminservice.deleteAns(aid).subscribe();
    alert("Answer is deleted, Please refresh the Page");

  }


  approveQue(qid:any){
    this.adminservice.approveQue(qid).subscribe(result=>{
      console.log(result);
      window.location.href=""
      if(result){
        return true;
      }
      else{
        return false;
      }

    });
    
  }


  changeQue(data:any){
    // console.warn("que"+data);

    if(data){
      return 'Approved';
    }
    else{
      return 'Approve';
    }
    
  }
  changeAns(data:any){
    // console.log("ans"+data);

    if(data){
      return 'Approved';
    }
    else{
      return 'Approve';
    }
    
  }

  approveAns(aid:any){
    this.adminservice.approveAns(aid).subscribe(result=>{
      console.log(result);
      window.location.href=""
      if(result){
        return true;
      }
      else{
        return false;
      }
    }
  )
 }

  ngOnInit(): void {
    console.log();
    
  }

}
