import express from "express"
import RequestHistoryService from "../internal/request_history_service";
import RequestHistoryHandler from "../internal/request_history_handler";

const v1Router = express.Router();

const requestHistorySvc = new RequestHistoryService()
const requestHistoryHandler = new RequestHistoryHandler(requestHistorySvc)

const requestHistoryRouter = express.Router();
requestHistoryRouter.post("/", requestHistoryHandler.createRequestHistory);
requestHistoryRouter.put("/", requestHistoryHandler.updateRequestHistory);
v1Router.use("/request-history", requestHistoryRouter);

export default v1Router
