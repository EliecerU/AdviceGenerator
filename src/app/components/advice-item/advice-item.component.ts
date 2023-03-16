import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advice-item',
  templateUrl: './advice-item.component.html',
  styleUrls: ['./advice-item.component.css']
})
export class AdviceItemComponent {
  
  @Input() advice:any={};

}
