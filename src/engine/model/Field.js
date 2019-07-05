import Entry from '../model/Entry';


class Field {
  constructor(name, path, or, entries, saveData) {
    this.name = name;
    this.path = path;
    this.or = or;
    this.saveData = saveData;

    if (entries) {
      this.entries = entries.map(entry => new Entry(
        entry.name,
        entry.path,
        entry.saveData,
        entry.removeNewLines,
        entry.links,
        entry.linkTo,
        entry.value
      ));
    }
  }
}


export default Field;
