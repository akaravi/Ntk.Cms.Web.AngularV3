import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsNetwork {

  model: any;
  user$ = new BehaviorSubject<any>(null);
  castUser = this.user$.asObservable();

  constructor() {
  }

  editUser(newUser): void {
    this.user$.next(newUser);
  }
}
