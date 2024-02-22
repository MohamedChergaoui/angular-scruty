import { Component, OnInit } from '@angular/core';
import { AnalyseService } from '../../services/analyse.service';
import { Router } from '@angular/router';
import { Analyse } from 'src/app/Entity/analyse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {
   analyses:Analyse[];
   nom :string;

  constructor(private anlyseService:AnalyseService,private route:Router) { }

  ngOnInit(): void {
    this.AllAnlyses()
  }
  productsArray: Observable<Analyse>[];
  AllAnlyses(){
    this.anlyseService.getAllAnalyses().subscribe((res)=>{
      this.analyses=res;
     
      
      console.log(res[0])
    })
  }
  deleteAnalyse(id:number){

  }

}
