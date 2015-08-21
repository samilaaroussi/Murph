/* 
* @Author: @schumilin
* @Date:   2015-01-28 14:20:50
* @Last Modified by:   Jiyun
* @Last Modified time: 2015-03-27 13:08:23
*/

/*global $, jQuery, ga, _gaq*/

/* jshint ignore:start */
;
/* jshint ignore:end */

// TODO:
// by jiyun
// 1 增加 sdk 的版本信息
// 2 如果当前 P4 的版本不支持某个接口，需要有个 callbak ，方便做降级处理
// 3 迁移到 Bower

(function (window, undefined) {

    var campaignTools = {};

    campaignTools.constant = {
        // 用于电话号码验证，已加入阿里巴巴运营的 170 号段，最后更新于 2014.7
        telReg: /^0?(13[0-9]|15[0-9]|18[0-9]|14[57]|17[0])[0-9]{8}$/
    };

    /*
     * GA 事件统计
     */
    campaignTools.pushGaEvent = function (category, action, label, value) {
        
        category = category || '';
        action = action || '';
        label = label || '';
        value = parseInt(value, 10) || 0;

        if (typeof ga !== 'undefined' && ga) {
            ga('send', 'event', category, action, label, value);
        } else if (typeof _gaq !== 'undefined' && _gaq) {
            _gaq.push(['_trackEvent', category, action, label, value]);
        }
    };

    /*
     * body 高设置为屏幕显示区域高度
     * @notice Webview 有时屏幕初始高度会有 bug，此方法为解决此 bug
     */
    campaignTools.setFullScreenHeight = function (minHeight) {

        var height = window.innerHeight;
        minHeight = minHeight || 480; // 根据页面需求变化，默认 480px

        if (height < minHeight) {
            setTimeout(function () {
                height = window.innerHeight;
                if (height < minHeight) {
                    height = minHeight;
                }
                document.body.style.height = height + 'px';
            }, 1000);
        } else {
            document.body.style.height = height + 'px';
        }
    };

    /*
     * 判断设备
     * @type Object
     * {
     *   inWdj:     true || false,
     *   inIos:     true || false,
     *   inAndroid: true || false,
     *   inMac:     true || false,
     *   inWindow:  true || false,
     *   inWechat:  true || false,
     *   isRetina:  true || false
     * }
     */
    campaignTools.UA = (function () {

        var ua = navigator.userAgent.toLowerCase();
        var uaObj = {};

        uaObj.inWdj = typeof window.campaignPlugin !== 'undefined' && window.campaignPlugin;
        
        uaObj.inIos = !!ua.match(/(iphone|ipod|ipad)/);

        uaObj.inAndroid = !!ua.match(/(android)/);

        uaObj.inMac = navigator.platform.indexOf('Mac') === 0;

        uaObj.inWindow = navigator.platform.indexOf('Win') === 0;

        uaObj.inWechat = !!ua.match(/micromessenger/);

        uaObj.isRetina = typeof window.campaignPlugin !== 'undefined' && window.devicePixelRatio > 1;

        return uaObj;
    })();

    /*
     * 判断是否在 PC 中
     * @return {boolean} true || false
     */
    // TODO: 合并进 UA 对象
    campaignTools.inPC = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        return flag;
    };

    if (campaignTools.UA.inWdj) {

        var campaignPlugin = window.campaignPlugin;

        /*
         * 调起安卓系统级别分享
         * @param title {string} 分享标题
         * @param content {string} 分享内容
         * @notice 只可分享文字，如需带有图片的分享请使用 shareTo 方法
         */
        campaignTools.runSystemShare = function (title, content) {
            title = title || '豌豆荚';
            content = content || '你的手机娱乐中心';
            campaignPlugin.share(title, content);
        };

        /*
         * 调起应用级别分享
         * @param title {string} 分享标题
         * @param content {string} 分享内容
         * @param imgUrl {string} 分享图片的地址(不建议过大)
         * @param shareUrl {string} 分享 URL
         * @param appType {string} SINA_WEIBO || WECHAT || WECHAT_TIMELINE
         * @notice 目前只支持新浪微博，微信对话框，微信朋友圈
         */
        campaignTools.runAppShare = function (title, content, imgUrl, shareUrl, appType) {
            title = title || '豌豆荚';
            content = content || '你的手机娱乐中心';
            imgUrl = imgUrl || 'http://static.wdjimg.com/www/images/www/p4.png';
            shareUrl = shareUrl || 'http://www.wandoujia.com/';
            appType = appType || 'SINA_WEIBO';
            campaignPlugin.shareTo(title, content, imgUrl, shareUrl, appType);
        };

        /*
         * 在外部浏览器中打开链接
         * @param {string} URL
         */
        campaignTools.openInBrowser = function (url) {
            campaignPlugin.openInBrowser(url);
        };

        /*
         * 获取手机 UDID
         * @return {string} UDID
         */
        campaignTools.getUDID = function () {
            return campaignPlugin.getUDID();
        };

        /*
         * 获取应用安装状态
         * @param packageName {string} 应用包名
         * @return {boolean} true || false
         */
        campaignTools.isInstalled = function (packageName) {
            return campaignPlugin.isInstalled(packageName);
        };

        /*
         * 获取应用版本号
         * @param packageName {string} 应用包名
         * @return {string} 版本号
         * @notice 慎用，取到的是 versionCode，通常你需要的是格式为 1.23.45 的 versionName
         */
        campaignTools.getAppVersionCode = function (packageName) {
            return campaignPlugin.getAppVersionCode(packageName);
        };

        /*
         * 打开其他应用
         * @param packageName {string} 应用包名
         */
        campaignTools.openApp = function (packageName) {
            campaignPlugin.openApp(packageName);
        };

        /*
         * 打开应用在 P4 内的详情页
         * @param packageName {string} 应用包名
         */
        campaignTools.openAppDetail = function (packageName) {
            campaignPlugin.openAppDetail(packageName);
        };

        /*
         * 打开非设计奖的详情页
         * @param packageName {string} 应用包名
         */
        campaignTools.openAppDetailWithoutAward = function (packageName) {
            campaignPlugin.openAppDetailWithoutAward(packageName);
        };

        /*
         * 打开其他应用内某页面
         * @param serializedIntent {string} 应用内搜索协议地址 
         * @example meituanmovie://www.meituan.com/movie?id=78379&nm=后会无期
         */
        campaignTools.sendIntent = function (serializedIntent) {
            campaignPlugin.startActivity(serializedIntent);
        };

        // TODO: 下面四个合并成一个接口
        campaignTools.openVideoDetail = function (id) {
            campaignPlugin.startActivity('wdj://detail/video/' + id + '?video_type=');
        };

        campaignTools.openEbookDetail = function (id) {
            campaignPlugin.startActivity('wdj://detail/ebbok/' + id);
        };

        campaignTools.searchWords = function (str) {
            campaignPlugin.startActivity('wdj://search?q=' + str);
        };

        campaignTools.openSubscribeDetail = function (id, type) {
            campaignPlugin.startActivity('wdj://detail/subscribe/publisher/' + type + '/' + id);
        };

        /*
         * !ABANDON! *
         * 安装应用
         * @param packageName {string} 应用包名
         * @param downloadUrl {string} 下载链接
         * @param appName {string} 应用名称（用于显示在 P4 下载任务列表中）
         * @param iconUrl {string} 图标 URL（用于显示在 P4 下载任务列表中）
         * @param size {number} 应用大小（请访问 http://apps.wandoujia.com/api/v1/apps/ + packageName 查询 bytes 字段）

            campaignTools.installApp = function (packageName, downloadUrl, appName, iconUrl, size) {
                campaignPlugin.install(packageName, downloadUrl, appName, iconUrl, size);
            };
         */

        /*
         * 打开一个新的 Webview
         * @param url {string} Webview 加载的 URL
         * @param title {string} Webview 顶部的标题
         * @param showActionBar {boolean} 是否显示顶部系统状态栏（时间，电量，运营商那栏）
         * @param isPortrait {boolean} 竖屏(true) or 横屏(false)
         * @param isFullScreen {boolean} 是否隐藏掉底部虚拟按钮栏（特定机型才有）
         */
        campaignTools.openNewWebView = function (url, title, showActionBar, isPortrait, isFullScreen) {
            url = url || 'http://www.wandoujia.com';
            title = title || '豌豆荚';
            showActionBar = showActionBar || true;
            isPortrait = isPortrait || true;
            isFullScreen = isFullScreen || false;
            campaignPlugin.openNewWebView(url, title, showActionBar, isPortrait, isFullScreen);
        };

        /*
         * 安装应用
         * @param packageName {string} 要安装的应用包名
         * @param callback {function} 如果安装完毕后需要执行回调请传入
         * @notice 不带 POS 信息，如需 POS 信息请使用废弃的老方法，把 POS 信息写进 URL 中，
                   此接口已经开始 Polish，下一版本会加上 POS 参数
         */
        campaignTools.installApp = function (packageName, callback) {
            campaignPlugin.installByPackage(packageName);

            if (callback && typeof callback === 'function') {

                var installed = false;
                var checkInstalled = setInterval(function () {
                    installed = campaignPlugin.isInstalled(packageName);
                    if (installed) {
                        clearInterval(checkInstalled);
                        checkInstalled = 0;
                        callback();
                    }
                }, 1500);
            }
        };

        /*
         * 打开应用在 P4 内的用户个人主页
         * @param uid {string} 用户的 UID
         * @example '4383987'
         */
        campaignTools.openUserDetail = function (uid) {
            campaignPlugin.openUserDetail(uid);
        };

        /*
         * 关闭当前 WebView
         */
        campaignTools.closeWebView = function () {
            campaignPlugin.closeWebView();
        };

        /*
         * toast
         */
        campaignTools.toast = function (string) {
            campaignPlugin.toast(string);
        };

        /*
         * 获得当前 P4 版本号
         */
        // TODO: to a object
        campaignTools.getVersionName = function () {
            return campaignPlugin.getVersionName();
        };

        /*
         * 获得当前 P4 IMEI
         * 
         */
        campaignTools.getIMEI = function () {
            return campaignPlugin.getIMEI();
        };

        /*
         * 获得 Android 系统 SDK Version
         * 
         */
        campaignTools.getSDKVersion = function () {
            return campaignPlugin.getSDKVersionInt();
        };

        /*
         * 从页面中复制文字到系统剪贴板
         * @param string {string} 要复制的文字
         * @example '这是一段文字'
         */
        campaignTools.setClipboardText = function (string) {
            return campaignPlugin.setClipboardText(string);
        };

    }

    var _campaignTools = window.campaignTools;
    window.campaignTools = campaignTools;

    campaignTools.noConflict = function () {
        window.campaignTools = _campaignTools;
        return campaignTools;
    };
})(this);
