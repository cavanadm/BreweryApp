import { NavParams,  NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector:'page-breweryentry',
  template:`
      <ion-header>
  <ion-navbar>
    <ion-title>Add Topping</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
<h2>{{brewery.name}}</h2>
<p>{{brewery.brewery_type}}</p>
<p>{{brewery.street}}</p>
<p>{{brewery.city}}</p>
<p>{{brewery.state}}</p>
<a>{{brewery.website}}</a>

<button ion-button full (click)="done()"> Go Back</button>
</ion-content>

  `
})

export class BreweryEntryPage{
  brewery;
  constructor(private params:NavParams, private navCtrl: NavController){
    this.brewery = params.get('brewery');

  }

  done(){
    this.navCtrl.pop();
  }
}