import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSettingsComponent } from './posts-settings.component';

describe('PostsSettingsComponent', () => {
  let component: PostsSettingsComponent;
  let fixture: ComponentFixture<PostsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
