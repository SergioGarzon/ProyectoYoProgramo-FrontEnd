import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosCursadosComponent } from './estudios-cursados.component';

describe('EstudiosCursadosComponent', () => {
  let component: EstudiosCursadosComponent;
  let fixture: ComponentFixture<EstudiosCursadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosCursadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosCursadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
