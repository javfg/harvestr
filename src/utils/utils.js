const arrayOfStrNumbers = (l) => [...Array(l + 1).keys()].splice(1).map(e => e.toString())

export { arrayOfStrNumbers };
