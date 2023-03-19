import React, { useState } from 'react'
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics'
import { Feedback } from "./Feedback/Feedback";
import {Notification} from "./Notification/Notification"

export function App() { 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const feedback  = { good , neutral , bad}
  
  const handleIncrementRew = (e) => {
    const { name } = e.target;
    
    
   switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        console.log('We dont understand :(...');
    }
  };
  
  const countTotalFeedback = () => {
  
    return good + neutral + bad;
    
  }

  const handltPositive = () => {
    
    return ((good * 100) / (good + neutral + bad)).toFixed(2);
  }

  
   
  
      
     return (<div
      style={{
      textAlign: 'center',
      fontSize: 24,
      color: '#010101'
      }}>
       

        <Section title = "Please leave your feedback">
          <Feedback
            options={Object.keys(feedback)}
            onLeaveFeedback={handleIncrementRew}>
            
            </Feedback>
       </Section>
     

         
        <Section title='Statistick'>
          {countTotalFeedback() > 0
          ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={handltPositive()}>
          </Statistics>
          : <Notification message='There is no feedback' />}
           </Section>
         
        </div>)
       
     
   }


export default App;



