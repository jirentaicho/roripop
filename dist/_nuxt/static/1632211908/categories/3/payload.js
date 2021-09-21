__NUXT_JSONP__("/categories/3", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{posts:{post:[{id:1353,date:v,date_gmt:w,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1353"},modified:v,modified_gmt:w,slug:"1%e4%ba%baspring%e5%8b%89%e5%bc%b7%e4%bc%9a-postgre%e7%92%b0%e5%a2%83%e6%a7%8b%e7%af%89%e7%b7%a8",status:n,type:o,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F28\u002F1%e4%ba%baspring%e5%8b%89%e5%bc%b7%e4%bc%9a-postgre%e7%92%b0%e5%a2%83%e6%a7%8b%e7%af%89%e7%b7%a8\u002F",title:{rendered:"1人Spring勉強会-Postgre環境構築編"},content:{rendered:"\n\u003Cp\u003E仕事ではJavaを使っています。\u003Cbr \u002F\u003Eでもフレームワークとかがレガシーな感じでよろしくなく、Springなんて使っていません。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eインフラとかは割と整っていて、JenkinsやらAWSやら使っていますが、私は全く関与していません。\u003Cbr \u002F\u003Eさらにいえば、開発環境もインフラ担当者が用意したdockerイメージのDBサーバーを使っています。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E今回はDockerにDBサーバーを用意して、似たようなことを個人的にやってみようということで、やっていきます。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003E今回やること\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003EDockerでPostgre環境を作成します（参考サイト）\u003Cbr \u002F\u003ESpringプロジェクトを作成します\u003Cbr \u002F\u003ESpringにPostgreの接続設定を行います\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eデータベースの用意\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E参考サイトと同じようにPostgreの環境を用意します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fqiita.com\u002Fasylum\u002Fitems\u002F17e655d8369c19affbc3\" data-type=\"URL\" data-id=\"https:\u002F\u002Fqiita.com\u002Fasylum\u002Fitems\u002F17e655d8369c19affbc3\" target=\"_blank\"\u003EdockerでPostgreSQLのコンテナ作成と初期化\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eちなみにユーザーとデータベースをjirenに変更しました。レコードをいくつか追加しておきます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Ejiren=# insert into users values ('aoba','password');\nINSERT 0 1\njiren=# insert into users values ('hihumi','password');\nINSERT 0 1\njiren=# insert into users values ('yun','password');\nINSERT 0 1\njiren=# insert into users values ('hazime','password');\nINSERT 0 1\njiren=# select * from users;\n user_id | password | insert_date | update_date\n---------+----------+-------------+-------------\n 1       | jirem    |             |\n jiren   | password |             |\n aoba    | password |             |\n hihumi  | password |             |\n yun     | password |             |\n hazime  | password |             |\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003EDocker メモ\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eエラー対応\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003EC:\\Users\\xxxx\\Documents\\dockers\\postgre&gt;docker exec -it dockerpostgres bash\nError response from daemon: Container 96b94bffb6561ea94703cfd3b846518672d171a0f52684c5b69138672b504155 is not running\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Evolumeを消したら治りました。理由はわからなかったです。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003EC:\\Users\\xxx\\Documents\\dockers\\postgre&gt;docker volume ls\nDRIVER    VOLUME NAME\nlocal     5eaccfccafb7a76c3651ba17ebf3f0c8977439f1a655735e2c363a219da58a64\nlocal     6a4d0ea50481971cf424e1f872489fe86aa046387312137ae5202efc37f4583e\nlocal     6af960660094a2f83ac81cdeba8793b71a858364d5e130f295f6631cfc11520b\nlocal     7b3c86ab5cf8cfa9e96071bd99d81a994277b9d08602522d4f57e4e95db13a66\nlocal     727b015a52acfe93b2d952febea8f1a2b301864517df70ba435bab62b6410813\nlocal     3808216d5c1f608d0117899ae3a313204cf000fc9195d22c72da403da9642978\nlocal     docker-laravel_mysql-volume\nlocal     postgre_jirenpostgredb\nlocal     wordpress_db-data\nlocal     wordpress_wp_db_data\nC:\\Users\\xxx\\Documents\\dockers\\postgre&gt;docker volume rm postgre_jirenpostgredb\npostgre_jirenpostgredb\nC:\\Users\\xxx\\Documents\\dockers\\postgre&gt;docker volume ls\nDRIVER    VOLUME NAME\nlocal     5eaccfccafb7a76c3651ba17ebf3f0c8977439f1a655735e2c363a219da58a64\nlocal     6a4d0ea50481971cf424e1f872489fe86aa046387312137ae5202efc37f4583e\nlocal     6af960660094a2f83ac81cdeba8793b71a858364d5e130f295f6631cfc11520b\nlocal     7b3c86ab5cf8cfa9e96071bd99d81a994277b9d08602522d4f57e4e95db13a66\nlocal     727b015a52acfe93b2d952febea8f1a2b301864517df70ba435bab62b6410813\nlocal     3808216d5c1f608d0117899ae3a313204cf000fc9195d22c72da403da9642978\nlocal     docker-laravel_mysql-volume\nlocal     wordpress_db-data\nlocal     wordpress_wp_db_data\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003EPostgreメモ\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eデーターベース一覧\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\\l\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eユーザー一覧\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\\du\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003ESTSでSpringプロジェクトを作成する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Estsを使ってSpringプロジェクトを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2021\u002F06\u002Fimage.png\" alt=\"\" class=\"wp-image-1355\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E適当にwebにチェックを入れて\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2021\u002F06\u002Fimage-1.png\" alt=\"\" class=\"wp-image-1357\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EこれでSpringプロジェクトができました。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eデータベースに接続する設定を行う\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E\u002Fsrc\u002Fmain\u002Fresources\u002Fapplication.propertiesに設定を記載します。\u003Cbr \u002F\u003E参考サイトで.envに記載した内容を書きます。私は少し変更したので以下のようになりました。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Espring.datasource.driver-class-name=org.postgresql.Driver\nspring.datasource.url=jdbc:postgresql:\u002F\u002Flocalhost:5432\u002Fjiren\nspring.datasource.username=jiren\nspring.datasource.password=password\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E今回は、この辺にしておきます。\u003Cbr \u002F\u003E実際にデータアクセスを行うのに必要なものをそろえる必要があるため、次回はSpringのプロジェクトを整理していきます。\u003C\u002Fp\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003E仕事ではJavaを使っています。でもフレームワークとかがレガシーな感じでよろしくなく、Springなんて使っていません。 インフラとかは割と整っていて、JenkinsやらAWSやら使っていますが、私は全く関与していません&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F28\u002F1%e4%ba%baspring%e5%8b%89%e5%bc%b7%e4%bc%9a-postgre%e7%92%b0%e5%a2%83%e6%a7%8b%e7%af%89%e7%b7%a8\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003E1人Spring勉強会-Postgre環境構築編\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:b,comment_status:j,ping_status:j,sticky:g,template:c,format:p,meta:[],categories:[l,m],tags:[43,47],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1353"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1353"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1353\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1353"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1353"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1353"}],curies:[{name:e,href:f,templated:a}]}},{id:1330,date:x,date_gmt:y,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1330"},modified:x,modified_gmt:y,slug:"docker%e3%81%a7sphinx%e3%81%a8gulp%e3%81%ae%e5%ae%9f%e8%a1%8c%e7%92%b0%e5%a2%83%e3%82%92%e4%bd%9c%e3%82%8b",status:n,type:o,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F24\u002Fdocker%e3%81%a7sphinx%e3%81%a8gulp%e3%81%ae%e5%ae%9f%e8%a1%8c%e7%92%b0%e5%a2%83%e3%82%92%e4%bd%9c%e3%82%8b\u002F",title:{rendered:"dockerでSphinxとGulpの自動ビルド環境を作る"},content:{rendered:"\n\u003Cp\u003E今回は実践編ということで、SphinxとGulpの実行環境を作ってみます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Egulpを使って、sphinxのrstファイルに変更を入れて保存する度に、sphinxのmake htmlコマンドを自動的に行うようにします。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E参考サイトです。\u003Cbr \u002F\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fmomijiame.tumblr.com\u002Fpost\u002F105699889996\u002F%E3%82%BF%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC-gulp-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-sphinx-%E3%81%AE%E5%9F%B7%E7%AD%86%E4%BD%9C%E6%A5%AD%E3%82%92%E6%8D%97%E3%82%89%E3%81%9B%E3%82%8B\" data-type=\"URL\" data-id=\"https:\u002F\u002Fmomijiame.tumblr.com\u002Fpost\u002F105699889996\u002F%E3%82%BF%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC-gulp-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-sphinx-%E3%81%AE%E5%9F%B7%E7%AD%86%E4%BD%9C%E6%A5%AD%E3%82%92%E6%8D%97%E3%82%89%E3%81%9B%E3%82%8B\" target=\"_blank\"\u003Eタスクランナー Gulp を使って Sphinx の執筆作業を捗らせる\u003C\u002Fa\u003E\u003Cbr \u002F\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fqiita.com\u002Freflet\u002Fitems\u002F4b3f91661a54ec70a7dc\" data-type=\"URL\" data-id=\"https:\u002F\u002Fqiita.com\u002Freflet\u002Fitems\u002F4b3f91661a54ec70a7dc\" target=\"_blank\"\u003Edockerで簡易にpython3の環境を作ってみる\u003C\u002Fa\u003E\u003Cbr \u002F\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fgenzouw.com\u002Fentry\u002F2021\u002F04\u002F28\u002F215832\u002F2563\u002F\" data-type=\"URL\" data-id=\"https:\u002F\u002Fgenzouw.com\u002Fentry\u002F2021\u002F04\u002F28\u002F215832\u002F2563\u002F\" target=\"_blank\"\u003EDocker Compose で初回起動時のみ yarn install を実行させる方法\u003C\u002Fa\u003E\u003Cbr \u002F\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fritukiii\u002Fitems\u002F921521f634e339550861\" data-type=\"URL\" data-id=\"https:\u002F\u002Fqiita.com\u002Fritukiii\u002Fitems\u002F921521f634e339550861\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ELocal gulp not found が出た時の対処法\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Esphinxはpython製のドキュメント作成ツールです。ドキュメントはhtml形式になっていて、rstファイルという形式のファイルで作成します。このrstファイルは正直微妙です（笑）\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EGulpは、タスクランナーと呼ばれて、色々な処理を自動化できます。npmを使ってインストールします。sphinxのビルド作業を自動化してやろうという狙いです。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003EDockerfileの作成\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003EまずはDockerImageを用意するので、Dockerfileを作成します。\u003Cbr \u002F\u003E今回はnodeのイメージにpythonとpipとshinxをインストールします。\u003Cbr \u002F\u003Eあとはnpmで、gulpとbrowser-syncをインストールします。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003EFROM node\n# FROM node\n# python,sphinxなどのインストール\nRUN apt-get update\nRUN apt-get install python3\nRUN apt-get install python3-pip -y\nRUN pip3 install --upgrade pip\nRUN pip3 install -U sphinx\n# 作業場所(ディレクトリ)の指定\nWORKDIR \u002Fusr\u002Fsrc\u002Fapp\n# gulpなどをインストール\nRUN npm i -g gulp\nRUN npm i browser-sync\nRUN npm link gulp\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Egulpはグローバルインストールして、さらにlinkをやってますが、\u003Cbr \u002F\u003E別途なぜこうするのか調べます。（色々試してこうなりました。。。）\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Edocker-compose.yamlの作成\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E今回利用するコンテナは一つですが、それでもportの指定や、共有フォルダの指定などがわかりやすいメリットがあるので、docker-compose.yamlを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E3000ポートを利用するので、同じく3000にポートマッピングしておきます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eホストのappフォルダと、コンテナのusr\u002Fsrc\u002Fapp\u002Fworkが共有されているので、ここにgulpfile.jsを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Eversion: '3'\nservices:\n  gulp:\n    container_name: jirengulp\n    build:\n      context: .\u002F\n      dockerfile: .\u002FDockerfile\n    ports:\n    - 3000:3000\n    volumes:\n      - .\u002Fapp\u002F:\u002Fusr\u002Fsrc\u002Fapp\u002Fwork\n    tty: true\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003Egulpfile.jsの作成\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E基本的には参考サイトを見本にして\u003Cs\u003Eパクって\u003C\u002Fs\u003E書きました。\u003Cbr \u002F\u003E書き方はgulp4に変えたり若干修正をしています。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eコメントにも書いてますが、結構パワー系な記載になっていると思います。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst gulp = require(\"gulp\");\nconst browserSync = require(\"browser-sync\");\nconst exec = require('child_process').exec;\n\u002F**\n * browserSyncを最初に初期化しておきます。\n *\u002F\ngulp.task(\"bs\", () =&gt; {\n  browserSync.init({\n    server:{\n      baseDir:&#91;\"build\u002Fhtml\"]\n    }\n  })\n})\n\u002F**\n * browserSyncを利用して、画面を再描画します\n * build→reloadの順番で実行する想定です。\n *\u002F\ngulp.task('reload', () =&gt; {\n  return browserSync.reload();\n})\n\u002F**\n * sphinxの make html を実行します。\n *\u002F\ngulp.task('build', (callback) =&gt; {\n  exec(\"make html\", (err,stdout,stderr) =&gt; {\n    console.log(stdout)\n    callback(err)\n  })\n})\n\u002F**\n * watchが走ってる状態でreloadが呼ばれる\n * →watchが消えたので、ここでもwatchを実行しています。なんか間違ってそうだけど動いてます。\n *\u002F\ngulp.task('watch', () =&gt; {\n  gulp.watch(\"source\u002F**\u002F*.rst\", gulp.series('build',gulp.parallel('reload','watch')))\n})\n\u002F**\n * 最初に呼ばれる処理です。\n * seriesは直列処理\n * parallelは並列処理\n *\u002F\ngulp.task('default', gulp.series('build',gulp.parallel('bs','watch')))\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003Eコンテナを起動する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E最初にビルドします。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker-compose build --no-cache\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eできたらコンテナを立ち上げます\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker-compose up -d\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E次にコンテナに入ります\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker exec -it jirengulp bash\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003ESphinxの雛形を作成する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eworkフォルダに予めsphinxのクイックスタートファイルとかを設定しておけば、不要な作業だと思うのですが、自分のパソコンにはsphinxが入ってないので、コンテナから最初に作成を行います。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eコンテナのworkフォルダに移動したら以下コマンドを実施。聞かれた適当に答えておきます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Ecd work\nsphinx-quickstart\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこれで雛形ファイル群が出来上がります。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Egulpを起動する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Egulpコマンドを起動すると、watch処理にて、sourceフォルダの*.rstファイルの更新を監視します。\u003Cbr \u002F\u003E今回の場合は、index.rstを適当に変更すると、それが反映されてブラウザも勝手にリロードされます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E以下のコマンドのでgulpを実行します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Egulp\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこれでindex.rstを適当に修正すると、ブラウザがリロードされて修正が即時反映されるようになっています。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E今回利用したファイルはgithubに上げてます\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fjirentaicho\u002Fsphinxgulp\" target=\"_blank\" rel=\"noreferrer noopener\"\u003Ehttps:\u002F\u002Fgithub.com\u002Fjirentaicho\u002Fsphinxgulp\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E勉強になった動画を共有します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-embed is-type-rich is-provider-埋め込みハンドラー wp-block-embed-埋め込みハンドラー wp-embed-aspect-16-9 wp-has-aspect-ratio\"\u003E\u003Cdiv class=\"wp-block-embed__wrapper\"\u003E\n\u003Ciframe loading=\"lazy\" title=\"【Docker超入門 #6】Dockerfileを作成しよう\" width=\"750\" height=\"422\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FUsUUp7hJClk?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Ffigure\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003E今回は実践編ということで、SphinxとGulpの実行環境を作ってみます。 gulpを使って、sphinxのrstファイルに変更を入れて保存する度に、sphinxのmake htmlコマンドを自動的に行うようにします。 &hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F24\u002Fdocker%e3%81%a7sphinx%e3%81%a8gulp%e3%81%ae%e5%ae%9f%e8%a1%8c%e7%92%b0%e5%a2%83%e3%82%92%e4%bd%9c%e3%82%8b\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EdockerでSphinxとGulpの自動ビルド環境を作る\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:b,comment_status:j,ping_status:j,sticky:g,template:c,format:p,meta:[],categories:[l],tags:[u,32,46],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1330"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1330"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1330\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1330"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1330"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1330"}],curies:[{name:e,href:f,templated:a}]}},{id:1315,date:z,date_gmt:A,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1315"},modified:z,modified_gmt:A,slug:"docker-compose%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6%e5%8b%89%e5%bc%b7%e3%81%97%e3%81%9f%e3%83%a1%e3%83%a2%e3%81%97%e3%81%be%e3%81%99",status:n,type:o,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F23\u002Fdocker-compose%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6%e5%8b%89%e5%bc%b7%e3%81%97%e3%81%9f%e3%83%a1%e3%83%a2%e3%81%97%e3%81%be%e3%81%99\u002F",title:{rendered:"Docker-composeについて勉強したメモします"},content:{rendered:"\n\u003Cp\u003E前回の投稿で、Dockerイメージを用意することで、コンテナを起動させて開発環境として利用できるということを学びました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EじゃあDocker-composeってなに？ってことについて勉強します。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003EDocker-composeとは\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Edocker-composeは複数のコンテナを利用するアプリケーションを管理できる機能です。\u003Cbr \u002F\u003Eつまり、複数のコンテナを動かす開発環境に役立ちます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E前回の投稿で、WordPressとmysqlという別々のコンテナを連携させて、開発環境を構築しましたが、あの時、コンテナを一個一個起動したり、手順が割と複雑でした。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eそういったところを、もっとわかりやすく管理できるようになります。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E具体的にどうやって管理するのかというと、docker-compose.ymlというファイルに設定情報を記載して管理します。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003EWordPressの環境を構築する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E前回と同じ環境になりますが、docker-composeで環境構築を行います。\u003Cbr \u002F\u003E前回の手順として\u003C\u002Fp\u003E\n\n\n\u003Cul\u003E\u003Cli\u003Edocker-networkを作成する\u003C\u002Fli\u003E\u003Cli\u003Emysqlのイメージを用意してコンテナを動かす\u003C\u002Fli\u003E\u003Cli\u003Ewordpressのイメージを用意してコンテナを動かす\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\n\n\u003Cp\u003E今回はまず、docker-compose.ymlを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Eversion: '3'\nservices:\n  db:\n    image: mysql:5.7.25\n    ports:\n    - 3306:3306\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: password\n      MYSQL_DATABASE: wordpress\n      MYSQL_USER: root\n      MYSQL_PASSWORD: password\n  wordpress:\n    image: wordpress\n    depends_on:\n      - db\n    ports:\n      - \"8088:80\"\n    restart: always\n    volumes:\n      - .\u002Fwork:\u002Fvar\u002Fwww\u002Fhtml\n    environment:\n      WORDPRESS_DB_HOST: db\n      WORDPRESS_DB_USER: root\n      WORDPRESS_DB_PASSWORD: password\n      WORDPRESS_DB_NAME: wordpress\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E次に以下のコマンドを実施します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker-compose up -d\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Ehttp:\u002F\u002Flocalhost:8088\u002Fにアクセスすると、wordpressのインストール画面が表示されます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Edocker-compose.ymlという設定ファイルさえあれば、コマンド一発で環境構築終了ってすごいですよね。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Edocker-compose.ymlとは\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eこれが何をするためのものかは、大体想像ができました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E先程のdocker-compose.ymlの内容を見ると、dbコンテナとwordpressコンテナの記載があることがわかります。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edepends_on:\n      - db\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Edepends_onは依存関係に関する記載ですが、起動順序に関して制御します。\u003Cbr \u002F\u003E特に指定がなければ上から順に起動されるそうです。この場合はDBが先に起動する。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Erestart: always\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EOSの起動時にコンテナが起動されます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eイメージとコンテナについて少し理解があると、docker-composeで何をやっているのかわかりやすいですね。\u003C\u002Fp\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003E前回の投稿で、Dockerイメージを用意することで、コンテナを起動させて開発環境として利用できるということを学びました。 じゃあDocker-composeってなに？ってことについて勉強します。 Docker-compo&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F23\u002Fdocker-compose%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6%e5%8b%89%e5%bc%b7%e3%81%97%e3%81%9f%e3%83%a1%e3%83%a2%e3%81%97%e3%81%be%e3%81%99\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EDocker-composeについて勉強したメモします\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:b,comment_status:j,ping_status:j,sticky:g,template:c,format:p,meta:[],categories:[l],tags:[u,B],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1315"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1315"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1315\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1315"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1315"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1315"}],curies:[{name:e,href:f,templated:a}]}},{id:1287,date:C,date_gmt:D,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1287"},modified:C,modified_gmt:D,slug:"docker%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6%e5%8b%89%e5%bc%b7%e3%81%97%e3%81%9f%e3%81%ae%e3%81%a7%e3%83%a1%e3%83%a2%e3%81%97%e3%81%be%e3%81%99",status:n,type:o,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F22\u002Fdocker%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6%e5%8b%89%e5%bc%b7%e3%81%97%e3%81%9f%e3%81%ae%e3%81%a7%e3%83%a1%e3%83%a2%e3%81%97%e3%81%be%e3%81%99\u002F",title:{rendered:"Dockerについて勉強したのでメモします"},content:{rendered:"\n\u003Cp\u003Eドラゴン桜という面白いドラマで、教え合う勉強法というのをやっていたので、勉強したことを教えるつもりで記事を書いてみます。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eこの記事に書いてあること\u003C\u002Fh2\u003E\n\n\n\u003Cul\u003E\u003Cli\u003EDockerとはなんですか？\u003C\u002Fli\u003E\u003Cli\u003Eイメージとコンテナについて軽く触れます\u003C\u002Fli\u003E\u003Cli\u003EDockerfileでイメージを作ってみます\u003C\u002Fli\u003E\u003Cli\u003Eコンテナに入ってみます\u003C\u002Fli\u003E\u003Cli\u003EホストPCとコンテナでファイルを共有します\u003C\u002Fli\u003E\u003Cli\u003Enetworkを使ってコンテナ間で通信します\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E自分のワードプレスやLaravelなどの開発環境には、Dockerを使っています。\u003Cbr \u002F\u003E仕事でもDockerを使っています。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eでは具体的にDockerって何？ってなると「ぐぬぬ」としか言えないので、勉強したことをまとめます。間違っていたらご指摘いただけると嬉しいです。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003EDockerとはなにか\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E昔よく使っていたVirtualBoxでは、自分のパソコンに仮想コンピュータを作成して、その仮想コンピュータの中でOSを動かして、アプリケーションなどを動かしていました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EDockerは自分のパソコンのカーネル(OSを動かす中核的なソフトウェア)を利用するコンテナと呼ばれるものを利用して、アプリケーションを動かします。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E別のOSを動かすというと、相当ハードに見えますが、Dockerではそういった仮想コンピュータの中で動かすOS(ゲストOS)がないため、軽量快速というわけです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003EDockerImageとコンテナとは何か\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003EDockerImageとはコンテナを動かすための設定データみたいな感じでしょうか、DockerImageを元にコンテナを動かし、そのコンテナの中で、何かをおっぱじめるイメージだと理解しました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eコンテナは先程のゲストOSのような立ち位置でしょうか。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EDockerImageはDockerHubという場所からダウンロードできますし、Dockerfileを利用して、既存のDockerImageをベースに新しいImageを作成することもできる。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E-- imageをダウンロードする\ndocker pull\n-- コンテナを実行する(create\u002Fstartが実行される）\ndocker run\n-- dockerfileからイメージを作成する\ndocker build\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E簡単な操作でわかりやすく説明してくれている動画がありますので、共有します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-embed is-type-rich is-provider-埋め込みハンドラー wp-block-embed-埋め込みハンドラー wp-embed-aspect-16-9 wp-has-aspect-ratio\"\u003E\u003Cdiv class=\"wp-block-embed__wrapper\"\u003E\n\u003Ciframe loading=\"lazy\" title=\"docker入門part3 イメージを作成する\" width=\"750\" height=\"422\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002F_Pdl2EJF1-4?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch2\u003Ecentosにpython3を入れたイメージを作成する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E実践ということで、centosにpython3を入れたイメージを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EDockerfileに以下のような記載をします。\u003Cbr \u002F\u003Eやっていることは、centosのイメージをダウンロードして、\u003Cbr \u002F\u003Epython3をインストールして\u003Cbr \u002F\u003Eバージョンを表示している\u003Cbr \u002F\u003E大変シンプルですね。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003EFROM centos:centos7\nRUN yum -y install python3\nCMD &#91;\"python3\", \"-V\"]\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E次に以下のコマンドを実行します。studypyというイメージ名でイメージを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E docker build -t studypy .\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Epythonのインストールが始まりますので、しばらく待ちます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E終わったら以下のコマンドを実行します\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker run studypy\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EPython 3.6.8と表示されればOKです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eすごい簡単なものでしたがやったことは\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Edockerimageにはcentosとpython3がインストールされていて、それを実行するコンテナを起動してpythonを実行した。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E次にコンテナの中に入ってpythonを実行します。\u003Cbr \u002F\u003E-itでコンテナにログインできます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker run -it studypy \u002Fbin\u002Fbash\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこれでコンテナのcentosのbin\u002Fbashに入れます。ここでpython3と打つと、python3が実行できます。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003EホストPCとコンテナでデータを共有する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003EホストPCでpython書いて、コンテナから実行してみます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eキーワードは -vオプションになります。Dockerfileがあるフォルダにappフォルダを作成して、中にtest.pyというファイルを用意します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Etest.pyはprint(&#8220;Hello Python3!&#8221;)という簡単なものにしておきます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eそしたら以下コマンドを打ちます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker run -v \u002FUsers\u002Fjiren\u002Fdockerstudy\u002Fpy\u002Fapp:\u002Fcontainerapp -it studypy \u002Fbin\u002Fbash\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E-v で、ホストPCの共有場所:コンテナのフォルダ　で、共有できます。\u003Cbr \u002F\u003Eこの場合は、ホストPCのappフォルダが共有フォルダとして、コンテナのcontainerappというフォルダにリンクされます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Elsコマンドで確認するとあります\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E&#91;root@8c9fcb995319 \u002F]# ls\nanaconda-post.log  bin  containerapp  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eでは、containerappのtest.pyを実行してみましょう。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E&#91;root@8c9fcb995319 containerapp]# python3 test.py\nHello Python3!\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E表示されました。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eコンテナ間で通信する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eimageを二つ用意して、コンテナを二つ起動させます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eimageはmysql:5.7.25 とwordpressです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Cem\u003E\u003Cspan class=\"has-inline-color has-luminous-vivid-orange-color\"\u003E１つのコンテナに、MySQLとApacheなど、まとめてはいけないのですか？\u003Cbr \u002F\u003Eコンテナが再利用できない、メンテナンスの問題などでオススメしない\u003C\u002Fspan\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fteratail.com\u002Fquestions\u002F123306\" target=\"_blank\"\u003Ehttps:\u002F\u002Fteratail.com\u002Fquestions\u002F123306\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Elinkオプションはレガシーらしいので、networkを利用します。docker networkを利用することでコンテナ間で通信ができるようになります。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Enetworkの作成は、以下のコマンドで行います。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker network create study-wp-network\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Emysqlコンテナを以下のコマンドで起動します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker run --name mysql -p 3306:3306 --network study-wp-network -e MYSQL_USER=root -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=wordpress -d mysql:5.7.25\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eワードプレスのコンテナを起動します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Edocker run --name jirenwordpress --network study-wp-network -e WORDPRESS_DB_HOST=mysql -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=password -p 8088:80 -d wordpress\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eワードプレスのインストール画面が表示されればOKです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Emysqlが動いているコンテナに、wordpressのコンテナからアクセスすることができました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Cem\u003E-eは環境変数を設定するオプションです。\u003Cbr \u002F\u003E-dはバックグラウンドで動作させるオプションです。\u003Cbr \u002F\u003E-pはポートマッピングをするオプションです。ホストの8088がコンテナの80にマップされます。\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E実はすごくエラーが発生して困っていました。mysqlに繋がらないとか、データベースが選択できないとか、、、結果的に以下のサイトにあるようにオプションを指定することで解決しました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fcrieit.net\u002Fposts\u002FDocker-5-Wordpress-Wordpress\" target=\"_blank\"\u003Ehttps:\u002F\u002Fcrieit.net\u002Fposts\u002FDocker-5-Wordpress-Wordpress\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eまとめ\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Edockerを利用すると簡単にコンテナを動かすことができ、様々な開発環境を簡単に構築できるということですね。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EDockerImageを用意して、コンテナを走らせる。という手順だけで環境が利用できるというのは、早いしわかりやすいし便利です。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E次回はdocker-composeについて勉強したいと思います。\u003C\u002Fp\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003Eドラゴン桜という面白いドラマで、教え合う勉強法というのをやっていたので、勉強したことを教えるつもりで記事を書いてみます。 この記事に書いてあること Dockerとはなんですか？ イメージとコンテナについて軽く触れます D&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F22\u002Fdocker%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6%e5%8b%89%e5%bc%b7%e3%81%97%e3%81%9f%e3%81%ae%e3%81%a7%e3%83%a1%e3%83%a2%e3%81%97%e3%81%be%e3%81%99\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EDockerについて勉強したのでメモします\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:b,comment_status:j,ping_status:j,sticky:g,template:c,format:p,meta:[],categories:[l],tags:[u,22,B],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1287"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1287"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1287\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1287"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1287"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1287"}],curies:[{name:e,href:f,templated:a}]}}]},categoryName:E}],fetch:{"0":{categories:{categories:[{id:2,count:m,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:m,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:E,slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:F,slug:F,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:m,count:G,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:H,count:m,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:G,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:I,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:H,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:I,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}",false,"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory","open",1,3,4,"publish","post","standard","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1","post_tag",21,"2021-06-28T00:25:39","2021-06-27T15:25:39","2021-06-24T23:38:28","2021-06-24T14:38:28","2021-06-23T01:24:13","2021-06-22T16:24:13",56,"2021-06-22T09:14:17","2021-06-22T00:14:17","Docker","gulp",6,5,9)));