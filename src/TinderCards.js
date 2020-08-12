import React, {useState, useEffect} from "react";
import { Card, CardWrapper } from 'react-swipeable-cards';
import database from './firebase'
import "./TinderCards.css"

const action = (action) => {
    console.log('action', action);
    };

function TinderCards(){
    const [people, setPeople] = useState([]);
    // Piece of code which runs based on a condition
    useEffect(() => {
        // this is where the code runs..
        // this will run ONCE when the component loads
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, [people]);
    
   /*  const [people, setPeople] = useState([
        {
            name:'steve jobs',
            url:"https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
        },
        {
            name: 'mark zuckerberg',
            url: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/05/0/0/Mark-Zuckerberg-Getty.jpg?ve=1&tl=1"
        }
      ]); */
    // const people = [];
    // setPeople([...people, 'andrew', 'geoffrey'])
    return (
            <div className="tinderCards__cardContainer">

        <CardWrapper>
        {people.map((person) =>(
             <Card 
                   className="swipe" 
                    key={person.name}
                    onSwipeLeft={action('swipe left')} 
                    onSwipeRight={action('swipe right')}
               >
                <div 
                    style={{backgroundImage: `url(${person.url})` }}
                    className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </Card>
        ))}
        </CardWrapper>
        </div>
    );
}
export default TinderCards;