import React from 'react';

export type Highlightable = {
    highlighted: boolean
};

type Props = {};
export const IconContainer: React.FC<Props> = ({children}) => {
    return <span style={{display: 'inline-block', width: 30, height: 30, verticalAlign: 'middle'}}>
    {children}
    </span>
}