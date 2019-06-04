import { dsvParser } from './dsvParser';

export const tsvParser = (doc, field) => new dsvParser(doc, field, '\t');
