import React from "react";
import {Highlightable} from "./Components/Icons";
import StoneIcon from "./Components/StoneIcon";
import LeafIcon from "./Components/LeafIcon";
import ScissorsIcon from "./Components/ScissorsIcon";

export enum ValueEnum {
    Stone,
    Leaf,
    Scissors
}

export function PickIcon(value: ValueEnum): React.FunctionComponent<Highlightable> {
    switch (value) {
        case ValueEnum.Stone:
            return StoneIcon;
        case ValueEnum.Leaf:
            return LeafIcon;
        case ValueEnum.Scissors:
            return ScissorsIcon;

    }
}

export function PickLabel(value: ValueEnum): string {
    switch (value) {
        case ValueEnum.Stone:
            return "pierre";
        case ValueEnum.Leaf:
            return "feuille";
        case ValueEnum.Scissors:
            return "ciseaux";

    }
}