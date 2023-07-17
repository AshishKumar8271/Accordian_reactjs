import React from 'react'
import "./Q&A/style.css";
import QuesAndAns from './Q&A/Questions';
import Questions from "./Q&A/data";
const App = () => {
  return (
    <article>
      <div className="container">
        <h1 className="header">Question And Answers About Login</h1>
      </div>
    
      <section className="main">
      {
        Questions.map((SingleQue)=>{
        return <QuesAndAns key={SingleQue.id} {...SingleQue}/>
        })
      }
      </section>
    </article>
  )
}

export default App;
