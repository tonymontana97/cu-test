import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {countriesStoreFeatureKey, reducer} from "./countries-store.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CountriesStoreEffects} from "./countries-store.effects";
import {CountriesService} from "../../services/countries.service";

@NgModule({
  imports: [
    StoreModule.forFeature(countriesStoreFeatureKey, reducer),
    EffectsModule.forFeature([CountriesStoreEffects])
  ],
  providers: [
    CountriesService
  ]
})
export class CountriesStoreModule{}
