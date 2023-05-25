We can see windows information like version under this registry 
SOFTWARE\Microsoft\Windows NT\CurrentVersion

Current Control Set: this hives contains machine configration user for controling system startup 
common;y we seet tow contol sets ControlSet001 and ControlSet002

in most cases 
ControlSet001 point to the control set that the machine booted with ,
ControlSet002 will be last good know configration ,

their location SYSTEM\ControlSet001 , SYSTEM\ControlSet002
windows create voltile controlset when the machine go live  
it is called  HKLM\SYSTEM\CurrentControlSet it is 
for getting the most accurate info about the system   
for get wich controlset used by the system wee look for folwing Vlaues
SYSTEM\Select\Current

laso for last known good SYSTEM\Select\LastKnownGood


Computer Name 
it is important to find the computer name we find it
SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName

Time ZONE information  
it is importat to konw time zone it is help
to understand the time line of the event  
find the vlaue 
SYSTEM\CurrentControlSet\Control\TimeZoneInformation


Network information and Past networks 
the folwing lsit the network interfaces 
SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces

The past networks a given machine was connected to can be found in the following locations:

SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Unmanaged

SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Managed


Autostart Programs (Autoruns): 
the folwing keys conatins info about the programs or the command runs at user loged in 
  NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Run

NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\RunOnce

SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce

SOFTWARE\Microsoft\Windows\CurrentVersion\policies\Explorer\Run

SOFTWARE\Microsoft\Windows\CurrentVersion\Run

and the folwing contains info about services  
SYSTEM\CurrentControlSet\Services
if the start key = 0x02 means service run at the boot 


SAM hive and User infromation 
it is fall under SAM\Domains\Account\Users


