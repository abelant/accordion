import './App.css';
import Accordion from './components/Accordion'

function App() {
  return (
    <div className="App">
     <Accordion 
        name="What are the best practices for react?"
        content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
      <Accordion 
        name="What are the best practices for html?"
        content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
      <Accordion 
        name="What are the best practices for css?"
        content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
    </div>
  );
}

export default App;
