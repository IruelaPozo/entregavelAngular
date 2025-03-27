import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsandoComponentComponent } from './usando-component.component';

describe('UsandoComponentComponent', () => {
  let component: UsandoComponentComponent;
  let fixture: ComponentFixture<UsandoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsandoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsandoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
