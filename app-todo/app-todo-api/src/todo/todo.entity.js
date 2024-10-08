var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');
let Todo = class Todo {
    constructor(id = 0, title = '', isCompleted = false) {
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    Column({ default: false }),
    __metadata("design:type", Boolean)
], Todo.prototype, "isCompleted", void 0);
Todo = __decorate([
    Entity(),
    __metadata("design:paramtypes", [Number, String, Boolean])
], Todo);
export { Todo };
