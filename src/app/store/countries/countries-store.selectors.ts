import {createFeatureSelector, createSelector, MemoizedSelector, select} from "@ngrx/store";
import {CountriesStore} from "./countries-store.state";
import {countriesStoreFeatureKey} from "./countries-store.reducer";
import {Country} from "../../country.interface";

export const selectCountriesStoreState: MemoizedSelector<object,
  CountriesStore> = createFeatureSelector<CountriesStore>(countriesStoreFeatureKey)

export const getList = (state: CountriesStore): Array<Country> => state.countriesList.list;

export const selectList: MemoizedSelector<object, Array<Country>> = createSelector(selectCountriesStoreState, getList)
