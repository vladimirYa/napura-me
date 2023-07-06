import BaseRoutes from "./base.routes";
import AuthController from "../controllers/dumb.controller";
class DumbRoutes extends BaseRoutes {
    routes(): void {
        this.router.post("/auth", AuthController.auth);
   
    }
}

export default new DumbRoutes().router;