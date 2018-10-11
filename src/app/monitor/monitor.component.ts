import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { NagiosService } from '../shared/models/nagiosService.model';
import { MonitorElement} from '../shared/models/monitorElement.model';
import { NagiosServiceResult } from '../shared/models/nagiosServiceResult.model';
import { Team } from '../shared/models/team.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  public nagiosServices: NagiosService[] = [];
  public monitorElements: MonitorElement[] = [];
  public teams: Team[] = [];
  public selectedTeam: Team;
  public hitCount: number = 0;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe(
      (data) => this.teams = data,
      (err) => console.log(err),
      () => {
        this.apiService.getNagiosServices().subscribe(
          (data) => this.nagiosServices = data,
          (err) => console.log(err),
          () => {
            const source = interval(5000);
            const subscribe = source.subscribe(val => {
              this.hitCount++;
              this.hitServices()
            });
          }
        )
      }
    )
  }

  hitServices() {
    let context = this;
    //context.monitorElements.length = 0;

    this.nagiosServices.forEach(function(ns: NagiosService) {
      let result: NagiosServiceResult = null;

      context.apiService.getNagiosServiceResult(ns.url).subscribe(
        data => {
          result = data;
        },
        err => console.log(err),
        () => {
         const elem: MonitorElement = {
            id: ns.id,
            teamId: ns.teamId,
            serviceName: ns.name,
            serviceURL: ns.url,
            resultCode: result.resultCode,
            resultMessage: result.resultMessage
          };

          let idx = context.monitorElements.findIndex(me => me.id == ns.id);
          if (idx > -1)
            context.monitorElements[idx] = elem;
          else
            context.monitorElements.push(elem);
        }

      );
    });
  }

  onComboChange() {
    console.log(this.selectedTeam);
  }

  TeamId2Name(id: number): string
  {
    const t: Team = this.teams.find(t => t.id == id);
    return t.name;
  }

}
