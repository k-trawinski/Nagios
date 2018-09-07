import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './nagios-services-list.component.html',
  styleUrls: ['./nagios-services-list.component.css']
})
export class NagiosServicesListComponent implements OnInit {

  public nagiosServices = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNagiosServices().subscribe(
      data => this.nagiosServices = data
    );
  }

}
