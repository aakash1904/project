import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalphotosComponent } from './finalphotos.component';

describe('FinalphotosComponent', () => {
  let component: FinalphotosComponent;
  let fixture: ComponentFixture<FinalphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
