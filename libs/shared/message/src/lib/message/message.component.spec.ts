import { TranslateService } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, spy, when } from 'ts-mockito';
import { MessageComponent } from './message.component';
import { MessageService } from '../message.service';
import { cleanStylesFromDom, DomService } from '@telenet/ng-lib-shared';
import { WarningMessage } from '../model/warning-message.model';
import { ErrorMessage } from '../model/error-message.model';
import { SuccessMessage } from '../model/success-message.model';
import { AbstractMessage } from '../model/abstract-message.model';

const MESSAGE_GROUP = 'message-group';
const MESSAGE_GROUP_1 = 'message-group-1';
const SUCCESS_1 = 'success-1';
const SCROLL_TO_TOP = 'scrollToTop';
const MESSAGE_LABEL = 'message-label';
const OCAPI_MESSAGE = 'ocapi-message';
describe('MessageComponent', () => {
  let fixture: ComponentFixture<MessageComponent>;
  let messageService: MessageService;
  let translateService: TranslateService;
  let messageComponent: MessageComponent;
  let domService: DomService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent],
      providers: [
        { provide: MessageService, useFactory: () => instance(messageService) },
        { provide: TranslateService, useFactory: () => instance(translateService) },
        DomService,
      ],
    }).compileComponents();
    messageService = mock(MessageService);
    translateService = mock(TranslateService);
    domService = TestBed.inject(DomService);
    fixture = TestBed.createComponent(MessageComponent);
    messageComponent = fixture.debugElement.componentInstance;
  });
  it('should initialize the component with the correct variables', () => {
    expect(messageComponent.messageGroupName).toBe('');
  });
  describe('getMessages', () => {
    beforeEach(() => {
      messageComponent.messageGroupName = MESSAGE_GROUP;
    });
    it('should return the first message having priority: ERROR > WARNING > SUCCESS', () => {
      const messageOne = new ErrorMessage(MESSAGE_GROUP_1, 'error-1');
      const messageTwo = new WarningMessage(MESSAGE_GROUP_1, 'warning-1');
      const messageThree = new SuccessMessage(MESSAGE_GROUP_1, SUCCESS_1);
      when(messageService.getMessagesByGroupName(MESSAGE_GROUP)).thenReturn([messageOne, messageTwo, messageThree]);
      jest.spyOn(domService, SCROLL_TO_TOP);
      const actual = messageComponent.getMessages();
      expect(actual.length).toBe(1);
      expect(actual[0]).toBe(messageOne);
      expect(domService.scrollToTop).toHaveBeenCalled();
    });
    it('should return the first message having priority as ERROR > WARNING > SUCCESS', () => {
      const messageTwo = new WarningMessage(MESSAGE_GROUP_1, 'warning-1');
      const messageThree = new SuccessMessage(MESSAGE_GROUP_1, SUCCESS_1);
      when(messageService.getMessagesByGroupName(MESSAGE_GROUP)).thenReturn([messageTwo, messageThree]);
      jest.spyOn(domService, SCROLL_TO_TOP);
      const actual = messageComponent.getMessages();
      expect(actual.length).toBe(1);
      expect(actual[0]).toBe(messageTwo);
      expect(domService.scrollToTop).toHaveBeenCalled();
    });
    it('should return the first message having priority as ERROR > WARNING > SUCCESS', () => {
      const messageThree = new SuccessMessage(MESSAGE_GROUP_1, SUCCESS_1);
      when(messageService.getMessagesByGroupName(MESSAGE_GROUP)).thenReturn([messageThree]);
      jest.spyOn(domService, SCROLL_TO_TOP);
      const actual = messageComponent.getMessages();
      expect(actual.length).toBe(1);
      expect(actual[0]).toBe(messageThree);
      expect(domService.scrollToTop).toHaveBeenCalled();
    });
    it('should return an empty array given no error messages', () => {
      when(messageService.getMessagesByGroupName(MESSAGE_GROUP)).thenReturn([]);
      jest.spyOn(domService, SCROLL_TO_TOP);
      const actual = messageComponent.getMessages();
      expect(actual.length).toBe(0);
      expect(domService.scrollToTop).not.toHaveBeenCalled();
    });
  });
  describe('getTranslatedLabel', () => {
    let message: AbstractMessage;
    beforeEach(() => {
      message = new ErrorMessage('groupname', 'message-key');
      const spiedMessage = spy(message);
      when(spiedMessage.getMessageLabel()).thenReturn(MESSAGE_LABEL);
      when(spiedMessage.getMessageSuffix()).thenReturn('message-suffix');
    });
    it('should get the message label given it is not empty or not equal to the key', () => {
      when(translateService.instant(MESSAGE_LABEL, undefined)).thenReturn('translated-message');
      const actual = messageComponent.getTranslatedLabel(message);
      expect(actual).toBe('translated-message');
    });
    it('should get ocapi message label given the translated message label is empty', () => {
      when(translateService.instant(MESSAGE_LABEL, undefined)).thenReturn('');
      when(translateService.instant('ng.message-suffix', undefined)).thenReturn(OCAPI_MESSAGE);
      const actual = messageComponent.getTranslatedLabel(message);
      expect(actual).toBe(OCAPI_MESSAGE);
    });
    it('should get ocapi message label given the translated message label is equal to the key', () => {
      when(translateService.instant(MESSAGE_LABEL, undefined)).thenReturn(MESSAGE_LABEL);
      when(translateService.instant('ng.message-suffix', undefined)).thenReturn(OCAPI_MESSAGE);
      const actual = messageComponent.getTranslatedLabel(message);
      expect(actual).toBe(OCAPI_MESSAGE);
    });
  });
  describe('getTranslatedLabel with interpolatedParams', () => {
    let message: AbstractMessage;
    const interpolateParams = { value: '55' };
    beforeEach(() => {
      message = new ErrorMessage('groupname', 'message-key', interpolateParams);
      const spiedMessage = spy(message);
      when(spiedMessage.getMessageLabel()).thenReturn(MESSAGE_LABEL);
      when(spiedMessage.getMessageSuffix()).thenReturn('message-suffix');
    });
    it('should get the message label with the placeholder given the interpolateParams are provided', () => {
      when(translateService.instant(MESSAGE_LABEL, interpolateParams)).thenReturn('translated-message 55');
      const actual = messageComponent.getTranslatedLabel(message);
      expect(actual).toBe('translated-message 55');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
