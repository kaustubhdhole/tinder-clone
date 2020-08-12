import React from 'react';
import "./Chats.css"
import Chat from "./Chat"

function Chats(){
return <div className="chats">
    <Chat
     name = "Ellen"
     message = "What you upto!"
     timestamp = "40 seconds ago"
     profilePic="https://filmdaily.co/wp-content/uploads/2020/08/ellendegeneresshow-lede.jpeg"
    />
    <Chat
     name = "Aishwarya"
     message = "What you doing"
     timestamp = "40 minutes ago"
     profilePic="https://c.ndtvimg.com/2020-07/1ntl1smo_aishwarya-rai-bachchan-instagram_625x300_19_July_20.jpg"
    />
    <Chat
     name = "Alice"
     message = "That's fine"
     timestamp = "40 seconds ago"
     profilePic="https://filmdaily.co/wp-content/uploads/2020/08/ellendegeneresshow-lede.jpeg"
    />
    <Chat
     name = "Khan"
     message = "That's perfect!"
     timestamp = "10 minutes ago"
     profilePic="https://c.ndtvimg.com/2020-07/1ntl1smo_aishwarya-rai-bachchan-instagram_625x300_19_July_20.jpg"
    />
</div>;
}

export default Chats;