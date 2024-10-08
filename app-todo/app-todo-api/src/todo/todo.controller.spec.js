import { Test } from '@nestjs/testing';
import { TodoController } from './todo.controller';
describe('TodoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [TodoController],
        }).compile();
        controller = module.get(TodoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
