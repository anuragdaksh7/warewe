import type { Request, Response } from "express";
import type RequestHistoryService from "./request_history_service";
import { InternalServerErrorResponse, SuccessResponse } from "../utils/responses";

export default class RequestHistoryHandler {
  private requestHistoryService: RequestHistoryService;

  constructor (requestHistoryService: RequestHistoryService) {
    this.requestHistoryService = requestHistoryService
  }

  createRequestHistory = async (req: Request, res: Response) => {
    try {
      const requestHistory = await this.requestHistoryService.createRequestHistory(req.body);
      return SuccessResponse.send(res, requestHistory, "Request history created successfully");
    } catch (error: any) {
      return InternalServerErrorResponse.send(res, error.message);
    }
  }

  updateRequestHistory = async (req: Request, res: Response) => {
    try {
      const requestHistory = await this.requestHistoryService.updateRequestHistory(req.body);
      return SuccessResponse.send(res, requestHistory, "Request history updated successfully");
    } catch (error: any) {
      return InternalServerErrorResponse.send(res, error.message);
    }
  }
}
