import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TootipComponent } from './tootip.component';

describe('TootipComponent', () => {
  let component: TootipComponent;
  let fixture: ComponentFixture<TootipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TootipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
