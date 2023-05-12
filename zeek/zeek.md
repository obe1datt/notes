
What is Zeek 
it is  open source  network monotring tool (traffic analyser)

what is network monitring 
it is an magagmnet action to watch and overview on network this action aim detect and reduxe any network  porblem 
network monotring foucs on it assets 
network security assets foucs on network anomalies

Zeek has tow primay layers 
1- Event Engine 
    *where packet are prossced and it is called event core and it is resposable on dicribe event without foucsing on is details 
    * and it is devide the packet into source and detination ...
2- policy script interpreter 
   *analysis are conducted
   *responable for describing the event correlations by using Zeek scripts.
   
Zeek framework  
*prived extened funcinalty in scripting layer .
*the frameworks enchance zeek flixablity and comatabality woth other network componets 
* each framework has spicific case 

Available Frameworks
Logging	Notice	Input	Configuration	Intelligence
Cluster	Broker Communication	Supervisor	GeoLocation	File Analysis
Signature	Summary	NetControl	Packet Analysis	TLS Decryption

Zeek outputs 
*Zeek provides 50+ log files under seven different categories
*The default log path is: /opt/zeek/logs/ 

Working with zeek 
1- Zeek as service 
2- zeek agnist pcap

$ zeek -v  --> zeek version 

start zeek service  by zeek control module  this control module help to start stop check status  etc 
 $ zeekctl 
 
 
