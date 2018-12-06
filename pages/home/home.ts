import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BreweryService, Breweries } from '../../app/brewery.service';
import { Observable } from 'rxjs/observable';
import { BreweryEntryPage } from '../breweryEntry/breweryentry';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  breweries:Observable<Breweries[]>;

  constructor(public navCtrl: NavController, public brewery:BreweryService) {
    this.breweries = brewery.getBreweries();

  }
  showBreweryPage(brewery:any){
    this.navCtrl.push(BreweryEntryPage, {brewery})
  }


}
