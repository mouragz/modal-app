import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { ParentModalComponent } from './parent.modal.component';
import { ChildModalComponent } from './child.modal.component';
import { ParentModalFormComponent } from './parent.modal.form.component';
import { ChildModalFormComponent } from './child.modal.form.component';
@NgModule({
  declarations: [
    AppComponent,

    ParentModalComponent,ChildModalComponent,
    
    ParentModalFormComponent,ChildModalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
