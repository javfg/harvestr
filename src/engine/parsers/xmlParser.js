//
// XML Parsing function.
// Makes use of DOMParser and XPath expressions to get all fields in the given route on a XML
// document from which we have stripped the namespaces.
//
export const xmlParser = function(doc, entry) {
  const xmlParserEntity = new DOMParser();
  const cleanDoc = doc.replace(/<([a-zA-Z0-9 ]+)(?:xml)ns=".*"(.*)>/g, '<$1$2>');
  const xmlDoc = xmlParserEntity.parseFromString(cleanDoc, 'text/xml');

  const xPathExpression = `${entry.path}${entry.or ? '|' + entry.or : ''}`;

  let resultNodes = xmlDoc.evaluate(xPathExpression, xmlDoc);

  let node;
  let value = [];

  // eslint-disable-next-line no-cond-assign
  while (node = resultNodes.iterateNext()) {
    const nodeValue = entry.removeNewLines ? node.textContent.replace(/\r?\n|\r/g, "") : node.textContent;
    value.push(nodeValue);
  }

  return  { name: entry.name, value };
}
