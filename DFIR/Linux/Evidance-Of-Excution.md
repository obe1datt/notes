1- Sudo Excution History 
   
   all commands run on the linux using Sudo are stored in auth.log
   
   cat /var/log/auth.log* |grep -i COMMAND|tail
   
2- Bash history 
    
    cat ~/.bash_history 
    
3- File accesed by vim 
    
    cat ~/.viminfo
