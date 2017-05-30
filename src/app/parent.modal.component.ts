import {ChildModalComponent} from './child.modal.component';
import {Component,ViewChild} from '@angular/core';

@Component({
    selector: 'parent-component',
    template: `
        <h1>this is a parent component</h1>
        <button class="btn btn-primary" (click)="modal.open()">Open Modal</button>
        <user-login-modal></user-login-modal>
    `
})
export class ParentModalComponent {
    @ViewChild(ChildModalComponent)
    modal: ChildModalComponent;
}