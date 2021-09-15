import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as CountriesStoreActions from './countries-store.actions';
import {catchError, map, switchMap} from "rxjs/operators";
import {CountriesService} from "../../services/countries.service";

@Injectable()
export class CountriesStoreEffects {

  getCountriesReq$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CountriesStoreActions.getCountries),
    switchMap(() => this.countriesService.getAll().pipe(
      map(countries => CountriesStoreActions.getCountriesSuccess({countries})),
      catchError((error) => of(CountriesStoreActions.getCountriesFailure({error})))
    ))
  ));

  constructor(
    private readonly countriesService: CountriesService,
    private readonly actions$: Actions
  ) {
  }
}
