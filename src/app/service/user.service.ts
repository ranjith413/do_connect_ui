import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(data:any){
    let url="http://localhost:8080/user/register"
    return this.http.post(url,data);
  }

  login(data:any){
    let url="http://localhost:8080/user/login";
    return this.http.post(url,data);
  }

  getAllUsers():Observable<Object>{
    let url="http://localhost:8080/admin/getAllUser";
    return this.http.get(url);
  }
  getAllQuestions(){
    let url="http://localhost:8080/user/getallque";
    return this.http.get(url)
  }
  postAnswer(data:any, qid:any){
    let url="http://localhost:8080/user/addAnswer";
    return this.http.post(`${url}/${qid}`,data)
  }
  postQuestion(data:any){
    let url="http://localhost:8080/user/askque";
    return this.http.post(url,data)
  }

  searchQuestion(data:any){
    let url="http://localhost:8080/user/SearchByQue";
    return this.http.get(`${url}/${data}`)
  }
  getByTopic(data:any){
    let url="http://localhost:8080/user/getbytopic";
    return this.http.get(`${url}/${data}`)
  }

  getAllAns(){
    let url="http://localhost:8080/user/getallans";
    return this.http.get(url)

  }
  email:any;
  getemail(){
    return this.email;
  }
  passemail(data:any){
    return data=this.email;
  }
    
    
}
