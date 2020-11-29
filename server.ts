import { opine, Router } from "./deps.ts";
import { scrapperExp } from "./controller.ts";

const app = opine();
const v1ApiRouter = Router();

// Mount the v1 API router onto our server
// at the /api/v1 path.
app.use("/api/v1", v1ApiRouter);

// Add our /articles route to the v1 API router
v1ApiRouter.get("/articles", scrapperExp);

const PORT = 3000;
// Start our server on the desired port.
app.listen(PORT);

console.log(`API server running on port ${PORT}`);
