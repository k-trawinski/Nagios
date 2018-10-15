import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Team } from '../shared/models/team.model';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
  providers: [ConfirmationService]
})
export class TeamsListComponent implements OnInit {

  public teams: Team[] = [];

  constructor(
    private apiService: ApiService, 
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe(
      data => this.teams = data);
  }

  addTeam(teamName: string, teamDesc: string) {

    const maxId = Math.max.apply(Math, this.teams.map(function(t) { return t.id; }));

    const team: Team = {
      id: maxId + 1,
      name: teamName,
      description: teamDesc
    };

    this.apiService.addTeam(team).subscribe(
       data => this.teams.push(data)
    );
  }

  updateTeam(team: Team) {

    this.apiService.updateTeam(team).subscribe(
      data => {
        const idx: number = this.teams.findIndex(t => t.id === data.id);
        if (idx > -1) {
          this.teams[idx] = data;
        }
      }
    );
  }

  deleteTeam(teamId: number) {
    this.apiService.deleteTeam(teamId).subscribe(
      data => {
        const idx: number = this.teams.findIndex(t => t.id === teamId);
        if (idx > -1) {
            this.teams.splice(idx, 1);
        }
      }
    );

  }

  onEditComplete(event) {
    // console.log('onEditcomplete: ' + JSON.stringify(event));
    this.updateTeam(event.data);
  }

  confirmDelete(temaId: number) {
    this.confirmationService.confirm({
      message: 'Czy chcesz usunąć wybrany zespoł?',
      header: 'Potwierdzenie usuwania',
      icon: 'pi pi-info-circle',
      accept: () => this.deleteTeam(temaId)
      //reject: () => {}
    });
  }
}
