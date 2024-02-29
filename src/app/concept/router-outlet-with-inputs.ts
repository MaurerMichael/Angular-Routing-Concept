
import {
  ComponentRef,
  Directive,
  Input,
  SimpleChanges,
} from '@angular/core';
import {RouterOutlet} from "@angular/router";

export interface Inputs {
  [attribute: string]: any
}



 /**
  * @directive
  * @description
  * RouterOutletWithInputs extends RouterOutlet and adds support for dynamically setting inputs on the activated component.
  *
  * @selector - The CSS selector that determines which elements this directive applies to.
  * @standalone - A boolean value that indicates whether this directive should be treated as a standalone element or as part of a larger component.
  * @exportAs - The name under which this directive can be exported and accessed in templates.
  */
@Directive({
  selector: 'app-router',
  standalone: true,
  exportAs: 'outlet'
})
// @ts-ignore
export class RouterOutletWithInputs extends RouterOutlet {

  @Input() inputs?: Inputs


  /**
   * Represents a collection of inputs and their usage status.
   *
   * @type {Map<string, boolean>}
   */
  private _inputsUsed = new Map<string, boolean>();

  /**
   * Represents the activated component reference.
   *
   * @type {ComponentRef<any> | null}
   */
  private _activated: ComponentRef<any> | null = null;

  /**
   * Override method: get activated()
   *
   * Returns the activated component reference.
   *
   * @returns {ComponentRef<any> | null} - The activated component reference, or null if not available.
   */
  override get activated(): ComponentRef<any> | null {
    return this._activated
  }

  /**
   * Sets the activated component reference.
   *
   * @param a - The component reference to be set as activated. Can be null.
   */
  override set activated(a: ComponentRef<any> | null) {
    this._activated = a
  }

  /**
   * Executes the ngOnInit lifecycle hook and applies any necessary input state diff.
   *
   * @return {void}
   */
  override ngOnInit() {
    super.ngOnInit();
    if(this.activated) {
      this._applyInputStateDiff(this.activated)
    }
  }

  /**
   * Override of the ngOnChanges method.
   * This method is called whenever any input property of the component changes.
   *
   * @param {SimpleChanges} changes - The changes object containing the current and previous values of the input properties.
   * @return {void}
   */
  override ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (changes["inputs"]) {
      for (const inputName of Object.keys(changes["inputs"].currentValue)) {
        this._inputsUsed.set(inputName, true);
      }
      if(this.activated) {
        this._applyInputStateDiff(this.activated)
      }

    }
  }

  /**
   * Applies the difference in input state to a given component reference.
   * If an input was previously active but no longer exists, it will be set to undefined.
   * If an input is still active, it will be updated with the current value from the inputs object.
   *
   * @param {ComponentRef<unknown>} componentRef - The component reference to apply the input state to.
   * @return {void}
   */
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
