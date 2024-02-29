import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterWrapperComponent } from './router-wrapper.component';

describe('RouterWrapperComponent', () => {
  let component: RouterWrapperComponent;
  let fixture: ComponentFixture<RouterWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
