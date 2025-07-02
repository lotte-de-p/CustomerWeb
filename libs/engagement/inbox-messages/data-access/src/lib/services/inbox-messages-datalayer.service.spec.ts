import { InboxMessagesDatalayerService } from './inbox-messages-datalayer.service';
import { DataLayerService, AttributeEnum, DataLayerServiceProvider } from '@telenet/ng-lib-datalayer';
import { TestBed } from '@angular/core/testing';
import { Category, EventInfo } from 'udl';

describe('InboxMessagesDatalayerService', () => {
  let service: InboxMessagesDatalayerService;
  let dataLayerService: DataLayerService;
  let dataLayerServiceProvider: DataLayerServiceProvider;
  const MESSAGE_GROUP = 'inbox-messages';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InboxMessagesDatalayerService,
        DataLayerServiceProvider,
        DataLayerService,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });

    service = TestBed.inject(InboxMessagesDatalayerService);
    dataLayerService = TestBed.inject(DataLayerService);
    dataLayerServiceProvider = TestBed.inject(DataLayerServiceProvider);

    jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(new Category());
    jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(new EventInfo());
    jest.spyOn(dataLayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
    jest.spyOn(dataLayerServiceProvider, 'init');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send notification clicked event', () => {
    const url = 'testUrl';
    const unreadNotifications = true;

    service.sendNotificationClickedEvent(url, unreadNotifications);
    expect(dataLayerService.createCategory).toHaveBeenCalledWith('general', MESSAGE_GROUP);
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('header clicked', 'click', [MESSAGE_GROUP]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: expect.any(EventInfo),
      attributes: {
        [AttributeEnum.KEY_ITEM_NAME]: 'notification',
        [AttributeEnum.KEY_ITEM_DATA]: 'notifications',
        [AttributeEnum.KEY_ITEM_GROUP]: 'new messages',
        [AttributeEnum.KEY_DESTINATION_URL]: url,
      },
      category: expect.any(Category),
    });
  });

  it('should send inbox message clicked event', () => {
    const title = 'Title 1';
    const url = 'testUrl';
    const buttonText = 'Click Title1';

    service.sendInboxMessageClickedEvent(title, url, buttonText);
    expect(dataLayerService.createCategory).toHaveBeenCalledWith('general', MESSAGE_GROUP);
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('notification card', 'click', [MESSAGE_GROUP]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: expect.any(EventInfo),
      attributes: {
        [AttributeEnum.KEY_ITEM_NAME]: title,
        [AttributeEnum.KEY_ITEM_DATA]: buttonText,
        [AttributeEnum.KEY_DESTINATION_URL]: url,
      },
      category: expect.any(Category),
    });
  });

  it('should send inbox message impression event', () => {
    const title = 'Title 1';

    service.sendInboxMessageImpressionEvent(title);
    expect(dataLayerService.createCategory).toHaveBeenCalledWith('general', MESSAGE_GROUP);
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('notification card', 'impression', [MESSAGE_GROUP]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo: expect.any(EventInfo),
      attributes: {
        [AttributeEnum.KEY_ITEM_NAME]: title,
      },
      category: expect.any(Category),
    });
  });

  it('should send inbox message impression events for list of titles', () => {
    const titles = ['Title 1', 'Title2'];
    jest.spyOn(service, 'sendInboxMessageImpressionEvent');

    service.sendInboxMessageImpressionEvents(titles);
    expect(service.sendInboxMessageImpressionEvent).toHaveBeenCalledWith(titles[0]);
    expect(service.sendInboxMessageImpressionEvent).toHaveBeenCalledWith(titles[1]);
  });

  it('should initiazlize datalayer', () => {
    service.initDataLayer();
    expect(dataLayerServiceProvider.init).toHaveBeenCalled();
  });
});
