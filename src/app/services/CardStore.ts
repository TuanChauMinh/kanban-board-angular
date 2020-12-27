import { CardSchema } from "../model/CardSchema";
import { TaskService } from "./task-service.service";

export class CardStore{
  cards: Object ={};
  lastid = -1;

  addCard(card : CardSchema)
  {
    card.id = String(++this.lastid);
    this.cards[card.id] = card;
    return card.id;
  }

  getCard(cardId : string)
  {
    return this.cards[cardId];
  }

  newCard(title: string)
  {
    const card : CardSchema = new CardSchema();
    card.title = title;
    return(this.addCard(card));
  }
}
