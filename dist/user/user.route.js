"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./user.controller"));
const router = (0, express_1.Router)();
exports.userRouter = router;
const userService = new user_controller_1.default();
router.post('/create', userService.createUser);
router.get('/userlist', userService.getUsers);
router.delete('/:id/delete', userService.delete);
router.put('/:id/undouser', userService.undo);
router.post('/save-push-token', userService.saveToken);
router.get('/getUserProfile', userService.getUserProfile);
router.post('/change-password', userService.changePwd);
router.get('/:id/details', userService.getUser);
router.put('/:id/update', userService.update);
