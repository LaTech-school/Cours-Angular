import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  firstname:string = "Bob";

  // myObject= {
  //   firstname: "Bruce",
  //   lastname: "WAYNE",
  // };


  itemName:string;
  itemQty:number;

  items:any = [];

  add() {

    // Ajout des données dans la liste
    this.items.push({
      name: this.itemName,
      qty: this.itemQty
    });

    // Efface les champs
    this.itemName = null;
    this.itemQty = null;

  }
}
