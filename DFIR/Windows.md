Windows rigistry  :
it is collection  of databases contions config of the system 
this config can be hardware software or user profile  
it also contain ifno about connected device and recent opened file
you can see registry using regedit.exe

the registry contains key and values 
the folders you see it is the keys 
and the values stored in that keys 
 
 Rgistry Hive: it is grup of keys and subkeys and values stored in single disk 
 
 Structure of The regsitry :
    HKEY_CURRENT_USER,
    HKEY_USERS,
    HKEY_LOCAL_MACHINE,
    HKEY_CLASSES_ROOT,
    HKEY_CURRENT_CONFIG.
 

HKEY_CURRENT_USER:it is contains information about the user who loged in like user folder screen color 
Desktop icons  and control panel sitting are stored here it is linked with user profile 
HKCU

HKEY_USER: it is conatins info about acvtive users profies loaded in the ,achine  

HKEY_LOCAL_MAHCINE : contains config indo about the computer machine for any user , HKLM

HKEY_CLASSLESS_ROOT : it is a subkey from the  HKEY_LOCAL_MACHINE/Software the info stored here make sure
the right program opened hen you open the file , HKCR
after windwos 200 thid info stored in both HKEY_LOCAL_MACHINE and HKRY_CURRENT_USER  
The HKEY_LOCAL_MACHINE/Software/Classless default info sitting can applayed to all users 
THE HKEY_CURRENT_USER/Software/Classless contain sitting the override defualt sitting and apply on the interacive users


HKEY_CLASSLESS_ROOT : provide view if the rigstry that mirges from these tow sources  
to change sitting of defalut vlaues chagnges must br under the HKEY_LOCAL_MACHINE\Software\Classes
If you write keys to a key under HKEY_CLASSES_ROOT, the system stores the information under HKEY_LOCAL_MACHINE\Software\Classes



Acess the registry  
if you have only disk image you must know where the rigsty are stored , the most of them 
are located in 'C:\Windows\System32\Config' and are 
1- DEFULAT under HKEY_USERS/DEFALUT 
2- SAM under HKEY_LOCAL_MACHINE/SAM 
3- SECURITY under HKEY_LOCAL_MACHINE/SECURITY 
4- SOFTWARE under HKEY_LOCAL_MACHINE/SOFTWARE 
5- SYSTEM under HKEY_LOCAL_MACHINE/SYSTEM 

hives conatins user information 
tow other hives are conatins user information the user profile are stored in C:\Users\<username>\ and the hives 

1- NTUSER.DAT are mounted in HKEY_CURRENT_USER  

2- USERCLASS.DAT are mounted in HKEY_CUREENT_USER/Software/CLASSLESS

the USERCLASS.DAT are stored in C:\Users\<username>\AppData\Local\Microsoft\Windows 

the NATUSER.DAT are stored  C:\Users\<username>\

other important file and hive it is tje AMchace.hve 
this file save information on program where recently run on the system

Transaction Logs and Backups 
The transaction log for each hive is stored as a .LOG file in the same directory as the hive itself.
It has the same name as the registry hive, but the extension is .LOG. For example, the transaction 
log for the SAM hive will be located in C:\Windows\System32\Config in the filename SAM.LOG. 
Sometimes there can be multiple transaction logs as well. In that case, they will have .LOG1, .LOG2 etc.
, as their extension. It is prudent to look at the transaction logs as well when performing registryforensic


These are the backups of the registry hives located in the C:\Windows\System32\Config directory. 
These hives are copied to the C:\Windows\System32\Config\RegBack directory every ten days.
It might be an excellent place to look if you suspect that some registry keys might
have been deleted/modified recently.
