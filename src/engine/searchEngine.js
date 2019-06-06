// Models.
import Item from './model/Item';

// Utils.
import AsyncItemQueue from './model/AsyncQueue';
import { config } from '../config/Config';
import ProgressBarController from './model/ProgressBarController';


//
// Search engine class.
//
//
export default class SearchEngine {
  constructor(itemList, searchProfile, rankingDefinition, config) {
    this.config = config;
    this.savedData = {};

    this.items = itemList.map(item => new Item(item, searchProfile, this.savedData));
  }


  run = async () => {
    const progressBarController = new ProgressBarController();
    const asyncItemQueue = new AsyncItemQueue(this.items, config.itemConcurrency, progressBarController);

    await asyncItemQueue.run();

    console.log('this.items', JSON.stringify(this.items));

    return this.items;
  }
}
