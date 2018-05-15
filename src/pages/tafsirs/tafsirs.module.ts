import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TafsirsPage } from './tafsirs';

@NgModule({
  declarations: [
    TafsirsPage,
  ],
  imports: [
    IonicPageModule.forChild(TafsirsPage),
  ],
})
export class TafsirsPageModule {}
