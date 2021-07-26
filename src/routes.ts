// modules 
import { Router } from "express";
const router = Router();

// Controllers 
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { DeleteTagController } from "./controllers/DeleteTagController";
import { SearchTagController } from "./controllers/SearchTagController";

// Middlewares
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthentication";
import { ListUsersController } from "./controllers/ListUsersController";
import { RefreshTokenController } from "./controllers/RefreshTokenController";

// Class
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUsersController = new ListUsersController();
const deleteTagController = new DeleteTagController();
const searchTagController = new SearchTagController();

const listTagsController = new ListTagsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();

const refreshToken = new RefreshTokenController();

// Routes
router.get('/users', ensureAuthenticated, ensureAdmin, listUsersController.handle);
router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get('/tags/:name', ensureAuthenticated, searchTagController.handle);
router.post('/tags/delete', ensureAuthenticated, ensureAdmin, deleteTagController.handle);

router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receiver', ensureAuthenticated, listUserReceiverComplimentsController.handle);

router.post('/users/refresh-token', ensureAuthenticated, refreshToken.handle);

export { router };