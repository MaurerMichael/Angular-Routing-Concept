import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DataPipeService} from "../data-pipe.service";

@Component({
  selector: 'app-router-wrapper',
  templateUrl: './router-wrapper.component.html',
  styleUrl: './router-wrapper.component.css'
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
