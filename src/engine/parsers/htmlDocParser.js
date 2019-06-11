export const htmlDocParser = function(doc, field) {
  field.entries.map(entry => {
    const htmlParser = new DOMParser();
    const htmlDoc = htmlParser.parseFromString(doc, "text/html");

    console.log('htmlDoc', htmlDoc);


    if (entry.path.tagId) {
      const element = htmlDoc.getElementById(entry.path.tagId);
      console.log('element', element);

      entry.value.push(element ? element.textContent : '');
    }
  });
};
