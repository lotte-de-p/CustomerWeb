import { LogFactory } from './log.factory';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-log-factory-test-component',
  template: '',
})
export class LogFactoryTestComponent {}

describe('LogFactory', () => {
  it('should create a new logger', () => {
    const logFactory = LogFactory.createLogger(LogFactoryTestComponent);
    expect(logFactory).toBeTruthy();
  });
});

describe('LogImpl', () => {
  describe('Log', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.restoreAllMocks();
    });

    it('should log a list of args with component prefixed', () => {
      jest.spyOn(console, 'log');
      const logFactory = LogFactory.createLogger(LogFactoryTestComponent);
      logFactory.log('a', 'b');
      expect(console.log).toHaveBeenCalledWith(['LogFactoryTestComponent', 'a', 'b']);
    });

    it('should log a list of args without component prefixed if non was passed', () => {
      jest.spyOn(console, 'log');
      const logFactory = LogFactory.createLogger();
      logFactory.log('a', 'b');
      expect(console.log).toHaveBeenCalledWith(['a', 'b']);
    });
  });

  describe('LogError', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.restoreAllMocks();
    });

    it('should logError a list of args with component prefixed', () => {
      jest.spyOn(console, 'error');
      const logFactory = LogFactory.createLogger(LogFactoryTestComponent);
      logFactory.logError('a', 'b');
      expect(console.error).toHaveBeenCalledWith(['LogFactoryTestComponent', 'a', 'b']);
    });

    it('should log a list of args without component prefixed if non was passed', () => {
      jest.spyOn(console, 'error');
      const logFactory = LogFactory.createLogger();
      logFactory.logError('a', 'b');
      expect(console.error).toHaveBeenCalledWith(['a', 'b']);
    });
  });

  describe('logInfo', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.restoreAllMocks();
    });

    it('should log info a list of args with component prefixed', () => {
      jest.spyOn(console, 'info');
      const logFactory = LogFactory.createLogger(LogFactoryTestComponent);
      logFactory.logInfo('a', 'b');
      expect(console.info).toHaveBeenCalledWith(['LogFactoryTestComponent', 'a', 'b']);
    });

    it('should log info a list of args without component prefixed if non was passed', () => {
      jest.spyOn(console, 'info');
      const logFactory = LogFactory.createLogger();
      logFactory.logInfo('a', 'b');
      expect(console.info).toHaveBeenCalledWith(['a', 'b']);
    });
  });

  describe('logDebug', () => {
    let windowSpy: jest.SpyInstance;
    const mockWindowSpyDebug = {
      location: {
        search: '?debug=true',
      },
    };
    beforeEach(() => {
      windowSpy = jest.spyOn(globalThis, 'window', 'get');
      jest.clearAllMocks();
    });

    afterEach(() => {
      windowSpy.mockRestore();
      jest.restoreAllMocks();
    });

    it('should log a list of args with component prefixed', () => {
      jest.spyOn(console, 'debug');
      windowSpy.mockImplementation(() => mockWindowSpyDebug);
      const logFactory = LogFactory.createLogger(LogFactoryTestComponent);
      logFactory.logDebug('a', 'b');
      expect(console.debug).toHaveBeenCalledWith(['LogFactoryTestComponent', 'a', 'b']);
    });

    it('should log a list of args without component prefixed', () => {
      jest.spyOn(console, 'debug');
      windowSpy.mockImplementation(() => mockWindowSpyDebug);
      const logFactory = LogFactory.createLogger();
      logFactory.logDebug('a', 'b');
      expect(console.debug).toHaveBeenCalledWith(['a', 'b']);
    });

    it('should do nothing if debug is not true', () => {
      jest.spyOn(console, 'debug');
      windowSpy.mockImplementation(() => ({
        location: {
          search: '?debug=false',
        },
      }));
      const logFactory = LogFactory.createLogger(LogFactoryTestComponent);
      logFactory.logDebug('a', 'b');
      expect(console.debug).not.toHaveBeenCalled();
    });
  });
});
