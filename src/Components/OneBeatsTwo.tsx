import React from 'react';
import CSS from 'csstype';
import './App.css';
import {PickIcon, PickLabel, ValueEnum} from "../ValueEnum";

export enum HightlightSide {
  None,
  Left,
  Right
}

type Props = {
  backgroundColor: CSS.Property.Color,
  highlight: HightlightSide,
  left: ValueEnum,
  right: ValueEnum
};
const OneBeatsTwo: React.FC<Props> = ({backgroundColor, highlight, left, right}) => {
  var Left = PickIcon(left)
  var Right = PickIcon(right)
  return (
    <div className="OneBeatsTwo" style={{width: 204, height: 50, borderRadius: 5, backgroundColor}}>
      <Left highlighted={highlight === HightlightSide.Left} />
      <span>{PickLabel(left)} bat {PickLabel(right)}</span>
      <Right highlighted={highlight === HightlightSide.Right} />
    </div>
  );
}

export default OneBeatsTwo;
