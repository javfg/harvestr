//
// Delimiter-Separated Value file parsing function.
// Instantiated from another parser like CSV / TSV parser.
//
export const dsvParser = function(doc, field, delimiter) {
  const lines = doc.split('\n');

  // Remove empty lines.
  const filteredLines = lines.filter(line => line !== '');

  filteredLines.forEach(line => {
    const cols = line.split(delimiter);

    field.entries.forEach(entry => {
      entry.value.push(cols[entry.path]);
    })
  });
}
