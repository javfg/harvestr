//
// XML Parsing function.
// Makes use of DOMParser and XPath expressions to get all fields in the given route on a XML
// document from which we have stripped the namespaces.
//
export const xmlParser = function(doc, field) {
  const xmlParserEntity = new DOMParser();
  const cleanDoc = doc.replace(/<([a-zA-Z0-9 ]+)(?:xml)ns=".*"(.*)>/g, '<$1$2>');
  const xmlDoc = xmlParserEntity.parseFromString(cleanDoc, 'text/xml');

  const xPathExpression = `${field.path}${field.or ? '|' + field.or : ''}`;

  let fieldNodes = xmlDoc.evaluate(xPathExpression, xmlDoc);
  let fieldNode;
  let fieldData = [];

  // eslint-disable-next-line no-cond-assign
  while (fieldNode = fieldNodes.iterateNext()) {
    fieldData.push(field.entries.map(entry => {
      const entryNode = xmlDoc.evaluate(entry.path, fieldNode).iterateNext();
      const value = entryNode ? entry.removeNewLines ? entryNode.textContent.replace(/\r?\n|\r/g, '') : entryNode.textContent : '';

      entry['value'].push(value);

      return {name: entry.name, value};
    }));
  }

  return fieldData;
}
