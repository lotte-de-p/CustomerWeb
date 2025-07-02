import { AbstractMessage } from './abstract-message.model';

export type Messages = Record<string, Record<string, AbstractMessage[]>>;
