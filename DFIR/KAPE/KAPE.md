Kroll Artifact Parser and Extractor (KAPE)

it is extracts windows artifacts  form live system or fornsics image 

it has tow purpose 
 
   1- collect files
   2- process that collected file  

Kape uses target and modules concept 

1- Target it is the artificats we need to collect 
2- modules it is process the collcted artifacts 

How it is works  
it is copy files into tow phashes  

1-it is copy file it is can work on file that os not locked 

2- other files usinf diffrent techniques  that uses raw disk read to bypass os locks 

after collection it is passing it to modules to process it  like perfetch file

Source(Live system) --> KAPE(target option) --> Destiniation(File copied from source) --> KAPE(modules options) --> Modules output

