import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NieznalezionyComponent } from './nieznaleziony.component';

describe('NieznalezionyComponent', () => {
  let component: NieznalezionyComponent;
  let fixture: ComponentFixture<NieznalezionyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NieznalezionyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NieznalezionyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
