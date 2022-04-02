import React from 'react';
import CSS from 'csstype';
import {PickIcon, PickLabel, ValueEnum} from "../ValueEnum";
import Colors from "../Colors";

export enum HightlightSide {
    None,
    Left,
    Right,
    Equals = 3
}

type Props = {
    backgroundColor: CSS.Property.Color,
    highlight: HightlightSide,
    left: ValueEnum,
    right: ValueEnum
};
const OneBeatsTwo: React.FC<Props> = ({backgroundColor, highlight, left, right}) => {
    const Left = PickIcon(left)
    const Right = PickIcon(right)

    let label = 'égalité !'
    if (highlight !== HightlightSide.Equals) {
        let leftLabel: string = highlight === HightlightSide.Left ? PickLabel(left) : PickLabel(right);
        let rightLabel: string = highlight === HightlightSide.Left ? PickLabel(right) : PickLabel(left);
        label = leftLabel + ' bat ' + rightLabel
    }
    return (
        <div className="OneBeatsTwo" style={{width: 204, height: 50, borderRadius: 5, backgroundColor}}>
            <Left highlighted={highlight === HightlightSide.Left}/>
            <span style={{
                fontFamily: 'Chivo',
                color: Colors.TextColor,
                marginLeft: 10,
                marginRight: 10,
                fontSize: '0.75rem',
                fontWeight: 400
            }}>{label}</span>
            <Right highlighted={highlight === HightlightSide.Right}/>
        </div>
    );
}

export default OneBeatsTwo;
