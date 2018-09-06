import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
    { path: 'teams', component: TeamsListComponent },
    { path: 'services', component: ServicesListComponent },
    { path: 'monitor', component: MonitorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [ TeamsListComponent, ServicesListComponent, MonitorComponent ];