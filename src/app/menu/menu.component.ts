import { Component, OnInit } from '@angular/core';
import { MenuItem}  from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: null
      },
      {
        label: 'URLs',
        items: null
      },
      {
        label: 'Charts',
        items: null
      }
    ];

  }

}
