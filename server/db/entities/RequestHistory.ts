import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class RequestHistory {
  @PrimaryKey()
  _id!: number;

  @Property()
  method!: string;

  @Property()
  url!: string;

  @Property({ type: 'json', nullable: true })
  body?: any;

  @Property({ type: 'json', nullable: true })
  headers?: any;

  @Property({ type: 'json', nullable: true })
  response?: any;

  @Property()
  clientId!: string;

  @Property()
  createdAt: Date = new Date();
}
