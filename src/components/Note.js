import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

const Note = () => {

  // const [cards, setcard] = useState([]);

  // useEffect( ()=>{
  //   const fetchdata = async ()=>{
  //       const response = await fetch('./data.json');
  //       const data = response.json();
  //       setcard(data);
  //     }
  //   fetchdata();
  // }, [])

  

  // return (
  //   <div>
  //     {cards.map((data, index) => (
  //   <Card
  //   key = {index}
  //   image={data.image}
  //   title={data.title}
  //   summary={data.summary}
  //   description={data.description}
  //   pull_count={data.pull_count}
  // />))}
  
  //   </div>
  // );
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/data.json'); // Adjust the path if needed
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);


    return (
        <div>
            {cards.map((data, index) => (
                <Card
                    key={index}
                    image={data.image}
                    title={data.title}
                    summary={data.summary}
                    description={data.description}
                    pull_count={data.pull_count}
                />
            ))}
        </div>
    );
}

export default Note;
