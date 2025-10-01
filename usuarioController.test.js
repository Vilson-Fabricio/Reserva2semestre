const request = require("supertest");
const app = require("./app");
describe("Testes do UsuarioController", () => {
  let token;

  it("deve cadastrar um usuário", async () => {
    const res = await request(app)
      .post("/usuario/cadastrar")
      .send({ nome: "Vilso", email: "teste@teste.co", senha: "1234" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("usuarioId");
  });

  it("deve logar com usuário válido", async () => {
    const res = await request(app)
      .post("/usuario/login")
      .send({ email: "teste@teste.com", senha: "1234" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  it("não deve logar com senha errada", async () => {
    const res = await request(app)
      .post("/usuario/login")
      .send({ email: "teste@teste.com", senha: "errada" });

    expect(res.body.msg).toBe("Senha incorreta");
  });

  it("deve acessar rota autenticada com token válido", async () => {
    const res = await request(app)
      .get("/areaLogada")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body.msg).toContain("Você está logado com o ID");
  });

  it("não deve acessar rota admin se não for admin", async () => {
    const res = await request(app)
      .get("/areaAdmin")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body.msg).toBe("Acesso negado! Você não é um adminstrador!");
  });
});
