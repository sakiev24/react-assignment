import './App.css';
import React from 'react';
import Hello from './components/Hello';
import CourseInfo from './components/CourseInfo';
import StudentCard from './components/StudentCard';
import PrimaryButton from './components/PrimaryButton';
import Card from './components/Card';
import Layout from './components/Layout';
import StudentList from './components/StudentList';
import Menu from './components/Menu';
import Counter from './components/Counter';
import CourseDetails from './components/CourseDetails';
import LivePreview from './components/LivePreview';
import TodoApp from './components/ToDoApp';
import StudentFilter from './components/StudentFilter';

const students = [
  { id: 1, name: "Aida", group: "SE-101", track: "Front-end" },
  { id: 2, name: "Nurlan", group: "SE-102", track: "Back-end" },
  { id: 3, name: "Dastan", group: "SE-103", track: "DevOps" },
];

const menuLinks = ["Home", "Courses", "About", "Contact"];

function App() {
  return (
    <div className="App">
      {/* Exercise 1 */}
      <Hello />
      <hr />

      {/* Exercise 2 */}
      <CourseInfo />
      <hr />

      {/* Exercise 3 */}
      <h2>Student Cards</h2>
      <StudentCard name="Aida" group="SE-101" track="Front-end" />
      <StudentCard name="Nurlan" group="SE-102" track="Back-end" />
      <StudentCard name="Dastan" group="SE-103" track="DevOps" />
      <hr />

      {/* Exercise 4 */}
      <h2>Buttons</h2>
      <PrimaryButton label="Login" />
      <PrimaryButton label="Register" type="secondary" />
      <PrimaryButton label="Submit" />
      <hr />

      {/* Exercise 5 */}
      <h2>Card Component</h2>
      <Card>
        <h3>Important Notice</h3>
        <p>Classes are online this Friday.</p>
      </Card>
      
      <Card>
        <StudentCard name="Aida" group="SE-101" track="Front-end" />
      </Card>
      <hr />

      {/* Exercise 6 */}
      <h2>Layout Component</h2>
      <Layout>
        <h2>Welcome, students!</h2>
        <p>This is your dashboard.</p>
      </Layout>
      <hr />

      {/* Exercise 7 */}
      <h2>Student List</h2>
      <StudentList students={students} />
      <hr />

      {/* Exercise 8 */}
      <h2>Menu Component</h2>
      <Menu links={menuLinks} />
      <hr />

      {/* Exercise 9 */}
      <h2>Counter</h2>
      <Counter />
      <hr />

      {/* Exercise 10 */}
      <h2>Course Details</h2>
      <CourseDetails />
      <hr />

      {/* Exercise 11 */}
      <h2>Live Preview</h2>
      <LivePreview />
      <hr />

      {/* Exercise 12 */}
      <h2>Todo App</h2>
      <TodoApp />
      <hr />

      {/* Exercise 13 */}
      <h2>Student Filter</h2>
      <StudentFilter students={students} />
    </div>
  );
}

export default App;