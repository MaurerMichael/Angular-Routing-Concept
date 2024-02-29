import { Component } from '@angular/core';
import {RouterWrapperModule} from "../concept/router-wrapper.module";
import {DataPipeProps} from "../concept/router-wrapper.types";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    RouterWrapperModule
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  childDataPipe: DataPipeProps = {
    counter: 0
  }

  countup() {
    this.childDataPipe = {
      ...this.childDataPipe,
      counter: this.childDataPipe["counter"] + 1
    }
  }
}
