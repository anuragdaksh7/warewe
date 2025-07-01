import { MikroORM } from '@mikro-orm/mongodb';
import { EntityManager } from '@mikro-orm/mongodb';
import { RequestHistory } from './entities';
import ENV_CONFIG from '../src/config/env.config';

const orm = await MikroORM.init({
  entities: [RequestHistory],
  dbName: 'my-db-name',
  clientUrl: ENV_CONFIG.MONGODB_URL,
});

export {orm}
