# Requirements
Download nodejs and install
https://nodejs.org/en/

Download notepad ++ 
https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v7.8.8/npp.7.8.8.Installer.x64.exe

Download GIT
https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.1/Git-2.30.0-64-bit.exe

# Example Simple Get Services

Try the command below
https://www.techiediaries.com/angular/angular-8-7-tutorial-example-rest-api-httpclient-get-ngfor/

Try until this section
"Sending the GET Request & Subscribing to The Observable
Next, define an articles variable and call the getNews() method of the API service in the ngOnInit() method of the component:"

Compare and Change as below files to make your 1st angular service works
1. https://github.com/pcyuen98/medibot-web/blob/main/httpclient-test/src/app/api.service.ts
2. https://github.com/pcyuen98/medibot-web/blob/main/httpclient-test/src/app/news/news.component.html
3. https://github.com/pcyuen98/medibot-web/blob/main/httpclient-test/src/app/news/news.component.ts

Then try on browser http://localhost:4200/news, if you see the message below at the bottom on browser then it's working

Testing here!
Total Cases 2593 (Thu Jan 07 00:00:00 MYT 2021)

# Command to update after 1st time clone
goto the project root (i.e. workplace/medibot-web/httpclient-test
run "npm install"
