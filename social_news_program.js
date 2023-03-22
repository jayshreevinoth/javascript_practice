/*
The goal of this project is to build a basic social news program. Its users will be able to show a list of links and add new ones.

Functional requirements
A link is defined by its title, its URL and its author (submitter).

If a new link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.

At launch, the program displays a start menu with the possible actions in an alert window and asks the user for his choice. Possible actions are:

Show the list of links.
Add a new link.
Remove an existing link.
Quit the program.
Showing the list of links displays the index (rank) and the properties of each link in an alert window, or a message in the absence of any link.

When adding a link, the program asks the user for the new link properties (title, URL and author). The link is then created. Subsequently, it must appear in the shown links.

When removing a link, the user is asked for the link index until it is correct. The associated link is then removed. Subsequently, it must disappear from the shown links. Removing a link is not possible if there are no existing links.

After an action is performed, the start menu is shown again. This goes on until the user chooses to quit the program.


*/
let choice;
let display = 'Choose an option:\n1. Show links \n2. Add a link\n3. Remove a link\n0. quit'
choice = prompt(display);
class Link{
	constructor(title,url,author){
  	let absoluteUrl = url;
    if(absoluteUrl.startsWith("http://") || absoluteUrl.startsWith("https://")){
    	absoluteUrl = `http://${absoluteUrl}`;
    }
    this.title = title;
    this.url = absoluteUrl;
    this.author = author;
  }
   	toString(){
    	return `${this.title} (${this.url}). Author:${this.author}`;
    }
    
}
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));
switch(choice){
	case '1':{
  	let display='';
   if(links.length > 0){
   		for(let i = 0;i < links.length;i++){
      	display += `${i+1}. ${links[i].toString()}\n`;
      }
      alert(display);
   } else {
   		alert('no links to display');
   }
   break;
  }
  case '2':{
  	const title = prompt('enter the title:');
    const url = prompt('enter the url:');
    const author = prompt('enter the author:');
    let display='';
    links.push(new Link(title,url,author));
    if(links.length > 0){
   		for(let i = 0;i < links.length;i++){
      	display += `${i+1}. ${links[i].toString()}\n`;
      }
      alert(display);
   } else {
   		alert('no links to display');
   }
    break;
  }
  case '3':{
  let display='';
  	if(links.length > 0){
    	let rmIndex = prompt('enter the index to be removed:');
      links.splice(rmIndex - 1,1);
      alert('removed');
      if(links.length > 0){
   		for(let i = 0;i < links.length;i++){
      	display += `${i+1}. ${links[i].toString()}\n`;
      }
      alert(display);
   } else {
   		alert('no links to display');
   }
    } else {
    	alert('no links to remove');
    }
    break;
  }
}