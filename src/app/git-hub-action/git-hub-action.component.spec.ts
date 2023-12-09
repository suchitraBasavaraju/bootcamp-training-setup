import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubActionComponent } from './git-hub-action.component';

describe('GitHubActionComponent', () => {
  let component: GitHubActionComponent;
  let fixture: ComponentFixture<GitHubActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitHubActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
