import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderItemAsideComponent } from './folder-item-aside.component';

describe('FolderItemAsideComponent', () => {
  let component: FolderItemAsideComponent;
  let fixture: ComponentFixture<FolderItemAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderItemAsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolderItemAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
