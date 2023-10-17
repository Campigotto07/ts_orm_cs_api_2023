import {Entity, Column, PrimaryGeneratedColumn,  ManyToMany, JoinTable, OneToMany} from 'typeorm';

import Local from '../models/Local';
import Round from '../models/Round';

@Entity('tb_objetivo')
class Objetivo {//codigo fonte referente ao pdf da parte 7.

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    descicao: string;

    @Column('text')
    pontos: string;

    //agregacao (losango não preenchido)
    @ManyToMany(() => Local)
    @JoinTable({name : "tb_objetivo_local", 
                joinColumn: {name: "objetivo_id", 
                                referencedColumnName: "id"}, 
                inverseJoinColumn: {name: "local_id", 
                                    referencedColumnName: "id"}})
    locais: Local[];

    //agregacao por composicao
    @OneToMany(() => Round, round => round.partida)
    rounds: Round[];    


}
export default Objetivo;