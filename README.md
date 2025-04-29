### Installing the program
You will need javascript, node.js, and npm installed 

### To start the server
cd .\server\
npm start
This will start the server in localhost:5000

### To start the client
cd .\client\
npm start
This will start the client in localhost:3000 and should altomatically open it on your browser if not, 
then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Design choices
Breath-first: give me the most amount of data early on, this is usefull as I added a limit of requests as to show the data faster on the ui
I decided to use two sets, crawled and to_crawl to separate which links had already been crawled, this makes it a bit slower as it required two checks to ensure the link is unique.
I choose to do a link.each as in the future these can be changed into promises for parallel processing, however I did not do that as it would take more time.

  
