import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliMovimentiComponent } from './dettagli-movimenti.component';

describe('DettagliMovimentiComponent', () => {
  let component: DettagliMovimentiComponent;
  let fixture: ComponentFixture<DettagliMovimentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliMovimentiComponent]
    });
    fixture = TestBed.createComponent(DettagliMovimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
