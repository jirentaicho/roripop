# セットアップ

予めdistフォルダをpushできるようにgitのセットアップを行います。
※ npm run generateをすると出力先のフォルダが一旦全て消えるので、出力にフォルダを１つはさんでいます。 result/dist
resultの中でgitを管理しています。

* root(nuxt.config.js)
    * result(.git)
        * dist

> git init

> /nuxtapps/work/nuxtpress/result (master)
> $ git remote add origin https://github.com/jirentaicho/roripop

> git pull origin main

> git checkout main


このディレクトリにある"gulpfile.js"はサンプルです。
このファイルはrootディレクトリに置いて実行してください。

また、distの出力先の設定方法は
"nuxt.config.js"で行います。

```
  generate:{
    dir: "result/dist"
  }
```

# gulpについて

gulpのexecでコマンドを実行していますので、gitやjenkinsに必要な特別なパッケージは必要ありません。

```
gulp.task('commit', done => {
    exec('git commit -m "from gulp"',
        (err,stdout,stderr) => {
            done(err);
        })
})
```

当方の環境はDockerでJenkinsを立ち上げています。


Jenkinsはトークンを指定してコマンドからジョブを実行することで発火させます。

```
gulp.task('jenkins', done => {
    exec("curl -X POST -u kenshi:117a2ae57192b0b7b518738f5f59714864 http://localhost:8888/job/lolpopdep/build",
        (err,stdout,stderr) => {
            done(err);
        })
})
```

test roripop show