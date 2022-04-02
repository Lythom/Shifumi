import React from "react";
import {Highlightable} from "./Components/Icons";
import RockIcon from "./Components/RockIcon";
import PaperIcon from "./Components/PaperIcon";
import ScissorsIcon from "./Components/ScissorsIcon";
import RockCard from "./Components/RockCard";
import PaperCard from "./Components/PaperCard";
import ScissorsCard from "./Components/ScissorsCard";

export enum ValueEnum {
    Rock,
    Paper,
    Scissors
}

export function PickIcon(value: ValueEnum): React.FunctionComponent<Highlightable> {
    switch (value) {
        case ValueEnum.Rock:
            return RockIcon;
        case ValueEnum.Paper:
            return PaperIcon;
        case ValueEnum.Scissors:
            return ScissorsIcon;
    }
}

export function PickCard(value: ValueEnum): React.FunctionComponent<Highlightable> {
    switch (value) {
        case ValueEnum.Rock:
            return RockCard;
        case ValueEnum.Paper:
            return PaperCard;
        case ValueEnum.Scissors:
            return ScissorsCard;
    }
}

export function PickLabel(value: ValueEnum): string {
    switch (value) {
        case ValueEnum.Rock:
            return "pierre";
        case ValueEnum.Paper:
            return "feuille";
        case ValueEnum.Scissors:
            return "ciseaux";

    }
}