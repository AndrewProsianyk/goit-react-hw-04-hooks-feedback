import React, {Component} from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = option => {
    this.setState(prevState => ({
        [option]: prevState[option] + 1
    }))
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100 / (this.countTotalFeedback())).toFixed(0)
  }
  

  render()
  {
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']} 
              onLeaveFeedback={this.onLeaveFeedback} />
          </Section>

          <Section title="Statistics">
            <Statistics
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section>
          
        </div>
      )
    }
  }

export default App;