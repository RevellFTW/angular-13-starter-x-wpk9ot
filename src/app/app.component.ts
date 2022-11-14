import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Digimon } from './models/digimon';
import { DigimonService } from './service/digimon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly digimon$: Observable<Digimon[]>;

  constructor(private readonly digimonServce: DigimonService) {
    this.digimon$ = this.digimonServce.digimonList$;
    //filter((query: string) =>  query && query.length > 1 ? query.length > 1 : "")
  }
}
