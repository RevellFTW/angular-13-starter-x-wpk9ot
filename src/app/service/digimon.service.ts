import { Injectable } from '@angular/core';
import { Digimon } from '../models/digimon';
import { switchMap, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  public readonly digimonList$: Observable<Digimon[]>;
  constructor() {
    this.digimonList$ = from(fetch('https://digimon-api.vercel.app')).pipe(
      switchMap((res) => res.json()),
      map((res: Digimon[]) => res.filter((digimon) => digimon.name.length >= 8))
    );
  }
}
