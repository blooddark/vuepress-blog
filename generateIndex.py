import os
blogPath = os.listdir('blog')
for indexDir in blogPath:
    indexDir = 'blog/' + indexDir
    if os.path.isdir(indexDir):
        fileList = os.listdir(indexDir)
        indexTempList = []
        for mdFile in fileList:
            mdFile = indexDir + '/' + mdFile
            if (mdFile == 'README.md'):
                continue
            with open(mdFile, 'r', encoding = 'utf8') as fp:
                print(fp.readline())