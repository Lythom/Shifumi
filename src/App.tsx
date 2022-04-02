import React, {useState} from 'react';
import './App.css';
import Background from "./Components/Background";
import {ValueEnum} from "./ValueEnum";
import ScissorsButtonSvg from './Assets/Bouton/Ciseaux/Basic.svg'
import PaperButtonSvg from './Assets/Bouton/Feuille/Basic.svg'
import RockButtonSvg from './Assets/Bouton/Pierre/Basic.svg'
import {History} from "./History";
import {Rules} from "./Rules";
import {play} from "./game";
import {Title} from "./Title";
import {GameBoard} from "./GameBoard";
import {Scores} from "./Scores";

export type Play = {
    player: ValueEnum,
    ai: ValueEnum
}
export type State = {
    history: Play[]
}

function App() {
    const [history, setHistory] = useState<Play[]>([]);

  return (
    <div className="App">
        <Background>
            <Title/>
            <Scores/>
            <div className="midArea" style={{display: "flex", margin: 'auto', width: 1200}}>
                <Rules/>
                <GameBoard play={history.length === 0 ? null : history[history.length - 1]}/>
                <History plays={history}/>
            </div>
            <div className="buttons" style={{display: "flex", margin: 'auto', width: 710, marginTop: 20 }}>
                <button style={{backgroundColor: 'transparent', border: "none"}}
                    onClick={() => setHistory([...history, play(ValueEnum.Rock)])}
                ><img src={RockButtonSvg} alt="Pierre" /></button>
                <button style={{backgroundColor: 'transparent', border: "none"}}
                        onClick={() => setHistory([...history, play(ValueEnum.Paper)])}
                ><img src={PaperButtonSvg} alt="Feuille" /></button>
                <button style={{backgroundColor: 'transparent', border: "none"}}
                        onClick={() => setHistory([...history, play(ValueEnum.Scissors)])}
                ><img src={ScissorsButtonSvg} alt="Ciseaux" /></button>
            </div>

        </Background>
    </div>
  );
}

export default App;
