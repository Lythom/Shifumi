import Colors from "./Colors";
import OneBeatsTwo, {HightlightSide} from "./Components/OneBeatsTwo";
import {ValueEnum} from "./ValueEnum";
import React from "react";

export function Rules() {
    return <div
        style={{flex: 'initial', width: 224, height: 420, borderRadius: 20, backgroundColor: Colors.BackgroundL}}>
        <div style={{
            width: 204,
            height: 35,
            margin: 10,
            paddingTop: 5,
            borderRadius: 20,
            backgroundColor: Colors.BackgroundXL
        }}>
            <span className="title">Règles du jeu</span>
            <div style={{marginBottom: 36}}></div>
            <OneBeatsTwo backgroundColor={Colors.BackgroundL} highlight={HightlightSide.None} left={ValueEnum.Rock}
                         right={ValueEnum.Scissors}/>
            <OneBeatsTwo backgroundColor={Colors.BackgroundL} highlight={HightlightSide.None} left={ValueEnum.Paper}
                         right={ValueEnum.Rock}/>
            <OneBeatsTwo backgroundColor={Colors.BackgroundL} highlight={HightlightSide.None} left={ValueEnum.Scissors}
                         right={ValueEnum.Paper}/>
        </div>
    </div>;
}