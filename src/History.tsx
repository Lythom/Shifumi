import Colors from "./Colors";
import OneBeatsTwo from "./Components/OneBeatsTwo";
import React from "react";
import {Play} from "./App";
import {GetWinnerSide} from "./game";

type HistoryProps = {
    plays: Play[]
};

export function History(props: HistoryProps) {
    let {plays} = props;
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
            <span className="title">Historique des coups</span>
            <div style={{marginBottom: 36}}></div>
            {plays.map((p, idx) => (
                <OneBeatsTwo key={idx} backgroundColor={Colors.BackgroundL} highlight={GetWinnerSide(p)} left={p.player}
                             right={p.ai}/>
            ))}
        </div>
    </div>;
}