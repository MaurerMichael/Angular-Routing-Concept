import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Inputs, RouterOutletDatapipe} from "../concept/router-outlet-datapipe";
import {NgComponentOutlet} from "@angular/common";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterOutletDatapipe,
    NgComponentOutlet
  ],
  styles:[],
template: `
  <h1>Concept </h1>
  <div>
    <h1>Parent</h1>
    <button (click)="countup()">Count Plus 1</button>
    <hr>
    <app-router
      [inputs]="inputs"
    ></app-router>
  </div>

`
})
export class ParentComponent {

  inputs: Inputs = {
    counter: 0
  }

  countup() {
    this.inputs = {
      ...this.inputs,
      counter: this.inputs["counter"] + 1
    }
  }

}
