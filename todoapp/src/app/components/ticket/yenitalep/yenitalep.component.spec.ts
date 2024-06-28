import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YenitalepComponent } from './yenitalep.component';

describe('YenitalepComponent', () => {
  let component: YenitalepComponent;
  let fixture: ComponentFixture<YenitalepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YenitalepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YenitalepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
