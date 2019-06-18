export const maxOperator = function (rule, relevantValues, item, items) {
  // Copy relevant fields (name and relevant entry) to a dummy array.
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

  // Sort, get names and slice the array to the given length.
  const slicedSortedItemNames = dummyArray
    .sort((a, b) => b.value - a.value)
    .map(dummyItem => dummyItem.name)
    .slice(0, rule.values[0]);

  // Find current item's index in the array.
  const itemIndex = slicedSortedItemNames.findIndex(slicedSortedItemName => slicedSortedItemName === item.name);

  // Calculate score: proportional to position in sliced array.
  let positionScore = 0;
  if (itemIndex !== -1) {
    positionScore = (rule.values[0] - itemIndex) / rule.values[0];
  }

  console.log('slicedSortedItemNames', slicedSortedItemNames, 'slicedSortedItemsItemIndex', itemIndex, 'so', positionScore);

  return {
    item: item.name,
    field: rule.field,
    result: itemIndex !== -1,
    rule: rule.name,
    score: positionScore * rule.importance,
    textPositive: 'is the top',
    textNegative: 'is not in the top',
    values: itemIndex === -1 ? [itemIndex] : [itemIndex + 1]
  };
}