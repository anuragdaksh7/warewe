import type { Connection, IDatabaseDriver, MongoDriver, MongoEntityManager } from "@mikro-orm/mongodb";
import type { createRequestHistoryReq, createRequestHistoryRes, IRequestHistoryService, updateRequestHistoryReq, updateRequestHistoryRes } from "./request_history";
import type { EntityManager } from "@mikro-orm/core";
import { RequestHistory } from "../../db/entities";
import { orm } from "../../db/db_config";

export default class RequestHistoryService implements IRequestHistoryService {
  private em: MongoEntityManager<MongoDriver> & EntityManager<IDatabaseDriver<Connection>>
  constructor() {
    this.em = orm.em.fork();
  }

  createRequestHistory = async (req: createRequestHistoryReq): Promise<createRequestHistoryRes> => {
    const history = this.em.create(RequestHistory, req);
    await this.em.persistAndFlush(history);
    return history as createRequestHistoryRes;
  }

  updateRequestHistory = async (req: updateRequestHistoryReq): Promise<updateRequestHistoryRes> => {
    const history = await this.em.findOne(RequestHistory, { _id: req._id });

    if (!history) {
      throw new Error('RequestHistory not found');
    }

    this.em.assign(history, req);
    await this.em.persistAndFlush(history);

    return history as updateRequestHistoryRes;
  }
}
