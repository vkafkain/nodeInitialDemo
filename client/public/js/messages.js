const sendMessage = () => {
 
   const dt = new Date();
  let time =  dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

  const text = document.querySelector(
    '.chat-form input[name="newMessage"]'
  ).value;

  const user = {
    userId: sessionStorage.userId,
    userName: sessionStorage.userName,
  };
  const room = {
    roomId: sessionStorage.roomId,
    roomName: sessionStorage.roomName,
  };

  
  if (text) {
    let message = { user, room, text};

    socket.emit("new-message", message);
    displayMessage(message);
    document.querySelector('.chat-form input[name="newMessage"]').value = "";
  }

  return false;
};

//outout chat messages to dom
const displayMessage = (message) => {
  //current message list on display
  let messageList = document.getElementById("messageList");
  //create element with current message to append to current message list
  let li = document.createElement("li");

  li.classList.add("chat-li")
  
  li.textContent = message.text;

  //retrieve last inserted ul element
  let ul = document.getElementById("lastMessage");

  // append if last message has same user.id as current
  if (ul && ul.getAttribute("userId") === message.user.userId) {
    ul.append(li);
  } else {
    if (ul) document.getElementById("lastMessage").removeAttribute("id");

    //create new ul element
    ul = document.createElement("ul");
    ul.setAttribute("id", "lastMessage");
    ul.setAttribute("userId", message.user.userId);

    //separate USER from users
    // align USER's messages to the right (css)
    if (message.user.userId === sessionStorage.userId) {
      ul.classList.add("myMessage");
    } else {
      // align other users's messages to the left (css)
      const name = document.createElement("li");
      name.textContent = `${message.user.userName} says:`;
      messageList.append(name);
      ul.classList.add("notMyMessage");
    }
    //append list element
    ul.append(li);
    //append ul to message list
    messageList.append(ul);
  }
  //scroll to bottom
  messageList.scrollTop = messageList.scrollHeight;
};

//output user joining room
const displayJoinMessage = (message) => {
  document.getElementById("lastMessage").removeAttribute("id");

  let messageList = document.getElementById("messageList");

  // Create the element to append
  let li = document.createElement("li");
  li.classList.add("chat-li-join");
  li.textContent = message;
  li.setAttribute("id", "lastMessage");
  messageList.append(li);

  //scroll to bottom
  messageList.scrollTop = messageList.scrollHeight;
};
