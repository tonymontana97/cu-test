import {Country} from "../../country.interface";

export interface CountriesStore {
  countriesList: {
    isLoading: boolean,
    list: Array<Country>,
  }
}

export const initialCountriesStore: CountriesStore = {
  countriesList: {
    isLoading: false,
    list: [],
  }
}
