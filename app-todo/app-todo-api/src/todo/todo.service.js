var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    findAll() {
        return this.todoRepository.find();
    }
    create(title) {
        const todo = new Todo();
        todo.title = title;
        return this.todoRepository.save(todo);
    }
    async update(id, isCompleted) {
        const todo = await this.todoRepository.findOne({ where: { id: id } });
        if (todo) {
            todo.isCompleted = isCompleted;
            return this.todoRepository.save(todo);
        }
        return null;
    }
    delete(id) {
        return this.todoRepository.delete(id).then(() => { });
    }
};
TodoService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Todo)),
    __metadata("design:paramtypes", [Repository])
], TodoService);
export { TodoService };
