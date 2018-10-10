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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNagiosServices().subscribe(
      data => {
        console.log(data);
        this.nagiosServices = data;
      },
      err => console.log(err),
      () => {
        //  w interwale co 15 sek.
        this.hitServices();
      }
    );
  }

  hitServices() {
    this.nagiosServices.forEach(function(ns: NagiosService) {
      console.log(ns);
      let result: NagiosServiceResult = null;

      this.apiService.getNagiosServiceResult(ns.url).subscribe(
        data => {
          console.log('results: ' + data);
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
          this.MonitorElements.push(elem);
        }
      );
    });
  }

}
