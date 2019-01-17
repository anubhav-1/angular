import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../getdata.service';
import { bind } from '@angular/core/src/render3';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  fullData: any;
  bid= [];
  ask= [];
  complete=[];

  constructor(private _getData: GetdataService) { }

  ngOnInit() {

    this._getData.givedata().subscribe(data => {
      this.fullData = data;
      this.bid=this.fullData.buy;
      this.ask=this.fullData.sell;
      for(let i=0; i<this.bid.length; i++){
        this.complete.push({"bidVolume":this.bid[i].qty,
                           "bid":this.bid[i].price,
                            "askVolume":this.ask[i].qty,
                             "ask":this.ask[i].price});

      }

    });
  }

}
