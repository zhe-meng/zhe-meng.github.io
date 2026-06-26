// 异步加载百度统计脚本
(function() {
    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?ebef1627c08c26f58c63825e2dc8940e';
    hm.async = true;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
})();