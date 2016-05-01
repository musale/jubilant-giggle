/**
 * Created by musale on 5/1/16.
 */
import { Control } from 'angular2/common';
import {ValidationResult} from "../validation/formfieldvalidator.service";
export class FormControl extends Control {
    errors: ValidationResult;

    get errorMessage(): string {
        if(this.errors != null && this.errors.message != null) {
            return this.errors.message;
        }
        return null;
    }

}