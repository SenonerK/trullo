import {Router} from 'express';
import { Card } from "../models";
import { asyncReq } from "../util";

const ro = Router();

ro.post('/move', asyncReq(async ({body}, res) => {
  const card = await Card.findById(body.id)
  card.in = body.to.section;
  card.index = body.to.index;
  card.save();
  
  res.send(card);
}));

export default ro;
