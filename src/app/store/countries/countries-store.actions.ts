import {createAction, props} from "@ngrx/store";
import {Country} from "../../country.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {Sort} from "../../types/enums/sort.enum";

export const getCountries = createAction(
  '[CountriesStore] Get countries list'
)

export const getCountriesSuccess = createAction(
  '[CountriesStore] Get countries list success',
  props<{ countries: Array<Country> }>()
);

export const getCountriesFailure = createAction(
  '[CountriesStore] Get countries list failure',
  props<{ error: HttpErrorResponse }>()
);

export const sortCountriesByColumn = createAction(
  '[CountriesStore] Sort countries by column',
  props<{ column: keyof Country, sort: Sort }>()
)

