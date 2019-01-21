module.exports = {
    title: 'Blog of Eddy',
    description: '不忘初心 方得始终 砥砺前行 终达彼岸',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    evergreen: true,
    themeConfig: {
        nav: [
            { text: '最新', link: '/blog/last' },
            { text: '主页', link: '/' },
            { text: '博文',
                items: [
                    { text: 'Python', link: '/blog/python/' },
                    { text: 'Java', link: '/blog/java/' },
                    { text: 'Java-Spring-Data-Jpa', link: '/blog/java-spring-data-jpa/' },
                    { text: 'Linux', link: '/blog/linux/' },
                    { text: 'Docker', link: '/blog/docker/' },
                    { text: '日常', link: '/blog/diary/' }
                ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/blooddark/' },
        ],
        repo: 'blooddark/vuepress-blog',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '帮助我改善此页面！',
        sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: '上次更新',
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/active-header-links', true],
        ['@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    // const moment = require('moment')
                    // moment.locale('zh-cn')
                    // return moment(timestamp).fromNow()
                    return new Date(timestamp).format('yyyy-MM-dd hh:mm:ss')
                }
            }]
    ],
    markdown: {
        lineNumbers: true
    },
}
// 日期格式化
Date.prototype.format = function(format)
{
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(),    //day
        "h+" : this.getHours(),   //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length==1 ? o[k] :
                ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}
