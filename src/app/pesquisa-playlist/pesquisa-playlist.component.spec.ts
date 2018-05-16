import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaPlaylistComponent } from './pesquisa-playlist.component';

describe('PesquisaPlaylistComponent', () => {
  let component: PesquisaPlaylistComponent;
  let fixture: ComponentFixture<PesquisaPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
