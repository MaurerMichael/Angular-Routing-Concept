import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DataPipeService} from "../data-pipe.service";

@Component({
  selector: 'app-router-wrapper',
  styles: [],
  template: `<router-outlet></router-outlet>`
})
export class RouterWrapperComponent implements OnInit, OnChanges{

  @Input() dataPipe?: {[attribute: string]: any}

  constructor(private dataPipeService: DataPipeService) {
  }

  ngOnInit() {
    this.dataPipeService.next(this.dataPipe)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataPipeService.next(changes["dataPipe"].currentValue)
  }


}
