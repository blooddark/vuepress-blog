module.exports = {
    dest: 'public',
    title: 'Blog of Eddy',
    description: '不忘初心 方得始终 砥砺前行 终达彼岸',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    evergreen: true,
    themeConfig: {
        lastUpdated: '上次更新', // string | boolean
        nav: [
            { text: '支持', link: '/support/' },
            { text: '最新', link: '/blog/last' },
            { text: '主页', link: '/' },
            { text: '博文',
                items: [
                    { text: 'Python', link: '/blog/python/' },
                    { text: 'Java', link: '/blog/java/' },
                    { text: 'Java-Spring-Data-Jpa', link: '/blog/java-spring-data-jpa/' },
                    { text: 'Linux', link: '/blog/linux/' },
                    { text: 'Docker', link: '/blog/docker/' },
                    { text: 'Nginx', link: '/blog/nginx/' },
                    { text: '前端', link: '/blog/front-end/' },
                    { text: '日常', link: '/blog/diary/' }
                ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/blooddark/' },
        ],
        repo: 'blooddark/vuepress-blog',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '帮助我改善此页面',
        sidebar: [
            '/',
            '/blog/',
            {
                title: '日常',
                children: [
                    '/blog/diary/',
                    '/blog/diary/5',
                    '/blog/diary/4',
                    '/blog/diary/3',
                    '/blog/diary/2',
                    '/blog/diary/1',
                ]
            },
            {
                title: 'Docker',
                children: [
                    '/blog/docker/',
                    '/blog/docker/4',
                    '/blog/docker/3',
                    '/blog/docker/2',
                    '/blog/docker/1',
                ]
            },
            {
                title: 'Java',
                children: [
                    '/blog/java/',
                    '/blog/java/5',
                    '/blog/java/4',
                    '/blog/java/3',
                    '/blog/java/2',
                    '/blog/java/1',
                ]
            },
            {
                title: 'Java-Spring-Data-Jpa',
                children: [
                    '/blog/java-spring-data-jpa/',
                    '/blog/java-spring-data-jpa/1',
                ]
            },
            {
                title: 'Linux',
                children: [
                    '/blog/linux/',
                    '/blog/linux/1',
                ]
            },
            {
                title: 'Nginx',
                children: [
                    '/blog/nginx/',
                    '/blog/nginx/4',
                    '/blog/nginx/3',
                    '/blog/nginx/2',
                    '/blog/nginx/1',
                ]
            },
            {
                title: 'Python',
                children: [
                    '/blog/python/',
                    '/blog/python/1',
                ]
            },
            { title: '前端', children: [
                    '/blog/front-end/',
                    '/blog/front-end/1',
                ]
            },
        ],

sidebarDepth: 2,
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/active-header-links', true],
    ],
    markdown: {
        lineNumbers: true
    },
}
