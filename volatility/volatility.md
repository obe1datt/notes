
vol.py -f  cridex.vmem imageinfo --> display  info  about image like profile 


python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 pslist --> show all process 

python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 pstree  --> show all process as tree


python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 psxview --> show process try to hide it self 
if pslist and psscan are flase that indicate that process tyr to hide it self 


python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 connscan --> any running sockets 
python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 netscan  --> any running sockets 
python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 sockets  --> any running sockets 

python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 cmdline  --> show all commands run from cli 

python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 procdump -p 1640 --dump-dir . --> dump all with process id 1640

python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 memdump -p 1640 --dump-dir . --> info about process if 1640 mean inde memory



python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 hivelist --> show registry hive


python2 /opt/volatility/vol.py -f  cridex.vmem --profile=WinXPSP2x86 printkey -K "SOFTWARE\Microsoft\Windows\CurrentVersion\Run"   --> go into spicifc registry key 

strings 1640.dmp | grep  -Fi "KB00207877.exe"


ollowing three hives where some malwares like to let themselves as startup apps put in:
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run


Also should check the following two hives:

HKEY_USERS\S-1-5-19\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
HKEY_USERS\S-1-5-20\SOFTWARE\Microsoft\Windows\CurrentVersion\Run


To delete the values in these startup keys, please run the following batch file:

DelStartup.bat

reg delete HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /va /f
reg delete HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run /va /f
reg delete HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /va /f
reg delete HKEY_USERS\S-1-5-19\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /va /f
reg delete HKEY_USERS\S-1-5-20\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /va /f

