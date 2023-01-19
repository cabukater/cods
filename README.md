# cods

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import { By } from '@angular/platform-browser';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct text in the banner', () => {
    // find the h2 element
    const h2 = fixture.debugElement.query(By.css('h2'));
    // check if the text is correct
    expect(h2.nativeElement.textContent).toBe('Sua dfddfd e cdfsds');
    // find the p element
    const p = fixture.debugElement.query(By.css('p'));
    // check if the text is correct
    expect(p.nativeElement.textContent).toBe('jhsgafjhgsfgjsgfjsgfjs');
  });

  it('should call showModal function on button click', () => {
    // spy on the showModal method
    spyOn(component, 'showModal');
    // find the button element
    const button = fixture.debugElement.query(By.css('button'));
    // simulate button click
    button.triggerEventHandler('click', {});
    // check if the showModal method is called
    expect(component.showModal).toHaveBeenCalled();
  });
});
