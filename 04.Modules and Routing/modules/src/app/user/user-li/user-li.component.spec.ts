import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiComponent } from './user-li.component';

describe('UserLiComponent', () => {
  let component: UserLiComponent;
  let fixture: ComponentFixture<UserLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
