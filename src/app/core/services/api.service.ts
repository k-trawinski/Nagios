import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Team } from '../../shared/models/team.model';
import { NagiosService } from '../../shared/models/nagiosService.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:3000/teams');
  }

  getNagiosServices(): Observable<NagiosService[]> {
    return this.http.get<NagiosService[]>('http://localhost:3000/nagiosServices');
  }
}
