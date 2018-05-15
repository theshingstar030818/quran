import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChaptersProvider } from '../../providers/chapters/chapters';

/**
 * Generated class for the ChaptersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapters',
  templateUrl: 'chapters.html',
})
export class ChaptersPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public chaptersProvider: ChaptersProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChaptersPage');
  }

  openChapter(chapterId: number) {
    debugger;
    this.navCtrl.push('VersesPage', {
      chapterId: chapterId
    });
  }

}
