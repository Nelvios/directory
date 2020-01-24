import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSidebarComponent } from './button-sidebar.component';

describe('ButtonSidebarComponent', () => {
  let component: ButtonSidebarComponent;
  let fixture: ComponentFixture<ButtonSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
