



// VARIABLES
let chats_url = '/api/chats'; 
let messages_url = '/api/messages'; 

let currentChatID = 0;





// ----------------------------------------------------------------------
// GET list of available chats
let chatsArray = [];

function getChats(){
	
	// Fetch 
	fetch(chats_url, {
		method: "GET",
		headers: {
			'Content-Type': 'text/html',
		},
	})
		.then((response) => response.text())
		.then((text) => {
			console.log(text);
			chatsArray = JSON.parse(text);
			printchatsArray();
			addChatsToDOM();
		});

	// End Fetch
}
getChats();

function addChatsToDOM(){
	for (let i = 0; i < chatsArray.length; i++) {
		addChatToDOM(i, chatsArray);
	}
}

// populate list with chat-links
function addChatToDOM(i, chatsArray){
	let chatList = document.getElementById("chats-list-id");
	let chatItem = document.createElement("li");
	chatItem.classList.add("chats-list-item");
	chatItem.id = "i-" +  chatsArray[i].chatID;
  	chatItem.appendChild(document.createTextNode(chatsArray[i].chatName));
  	chatList.appendChild(chatItem);
}

function printchatsArray(){
	console.log(chatsArray);
}







// ----------------------------------------------------------------------
// Load specific chat messages

let messageArray = [];


// Fetch 
fetch(messages_url, {
	method: "GET",
	headers: {
		'Content-Type': 'text/html',
	},
})
	.then((response) => response.text())
	.then((text) => {
		console.log(text);
		messageArray = JSON.parse(text);
		printMessageArray();
		addMessagesToDOM(messageArray);
	});

// End Fetch

function addMessagesToDOM(messageArray){
	for (let i = 0; i < messageArray.length; i++) {
		addMessageToDOM(i, messageArray);
	}
}


// populate with chats-items
function addMessageToDOM(i, messageArray){
	let messageList = document.getElementById("messages-list-id");
	let messageItem = document.createElement("li");
	messageItem.classList.add("message-item");
	messageItem.id = "m-i-" +  messageArray[i].messageID;
	messageItem.innerHTML = messageArray[i].messageText;
	//messageItem.appendChild(document.createTextNode(messageArray[i].messageText));
	messageList.appendChild(messageItem);
}

function printMessageArray(){
	console.log(messageArray);
}

