import {Routes} from '@angular/router';
import {RouteWrapperComponent} from "./concept/route-wrapper/route-wrapper.component";
import {ChildComponent} from "./parent/child/child.component";
import {ParentComponent} from "./parent/parent.component";

export const routes: Routes = [
  {

        path:"",
        component: RouteWrapperComponent,
        data: {
          component: ChildComponent
        }
  },
];
