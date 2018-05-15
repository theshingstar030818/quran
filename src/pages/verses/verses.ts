import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerseProvider } from '../../providers/verse/verse';

/**
 * Generated class for the VersesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verses',
  templateUrl: 'verses.html',
})
export class VersesPage {

  chapterId: number;
  verses: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public verseProvider: VerseProvider
  ){
    this.chapterId = navParams.get('chapterId');
    this.verses = [];
  }
  
  ionViewDidLoad() {
    debugger;
    
    this.verseProvider.getAllVerses(this.chapterId)
    .then((data) => {
      this.verses = data['verses'];
      console.log("the verse promise ", this.verses);
      console.log(data);
    }), (error) => { 
      console.error(error);
    }
    
  }


}
