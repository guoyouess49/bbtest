import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryMaxAvailableAssetComponent } from './query-max-available-asset.component';

describe('QueryMaxAvailableAssetComponent', () => {
  let component: QueryMaxAvailableAssetComponent;
  let fixture: ComponentFixture<QueryMaxAvailableAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryMaxAvailableAssetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryMaxAvailableAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
