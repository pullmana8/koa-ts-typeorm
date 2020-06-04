/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export default class Todo {
    @PrimaryGeneratedColumn('uuid')
    id!: number;

    @Column()
    name!: string;

    @Column()
    created!: Date;

    @Column()
    updated!: Date;

    @Column()
    done!: Boolean;
};
