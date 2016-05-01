/**
 * Created by musale on 5/1/16.
 */
import { Control } from 'angular2/common';
import { Injectable } from 'angular2/core';

export interface ValidationResult {
    message: string;
}

@Injectable()
export class FormFieldValidationService {
    constructor() {}

    validateUserName(control: Control): ValidationResult {
        const startsWithLetter_regex = /^[a-zA-Z]/;

        if(!control.value.match(startsWithLetter_regex)) {
            return {message: "Username has to start with a letter"};
        } else if(control.value.length < 3) {
            return {message: "Username must have more than 3 letters"};
        } else{
            return null;
        }
    }
}