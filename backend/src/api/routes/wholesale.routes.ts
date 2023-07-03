import WholesaleController from "../controllers/wholesale/wholesale.controller";
import BaseRoutes from "./base.routes";
// Controllers

class WholesaleRoutes extends BaseRoutes {
    routes(): void {
        this.router.get("/get-all", WholesaleController.index);
        this.router.post("/create", WholesaleController.create)
        this.router.get("/:id", () => {});
        this.router.put("/:id", () => {});
        this.router.delete("/:id", () => {});
        this.router.post("/verify", () => {});
    }
}

export default new WholesaleRoutes().router;