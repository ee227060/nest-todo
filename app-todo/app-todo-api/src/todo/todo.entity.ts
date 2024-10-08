const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');


@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column({default:false})
    isCompleted:boolean
    constructor(id: number = 0, title: string = '', isCompleted: boolean = false) {
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }
}