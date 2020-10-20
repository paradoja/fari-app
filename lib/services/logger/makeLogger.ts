import { Severity } from "@sentry/react";
import { SentryService } from "../sentry/SentryService";

export function makeLogger(sentryService: SentryService) {
  return {
    debug(message: string, context?: any) {
      sentryService.log(message, Severity.Debug, context);
    },
    info(message: string, context?: any) {
      sentryService.log(message, Severity.Info, context);
    },
    warn(message: string, context?: any) {
      sentryService.log(message, Severity.Warning, context);
    },
    error(message: string, context?: any) {
      sentryService.log(message, Severity.Error, context);
    },
  };
}

export type ILogger = ReturnType<typeof makeLogger>;
