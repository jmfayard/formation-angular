import {TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {SortProductsPipe} from './pipes/sort-products.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';

export async function configureTestBed() {
  await TestBed.configureTestingModule({
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
      AppComponent, SortProductsPipe
    ],
    imports: [HttpClientTestingModule]
  }).compileComponents();

}
