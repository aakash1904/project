import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseralbumsComponent } from './useralbums.component';

describe('UseralbumsComponent', () => {
  let component: UseralbumsComponent;
  let fixture: ComponentFixture<UseralbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseralbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseralbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
