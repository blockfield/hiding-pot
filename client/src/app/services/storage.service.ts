import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: LocalStorageService,
  ) { }

  set(index: string, value: any): void {
    this.storage.set(index, value)
  }

  delete(index: string): void {
    this.storage.remove(index)
  }

  get<T>(index: string): T {
    return this.storage.get(index) as T
  }
}
