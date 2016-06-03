//  获取设备的相关信息

#import "RCTBridgeModule.h"
#import "RCTUtils.h"

@interface RCTDeviceExtension : NSObject <RCTBridgeModule>

@end

@implementation RCTDeviceExtension

RCT_EXPORT_MODULE();
//  暴露一个模块

/**
 获取设备的相关信息
 **/
static NSDictionary *getInfo(){
  
  // 获取设备名称
  NSString *name = [[UIDevice currentDevice] name];
  // 获取设备系统名称
  NSString *systemName = [[UIDevice currentDevice] systemName];
  // 获取系统版本
  NSString *systemVersion = [[UIDevice currentDevice] systemVersion];
  // 获取设备模型
  NSString *model = [[UIDevice currentDevice] model];
  // 获取设备本地模型
  NSString *localizedModel = [[UIDevice currentDevice] localizedModel];
  
  //  获取系统语言
  NSUserDefaults* defs = [NSUserDefaults standardUserDefaults];
  NSArray* languages = [defs objectForKey:@"AppleLanguages"];
  NSString* preferredLang = [languages objectAtIndex:0];
  
  return @{
            @"name": name,
            @"systemName": systemName,
            @"model": model,
            @"localizedModel": localizedModel,
            @"language": preferredLang
          };
}

RCT_EXPORT_METHOD(getInfo:(RCTResponseSenderBlock)callback){
  callback(@[[NSNull null],getInfo()]);
};
//  暴露方法

@end