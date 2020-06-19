import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Note from "./Note";
import notes from "../notes";

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <div className="container">
        {/*Ternary Operator*/}
        {isLoggedIn ? <h1>Hello</h1> : <Login />}
        {/*AND Operator*/}
        {currentTime > 12 && <h1>Welcome to Merit Banking Services</h1>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
