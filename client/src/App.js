import React from 'react';
import Image from "./components/Image";

import './App.css';

class App extends React.Component {
  state = {
    userScore: 0,
    userMaxScore: 0,

    cards: [{
      name: "Michael Scott",
      photo: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
      clickedOn: false
    }, {
      name: "Jim Halpert",
      photo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Jim-halpert.jpg",
      clickedOn: false
    }, {
      name: "Dwight Schrute",
      photo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg",
      clickedOn: false
    }, {
      name: "Pam Beesly",
      photo: "https://upload.wikimedia.org/wikipedia/en/6/67/Pam_Beesley.jpg",
      clickedOn: false
    }, {
      name: "Kevin Malone",
      photo: "https://upload.wikimedia.org/wikipedia/en/6/60/Office-1200-baumgartner1.jpg",
      clickedOn: false
    }, {
      name: "Andy Bernard",
      photo: "https://upload.wikimedia.org/wikipedia/en/8/84/Andy_Bernard_photoshot.jpg",
      clickedOn: false
    }, {
      name: "Angela Martin",
      photo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Angela_Martin.jpg",
      clickedOn: false
    }, {
      name: "Erin Hannon",
      photo: "https://upload.wikimedia.org/wikipedia/en/9/93/Erin_Hannon.jpg",
      clickedOn: false
    }, {
      name: "Toby Flenderson",
      photo: "https://upload.wikimedia.org/wikipedia/en/1/18/Toby_Flenderson_promo_picture.jpg",
      clickedOn: false
    }, {
      name: "Creed Bratton",
      photo: "https://upload.wikimedia.org/wikipedia/en/c/cd/CreedBratton%28TheOffice%29.jpg",
      clickedOn: false
    }, {
      name: "Stanley Hudson",
      photo: "https://upload.wikimedia.org/wikipedia/en/2/23/Stanley_Hudson.jpg",
      clickedOn: false
    }, {
      name: "Ryan Howard",
      photo: "https://upload.wikimedia.org/wikipedia/en/9/91/Ryan_Howard_%28The_Office%29.jpg",
      clickedOn: false
    }],

    clickedOn: []
  }





  handleClick = name => {
    console.log(name);

    const {clickedOn, userScore, userMaxScore} = this.state;

    if (clickedOn.includes(name)) {
      console.log("Game over, resetting game")
      this.setState({
        clickedOn: [],
        userScore: 0
      })
      if(userScore > userMaxScore){
        this.setState({
          userMaxScore: userScore
        })
      }
    } else {
      this.setState({
        clickedOn: [...clickedOn, name],
        userScore: userScore + 1
      })
    }

    // this.setState({clickedOn: [...clickedOn, name]})
    // this.setState({userScore: userScore + 1})
    // console.log(userScore);
    console.log(clickedOn);

  }

  render () {
    return (
      <>
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>user score: {this.state.userScore}</p>
        <p>user max score: {this.state.userMaxScore}</p>
      </div>

      {this.state.cards.length ? (
        this.state.cards.map((person, i) => (
          <Image
          key={i}

          id={i}

          name = {person.name}

          link={person.photo}

          cB= {this.handleClick}
          />
        ))
      ) : (
        <h2> something has messed up :( </h2>
      ) }
      </>
    );
  }

}



export default App;