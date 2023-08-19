import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor(private ucontroller:UserService) { }

  ngOnInit(): void {
  }

  askquestion(data:any){
    console.warn(data)
    this.ucontroller.postQuestion(data).subscribe(result=>{
      console.warn(result)
      window.location.href="/all-questions";
    });

  }

}
