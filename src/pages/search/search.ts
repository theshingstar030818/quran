import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchWord: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchWord = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchWordButtonPressed()  {
    // search the word (call api) and then 
    // go to another page with the list
    // to show the occurence of the word
    this.searchWord = "";
  }

}
