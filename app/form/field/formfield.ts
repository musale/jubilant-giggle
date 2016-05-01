/**
 * Created by musale on 5/1/16.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {FormControl} from "../control/formcontrol";

@Component({
    selector: 'formField',
    template: `
  <div class="form-group" [class.has-error]="!control.valid && control.dirty">
    <label [attr.for]="name">{{name}}</label>
    <input type={{type}}  class="form-control"
            placeholder="{{name}}"
            [ngFormControl]="control">
  </div>
  <div [hidden]="control.untouched || control.valid" class="alert alert-danger">
    This field is required.
  </div>
  `
})
export class FormFieldComponent implements OnInit {
    @Input() name:string;
    @Input() type:string = "text";
    @Input() required:boolean;
    @Input() control: FormControl;
    ngOnInit():void {
        if (this.required) {
            this.name += " *";
        }
    }

}