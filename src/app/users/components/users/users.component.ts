import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/Entity/user';
import { Router } from '@angular/router';
import { Analyse } from 'src/app/Entity/analyse';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users :User[];
  showModal = false;
  selectedObject: any;
  anlyses:Analyse[];

  constructor(private userservice:UserService,private route:Router) { 
    this.selectedObject="";
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.userservice.getAllUsers().subscribe((res)=>{
     
      this.users=res;
      console.log(res);
    })
  }
  deleteUser(id:number){
    this.userservice.deleteUser(id).subscribe((res)=>{
      console.log(res);
      console.log(id + "raja");
      this.getAllUsers();
    })
  }
  openPopup(id:number){
    this.selectedObject = this.users.find(item => item.id === id);
    this.showModal = true;
    this.anlyses=this.selectedObject.analyses;
    console.log(this.anlyses);
    
  }
  closePopup() {
    this.showModal = false;
    console.log("is Worck")
  }
  ////////////////
  fileName="user.xlsx";
  exportexel(){
    console.log("use done exel ")
    let data = document.getElementById("tableData");
    const wx:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data);
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,wx,'Sheet1');
    XLSX.writeFile(wb,this.fileName);
  }
  

}
