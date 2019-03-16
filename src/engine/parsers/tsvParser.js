// TODO: Refactor into Generic Separated Value parser.
export const tsvParser = function(doc, field) {
  try {
    let data = [];

    // Split doc in lines.
    const lines = doc.split("\n");

    lines.forEach(line => {
      // Split line in columns.
      const cols = line.split("\t");

      data.push(cols[field.field]);
    });

    return data === 0 ? "EMPTY" : data;
  } catch (e) {
    console.log("e", e);
  }
};
