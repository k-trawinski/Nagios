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
      { label: 'Home' , routerLink: ['/']},
      { label: 'Monitor', routerLink: ['/monitor'] },
      {
        label: 'Configuration',
        items: [
          { label: 'Teams', routerLink: ['/teams'] },
          { label: 'Services', routerLink: ['/services'] }
        ]
      }
    ];

  }

}
