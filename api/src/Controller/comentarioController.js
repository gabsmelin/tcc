

import express from 'express'
import db from "../db.js";

const app = express.Router();

import Sequelize from 'sequelize';
const { Op } = Sequelize;

app.get('/listarG', async(req, resp) => {
    try {
        let coment = await db.infob_mw_tbcomentario.findAll({
            include: [{
                model: db.infob_mw_usuario,
                as: 'infob_mw_usuario',
                required: true
            }],
            order: [
                ['ds_curtidas', 'desc']
            ]
        })

        resp.send(coment)
    } catch(e) {
        resp.send({e:erro.toString()})
    }
})
















app.get('/listarP', async(req, resp) => {
    try {
        let c = await db.infob_mw_tbcomentario.findAll({
            include: [{
                model: db.infob_mw_usuario,
                as: 'infob_mw_usuario',
                required: true
            }],
            include: [{
                model: db.infob_mw_filmes,
                as: 'infob_mw_filmes',
                required: true
            }],
            order: [['ds_curtidas', 'desc']]
        });
       {/* c = c.map(item => {
            return {
              id: item.id_cometario,
              id_filme: item.id_filme,
              id_usuario: item.id_usuario,
              mensagem: item.ds_mensagem,
              data: item.dt_comentario,
              curtidas: item.ds_curtidas
            }
          })*/}
        resp.send(c);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.get('/listarg', async(req, resp) => {
    try {
        let c = await db.infob_mw_tbcomentario.findAll({
            order: [
                ['ds_curtidas', 'desc']
            ]
        });
        c = c.map(item => {
            return {
              id: item.id_cometario,
              id_filme: item.id_filme,
              id_usuario: item.id_usuario,
              mensagem: item.ds_mensagem,
              data: item.dt_comentario,
              curtidas: item.ds_curtidas
            }
          })
        resp.send(c);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})



app.post('/inserir', async(req, resp) => {
    try {
        let { id_filme, id_usuario, mensagem, curtidas } = req.body;
        
        let i = await db.infob_mw_tbcomentario.create({
            id_filme: id_filme,
            id_usuario: id_usuario,
            ds_mensagem: mensagem,
            dt_comentario: new Date,
            ds_curtidas: curtidas

        })
        resp.send("Comentario inserido!");
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})


app.put('/alterar/:id', async(req, resp) => {
    try {
        let { filme, usuario, mensagem, curtidas } = req.body;
        let { id } = req.params;

        let a = await db.infob_mw_tbcomentario.update({
            id_filme: filme,
            id_usuario: usuario,
            mensagem: mensagem,
            curtidas: curtidas

        },
        {
            where: {id_cometario: id}
        })
        resp.send("Comentario alterado!");
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})





app.delete('/deletar/:id', async(req, resp) => {
    try {
        let id = req.params;
        let c = db.infob_mw_tbcomentario.destroy({ where: {id_cometario: id}})
        resp.send("Comentario removido!");
    } catch(e) {
        resp.send({erro: e.toString()});
    }
})


app.put('/alterarCurti/:id', async(req, resp) => {
    try {
        let { id } = req.params;
        let b = await db.infob_mw_tbcomentario.findOne({where: {id_cometariio : id}})
        let a = await db.infob_mw_tbcomentario.update({
            ds_curtidas: b.ds_curtidas + 1       
        },
        {
            where: {id_cometariio: id}
        })
        resp.send("Você curtiu esse comentário");
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})


export default app