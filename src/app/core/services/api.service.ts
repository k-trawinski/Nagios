import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Team } from '../../shared/models/team.model';
import { NagiosService } from '../../shared/models/nagiosService.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl: string = 'http://localhost:3000/';
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  // teams

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + 'teams');
  }

  addTeam(team: Team): Observable<Team> {
    console.log(team);
    return this.http.post<Team>(this.baseUrl + 'teams', team, this.httpOptions);
  }


  // Nagios services

  getNagiosServices(): Observable<NagiosService[]> {
    return this.http.get<NagiosService[]>('http://localhost:3000/nagiosServices');
  }
}
