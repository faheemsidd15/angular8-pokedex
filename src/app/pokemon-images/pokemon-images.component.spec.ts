import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonImagesComponent } from './pokemon-images.component';

describe('PokemonImagesComponent', () => {
  let component: PokemonImagesComponent;
  let fixture: ComponentFixture<PokemonImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
