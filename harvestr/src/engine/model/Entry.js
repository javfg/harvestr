class Entry {
  constructor(name, path, saveData, removeNewLines, links = [], linkTo, value = []) {
    this.name = name;
    this.path = path;
    this.saveData = saveData;
    this.removeNewLines = removeNewLines;
    this.links = links;
    this.linkTo = linkTo;
    this.value = value;
  }
}


export default Entry;
