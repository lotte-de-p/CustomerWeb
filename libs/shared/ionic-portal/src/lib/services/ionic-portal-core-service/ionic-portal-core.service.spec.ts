import { TestBed } from '@angular/core/testing';
import { IonicPortalCoreService } from './ionic-portal-core.service';
import { getInitialContext, publish, subscribe } from '@ionic/portals';

jest.mock('@ionic/portals');

describe('IonicPortalCoreService', () => {
  let service: IonicPortalCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IonicPortalCoreService],
    });
    service = TestBed.inject(IonicPortalCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return context value by key', () => {
    const key = 'testKey';
    const testValue = 'testValue';
    (getInitialContext as jest.Mock).mockReturnValue({ value: { [key]: testValue } });

    const result = service.getContextValueByKey<string>(key);

    expect(result).toEqual(testValue);
  });

  it('should return null for non-existing key', () => {
    const key = 'nonExistingKey';
    (getInitialContext as jest.Mock).mockReturnValue({ value: {} });

    const result = service.getContextValueByKey<string>(key);

    expect(result).toBeNull();
  });

  it('should publish to topic', async () => {
    const topic = 'testTopic';
    const data = { testData: 'value' };
    (publish as jest.Mock).mockResolvedValue(Promise.resolve());

    await service.publishToTopic(topic, data);

    expect(publish).toHaveBeenCalledWith({
      topic: topic,
      data: data,
    });
  });

  it('should subscribe to topic', async () => {
    const topic = 'testTopic';
    const callback = jest.fn();
    (subscribe as jest.Mock).mockResolvedValue({ remove: callback });

    const result = await service.subscribeToTopic(topic, callback);

    expect(subscribe).toHaveBeenCalledWith(topic, callback);
    expect(result.remove).toEqual(expect.any(Function));

    result.remove();
    expect(callback).toHaveBeenCalled();
  });

  it('should parse inputs correctly from string', () => {
    const inputString = '{"url": "test.com", "isMobile": true}';
    jest.spyOn(service, 'getContextValueByKey').mockReturnValue(inputString);

    const result = service.inputs;

    expect(result['url']).toBe('test.com');
    expect(result['isMobile']).toBe(true);
  });

  it('should return selected language', () => {
    const language = 'en';
    jest.spyOn(service, 'getContextValueByKey').mockReturnValue(language);

    const result = service.selectedLanguage;

    expect(result).toEqual(language);
  });

  it('should return default language when context value is null', () => {
    jest.spyOn(service, 'getContextValueByKey').mockReturnValue(null);

    const result = service.selectedLanguage;

    expect(result).toEqual('nl');
  });
});
