import BaseRoutes from "./base.routes";
// Controllers
import MasterController from "../controllers/master/master.controller";

class MasterRoutes extends BaseRoutes {
    routes(): void {
        this.router.get("/get-all", MasterController.index);
        this.router.post("/create", MasterController.create)
        this.router.get("/:id", () => {});
        this.router.put("/:id", () => {});
        this.router.delete("/:id", () => {});
    }
}

export default new MasterRoutes().router;