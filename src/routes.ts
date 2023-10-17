import { Router } from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import MapaController from './app/controllers/MapaController';
import PartidaController from './app/controllers/PartidaController';
import RoundController from './app/controllers/RoundController';



const router = Router();

//criando  rotas para /enderecos.
router.post('/endereco/store', EnderecoController.store);//define uma rota vai método post para chamar o método store da classe EnderecoController;
router.get('/endereco/list', EnderecoController.list);
router.delete('/endereco/delete', EnderecoController.delete);


//criando rotas para /local
router.post('/local/store', LocalController.store);//define uma rota vai método post para chamar o método store da classe LocalController;
router.get('/local/list', LocalController.list);
router.delete('/local/delete', LocalController.delete);

//criando rotas para /jogadores
router.post('/jogador/store', JogadorController.store);//define uma rota vai método post para chamar o método store da classe JogadorController;
router.get('/jogador/list', JogadorController.list);
router.get('/jogador/delete/:nickname', JogadorController.delete);
router.post('/jogador/login', JogadorController.login);
router.get('/jogador/:nickname', JogadorController.find);
router.post('/update/jogador', JogadorController.update);



//criando rotas para /Patente
router.post('/patente/store', PatenteController.store);//define uma rota vai método post para chamar o método store da classe PatenteController;
router.get('/patente/list', PatenteController.list);
router.delete('/patente/delete', PatenteController.delete);

//criando rotas para /Mapa
router.post('/mapa/store', MapaController.store);//define uma rota vai método post para chamar o método store da classe MapaController;
router.get('/mapa/list', MapaController.list);
router.delete('/mapa/delete', MapaController.delete);

//criando rotas para /Partida
router.post('/partida/store', PartidaController.store);//define uma rota vai método post para chamar o método store da classe PartidaController;
router.get('/partida/list', PartidaController.list);
router.delete('/partida/delete', PartidaController.delete);

//criando rotas para /Round
router.post('/round/store', RoundController.store);//define uma rota vai método post para chamar o método store da classe RoundController;
router.get('/round/list', RoundController.list);
router.delete('/round/delete', RoundController.delete);

export default router;