import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedisUtilComponent } from './redis-util.component';

describe('RedisUtilComponent', () => {
  let component: RedisUtilComponent;
  let fixture: ComponentFixture<RedisUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedisUtilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedisUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
