import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  styles: [],
  template: `
    <p>child works!</p>
    <h1>{{counter}}</h1>
  `
})
export class ChildComponent implements OnChanges{


  @Input() counter?: number

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["counter"]) {
      console.log("CHANGE EVENT", changes["counter"].previousValue, changes["counter"].currentValue)
    }
  }


}
