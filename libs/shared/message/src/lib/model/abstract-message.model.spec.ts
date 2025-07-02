import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

class DummyMessage extends AbstractMessage {
  constructor(
    type: MessageType,
    messageGroupName: string,
    key: string,
    subtype: MessageType,
    interpolateParams: Record<string, unknown>
  ) {
    super(type, messageGroupName, key, subtype, interpolateParams);
  }
}

describe('AbstractMessage', () => {
  let message: AbstractMessage;
  const interpolatedParams = { value: 'test' };

  beforeEach(() => {
    message = new DummyMessage(MessageType.ERROR, 'message-group', 'key', MessageType.ICON_ERROR, interpolatedParams);
  });

  describe('getMessageLabel', () => {
    it('should return the correct message label', () => {
      const actual = message.getMessageLabel();

      expect(actual).toBe('ng.message-group.key-errorfield');
    });
  });

  describe('getMessageSuffix', () => {
    it('should return the correct suffix for the message', () => {
      const actual = message.getMessageSuffix();

      expect(actual).toBe('key-errorfield');
    });
  });

  describe('get params', () => {
    it('should return the interpolated params', () => {
      const actual = message.interpolateParams;

      expect(actual).toEqual(interpolatedParams);
    });
  });

  describe('get subtype', () => {
    it('should return the subtype', () => {
      const actual = message.subtype;

      expect(actual).toEqual(MessageType.ICON_ERROR);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
