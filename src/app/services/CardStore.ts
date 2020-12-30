import { CardSchema } from "../model/CardSchema";
import { TaskService } from "./task-service.service";

export class CardStore{
  cards: Object ={};
  lastid = -1;

  addCard(card : CardSchema)
  {
    this.cards[card.id] = card;
    return card.id;
  }

  getCard(cardId : string)
  {
    return this.cards[cardId];
  }

  newCard(id: string, title: string, user: string)
  {
    const card : CardSchema = new CardSchema();
    card.id = id;
    card.title = title;
    card.user = user;
    return(this.addCard(card));
  }
}
