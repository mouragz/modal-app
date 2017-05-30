import {Component,ViewChild} from '@angular/core';
import { ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'child-modal-form',
    templateUrl: './child.modal.form.html'
})
export class ChildModalFormComponent {
    
    @ViewChild(ModalComponent)
    modal: ModalComponent;

    open(){
        this.modal.open();
    }

    close(){
        this.modal.close();
    }
}
