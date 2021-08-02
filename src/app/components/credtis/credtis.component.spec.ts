import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredtisComponent } from './credtis.component';

describe('CredtisComponent', () => {
  let component: CredtisComponent;
  let fixture: ComponentFixture<CredtisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredtisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
