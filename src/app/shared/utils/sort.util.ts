import {Sort} from "../../types/enums/sort.enum";

export const sortArrayByProperty = <T>(items: Array<T>, property: keyof T, order: Sort = Sort.Asc): Array<T> => {
  return [...items].sort((a, b) => {
    if (a[property] < b[property]) {
      return order === Sort.Asc ? 1 : -1;
    }

    if (a[property] > b[property]) {
      return order === Sort.Asc ? -1 : 1;
    }

    return 0;
  })
}
