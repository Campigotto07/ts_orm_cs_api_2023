import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Patente from '../models/Patente';




class PatenteController {
    async list(req: Request, res: Response){
        const repository = getRepository(Patente);
        const lista = await repository.find();
        return res.json(lista);
    }   
    
    // metodos para incluir e alterar patente
    async store(req: Request, res: Response) {

        const repository = getRepository(Patente);//recupera o repositorio de patente
        console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }
    
    //metodo de excluir
    async delete(req: Request, res: Response) {
        try {
            const repository = getRepository(Patente);
            const { id } = req.body;
            const end = await repository.findOne({ where: { "id": id } });
            if (end) {
                await repository.remove(end);
                return res.sendStatus(204);
            } else {
                return res.sendStatus(404);
            }
        } catch (e: unknown) {

            console.log(e);
            return res.sendStatus(500);
        }

    }
}

export default new PatenteController();