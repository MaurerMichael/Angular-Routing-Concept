import {Routes} from '@angular/router';
import {ChildComponent} from "./parent/child/child.component";
import {ParentComponent} from "./parent/parent.component";

export const routes: Routes = [

  {
     path: "",
    component: ParentComponent,
    children: [
      {
        path: "",
        component: ChildComponent
      }
    ]
  }
];
