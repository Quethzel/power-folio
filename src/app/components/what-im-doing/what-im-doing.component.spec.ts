import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatImDoingComponent } from './what-im-doing.component';

describe('WhatImDoingComponent', () => {
  let component: WhatImDoingComponent;
  let fixture: ComponentFixture<WhatImDoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatImDoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatImDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
