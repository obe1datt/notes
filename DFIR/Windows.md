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
