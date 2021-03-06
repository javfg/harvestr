export const arrayOfStrNumbers = l => [...Array(l + 1).keys()].splice(1).map(e => e.toString());

export const rem2px = rem => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
export const px2rem = px => px / parseFloat(getComputedStyle(document.documentElement).fontSize);

export const exportCSV = searchResults => {
  const escape = text => {
    if (Array.isArray(text)) {
      text = text.join('; ');
    }

    return text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n');
  };

  let csvContent = 'data:text/csv;charset=utf-8,';

  // First, headers.
  csvContent += '"item","score",'
  searchResults[0].queries.forEach(query => {
    query.fields.forEach(field => {
      csvContent += `"${field.name}",`;
    });
  });

  csvContent += '\n';

  // Then, data.
  searchResults.forEach(item => {
    csvContent += `"${item.name}","${item.score}",`;
    item.queries.forEach(query => {
      query.fields.forEach(field => {
        const countValue = field.entries[0].value.length;
        const entriesText = [...Array(countValue).keys()].map(index => field.entries.map(entry => escape(entry.value[index]))).join(';');
        csvContent += `"${entriesText}",`;
      });
    });
    csvContent += '\n';
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'results.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
