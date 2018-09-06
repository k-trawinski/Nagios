import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { NagiosServicesListComponent } from './nagios-services-list/nagios-services-list.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
    { path: 'teams', component: TeamsListComponent },
    { path: 'services', component: NagiosServicesListComponent },
    { path: 'monitor', component: MonitorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [ TeamsListComponent, NagiosServicesListComponent, MonitorComponent ];