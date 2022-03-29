import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesFormsDemoComponent } from './templates-forms-demo.component';

describe('TemplatesFormsDemoComponent', () => {
  let component: TemplatesFormsDemoComponent;
  let fixture: ComponentFixture<TemplatesFormsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesFormsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesFormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
