/**
 * Created by musale on 5/1/16.
 */
import { RegisterComponent } from "./form/register.component";
import { Component } from 'angular2/core';
@Component({
    selector: 'app',
    directives: [RegisterComponent],
    template: `<register-form></register-form>`
})
export class AppComponent {
    constructor() { }
}