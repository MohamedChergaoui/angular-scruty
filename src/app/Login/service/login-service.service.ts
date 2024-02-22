import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  isLogin: boolean =false;
  role:any;
  username:any;
  accessToken:string;
  public login(username:string, password:string){
    let options ={
      headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let parmts =new HttpParams()
    .set("username",username)
    .set("password",password);
    return this.http.post("http://localhost:8081/login",parmts,options)

  }
  public loadProfil(data:any){
    this.isLogin=true;
    this.accessToken=data['access-token'];
    console.log(this.accessToken)

   
  }
}
