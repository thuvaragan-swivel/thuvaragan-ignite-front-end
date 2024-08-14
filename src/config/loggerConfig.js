import log from "loglevel";

// Setting the default log level based on environment.
if (process.env.NODE_ENV === "production") {
  log.setLevel("warn"); // Only logging warnings and errors in production.
} else {
  log.setLevel("info"); // Logging everything in development.
}

// Custom log format similar to Winston
const originalFactory = log.methodFactory;
log.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = originalFactory(methodName, logLevel, loggerName);
  return function (...args) {
    const timestamp = new Date().toISOString();
    rawMethod(`${timestamp} - ${methodName.toUpperCase()}:`, ...args);
  };
};
log.setLevel(log.getLevel()); // Applying the custom method factory.

export default log;
