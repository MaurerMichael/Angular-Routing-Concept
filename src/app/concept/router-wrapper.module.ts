import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataPipeService} from "./data-pipe.service";
import {RouterOutlet} from "@angular/router";
import {RouterWrapperComponent} from "./router-wrapper/router-wrapper.component";
import {RouteWrapperComponent} from "./route-wrapper/route-wrapper.component";



@NgModule({
  declarations: [RouterWrapperComponent, RouteWrapperComponent],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [RouterWrapperComponent, RouteWrapperComponent],
  providers: [
    DataPipeService
  ]
})
export class RouterWrapperModule { }
