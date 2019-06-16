export const maxOperator = function (rule, relevantValues, item, items) {
  const sortedItems = items.sort((a, b) => {
    const valuesA = a.queries
      .find(query => query.name === rule.query)
      .fields
      .find(field => field.name === rule.field)
      .entries
      .find(entry => entry.name === rule.entry[0])
      .value

    const valuesB = b.queries
      .find(query => query.name === rule.query)
      .fields
      .find(field => field.name === rule.field)
      .entries
      .find(entry => entry.name === rule.entry[0])
      .value

    const maxA = Math.max(...valuesA);
    const maxB = Math.max(...valuesB);

    return maxB - maxA;
  });

  const slicedSortedItems = sortedItems.slice(0, rule.values[0]);
  const slicedSortedItemsItemIndex = slicedSortedItems.findIndex(slicedSortedItem => slicedSortedItem.name === name);

  let positionScore = 0;
  if (slicedSortedItemsItemIndex !== -1) {
    positionScore = (rule.value[0] - slicedSortedItemsItemIndex) / rule.value[0];
  }

  console.log('slicedSortedItems', slicedSortedItems, 'slicedSortedItemsItemIndex', slicedSortedItemsItemIndex, 'so', positionScore);

  return positionScore;
}