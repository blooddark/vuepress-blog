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
                    { text: 'Linux', link: '/blog/linux/' },
                    { text: '日常', link: '/blog/diary/' }
                ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/blooddark/' },
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: '上次更新',
    },
    markdown: {
        lineNumbers: true
    },
    permalink: "/:year/:month/:day/:slug",
    plugins: [
        ['@vuepress/active-header-links', true],
        ['@vuepress/back-to-top', true],
        ['@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        }]
    ]
}
