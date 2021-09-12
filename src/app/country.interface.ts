export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: string[];
  callingCodes: string[]
  capital: string;
  cioc: string;
  currencies: Array<{code: string; name: string; symbol: string;}>
  demonym: string;
  flag: string;
  gini: number;
  languages: Array<{iso639_1: string,
    iso639_2:  string,
    name:  string,
    nativeName:  string,
  }>
  latlng:number;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  subregion: string;
  timezones: Array<string>
  topLevelDomain: Array<string>
  translations: Record<string, string>
}
