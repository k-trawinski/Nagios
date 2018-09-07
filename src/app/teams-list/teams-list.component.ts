import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  public teams = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe(
      data => this.teams = data);
  }

}
