"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// get single user 
router.get('/:id', user_controller_1.UsersController.getSingleUser);
//update a Single User 
router.patch('/:id', user_controller_1.UsersController.updateUser);
//delete a Single User 
router.delete('/:id', user_controller_1.UsersController.deleteUser);
// get users 
router.get('/', user_controller_1.UsersController.getAllUsers);
exports.UserRoutes = router;
