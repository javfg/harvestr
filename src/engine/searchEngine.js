import Item from './model/Item';

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
    console.log('SearchEngine RUN', this);

    await Promise.all(this.items.map(item => item.run()));

    console.log('this.items', JSON.stringify(this.items));


    return this.items;
  }
}
