import { config } from '../config/Config';


const arrayOfStrNumbers = l => [...Array(l + 1).keys()].splice(1).map(e => e.toString());

const rem2px = rem => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
const px2rem = px => px / parseFloat(getComputedStyle(document.documentElement).fontSize);


const fetchWithRetry = async (input, init = {}) => {
  let result;

  try {
    result = await fetch(input, init);
  } catch (e) {
    // TODO: retry attempts.
    console.log('Error fetching', input, 'retrying after', config.retryDelay);

    await new Promise(resolve => setTimeout(resolve, config.retryDelay));
    result = await fetch(input, init);
  }

  return result;
}


const exportCSV = searchResults => {
  const escape = text => {
    if (Array.isArray(text)) {
      text = text.join("; ");
    }

    return text.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
  };

  let csvContent = "data:text/csv;charset=utf-8,";

  // First, headers.
  searchResults[0].queries.forEach(query => {
    query.fields.forEach(field => {
      csvContent += `"${field.name}",`;
    });
  });

  csvContent += "\n";

  // Then, data.
  searchResults.forEach(item => {
    item.queries.forEach(query => {
      query.fields.forEach(field => {
        csvContent += `"${escape(field.data)}",`;
      });
    });
    csvContent += "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "results.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { arrayOfStrNumbers, rem2px, px2rem, fetchWithRetry, exportCSV };
