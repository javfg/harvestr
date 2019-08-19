const readFile = (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = e => reject(e);

    reader.readAsText(file);
  });
};

const readJSONFromFile = async (file) => {
  const fileContents = await readFile(file);

  try {
    return JSON.parse(fileContents);
  } catch (e) {
    throw new Error('Unable to parse file.');
  }
};

const download = (fileName, content, contentType) => {
  const fileA = document.createElement('a');
  const file = new Blob([JSON.stringify(content, null, 2)], {type: contentType});

  fileA.href = URL.createObjectURL(file);
  fileA.download = fileName;
  fileA.click();
};


export { download, readJSONFromFile };
