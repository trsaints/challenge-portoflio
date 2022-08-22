async function getProjects() {
  const binURL = "https://api.jsonbin.io/v3/b/62f018c4a1610e6386f31ba6";
  const apiKey = process.env.X_MASTER_KEY;

  const response = await fetch(binURL, {
    method: "GET",
    headers: {
      "X-Master-Key":
        `${apiKey}`,
      "X-Bin-Meta": false,
      "Content-Type": "application/json"
    },
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error("Não pude listar");
}

export const projectService = {
  getProjects,
};
