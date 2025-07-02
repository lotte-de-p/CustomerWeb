import { Type } from '@angular/core';
import { WindowService } from '../window/window.service';
import { Log } from './log';

export class LogFactory {
  static createLogger(component?: Type<unknown>): Log {
    return new LogImpl(component);
  }
}

class LogImpl implements Log {
  private readonly windowService = new WindowService();
  private readonly component!: Type<unknown>;

  constructor(component?: Type<unknown>) {
    if (component) {
      this.component = component;
    }
  }

  log(...args: unknown[]): void {
    if (this.component) {
      console.log(this.componentToString(args));
    } else {
      console.log(args);
    }
  }

  logDebug(...args: unknown[]): void {
    if (this.isDebugEnabled()) {
      if (this.component) {
        console.debug(this.componentToString(args));
      } else {
        console.debug(args);
      }
    }
  }

  logError(...args: unknown[]): void {
    if (this.component) {
      console.error(this.componentToString(args));
    } else {
      console.error(args);
    }
  }

  logInfo(...args: unknown[]): void {
    if (this.component) {
      console.info(this.componentToString(args));
    } else {
      console.info(args);
    }
  }

  private isDebugEnabled(): boolean {
    return this.windowService && this.windowService.getParamValue('debug') === 'true';
  }

  private componentToString(args: unknown[]): unknown {
    return [`${this.component.prototype.constructor.name}`, ...args];
  }
}
