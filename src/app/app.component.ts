import {ChangeDetectorRef, Component} from '@angular/core';
import {CdkDragSortEvent, moveItemInArray} from "@angular/cdk/drag-drop";
import {HttpClient} from "@angular/common/http";
import {Country} from "./country.interface";
import {BehaviorSubject, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clickup-test';
  public displayedColumns: string[];
  public sortColumn: string;
  public countries$: BehaviorSubject<Country[]>;

  constructor(
    public readonly http: HttpClient,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.countries$ = new BehaviorSubject<Country[]>([]);
    this.displayedColumns = [
      'name', 'population', 'area'
    ]
    this.sortColumn = '';
    this.getCountries();
  }

  changeColumnSort($event: CdkDragSortEvent<any>) {
    moveItemInArray(this.displayedColumns, $event.previousIndex, $event.currentIndex);
  }

  setSorting(columnName: string): void {
    this.sortColumn = columnName;
  }

  changeSort($event: Array<any>) {
    console.log('changed', $event);
    this.countries$.next($event)
    this.changeDetectorRefs.detectChanges();

  }

  getCountries(): void {
    this.http.get<Array<Country>>('https://restcountries.eu/rest/v2/all').subscribe((res) => {
      this.countries$.next(res)
    })
  }
}
