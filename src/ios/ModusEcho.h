/* ModusEcho.h */

#import <Cordova/CDV.h>

@interface ModusEcho : CDVPlugin

- (void)echo:(CDVInvokedUrlCommand*)command;
- (void)showMessageAlert:(CDVInvokedUrlCommand*)command;
- (void)saveHTTPCookies:(CDVInvokedUrlCommand*)command;
- (void)loadHTTPCookies:(CDVInvokedUrlCommand*)command;
@end
