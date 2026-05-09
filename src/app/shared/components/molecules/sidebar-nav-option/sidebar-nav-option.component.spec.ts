import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavOptionComponent } from './sidebar-nav-option.component';

describe('SidebarNavOptionComponent', () => {
  let component: SidebarNavOptionComponent;
  let fixture: ComponentFixture<SidebarNavOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarNavOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
