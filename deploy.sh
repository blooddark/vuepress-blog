#!/usr/bin/env bash

# 保存本项目
git add -A
git commit -m update
git push
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
vuepress build
# 进入生成的文件夹
cd public
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:blooddark/blooddark.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
