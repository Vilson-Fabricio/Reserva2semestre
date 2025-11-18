const path = require("path")
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs");

const { PrismaClient } = require("@prisma/client");
const { error } = require("console");
const { where } = require("sequelize");
const client = new PrismaClient();

class usuarioController {
    static async cadastrar(req, res) {
        try{
        console.log(req.body);

        const { nome, email, password } = req.body;

        if (!nome || !email || !password) {
            return res.status(400).json({msg: "Todos os campos são obrigatórios"})
        }
        const userExist = await client.usuario.findUnique({
            where: {email},
        })
        if (userExist) {
            return res.status(400).json({msg: "Email ja Cadastrado"})
        }
        const salt = bcryptjs.genSaltSync(8);
        const hashPassword = bcryptjs.hashSync(password, salt);

        const usuario = await client.usuario.create({
            data: {
                nome,
                email,
                password: hashPassword,
            },
        });
        return res.status(200).json({
            usuarioId: usuario.id,
            msg: "Usuario Cadastrado com Sucesso"
        })

        } catch (erro) {
            console.error("Erro ao Cadastrar Usuario", error);
            return res.status(400).json({msg: "Erro na Aplicação"})
        }



        res.json({
            usuarioId: usuario.id,
        });

    }

    static async login(req, res) {
        const { email, password } = req.body;

        const usuario = await client.usuario.findUnique({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            return res.json({
                msg: "Usuário não encontrado",
            });
        }

        const passwordCorreta = bcryptjs.compareSync(password, usuario.password);

        if (!passwordCorreta) {
            return res.json({
                msg: "Senha incorreta",
            });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.SENHA_SERVIDOR, { expiresIn: "1h" });
        res.json({
            msg: "Autenticado!",
            token: token,
        });
    }

    static async verificaAutenticacao(req, res, next){
        const authHeader = req.headers["authorization"];
        if(authHeader){
            const token  = authHeader.split(" ")[1];
 
        jwt.verify(token, process.env.SENHA_SERVIDOR, (err, payload) =>{
            if(err){
                return res.json({
                msg: "token invalido"
            });}
            req.usuarioId = payload.id;
            next();
            });
        }else{
        res.json({
            msg: "token não encontrado"
        });
        }    
    }
    static async buscarTodosUsuarios(req, res, next){
        if(!req.usuarioId){
            res.json({
            msg: "Você não está autenticado!",
        });
        }
        const usuario = await client.usuario.findMany({
            where: {
                id: parseInt(req.usuarioId),
                nome: true,
                email: true,
                isAdmin: true,
            },
        });
        if(!usuario.isAdmin){
            res.json({
            msg: "Acesso negado! Você não é um adminstrador!",
            });
        }
        
        next();

    }
    static async atualizarPerfil(req, res) {
        const usuarioId = req.usuarioId;
        const { nome, email } = req.body;

        const usuarioAtualizado = await client.usuario.update({
            where: {
                id: parseInt(usuarioId),
            },
            data: {
                nome,
                email,
            },
        });

        res.json({
            msg: "Perfil atualizado com sucesso",
            usuario: usuarioAtualizado,
        });
    }
    }
    async function buscarUsuarios() {
  try {
    const usuarios = await prisma.usuario.findMany();
    console.log();
    return usuarios;
  } catch (error) {
    console.error("Nenhum usuario localizado", error);
  } 
}

module.exports = usuarioController