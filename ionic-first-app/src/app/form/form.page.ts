import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public person= {
    name:null,
    firstName: null,
    age: null,
    job:null,
    competences: [],
  };

  constructor() { }

  ngOnInit() {
  }

}
