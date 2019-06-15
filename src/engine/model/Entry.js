class Entry {
  constructor(name, path, saveData, removeNewLines, linkTo) {
    this.name = name;
    this.path = path;
    this.saveData = saveData;
    this.removeNewLines = removeNewLines;
    this.linkTo = linkTo;

    this.value = [];
  }
}


export default Entry;
