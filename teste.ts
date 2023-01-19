Para testar o código acima usando Jest com cobertura de 95%, você precisaria escrever testes unitários para o componente AppComponent e para o componente ModalBannerComponent.

Aqui está um exemplo de como os testes unitários para o AppComponent poderiam ser escritos usando Jest:

Copy code
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ModalBannerComponent } from './modal-banner/modal-banner.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dialog: MatDialog;
  let overlay: Overlay;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule, OverlayModule ],
      declarations: [ AppComponent, ModalBannerComponent ],
      providers: [ MatDialog, Overlay ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dialog = TestBed.get(MatDialog);
    overlay = TestBed.get(Overlay);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal on button click', () => {
    spyOn(dialog, 'open').and.callThrough();
    spyOn(overlay, 'scrollStrategy').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalledWith(ModalBannerComponent, {
      width: '75%',
      panelClass: 'modal-banner/modal-banner.component',
      height: '80%',
      disableClose: true,
      hasBackdrop: true,
      ariaLabel: 'Modal de notícias',
      scrollStrategy: overlay.scrollStrategy
    });
  });
});
