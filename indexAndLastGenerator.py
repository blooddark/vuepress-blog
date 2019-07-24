import os

# 自动生成子目录和最新文章

blogPath = os.listdir('blog')
lastestArticle = []
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

            # 获取修改时间确定最新文章
            modifyTime = os.stat(mdFile).st_mtime
            print(modifyTime)
            
            with open(mdFile, 'r', encoding = 'utf8') as fp:
                line = fp.readline()
                while line.find('#') == -1:
                    line = fp.readline()
                print(mdFile[mdFile.rfind('/') + 1:])
                content.append('## [' + line[2:-1] + '](' + mdFile[mdFile.rfind('/') + 1:] + ')\n')
        with open(readmePath, 'w') as fp:
            fp.writelines(content)
