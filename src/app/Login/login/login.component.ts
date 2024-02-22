import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!:FormGroup

  constructor(private fb : FormBuilder, private logServ:LoginServiceService, private route:Router) { }
  
  
  han(){
    console.log("raja");
    console.log(this.formLogin.value);
  }

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")
    })
  }
  handelLogin(){
    console.log("raja");
    console.log(this.formLogin.value);
    let username= this.formLogin.value.username;
    let password= this.formLogin.value.password;

    this.logServ.login(username,password).subscribe({
      next:value=>{
        console.log(value)
        this.logServ.loadProfil(value);
        this.route.navigateByUrl("/admin")
      },
      error:err=>{
        console.log(err)
      }
    })
  }


}
