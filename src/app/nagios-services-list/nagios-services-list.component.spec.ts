import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagiosServicesListComponent } from './nagios-services-list.component';

describe('ServicesListComponent', () => {
  let component: NagiosServicesListComponent;
  let fixture: ComponentFixture<NagiosServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagiosServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagiosServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
