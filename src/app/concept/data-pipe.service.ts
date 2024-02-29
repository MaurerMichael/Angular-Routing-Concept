import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DataPipeProps} from "./router-wrapper.types";

@Injectable({
  providedIn: 'root'
})
export class DataPipeService {

  constructor() { }


  private dataPipeSubject: BehaviorSubject<DataPipeProps| undefined> = new BehaviorSubject<DataPipeProps | undefined>(undefined);

  dataPipe(): Observable<DataPipeProps | undefined> {
    return this.dataPipeSubject.asObservable();
  }

  next(props?: DataPipeProps) {
    this.dataPipeSubject.next(props);
  }
}
