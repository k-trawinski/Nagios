import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { NagiosService } from '../shared/models/nagiosService.model';

import { InputTextModule } from 'primeng/inputtext';

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

  addNagiosService(serviceName: string, serviceURL: string, serviceDesc: string) {

    const maxId = Math.max.apply(Math, this.nagiosServices.map(function(ns) { return ns.Id; }));

    const nagiosService: NagiosService = {
      id: maxId  +1,
      name: serviceName,
      url: serviceURL,
      description: serviceDesc
    };

    this.apiService.addNagiosService(nagiosService).subscribe(
      data => this.nagiosServices.push(data)
    );
  }

  updateNagiosService(nagiosService: NagiosService) {

    this.apiService.updateNagiosService(nagiosService).subscribe(
      data => {
        let idx = this.nagiosServices.findIndex(ns => ns.id == data.id);
        this.nagiosServices[idx] = data;
      }
    );
  }

  onEditComplete(event)
  {
    //console.log('onEditComplete: ' + JSON.stringify(event));
    this.updateNagiosService(event.data);
  }

}
