module.exports = {
    title: 'Blog of Eddy',
    description: '不忘初心 方得始终 砥砺前行 终达彼岸',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文', link: '/blog/',
                items: [
                    { text: 'Python', link: '/blog/python/' },
                    { text: '日常', link: '/blog/diary/' }
                ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/blooddark/' },
        ],
        sidebar: {
            '/android/': [
                "",
                "android1",
            ],
            "/ios/":[
                "",
                "ios1",
            ],
            "/web/":[
                "",
                "web1",
            ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
}
