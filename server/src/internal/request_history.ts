import type { EntityManager } from "@mikro-orm/core";
import type { Connection, IDatabaseDriver, MongoDriver, MongoEntityManager } from "@mikro-orm/mongodb";

export type createRequestHistoryReq = {
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
};

export type createRequestHistoryRes = {
  _id: number;
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
  createdAt: Date | undefined;
}

export type updateRequestHistoryReq = {
  _id: number;
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
};

export type updateRequestHistoryRes = {
  _id: number;
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
  createdAt: Date;
}

export interface IRequestHistoryService {
  createRequestHistory(req: createRequestHistoryReq): Promise<createRequestHistoryRes>;
  updateRequestHistory(req: updateRequestHistoryReq): Promise<updateRequestHistoryRes>;
}
