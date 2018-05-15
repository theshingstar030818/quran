import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VersesPage } from './verses';

@NgModule({
  declarations: [
    VersesPage,
  ],
  imports: [
    IonicPageModule.forChild(VersesPage),
  ],
})
export class VersesPageModule {}
