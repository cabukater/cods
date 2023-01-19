import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { ModalBannerComponent } from './modal-banner/modal-banner.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let overlaySpy: jasmine.SpyObj<Overlay>;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    overlaySpy = jasmine.createSpyObj('Overlay', ['scrollStrategy']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: Overlay, useValue: overlaySpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should open the modal when the button is clicked', () => {
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(dialogSpy.open).toHaveBeenCalledWith(
      ModalBannerComponent,
      {
        width: '75%',
        panelClass: 'modal-banner/modal-banner.component',
        height: '80%',
        disableClose: true,
        hasBackdrop: true,
        ariaLabel: 'Modal de notícias',
        scrollStrategy: overlaySpy.scrollStrategy
      }
    );
  });
});

