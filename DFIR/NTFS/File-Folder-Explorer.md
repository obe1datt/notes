1- Shourt Cut files
   
   Windwos create shourt cut file for each file opened ethier
   localy or remotly , this file have info about first and last
   opened of file and its path 
   
   can founded in this location ,
   C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Recent\,
   C:\Users\<username>\AppData\Roaming\Microsoft\Office\Recent\
   
   Tools  Eric Zimmerman's LECmd.exe (Lnk Explorer)
   
   run it -> LECmd.exe -f <path-to-shortcut-files> --csv <path-to-save-csv>
   

2- IE/Edge history 
   
   intersesting about browsing includes open files in the system 
   where those files opened in browser or not it is a valuble source
   of info for opened file in system 
   
   file location -> C:\Users\<username>\AppData\Local\Microsoft\Windows\WebCache\WebCacheV*.dat
   
   the files /folder appers with file:///* format 
   
   Tools Using autopsy 
   
   source type --> logical disk 
   configration Ingest -> Recent Activity 
   
   
