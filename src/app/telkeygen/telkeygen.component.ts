import { Component, OnInit } from '@angular/core';

import { TelkeygenService } from './../telkeygen.service'

@Component({
  selector: 'app-telkeygen',
  templateUrl: './telkeygen.component.html',
  styleUrls: ['./telkeygen.component.css']
})
export class TelkeygenComponent implements OnInit {

  public phoneNumbers: any = { count: 60, data: [] }
  config: any;

  constructor(public telkeygenService: TelkeygenService) { }

  ngOnInit(): void {

    let input = [2, 4, 0, 3, 8, 6, 6, 1, 0, 6]

    this.phoneNumbers.data = this.telkeygenService.getCombination(input);

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.phoneNumbers.count
    };

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
