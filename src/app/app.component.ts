import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppStore} from "./store/app-store.inteface";
import {CountriesStoreActions, CountriesStoreSelectors} from "./store/countries";
import {Observable} from "rxjs";
import {Country} from "./country.interface";
import {Sort} from "./types/enums/sort.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clickup-test';
  public countries$: Observable<Array<Country>>;
  public displayColumns: Array<{ label: string; key: keyof Country }>;

  constructor(
    private readonly store$: Store<IAppStore>
  ) {
    this.displayColumns = [
      {label: 'Name', key: 'name'},
      {label: 'Area', key: 'area'},
      {label: 'Population', key: 'population'},
    ]
    this.getCountries();
    this.countries$ = this.store$.select(CountriesStoreSelectors.selectList);
  }

  public getCountries(): void {
    this.store$.dispatch(CountriesStoreActions.getCountries());
  }

  public updateSorting({sortBy, sort}: {sortBy: keyof Country, sort: Sort}): void {
    this.store$.dispatch(CountriesStoreActions.sortCountriesByColumn({
      column: sortBy,
      sort
    }))
  }
}
