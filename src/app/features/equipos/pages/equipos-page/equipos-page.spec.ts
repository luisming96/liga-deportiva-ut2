import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposPage } from './equipos-page';

describe('EquiposPage', () => {
  let component: EquiposPage;
  let fixture: ComponentFixture<EquiposPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquiposPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
