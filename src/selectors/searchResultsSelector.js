//
// Filtering function for pagination.
//
export default (searchResults, page, size) => {
  const firstElement = page * size;
  const lastElement = (page + 1) * size;

  return searchResults.slice(firstElement, lastElement);
}