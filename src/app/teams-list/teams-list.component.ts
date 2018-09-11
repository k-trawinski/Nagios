import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Team } from '../shared/models/team.model';

import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: Team[] = [];
  //cols: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe(
      data => this.teams = data);
  }

  addTeam(teamName: string) {
    //console.log(teamName);

    const maxId = Math.max.apply(Math, this.teams.map(function(t) { return t.id; }))


    const team: Team = {
      id: maxId + 1,
      name: teamName,
      description: teamName
    }

    this.apiService.addTeam(team).subscribe(
       data => this.teams.push(data)
    );
  }

  updateTeam(team: Team) {

    this.apiService.updateTeam(team).subscribe(
      let idx = this.teams.findIndex(t => t.id === team.id);
    )
  }

  onEditComplete(event)
  {
    console.log('onEditcomplete: ' + JSON.stringify(event));
  }
}
