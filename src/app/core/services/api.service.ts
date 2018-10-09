import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from '../../shared/models/team.model';
import { NagiosService } from '../../shared/models/nagiosService.model';
import { Observable } from 'rxjs';

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
    //console.log(team);
    return this.http.post<Team>(this.baseUrl + 'teams', team, this.httpOptions);
  }

  updateTeam(team: Team): Observable<Team> {
    //console.log(team);
    return this.http.put<Team>(this.baseUrl + 'teams/' + team.id, team, this.httpOptions);
  }


  // Nagios services

  getNagiosServices(): Observable<NagiosService[]> {
    return this.http.get<NagiosService[]>(this.baseUrl + 'nagiosServices');
  }

  addNagiosService(nagiosService: NagiosService): Observable<NagiosService> {
    console.log(nagiosService);
    return this.http.post<NagiosService>(this.baseUrl + 'nagiosServices', nagiosService, this.httpOptions);
  }

  updateNagiosService(nagiosService: NagiosService): Observable<NagiosService> {
    console.log(nagiosService);
    return this.http.put<NagiosService>(this.baseUrl + 'nagiosServices/' + nagiosService.id, nagiosService, this.httpOptions);
  }

}
