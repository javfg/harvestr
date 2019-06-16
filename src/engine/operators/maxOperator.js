export const maxOperator = function (rule, relevantValues, item, items) {
  const dummyArray = items.map(item => ({
    name: item.name,
    value: Math.max(
      item
        .queries
        .find(query => query.name === rule.query)
        .fields
        .find(field => field.name === rule.field)
        .entries
        .find(entry => entry.name === rule.entry[0])
        .value
    )
  }));

  const sortedItems = dummyArray.sort((a, b) => b.value - a.value);

  //TODO: get items from the original array.

  const slicedSortedItems = sortedItems.slice(0, rule.values[0]);
  const slicedSortedItemsItemIndex = slicedSortedItems.findIndex(slicedSortedItem => slicedSortedItem.name === name);

  let positionScore = 0;
  if (slicedSortedItemsItemIndex !== -1) {
    positionScore = (rule.value[0] - slicedSortedItemsItemIndex) / rule.value[0];
  }

  console.log('slicedSortedItems', slicedSortedItems, 'slicedSortedItemsItemIndex', slicedSortedItemsItemIndex, 'so', positionScore);

  return true; //positionScore;
}