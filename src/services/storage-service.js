function registerId() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );
}

export function localStorageService() {
  function get(itemName) {
    const item = localStorage.getItem(itemName);
    const numPatt = new RegExp(/^\d+$/);
    const jsonPatt = new RegExp(/[\[\{].*[\}\]]/);

    if (item) {
      if (jsonPatt.test(item)) {
        return JSON.parse(item);
      } else if (numPatt.test(item)) {
        return parseFloat(item);
      } else {
        return item;
      }
    } else {
      return null;
    }
  }

  function set(itemName, item) {
    if (typeof item !== "object") {
      throw new Error("Dado a salvar precisa ser um objeto válido");
    }
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  return {
    get,
    set,
    increment(itemName, value) {
      const arr = get(itemName);

      if (arr === null) {
        throw new Error(
          "Lista precisa estar inicializada para adicionar um novo item"
        );
      }

      return set(itemName, [...arr, { ...value, id: registerId() }]);
    },
    decrement(itemName, id) {
      const arr = get(itemName);

      if (arr === null) {
        throw new Error(
          "Lista precisa estar inicializada para remover um item"
        );
      }

      return set(itemName, [...arr.filter((t) => t.id !== id)]);
    },

    // remove(itemName) {
    //   localStorage.removeItem(itemName);
    // }
  };
}
