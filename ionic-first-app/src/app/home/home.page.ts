// importation des composants pour l'affichage et la gestion de l'ecran

import { Component } from '@angular/core';

// decorateur
//permet d'indiquer le role de l'élément suivant
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = 'Reda';
  public preferedColor='warning';
  public isListHidden= true;
  public countryList=[
    {name:'france', maincity:'paris', flag:'french-flag.jpg',population: 67},
    {name:'Irlande', maincity:'Dublin', flag:'irlandeflag.jpg',population:5},
    {name:'allemagne', maincity:'berlin', flag:'deutchflag.jpg',population:85}
  ];
  
  constructor() {}
  public hideTheList(){
    this.isListHidden=true;
  }
  
  public showHideList(){
    if(this.isListHidden){
      this.isListHidden= false;
    }else {
      this.isListHidden= true;
      // 2 eme methode
      // this.isListHidden=!this.isListHidden;
    }
    
  }
 

}
