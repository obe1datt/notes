Lets find artifacts in the NTFS file system

1- windows Perfetch File 

  When program run on the windows it is save info for feature
  use , this stored info hwlp in run program so fast in case
  of freauent use this info stored in perfetch file which located 
  in thid dir C:\Windows\Prefetch it has .pf extension 
  
  it is conatins last run time and  number of time the app runs 
  and any file or handle used ny the file  it is good source of info
  about the last run fiel 
  
  Tools For handl perfetch fiel 
  Prefetch Parser (PECmd.exe) from Eric Zimmerman's tools
  
  Runit on single file
  
  PECmd.exe -f <path-to-Prefetch-files> --csv <path-to-save-csv>
  
  run it on dir 
  
  PECmd.exe -d <path-to-Prefetch-directory> --csv <path-to-save-csv>
  

2-Windwos 10 Time line  
  
  Windwso store recent used app and files in SQLite database 
  called windwos time line  it help to find last used files 
  it is fpucos on time of excution of prgram it is foind
  in this location
  
  C:\Users\<username>\AppData\Local\ConnectedDevicesPlatform\{randomfolder}\ActivitiesCache.db
  
  Tool to find it  Eric Zimmerman's WxTCmd.exe
  
  
  
  
  
  
