/**
 * 请求地址相关配置
 */

"use strict";

const date = new Date();
const currentMonth = date.getMonth() + 1;
let season;

//  赛季
if (currentMonth >= 10) {
    season = date.getFullYear().toString() + "-" + (date.getFullYear() + 1).toString().substring(2, 4);
} else {
    season = (date.getFullYear().toString() - 1) + "-" + date.getFullYear().toString().substring(2, 4);
}

export default {

    /**
     * 当前日期对应的所有比赛
     * @params gameDate 日期(20160603)
     * @returns {String}
     */
    allGameToday: (gameDate) => {
        return `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${gameDate}/games.json`
    },

    /**
     * 获取具体的比赛详情
     * @params gameDate 日期(20160603)
     * @params gameId   比赛id(0021500239)
     * @returns {String}
     */
    gameDetail: (gameDate, gameId) => {
        return `http://data.nba.com/data/10s/json/cms/noseason/game/${gameDate}/${gameId}/boxscore.json`
    },

    /**
     * 当前球队排名
     * @params year 年份(2016)
     * @returns {String}
     */
    leagueStanding: (year) => {
        return `http://data.nba.com/data/json/cms/${year}/league/standings.json`
    },

    /**
     * 球员列表
     * @returns {String}
     */
    playerList: () => {
        return `http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=0&LeagueID=00&Season=${season}`
    },

    /**
     * 球员信息
     * @param id    球员id
     * @returns {String}
     */
    playerInfo: (id) => {
        return `http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=${id}&SeasonType=Regular+Season`
    },

    /**
     * 球员日志
     * @param id    球员id
     * @returns {String}
     */
    playerLog: (id) => {
        return `http://stats.nba.com/stats/playergamelog?LeagueID=00&PerMode=PerGame&PlayerID=${id}&Season=${season}&SeasonType=Regular+Season`
    },

    /**
     * 球队排名
     * @param date  日期
     * @returns {String}
     */
    teamRank: (date) => {
        return `http://stats.nba.com/stats/scoreboard?DayOffset=0&LeagueID=00&gameDate=${date}`
    },


    /**
     * 某个赛季某个球队的信息
     * @param id  球队id
     * @returns {String}
     */
    teamInfo: (id) => {
        return `http://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID=${id}&season=${season}`
    },

    /**
     * 某个赛季某个球队的详情
     * @param id  球队id
     * @returns {String}
     */
    teamDetail: (id) => {
        return `http://stats.nba.com/stats/teamplayerdashboard?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlusMinus=N&Rank=N&Season=${season}&SeasonSegment=&SeasonType=Regular+Season&TeamID=${id}&VsConference=&VsDivision=`
    },

    /**
     * 某个赛季某个球队的详情
     * @param id  球队id
     * @returns {String}
     */
    teamDetailBasic: (id) => {
        return `http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=${season}&TeamID=${id}`
    }
};
