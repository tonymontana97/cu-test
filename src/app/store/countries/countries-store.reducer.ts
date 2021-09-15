import {CountriesStore, initialCountriesStore} from "./countries-store.state";
import * as CountriesStoreActions from "./countries-store.actions";
import {createReducer, on} from "@ngrx/store";
import {sortArrayByProperty} from "../../shared/utils";
import {moveItemInArray} from "@angular/cdk/drag-drop";

export const countriesStoreFeatureKey = 'countriesStore';

export const reducer = createReducer(
  initialCountriesStore,
  on(CountriesStoreActions.getCountries, (state: CountriesStore): CountriesStore => ({
    ...state, countriesList: {
      ...state.countriesList,
      list: [],
      isLoading: true
    }
  })),
  on(
    CountriesStoreActions.getCountriesSuccess
    , (state: CountriesStore, {countries}): CountriesStore => ({
      ...state, countriesList: {
        ...state.countriesList,
        list: countries,
        isLoading: false
      }
    })),
  on(
    CountriesStoreActions.sortCountriesByColumn
    , (state: CountriesStore, {column, sort}): CountriesStore => ({
      ...state, countriesList: {
        ...state.countriesList,
        list: sortArrayByProperty(state.countriesList.list, column, sort),
        isLoading: false
      }
    })),
)
