import Entry from '../model/Entry';


class Field {
  constructor(name, path, or, entries) {
    this.name = name;
    this.path = path;
    this.or = or;

    this.value = undefined;

    if (entries) {
      this.entries = entries.map(entry => new Entry(
        entry.name,
        entry.path,
        entry.saveData,
        entry.removeNewLines,
        entry.linkTo
      ));
    }
  }
}


export default Field;
