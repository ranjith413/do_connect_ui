import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


register(data:any){
  let url="http://localhost:8080/admin/register"
  return this.http.post(url,data);
}

login(data:any){
  let url="http://localhost:8080/admin/login";
  return this.http.post(url,data);
}

getAllAdmin(){
  let url="http://localhost:8080/admin/getAllAdmim";
  return this.http.get(url);

}
getAllUsers(){
  let url="http://localhost:8080/admin/getAllUser";
  return this.http.get(url);

}
deleteAns(ansid:any){
  let url="http://localhost:8080/admin/Deleteans";
  return this.http.delete(`${url}/${ansid}`);

}
deleteQue(qid:any){
  let url="http://localhost:8080/admin/Deleteque";
  return this.http.delete(`${url}/${qid}`);

}
approveQue(qid:any){
  let url="http://localhost:8080/admin/approveque/qid";
  return this.http.put(url,qid);

}
approveAns(aid:any){
  let url="http://localhost:8080/admin/approveans/aid";
  return this.http.put(url,aid);

}

serachByKey(que:any){
  let url="http://localhost:8080/user/SearchByQue";
  return this.http.get(`${url}/${que}`);
}


}