import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoServiceTs } from './nuevo.service.ts';

describe('NuevoServiceTs', () => {
  let component: NuevoServiceTs;
  let fixture: ComponentFixture<NuevoServiceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoServiceTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoServiceTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
