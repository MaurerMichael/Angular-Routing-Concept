import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {RouterOutletWithInputs} from "./concept/router-outlet-with-inputs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, RouterOutletWithInputs],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing-Concept';
}
