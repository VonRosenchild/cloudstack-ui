import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';

import { SshKeyListComponent } from './ssh-key-list.component';
import { SharedModule } from '../shared/shared.module';
import { SshKeysPageComponent } from './ssh-keys-page.component';
import { SshKeyListItemComponent } from './ssh-key-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdlModule
  ],
  exports: [SshKeysPageComponent],
  declarations: [
    SshKeyListComponent,
    SshKeyListItemComponent,
    SshKeysPageComponent
  ],
})
export class SshKeysModule { }