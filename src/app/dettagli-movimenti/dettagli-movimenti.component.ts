import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dettagli-movimenti',
  templateUrl: './dettagli-movimenti.component.html',
  styleUrls: ['./dettagli-movimenti.component.scss']
})
export class DettagliMovimentiComponent {
  @Input() selezionato: any;
}
