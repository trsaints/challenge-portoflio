export class LocalDB {
  #name = "";
  #objectStores = [];
  #version = 1;

  #checkPreload() {
    return localStorage.getItem(`${this.name}_db_loaded`) !== null;
  }

  #configure(args) {
    const request = this.#openRequest();

    request.addEventListener("upgradeneeded", (evt) => {
      const { result } = evt.target;
      const { baseData, flow } = args;

      this.#objectStores.forEach((os) => {
        const objStore = result.createObjectStore(os, flow);

        const { transaction } = objStore;

        transaction.addEventListener("complete", (_evt) => {
          if (baseData !== undefined) {
            const objectStore = this.#openOS(os, evt.target, "readwrite");

            baseData.info[os].forEach((obj) => objectStore.add(obj));
          }
        });

        transaction.addEventListener(
          "error",
          (_e) => new Error("Não foi possível configurar o banco de dados")
        );

        console.log(`Object Store: ${os}`);
      });

      console.warn(
        `Um banco de dados foi criado: ${this.#name} v${this.#version}`
      );

      localStorage.setItem(`${this.#name}_db_loaded`, true);
    });
  }

  #reset() {
    indexedDB.deleteDatabase(this.#name);
    localStorage.removeItem(`${this.#name}_db_loaded`);
  }

  #openRequest() {
    return window.indexedDB.open(this.#name, this.#version);
  }

  #openOS(os, { result }, mode) {
    const transaction = result.transaction(os, mode);

    return transaction.objectStore(os);
  }

  #addObject(os, obj) {
    if (obj === undefined)
      throw new Error("Erro ao realizar operação: dados inexistentes");

    const request = this.#openRequest();

    request.addEventListener("success", (evt) => {
      const objectStore = this.#openOS(os, evt.target, "readwrite");

      const addRequest = objectStore.add(obj);

      addRequest.addEventListener("success", () =>
        console.table({
          status: "Operação concluída com sucesso",
          result: obj,
        })
      );

      addRequest.addEventListener(
        "error",
        () => new Error("Não foi possível adicionar dados")
      );
    });
  }

  #removeObject(os, key) {
    if (key === undefined)
      throw new Error("Erro ao realizar operação: chave não especificada");

    const request = this.#openRequest();

    request.addEventListener("success", (evt) => {
      const objectStore = this.#openOS(os, evt.target, "readwrite");
      const deleteRequest = objectStore.delete(key);

      deleteRequest.addEventListener("success", () =>
        console.log("Dados excluídos com sucesso")
      );

      deleteRequest.addEventListener(
        "error",
        () => new Error("Não foi possível excluir dados")
      );
    });
  }

  #loadAll(os) {
   return new Promise((resolve, reject) => {
      const request = this.#openRequest();

      request.addEventListener("success", (evt) => {
        const objectStore = this.#openOS(os, evt.target, "readonly");
        const data = objectStore.getAll();

        data.addEventListener("success", () => resolve(data.result));

        data.addEventListener("error", () =>
          reject(new Error("Não foi possível carregar dados"))
        );
      });
    });
  }

  #load(os, key) {
    return new Promise((resolve, reject) => {
      const request = this.#openRequest();

      request.addEventListener("success", (evt) => {
        const objectStore = this.#openOS(os, evt.target, "readonly");
        const data = objectStore.get(key);

        data.addEventListener("success", () => resolve(data.result));

        data.addEventListener("error", () =>
          reject(new Error("Não foi possível carregar dados"))
        );
      });
    });
  }

  get objectStores() {
    return this.#objectStores;
  }

  get checkPreload() {
    return this.#checkPreload;
  }

  get configure() {
    return this.#configure;
  }

  get reset() {
    return this.#reset;
  }

  get addObject() {
    return this.#addObject;
  }

  get removeObject() {
    return this.#removeObject;
  }

  get load() {
    return this.#load;
  }

  get loadAll() {
    return this.#loadAll;
  }

  get name() {
    return this.#name;
  }

  constructor(args) {
    const { name, objectStores } = args;

    this.#name = name;
    this.#objectStores = objectStores;
  }
}
