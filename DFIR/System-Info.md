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
