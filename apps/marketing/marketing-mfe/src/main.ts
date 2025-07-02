import { defineCustomElements } from '@telenet/wink-core/loader/index';

defineCustomElements(window);
import('./bootstrap').catch((err) => console.error(err));
