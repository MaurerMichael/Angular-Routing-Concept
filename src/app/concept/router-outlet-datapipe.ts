import {
  ComponentRef,
  Directive,
  EnvironmentInjector,
  Input,
  SimpleChanges,
} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";

export interface Inputs {
  [attribute: string]: any
}



@Directive({
  selector: 'app-router',
  standalone: true,
  exportAs: 'outlet'
})
// @ts-ignore
export class RouterOutletDatapipe extends RouterOutlet {

  @Input() inputs?: Inputs


  private _inputsUsed = new Map<string, boolean>();

  private _activated: ComponentRef<any> | null = null;

  override get activated(): ComponentRef<any> | null {
    return this._activated
  }

  override set activated(a: ComponentRef<any> | null) {
    this._activated = a
  }

  override ngOnInit() {
    super.ngOnInit();
    if(this.activated) {
      this._applyInputStateDiff(this.activated)
    }
  }

  override ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (changes["inputs"]) {
      for (const inputName of Object.keys(changes["inputs"].currentValue)) {
        this._inputsUsed.set(inputName, true);
      }
      /**
       * Using TypeScript's 'as any' trick: Not recommended, but possible, is accessing the private variable by casting
       * the instance to any. This essentially tells TypeScript to ignore type-checking, allowing you to access private
       * properties. However, this is generally considered bad practice as it defeats the purpose of private variables
       * and TypeScript's type safety.
       */
      if(this.activated) {
        this._applyInputStateDiff(this.activated)
      }

    }
  }

  private _applyInputStateDiff(componentRef: ComponentRef<unknown>) {
    for (const [inputName, touched] of this._inputsUsed) {
      if (!touched) {
        // The input that was previously active no longer exists and needs to be set to undefined.
        componentRef.setInput(inputName, undefined);
        this._inputsUsed.delete(inputName);
      } else {
        // Since touched is true, it can be asserted that the inputs object is not empty.
        componentRef.setInput(inputName, this.inputs![inputName]);
        this._inputsUsed.set(inputName, false);
      }
    }
  }

}
