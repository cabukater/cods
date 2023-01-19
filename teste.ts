import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { ModalBannerComponent } from './modal-banner.component';

describe('ModalBannerComponent', () => {
  let component: ModalBannerComponent;
  let fixture: ComponentFixture<ModalBannerComponent>;
  let dialog: MatDialog;
  let overlay: Overlay;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBannerComponent],
      providers: [
        { provide: MatDialog, useValue: jest.fn() },
        { provide: Overlay, useValue: jest.fn() }
      ]
    });

    fixture = TestBed.createComponent(ModalBannerComponent);
    component = fixture.componentInstance;
    dialog = TestBed.get(MatDialog);
    overlay = TestBed.get(Overlay);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dialog and overlay properties correctly', () => {
    expect(component.dialog).toEqual(dialog);
    expect(component.overlay).toEqual(overlay);
  });

  it('should call dialog.open with correct options', () => {
    const spy = jest.spyOn(dialog, 'open');
    component.showModal();
    expect(spy).toHaveBeenCalledWith(ModalBannerComponent, {
        width: '75%',
        panelClass: './../news-modal/news-modal.component',
        height: '80%',
        disableClose: true,
        hasBackdrop: true,
        ariaLabel: 'Modal de notícias',
        scrollStrategy: overlay.scrollStrategies.noop()
    });
  });
});