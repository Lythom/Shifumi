import Colors from "./Colors";
import React from "react";
import {Play} from "./App";
import {PickCard} from "./ValueEnum";

type GameProps = {
    play: Play | null
}

export function GameBoard({play}: GameProps) {
    const LeftCard = play == null ? null : PickCard(play.player)
    const RightCard = play == null ? null : PickCard(play.ai)

    let content = null;
    if (LeftCard != null && RightCard != null) {
        content = <>
            <span style={{display: 'inline-block', margin: 80}}><LeftCard highlighted={false}/></span>
            <span style={{display: 'inline-block', margin: 80}}><RightCard highlighted={false}/></span>
        </>
    }

    return <div style={{
        flex: 'initial',
        width: 710,
        height: 420,
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: Colors.BackgroundL
    }}>
        {content}
    </div>;
}