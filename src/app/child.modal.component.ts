import {Component,ViewChild} from '@angular/core';
import { ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'user-login-modal',
    template: `
        <modal #modal>

            <modal-header [show-close]="true">
                <h4 class="modal-title">I'm a modal!</h4>
            </modal-header>

            <modal-body>
                Hello World!
            </modal-body>

            <modal-footer [show-default-buttons]="true"></modal-footer>
            
        </modal>
    `
})
export class ChildModalComponent {

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    open(){
        this.modal.open();
    }

    close(){
        this.modal.close();
    }
}