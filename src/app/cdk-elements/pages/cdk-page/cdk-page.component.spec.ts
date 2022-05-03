import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPageComponent } from './cdk-page.component';

describe('CdkPageComponent', () => {
  let component: CdkPageComponent;
  let fixture: ComponentFixture<CdkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
