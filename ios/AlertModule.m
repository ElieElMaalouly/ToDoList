//
//  AlertModule.m
//  ToDoList
//
//  Created by Elie Maalouly on 1/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "AlertModule.h"
#import "React/RCTLog.h"
#import <AVFoundation/AVAudioSession.h>

@implementation AlertModule

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(get,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  float volume = [AVAudioSession sharedInstance].outputVolume;
  NSString* volumeString = [NSString stringWithFormat:@"%f", volume];
  
  if (volumeString) {
    resolve(volumeString);
  } else {
    reject(@"get_error", @"Error getting system volume", nil);
  }
  
}

@end
