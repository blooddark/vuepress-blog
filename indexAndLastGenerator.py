import os

# 自动生成子目录和最新文章列表

blogPath = os.listdir('blog')
articleList = []
for indexDir in blogPath:
    indexDir = 'blog/' + indexDir
    if os.path.isdir(indexDir):
        fileList = os.listdir(indexDir)
        content = [
            '---\n',
            'title: 目录\n',
            'sidebar: false\n',
            'prev: false\n',
            'next: false\n',
            '---\n',
            '# 目录\n'
        ]
        readmePath = ''
        for mdFile in fileList:
            mdFile = indexDir + '/' + mdFile
            if (mdFile.find('README.md') != -1):
                readmePath = mdFile
                continue

            title = ''
            temp = mdFile[0:mdFile.rfind('/')]
            category = temp[temp.rfind('/') + 1:]
            with open(mdFile, 'r', encoding = 'utf8') as fp:
                line = fp.readline()
                while line.find('#') == -1:
                    line = fp.readline()
                title = line[2:-1]
                content.insert(7, '## [' + title + '](' + mdFile[mdFile.rfind('/') + 1:] + ')\n')

            # 获取修改时间确定最新文章
            modifyTime = os.stat(mdFile).st_mtime
            articleList.append((modifyTime, mdFile, title, category))

        with open(readmePath, 'w', encoding='utf8') as fp:
            fp.writelines(content)

articleList.sort(key = lambda x:x[0], reverse = True)
content = [
    '---\n',
    'sidebar: false\n',
    '---\n',
    '# 最新\n',
]
with open('blog/last.md', 'w', encoding='utf8') as fp:
    for article in articleList:
        content.append('## [' + article[2] + '[' + article[3] + ']](' + article[1][article[1].find('/') + 1:] + ')\n')
    fp.writelines(content)