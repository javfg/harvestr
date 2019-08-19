import { dsvParser } from './dsvParser';

export const csvParser = (doc, field) => new dsvParser(doc, field, ',');
