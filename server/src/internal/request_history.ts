
type createRequestHistoryReq = {
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
};

type createRequestHistoryRes = {
  _id: number;
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
  createdAt: Date;
}

type updateRequestHistoryReq = {
  _id: number;
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
};

type updateRequestHistoryRes = {
  _id: number;
  method: string;
  url: string;
  body?: any;
  headers?: any;
  response?: any;
  clientId: string;
  createdAt: Date;
}

interface Service {
  createRequestHistory(req: createRequestHistoryReq): Promise<createRequestHistoryRes>;
  updateRequestHistory(req: updateRequestHistoryReq): Promise<updateRequestHistoryRes>;
}
