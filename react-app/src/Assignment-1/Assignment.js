import "./1.css";
import { Greeting, UserCard, Weather, Counter, TaskList, Button } from "./index1.js";
function Assignment() {
  const tasks=['Task 1','Task 2','Task 3'];
  return (
    <>
      <div className="question-1">
        <h2>Question 1</h2>
        <Greeting />
      </div>

      <div className="question-2">
        <h2>Question 2</h2>
        <div className="user-card">
          <UserCard
            name="Sneha Gupta"
            email="sneha.gupta@successive.com"
            avarUrl="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png"
          />
          <UserCard
            name="Parth Gupta"
            email="parth.gupta@successive.com"
            avarUrl="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
          />
          <UserCard
            name="Raksha Awasthi"
            email="raksha.awathi@successive.com"
            avarUrl="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png"
          />
        </div>
      </div>

      <div className="question-3">
        <h2>Question 3</h2>
        <div className="weather-report">
          <Weather temperature="50" />
          <Weather temperature="10" />
        </div>
      </div>

      <div className="question-4">
        <h2>Question 4</h2>
        <div className="counter-value">
          <Counter />
        </div>
      </div>

      <div className="question-5">
        <h2>Question 5</h2>
        <h1>TaskList</h1>
        <div className="task-list">
          
          <TaskList taskName={tasks} />
        </div>
      </div>

      <div className="question-6">
        <h2>Question 6</h2>
        <h1>Custom Button</h1>
        <div className="button-style">
          <Button text="Click me!" color="blue"/>
          <Button text="Submit" color="green"/>
          <Button text="Cancel" color="red"/>
        </div>
      </div>
    </>
  );
}

export default Assignment;
