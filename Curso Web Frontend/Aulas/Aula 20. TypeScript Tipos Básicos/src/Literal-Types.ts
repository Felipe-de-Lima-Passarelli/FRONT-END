type logType = "info" | "warn" | "error";

function logger(type: logType, message: string) {
  switch (type) {
    case "info":
      console.log(`Info: ${message}`);
      break;
    case "warn":
      console.warn(`Warn: ${message}`);
      break;
    case "error":
      console.error(`Error: ${message}`);
      break;
  }
}

logger("info", "Log com alguma informação!");
logger("warn", "Log com alguma informação!");
logger("error", "Log com alguma informação!");
