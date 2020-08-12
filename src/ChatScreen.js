import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';


function ChatScreen(){
const [input, setInput] = useState([]) ;
const [messages, setMessages] = useState([
    {
    name: 'Ellen',
    image: 'https://filmdaily.co/wp-content/uploads/2020/08/ellendegeneresshow-lede.jpeg',
    message: "What's up",
    },
    {
        name: 'Ellen',
        image: 'https://filmdaily.co/wp-content/uploads/2020/08/ellendegeneresshow-lede.jpeg',
        message: "Hello?"
    },
    {
            name: 'Ellen',
            image:'https://filmdaily.co/wp-content/uploads/2020/08/ellendegeneresshow-lede.jpeg',
            message: "Anyone there?"
    },
    {
    
        message: "Here I am"
    }
]);
const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput("");
};

return (
<div className="chatScreen">
    <p className="chatScreen__timestamp">YOU MATCHED WTH ELLEN ON 10/08/20</p>
    {
    messages.map( (message) => (
        message.name ? (
        <div className="chatScreen__message">
            <Avatar className="chatScreen__image" 
                alt={message.name}
                src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
        </div>
        ):(
            <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
        </div> 
      )))}

    <form className="chatScreen__input">
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="chatScreen__inputField" placeholder="Type a message" />
        <button 
        onClick={handleSend}
        type="submit"
        className="chatScreen__inputButton">SEND</button>
    </form>
</div>
);
}

export default ChatScreen;