const app = require("./app");

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Aplicação rodando em localhost:${PORT}`);
});
