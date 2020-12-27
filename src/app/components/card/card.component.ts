import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { CardSchema } from 'src/app/model/CardSchema';
import { ListSchema } from 'src/app/model/ListSchema';
import { CardStore } from 'src/app/services/CardStore';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: CardSchema;
  @Input() listSchema: ListSchema;
  selectCard : CardSchema;
  cardStore: CardStore;
  displayCard = true;
  displayAddCard = false;
  constructor() { }

  ngOnInit(): void {
  }

  onEnter(value: string) {
    this.selectCard.title = value;
    this.displayCard = true;
    this.selectCard = null;
  }

  toggleDisplayCard() {
    this.displayCard = !this.displayCard;
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  onSelectCard(card: CardSchema): void {
    this.selectCard = card;
  }
}
