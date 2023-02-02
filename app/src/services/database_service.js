import { LocalDB } from "../models/LocalDB.js";

async function preload(data) {
  const info = await fetch(`./app/public/json/${data}.json`);

  try {
    if (info.ok) return info.json();
  } catch (error) {
    throw new Error("Não foi possível carregar dados");
  }
}

export const infosDB = new LocalDB({
  name: "trs_info",
  objectStores: ["degrees", "experience", "hobbies", "projects", "skills"],
});

export async function configure() {
  const options = {
    flow: {
      keyPath: "id",
      autoIncrement: true,
    },
    baseData: await preload("db"),
  };

  try {
    infosDB.configure(options);
  } catch (error) {
    console.error(error);
  }
}
