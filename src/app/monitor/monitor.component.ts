import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { NagiosService } from '../shared/models/nagiosService.model';
import { MonitorElement} from '../shared/models/monitorElement.model';
import { NagiosServiceResult } from '../shared/models/nagiosServiceResult.model';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  nagiosServices: NagiosService[] = [];
  monitorElements: MonitorElement[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNagiosServices()
    .subscribe(
      data => {
        this.nagiosServices = data;
      },
      err => console.log(err),
      () => {
        //this.hitServices();
      }
    );

  }

  hitServices() {
    let context = this;
    context.monitorElements.length = 0;

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
             serviceName: ns.name,
             serviceURL: ns.url,
             resultCode: result.resultCode,
             resultMessage: result.resultMessage
           };
           context.monitorElements.push(elem);
         }

      );
    });
  }

}
