export interface RawInboxMessage {
  id: string;
  contents?: Content[];
  messageAdded: MessageAdded;
  seen: boolean;
  read: boolean;
  pinned: boolean;
}

export interface Content {
  lang: string;
  title: string;
  body: string;
  callToAction: CallToAction;
}

export interface CallToAction {
  link: string;
  name?: string;
}

export interface MessageAdded {
  amount: number;
  unit: string;
}
