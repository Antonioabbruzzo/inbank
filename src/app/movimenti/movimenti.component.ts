import { Component, OnInit } from '@angular/core';
import { MoveService } from '../services/move.service';

@Component({
  selector: 'app-movimenti',
  templateUrl: './movimenti.component.html',
  styleUrls: ['./movimenti.component.scss']
})
export class MovimentiComponent implements OnInit {

  movimenti: any = [];
  movimentoSelezionato: any;
  constructor(private movimentiService: MoveService) {

  }

  ngOnInit(): void {
    this.getAllMoves();
  }

  getAllMoves() {
    this.movimentiService.getAll().subscribe({
      next: (list) => {
        this.movimenti = list;
        console.log(this.movimenti);
      }
    });
  }

  visualdetail(selectAmount: number) {
    this.movimentoSelezionato = this.movimenti.find((m: any) => m.amount === selectAmount);
    console.log(this.movimentoSelezionato);

  }

}
