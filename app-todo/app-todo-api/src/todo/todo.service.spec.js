import { Test } from '@nestjs/testing';
import { TodoService } from './todo.service';
describe('TodoService', () => {
    let service;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [TodoService],
        }).compile();
        service = module.get(TodoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
