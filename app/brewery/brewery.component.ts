import { Component, OnInit } from '@angular/core';
import { BreweryService, Breweries } from '../../app/brewery.service';
import { Observable } from 'rxjs/observable';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from 'ionic-angular';
import { BreweryEntryPage } from '../../pages/breweryEntry/breweryentry';



@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

    breweries:Observable<Breweries[]>;

  constructor(public brewery:BreweryService, public dom:DomSanitizer, public nav: NavController) { }

  checkInput(name:HTMLInputElement, state:HTMLInputElement){
    if(name.value != ""){
    this.breweries = this.brewery.getNameBreweries(name.value);
    }
    if(state.value != ""){
      this.breweries = this.brewery.getStateBreweries(state.value);
    }
    if(state.value == "" && name.value ==""){
      this.breweries = this.brewery.getBreweries();
    }
    name.value = "";
    state.value = "";
  }
  showBreweryPage(brewery:any){
    this.nav.push(BreweryEntryPage, {brewery})
  }


  getMapUrl(brewery:any){
  return this.dom.bypassSecurityTrustHtml(`<iframe 
  width="300" 
  height="170" 
  frameborder="0" 
  scrolling="no" 
  marginheight="0" 
  marginwidth="0" 
  src="https://maps.google.com/maps?q=${brewery.latitude},${brewery.longitude}&hl=es;z=14&amp;output=embed"
 >
 </iframe>`)

  }
  ngOnInit() {
  }

}
