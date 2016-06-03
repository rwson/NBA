/**
 *  配置暴露模块
 */

"use strict";

import * as Teams from "./Teams";
import * as Urls from "./Urls";

export default class Configs {

    static Teams = Teams.default;

    static Urls = Urls.default;

}
