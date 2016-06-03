/**
 * 暴露给外部调用
 */

"use strict";

import { DeviceExtension } from "NativeModules";

let language = "en";

export default class Language {

    /**
     * 英文语言包
     */
    static en = {
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

    /**
     *  中文语言包
     */
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
    static getLanguage(callback) {
        //  获取操作系统的语言
        DeviceExtension.getInfo((ex, info) => {
            language = info.language.toLowerCase().split("-")[0];
            callback(this[language]);
        });
    }

}
