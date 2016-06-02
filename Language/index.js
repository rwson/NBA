/**
 * 暴露给外部调用
 */

"use strict";

import { NativeModules } from "react-native";

export default class Language {

    static zn = {
        "games": "Games",
        "game": "Game",
        "team": "Teams",
        "player": "Players",
        "playing": "Playing",
        "final": "Final",
        "home": "Home",
        "away": "Away",
        "score": "Score",
        "assists": "Assists",
        "rebound": "Rebounds",
        "steal": "Steals",
        "block": "Blocks",
        "highest": "Highest",
        "lowest": "Lowest"
    };

    static zh = {
        "games": "场比赛",
        "game": "比赛",
        "team": "球队",
        "player": "球员",
        "playing": "正在进行",
        "final": "完成",
        "home": "主队",
        "away": "客队",
        "score": "得分",
        "assists": "助攻",
        "rebound": "篮板",
        "steal": "抢断",
        "block": "盖帽",
        "highest": "最高",
        "lowest": "最低"
    };

    /**
     * 根据系统语言进行相关配置
     * @returns {Object}
     */
    static getLanguage() {
        const language = NativeModules.RNI18n.locale.split(/\_/g)[0].toLocaleLowerCase();
        return this[language];
    }

}
