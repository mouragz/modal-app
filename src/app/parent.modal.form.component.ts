import {ChildModalFormComponent} from './child.modal.form.component';
import {Component,ViewChild} from '@angular/core';

@Component({
    selector: 'parent-modal-form-component',
    template: `
        <h1>this is a parent component</h1>
        <button class="btn btn-primary" (click)="modal.open()">Login Modal</button>
        <child-modal-form></child-modal-form>
    `
})
export class ParentModalFormComponent {
    @ViewChild(ChildModalFormComponent)
    modal: ChildModalFormComponent;
}