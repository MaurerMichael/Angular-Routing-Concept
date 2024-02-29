import {Component, OnDestroy} from '@angular/core';
import {DataPipeService} from "../data-pipe.service";
import {Subscription} from "rxjs";
import {DataPipeProps} from "../router-wrapper.types";
import {ActivatedRoute} from "@angular/router";
import {ChildComponent} from "../../parent/child/child.component";

@Component({
  selector: 'app-route-wrapper',
  styles: [],
  template: `
    <ng-container
      *ngComponentOutlet="commponent; inputs: inputs"
    ></ng-container>
  `
})
export class RouteWrapperComponent implements OnDestroy{

  readonly commponent: any

  inputs?: DataPipeProps

  private readonly subscription: Subscription

  constructor(private dataPipeService: DataPipeService, private route: ActivatedRoute) {
    this.commponent = this.route.snapshot.data["component"]
    this.subscription = this.dataPipeService.dataPipe().subscribe(inputs => this.inputs=inputs)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  protected readonly ChildComponent = ChildComponent;
}
