import {useState, useEffect} from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';


function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [goodFbPercent, setGoodFbPercent]=useState(0)
  

  const feedbackCountUpdate = (type) => {
    switch (type) {
      case 'good':
        setGood(prevState=>prevState+1);
        break
      case 'neutral':
        setNeutral(prevState=>prevState+1);
        break
      case 'bad':
        setBad(prevState=>prevState+1);
        break
      default:
        return
    }
  }
  useEffect(() => {
    setTotal(good + bad + neutral)
  },[good, bad, neutral])

  useEffect(() => {
    setGoodFbPercent((good * 100 / total).toFixed(0))
  },[good, total])
 
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={feedbackCountUpdate}
            />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={goodFbPercent}
          />
        </Section>
          
      </div>
    )
  
}

export default App;