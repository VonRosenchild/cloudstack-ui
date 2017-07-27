import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';


@Injectable()
export class SessionStorageService extends StorageService {
  constructor() {
    super();
  }

  protected init() {
    this.isStorage = sessionStorage;
    super.init();
  }
}