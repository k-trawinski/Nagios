import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { NagiosService } from '../shared/models/nagiosService.model';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'app-services-list',
  templateUrl: './nagios-services-list.component.html',
  styleUrls: ['./nagios-services-list.component.css']
})
export class NagiosServicesListComponent implements OnInit {

  public nagiosServices: NagiosService[] = [];
  public teams: Team[] = [];
  public selectedTeam: Team;
  public newSelectedTeam: Team;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe(
      (data) => this.teams = data,
      (err) => console.log(err),
      () => {
        this.apiService.getNagiosServices().subscribe(
          (data) => this.nagiosServices = data
        );
      }
    );
  }

  addNagiosService(serviceName: string, teamId: number, serviceURL: string, serviceDesc: string) {

    const maxId = Math.max.apply(Math, this.nagiosServices.map(function(ns) { return ns.id; }));

    const nagiosService: NagiosService = {
      id: maxId  +1,
      teamId: teamId,
      name: serviceName,
      url: serviceURL,
      description: serviceDesc
    };

    console.log(nagiosService);
    // this.apiService.addNagiosService(nagiosService).subscribe(
    //   data => this.nagiosServices.push(data)
    // );
  }

  updateNagiosService(nagiosService: NagiosService) {

    this.apiService.updateNagiosService(nagiosService).subscribe(
      data => {
        let idx = this.nagiosServices.findIndex(ns => ns.id == data.id);
        this.nagiosServices[idx] = data;
      }
    );
  }

  deleteNagiosService(nagiosServiceId: number) {

    this.apiService.deleteNagiosService(nagiosServiceId).subscribe(
      data => {
        let idx = this.nagiosServices.findIndex(ns => ns.id == nagiosServiceId);
        if (idx > -1) {
          this.nagiosServices.splice(idx, 1);
        }
      }
    );

  }

  onEditComplete(event)
  {
    //console.log('onEditComplete: ' + JSON.stringify(event));
    this.updateNagiosService(event.data);
  }

  onComboChange(id: number)
  {
    console.log('row ID: ' + id);
    console.log('team ID: ' + this.selectedTeam.id);
  }

  TeamId2Name(id: number): string
  {
    const t: Team = this.teams.find(t => t.id == id);
    return t.name;
  }

}
