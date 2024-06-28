import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaleptakipComponent } from './taleptakip.component';

describe('TaleptakipComponent', () => {
  let component: TaleptakipComponent;
  let fixture: ComponentFixture<TaleptakipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaleptakipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaleptakipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
