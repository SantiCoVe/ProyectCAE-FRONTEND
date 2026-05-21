import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDetailModalComponent } from './file-detail-modal.component';

describe('FileDetailModalComponent', () => {
  let component: FileDetailModalComponent;
  let fixture: ComponentFixture<FileDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDetailModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
