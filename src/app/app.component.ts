import { Component, OnInit } from '@angular/core';
import { AdviceServiceService } from './service/advice-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'AdviceGenerator';

  advice:any={};
  
  constructor( private adviceService:AdviceServiceService ){
    
  } 

  ngOnInit(){
    this.adviceService.getAdvice().subscribe((data:any)=>{
      this.advice = data.slip;
      console.log(this.advice);
    });
  }
}
