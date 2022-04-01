import React from 'react';
import Colors from "../Colors";

type Props = {};
const Background: React.FC<Props> = ({children}) => {
  return (
    <div className="Background" style={{width: 1440, height: 1024, margin: 'auto', overflow: 'hidden', backgroundColor: Colors.BackgroundM}}>
      {children}
    </div>
  );
}

export default Background;
