/**
 * 网络请求模块
 */

"use strict";

import Util from "../Util";
import Configs from "../Configs";

//  http请求默认配置
const requestDefault = {
    "mode": "cors",
    "credentials": "include",
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }
};

export default class NetWork {

    /**
     * GET请求
     * @param opts  配置参数
     */
    static getRequest(opts) {
        fetch(opts.url, {
            ...requestDefault,
            "method": "GET"
        }).then((res) => {
            return res.json();
        }).then((res) => {
            Util.runCallback({
                "callback": opts.callback,
                "context": opts.context,
                "argus": [res, opts]
            });
        }).catch((ex) => {
            throw  ex;
        });
    }

    /**
     * POST请求
     * @param opts  配置参数
     */
    static postRequest(opts) {
        fetch(opts.url, {
            ...requestDefault,
            "method": "POST",
            "body": JSON.stringify(opts.body)
        }).then((res) => {
            return res.json();
        }).then((res) => {
            Util.runCallback({
                "callback": opts.callback,
                "context": opts.context,
                "argus": [res, opts]
            });
        }).catch((ex) => {
            throw ex;
        });
    }

}

