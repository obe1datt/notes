UuerAssist : contains inforamtion about prgram lunched by the user  
using windwos explolrer 
the inforamtion like lunch time  and number of excution 
note that the programs run suing cmd does not found in user assist keys
we can find user assist keys in 

NTUSER.DAT\Software\Microsoft\Windows\Currentversion\Explorer\UserAssist\{GUID}\Count

ShimCache  
it is am mecanisim used to keep track the apps that comatiblity with os 
and track the apps lunched on the machine 
it is main purpose it is to ensure the backware compatiblity of apps
it is lso called Application Compatibility Cache (AppCompatCache) 
it is under the location 

SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatCache

it is stored file name , size  , last modification of exe file 
to we will use to make the data human redable 
AppCompatCache Parser,
by cmd  :

AppCompatCacheParser.exe --csv <path to save output> -f <path to SYSTEM hive for data parsing> -c <control set to parse>
