import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ErrorMessage } from './model/error-message.model';
import { MessageType } from './model/message-type.enum';
import { WarningMessage } from './model/warning-message.model';
import { SuccessMessage } from './model/success-message.model';
import { InfoFlowMessage } from './model/info-flow-message.model';

const MESSAGE_GROUP_1 = 'message-group-1';
const MESSAGE_GROUP_2 = 'message-group-2';
const ERROR_1 = 'error-1';
const WARNING_1 = 'warning-1';
const SUCCESS_1 = 'success-1';
const ERROR_2 = 'error-2';
describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
    }).compileComponents();

    messageService = TestBed.inject(MessageService);
  });

  describe('addMessage + getMessagesByGroupName', () => {
    it('should return an empty string given no messages added', () => {
      const actual = messageService.getMessagesByGroupName(MESSAGE_GROUP_1);

      expect(actual.length).toBe(0);
    });

    it('should add a message to the correct message group', () => {
      const errorMessageOne = new ErrorMessage(MESSAGE_GROUP_1, ERROR_1);
      const errorMessageTwo = new ErrorMessage(MESSAGE_GROUP_1, ERROR_2);
      const errorMessageThree = new ErrorMessage(MESSAGE_GROUP_2, 'error-3');
      messageService.addMessage(errorMessageOne);
      messageService.addMessage(errorMessageTwo);
      messageService.addMessage(errorMessageThree);

      const actual = messageService.getMessagesByType(MESSAGE_GROUP_1, MessageType.ERROR);

      expect(actual.length).toBe(2);
      expect(actual[0]).toEqual(errorMessageOne);
      expect(actual[1]).toEqual(errorMessageTwo);
    });
  });

  describe('getMessagesByGroupName', () => {
    it('should return NO messages given no error message', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, ERROR_1));

      const actual = messageService.getMessagesByGroupName(MESSAGE_GROUP_2);

      expect(actual.length).toBe(0);
    });
    it('should return message given message of same type if present', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_2, ERROR_1));
      messageService.addMessage(new SuccessMessage(MESSAGE_GROUP_2, SUCCESS_1));

      const actual = messageService.getMessagesByGroupName(MESSAGE_GROUP_2);

      expect(actual.length).toBe(2);
      expect(actual[0].messageGroupName).toBe(MESSAGE_GROUP_2);
      expect(actual[0].key).toBe(ERROR_1);
      expect(actual[1].messageGroupName).toBe(MESSAGE_GROUP_2);
      expect(actual[1].key).toBe(SUCCESS_1);
    });

    it('should return first message given message of same type if present', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_1));
      messageService.addMessage(new SuccessMessage(MESSAGE_GROUP_1, SUCCESS_1));
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, 'warning-2'));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_2));
      messageService.addMessage(new SuccessMessage(MESSAGE_GROUP_1, 'success-2'));
      messageService.addMessage(new InfoFlowMessage(MESSAGE_GROUP_1, 'info-1'));

      const actual = messageService.getMessagesByGroupName(MESSAGE_GROUP_1);

      expect(actual.length).toBe(4);
      expect(actual[0].messageGroupName).toBe(MESSAGE_GROUP_1);
      expect(actual[0].key).toBe(ERROR_1);
      expect(actual[1].messageGroupName).toBe(MESSAGE_GROUP_1);
      expect(actual[1].key).toBe(WARNING_1);
      expect(actual[2].messageGroupName).toBe(MESSAGE_GROUP_1);
      expect(actual[2].key).toBe(SUCCESS_1);
      expect(actual[3].key).toBe('info-1');
    });
  });

  describe('getErrorMessages', () => {
    it('should return the error messages for a given groupName', () => {
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_1));

      const actual = messageService.getErrorMessages(MESSAGE_GROUP_1);

      expect(actual?.length).toBe(1);
    });
  });

  describe('clearErrorMessages', () => {
    it('should clear the error messages for a given groupName', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, ERROR_1));

      messageService.clearErrorMessages(MESSAGE_GROUP_1);

      const actual = messageService.getErrorMessages(MESSAGE_GROUP_1);

      expect(actual.length).toBe(0);
    });
  });

  describe('getMessagesByType', () => {
    it('should return NO messages', () => {
      const actual = messageService.getMessagesByType(MESSAGE_GROUP_1, MessageType.ERROR);

      expect(actual.length).toBe(0);
    });
    it('should return NO messages given no error message', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));

      const actual = messageService.getMessagesByType(MESSAGE_GROUP_1, MessageType.ERROR);

      expect(actual).toBeUndefined();
    });
    it('should return message given at least one error messages', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_2));

      const actual = messageService.getMessagesByType(MESSAGE_GROUP_1, MessageType.ERROR);

      expect(actual[0].messageGroupName).toBe(MESSAGE_GROUP_1);
      expect(actual[0].key).toBe(ERROR_2);
    });
  });

  describe('clearErrorMessages', () => {
    it('should clear error messages', () => {
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_1));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_2));

      messageService.clearMessages(MESSAGE_GROUP_1);

      const actual = messageService.hasErrorMessages(MESSAGE_GROUP_1);
      expect(actual).toBe(false);
    });
  });

  describe('clearMessagesByType', () => {
    it('should clear error messages', () => {
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_1));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_2));

      messageService.clearMessagesByType(MESSAGE_GROUP_1, MessageType.ERROR);

      const actual = messageService.hasErrorMessages(MESSAGE_GROUP_1);
      expect(actual).toBe(false);
    });

    it('should clear warning messages', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, 'warning-2'));

      messageService.clearMessagesByType(MESSAGE_GROUP_1, MessageType.WARNING);

      const actual = messageService.hasMessagesOfType(MESSAGE_GROUP_1, MessageType.WARNING);
      expect(actual).toBe(false);
    });

    it('should clear sucess messages', () => {
      messageService.addMessage(new SuccessMessage(MESSAGE_GROUP_1, SUCCESS_1));
      messageService.addMessage(new SuccessMessage(MESSAGE_GROUP_1, 'success-2'));

      messageService.clearMessagesByType(MESSAGE_GROUP_1, MessageType.SUCCESS);

      const actual = messageService.hasMessagesOfType(MESSAGE_GROUP_1, MessageType.SUCCESS);
      expect(actual).toBe(false);
    });
  });

  describe('hasErrorMessages', () => {
    it('should return false given no messages', () => {
      const actual = messageService.hasErrorMessages(MESSAGE_GROUP_1);

      expect(actual).toBe(false);
    });
    it('should return false given no error messages', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, 'warning-message'));

      const actual = messageService.hasErrorMessages(MESSAGE_GROUP_1);

      expect(actual).toBe(false);
    });
    it('should return true given at least one error messages', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_2));

      const actual = messageService.hasErrorMessages(MESSAGE_GROUP_1);

      expect(actual).toBe(true);
    });
  });

  describe('hasMessagesOfType', () => {
    it('should return false given no messages', () => {
      const actual = messageService.hasMessagesOfType(MESSAGE_GROUP_1, MessageType.ERROR);

      expect(actual).toBe(false);
    });
    it('should return false given no error messages', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));

      const actual = messageService.hasMessagesOfType(MESSAGE_GROUP_1, MessageType.ERROR);

      expect(actual).toBe(false);
    });
    it('should return true given at least one error messages', () => {
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_2));

      const actual = messageService.hasMessagesOfType(MESSAGE_GROUP_1, MessageType.ERROR);

      expect(actual).toBe(true);
    });
  });

  describe('clearMessages', () => {
    it('should clear messages', () => {
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_1));
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new SuccessMessage(MESSAGE_GROUP_1, SUCCESS_1));

      messageService.clearMessages(MESSAGE_GROUP_1);

      const actual = messageService.hasErrorMessages(MESSAGE_GROUP_1);
      expect(actual).toBe(false);
    });

    it('should return if messageGroupNamePassed is an empty string', () => {
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_1));
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_1, WARNING_1));
      messageService.addMessage(new SuccessMessage(MESSAGE_GROUP_1, SUCCESS_1));

      messageService.clearMessages('');

      const actual = messageService.hasErrorMessages(MESSAGE_GROUP_1);
      expect(actual).toBe(true);
    });
  });

  describe('getRegisteredGroupNames', () => {
    it('should return the registered group names', () => {
      messageService.addMessage(new ErrorMessage(MESSAGE_GROUP_1, ERROR_1));
      messageService.addMessage(new WarningMessage(MESSAGE_GROUP_2, WARNING_1));

      const registeredGroupNames = messageService.getRegisteredGroupNames();

      expect(registeredGroupNames).toEqual([MESSAGE_GROUP_1, MESSAGE_GROUP_2]);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
