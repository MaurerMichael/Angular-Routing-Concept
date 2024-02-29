import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{


  @Input() counter?: number

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["counter"]) {
      console.log("CHANGE EVENT", changes["counter"].previousValue, changes["counter"].currentValue)
    }
  }


}
