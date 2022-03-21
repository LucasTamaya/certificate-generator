# Codedamn Projects - Certificate Generator
![main image](https://raw.githubusercontent.com/codedamn-projects/Certificate-Generator/master/designs/Codedamn%20Certificate%20Generator%20Home%20Page%20%5BDesktop%5D.png)

## Hello developer!

This is one of the many projects available on [codedamn](https://codedamn.com/projects) to reinforce your learning by building. If you want to become a full stack developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn [Full Stack Web Development Learning Path](https://codedamn.com/learning-paths/fullstack) to learn more about how to become an awesome full stack developer.


## Instructions

Your challenge is to build out this project and get it looking as close to the design as possible.

You can use **any tools or technologies** you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

### Landing Page 

There is only one route in this project. On entering your name in the input box and clicking on `Generate Certificate`, the certificate with the name should be downloaded in the pdf format. 

![certificate](https://raw.githubusercontent.com/codedamn-projects/Certificate-Generator/master/designs/Certificate%20Image.jpg)


Most of the work for this project will be done using the library `PDFlib`.
The library has already been added as a script tab to the html document. 

Steps: 
1. Fetch the certificate from file system 
2. load the document using the `PDFDocument` object
3. load the font by fetching from file system
4. Embed the font resource in the pdf object
5. insert the test from the input box at the empty area where the name goes (with x,y and font-size)
6. save the file 
7. create a new file object in JavaSScript and download it using the `saveAs(fileName)` 

You can refer to  [PDF-LIB documentation](https://pdf-lib.js.org/) to find out about the methods. 
### Ports 
The Codedamn Playgrounds exposes only `1337` and `1338` ports on the internet. So you'll be using `localhost` for connecting to the mongodb instance as they are hosted on the same docker container. You can specify it as `localhost:27017` or simple write `localhost`. 


Want some support on the challenge? [Join our discord community](https://cdm.sh/discord) and ask questions in the **#general** channel.

There is no limit you can go beyond the mentioned criteria and create additional functionalities

## Where to find everything

Your task is to build out the project as per the provided screenshots. You will find both a mobile and a desktop version of the design.

The designs are in image formats can be found in `/designs`.

## Send feedback!

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please visit [codedamn feedback page](https://codedamn.com/contact)