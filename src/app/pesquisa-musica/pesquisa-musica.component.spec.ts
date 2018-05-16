import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaMusicaComponent } from './pesquisa-musica.component';

describe('PesquisaMusicaComponent', () => {
  let component: PesquisaMusicaComponent;
  let fixture: ComponentFixture<PesquisaMusicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaMusicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
