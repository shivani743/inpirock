import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set(
    key: string,
    value: object | string | number | Date | Array<any> | boolean
  ) {
    localStorage.setItem(this.encodeKey(key), this.encodeValue(value));
  }
  public get(
    key: string
  ): object | string | number | Date | Array<any> | boolean {
    const localValue = localStorage.getItem(this.encodeKey(key));
    if (!localValue) {
      return "";
    }
    return this.decodeValue(localValue);
  }
  public clearAll() {
    localStorage.clear();
  }
  public remove(key:string) {
    localStorage.removeItem(this.encodeKey(key));
  }

  private encode(value: string) {
    return btoa(encodeURIComponent(value));
  }
  private decode(value: string) {
    return decodeURIComponent(atob(value));
  }
  private encodeKey(key: string) {
    return this.encode(key.toLowerCase());
  }
  private encodeValue(
    value: object | string | number | Date | Array<any> | boolean
  ) {
    return this.encode(JSON.stringify(value));
  }
  private decodeValue(
    value: string
  ): object | string | number | Date | Array<any> | boolean {
    const decodedValue = this.decode(value);
    return JSON.parse(decodedValue === "undefined" ? "null" : decodedValue);
  }
}
