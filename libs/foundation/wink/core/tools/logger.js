/**
 * Logger utility/helper with methods for different log levels.
 * Example usage
 * logger.success('This is a success message');
 */

const LOG_BLUE = '\x1b[34m';
const LOG_RED = '\x1b[31m';
const LOG_RED_BG = '\x1b[41m';
const LOG_ORANGE = '\x1b[38;2;255;165;0m';
const LOG_ORANGE_BG = '\x1b[48;2;255;165;0m';
const LOG_BLACK = '\x1b[30m';
const LOG_RESET = '\x1b[0m';

function logWithColor(message, color, fontColor = '') {
  console.log(color, fontColor, message, LOG_RESET);
}

const logger = {
  success: (message) => logWithColor(message, LOG_BLUE),
  warn: (message) => logWithColor(message, LOG_ORANGE),
  warnBg: (message) => logWithColor(message, LOG_ORANGE_BG, LOG_BLACK),
  error: (message) => logWithColor(message, LOG_RED),
  errorBg: (message) => logWithColor(message, LOG_RED_BG, LOG_BLACK),
};

module.exports = logger;
