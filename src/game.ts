import {HightlightSide} from "./Components/OneBeatsTwo";
import {ValueEnum} from "./ValueEnum";
import {Play} from "./App";

export function GetWinnerSide(p: Play): HightlightSide {
    if (p.player === ValueEnum.Scissors && p.ai === ValueEnum.Rock) return HightlightSide.Right
    if (p.player === ValueEnum.Paper && p.ai === ValueEnum.Scissors) return HightlightSide.Right
    if (p.player === ValueEnum.Rock && p.ai === ValueEnum.Paper) return HightlightSide.Right
    if (p.player === ValueEnum.Rock && p.ai === ValueEnum.Scissors) return HightlightSide.Left
    if (p.player === ValueEnum.Scissors && p.ai === ValueEnum.Paper) return HightlightSide.Left
    if (p.player === ValueEnum.Paper && p.ai === ValueEnum.Rock) return HightlightSide.Left
    return HightlightSide.Equals;
}

export function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
}

export function play(playerPlay: ValueEnum): Play {
    return {
        player: playerPlay,
        ai: randomEnum(ValueEnum)
    }
}