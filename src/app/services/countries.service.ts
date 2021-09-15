import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "../country.interface";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

const routes = {
  get: () => `https://restcountries.eu/rest/v2/all`
}

@Injectable()
export class CountriesService {

  public getAll(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(routes.get()).pipe(
      map(countries => countries.map((c, index) => ({...c, id: index + 1})))
    );
  }

  constructor(
    private readonly http: HttpClient
  ) {
  }
}
