__NUXT_JSONP__("/post/899", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{post:{id:899,date:l,date_gmt:m,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=899"},modified:l,modified_gmt:m,slug:"vuetify%e3%81%ae%e3%82%b0%e3%83%aa%e3%83%83%e3%83%89%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0%e3%81%a7%e4%bd%9c%e3%82%8b%e3%83%ac%e3%82%b9%e3%83%9d%e3%83%b3%e3%82%b7%e3%83%96%e3%83%ac%e3%82%a4%e3%82%a2",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F11\u002F08\u002Fvuetify%e3%81%ae%e3%82%b0%e3%83%aa%e3%83%83%e3%83%89%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0%e3%81%a7%e4%bd%9c%e3%82%8b%e3%83%ac%e3%82%b9%e3%83%9d%e3%83%b3%e3%82%b7%e3%83%96%e3%83%ac%e3%82%a4%e3%82%a2\u002F",title:{rendered:"Vuetifyのグリッドシステムで作るレスポンシブレイアウト"},content:{rendered:"\n\u003Cp\u003Eうっす！w\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E久しぶりにVuetifyを使ったのでグリッドシステムでレスポンシブレイアウトを作るメモをするをするっす！w\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fスクリーンショット-2020-11-08-13.03.21-1024x379.png\" alt=\"\" class=\"wp-image-900\" width=\"476\" height=\"176\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eこれのコードです\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E&lt;template\u003E\n  &lt;v-container class=\"grey lighten-5\"\u003E\n    &lt;v-row\u003E\n      &lt;v-col cols=\"12\" md=\"12\" style=\"background-color:#ffccff\"\n      \u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E主人公はアルファ碁に勝利した。アルファ碁は言った「プロか？」&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n      &lt;v-col cols=\"12\" xs=\"12\" md=\"6\" style=\"background-color:#ccccff\"\n      \u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E主人公はアルファ碁に勝利した。アルファ碁は言った「プロか？」&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n      &lt;v-col cols= \"12\" xs=\"12\" md=\"6\" style=\"background-color:#ffccff\"\n      \u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E主人公はアルファ碁に勝利した。アルファ碁は言った「プロか？」&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n    &lt;\u002Fv-row\u003E\n    &lt;v-row\u003E\n      &lt;v-col cols=\"12\" xs=\"12\" sm=\"6\" md=\"4\" style=\"background-color:#ccccff\"\n      \u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E主人公はアルファ碁に勝利した。アルファ碁は言った「プロか？」&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n      &lt;v-col cols=\"12\" xs=\"12\" sm=\"6\" md=\"4\" style=\"background-color:#ffccff\"\n      \u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E主人公はアルファ碁に勝利した。アルファ碁は言った「プロか？」&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n      &lt;v-col cols=\"12\" xs=\"12\" sm=\"6\" md=\"4\" style=\"background-color:#ccffff\"\n      \u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E主人公はアルファ碁に勝利した。アルファ碁は言った「プロか？」&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n    &lt;\u002Fv-row\u003E\n  &lt;\u002Fv-container\u003E\n&lt;\u002Ftemplate\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E今回は一番下の要素（３つ並んでいるところ）についてみていきます。\u003C\u002Fp\u003E\u003Cp\u003Eまず全12ポイント持っています。そのうち画面サイズごとにいくつのポイントを消費するか定義することでレスポンシブなレイアウトになります。\u003C\u002Fp\u003E\u003Cp\u003E&lt;v-col cols=&#8221;12&#8243; xs=&#8221;12&#8243; sm=&#8221;6&#8243; md=&#8221;4&#8243; style=&#8221;background-color:#ccccff&#8221;\u003E\u003C\u002Fp\u003E\u003Ccite\u003E12ポイントに対してxs12ポイント sm6ポイント md４ポイントになります。\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003E画面をsmのサイズまで小さくするとこうなります。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fスクリーンショット-2020-11-08-13.37.53-1024x788.png\" alt=\"\" class=\"wp-image-902\" width=\"434\" height=\"334\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Esmが6ポイントなのでsmサイズにちょうど半分ずつ表示、一つははみ出す（下にこぼれる）かんじになっています。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E画面を最終的にxsサイズまで小さくすると全て１カラムで表示されます。\u003Cbr \u002F\u003E意外と計算方法は簡単ですね。12-nということだけです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E次は以下のレイアウトを考えます。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fスクリーンショット-2020-11-08-15.06.28.png\" alt=\"\" class=\"wp-image-906\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E&lt;template\u003E\n  &lt;v-container class=\"grey lighten-5\"\u003E\n    &lt;v-row\u003E\n      &lt;v-col cols=\"12\" md=\"12\" style=\"background-color:#000\"\u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;\u002Fv-col\u003E\n    &lt;\u002Fv-row\u003E\n    &lt;v-row\u003E\n      &lt;v-col cols=\"12\" md=\"8\" style=\"background-color:#ffccff\"\u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E新しい時代の囲碁の形それは45路盤&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n      &lt;v-col cols=\"12\" md=\"4\" style=\"background-color:#ccffcc\"\u003E\n      &lt;h1\u003Eいっそのこと三色で&lt;\u002Fh1\u003E\n      &lt;p\u003E白と黒、そこに茶色の石を入れた45路盤の新しい囲碁ソフトがここに！&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n    &lt;\u002Fv-row\u003E\n  &lt;\u002Fv-container\u003E\n&lt;\u002Ftemplate\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E8対4の比率でブロックを表現するために、md8とmd4にしています。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E次は投稿のレイアウトです\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F11\u002Fスクリーンショット-2020-11-08-17.42.49-1024x539.png\" alt=\"\" class=\"wp-image-908\" width=\"650\" height=\"341\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eカードの内容は公式サイトから\u003Cbr \u002F\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fvuetifyjs.com\u002Fen\u002Fcomponents\u002Fcards\u002F\" target=\"_blank\"\u003Ehttps:\u002F\u002Fvuetifyjs.com\u002Fen\u002Fcomponents\u002Fcards\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eコードはこんな感じです\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E&lt;template\u003E\n  &lt;v-container class=\"grey lighten-5\"\u003E\n    &lt;v-row\u003E\n      &lt;v-col cols=\"12\" md=\"12\" style=\"background-color:#000\"\u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;\u002Fv-col\u003E\n    &lt;\u002Fv-row\u003E\n    &lt;v-row\u003E\n      &lt;v-col cols=\"12\" md=\"8\" style=\"background-color:#ffccff\"\u003E\n      &lt;h1\u003E囲碁のプロ&lt;\u002Fh1\u003E\n      &lt;p\u003E新しい時代の囲碁の形それは45路盤&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n      &lt;v-col cols=\"12\" md=\"4\" style=\"background-color:#ccffcc\"\u003E\n      &lt;h1\u003Eいっそのこと三色で&lt;\u002Fh1\u003E\n      &lt;p\u003E白と黒、そこに茶色の石を入れた45路盤の新しい囲碁ソフトがここに！&lt;\u002Fp\u003E\n      &lt;\u002Fv-col\u003E\n    &lt;\u002Fv-row\u003E\n  &lt;v-row\u003E\n    &lt;v-col cols=\"12\" md=\"4\" sm=\"12\" style=\"background-color:#000\"\u003E\n    &lt;v-card\n      class=\"mx-auto\"\n      max-width=\"344\"\n    \u003E\n      &lt;v-card-text\u003E\n        &lt;div\u003EWord of the Day&lt;\u002Fdiv\u003E\n        &lt;p class=\"display-1 text--primary\"\u003E\n          be•nev•o•lent\n        &lt;\u002Fp\u003E\n        &lt;p\u003Eadjective&lt;\u002Fp\u003E\n        &lt;div class=\"text--primary\"\u003E\n          well meaning and kindly.&lt;br\u003E\n          \"a benevolent smile\"\n        &lt;\u002Fdiv\u003E\n      &lt;\u002Fv-card-text\u003E\n      &lt;v-card-actions\u003E\n        &lt;v-btn\n          text\n          color=\"deep-purple accent-4\"\n        \u003E\n          Learn More\n        &lt;\u002Fv-btn\u003E\n      &lt;\u002Fv-card-actions\u003E\n    &lt;\u002Fv-card\u003E\n    &lt;\u002Fv-col\u003E\n    &lt;v-col cols=\"12\" md=\"4\" sm=\"12\" style=\"background-color:#000\"\u003E\n    &lt;v-card\n      class=\"mx-auto\"\n      max-width=\"344\"\n    \u003E\n      &lt;v-card-text\u003E\n        &lt;div\u003EWord of the Day&lt;\u002Fdiv\u003E\n        &lt;p class=\"display-1 text--primary\"\u003E\n          be•nev•o•lent\n        &lt;\u002Fp\u003E\n        &lt;p\u003Eadjective&lt;\u002Fp\u003E\n        &lt;div class=\"text--primary\"\u003E\n          well meaning and kindly.&lt;br\u003E\n          \"a benevolent smile\"\n        &lt;\u002Fdiv\u003E\n      &lt;\u002Fv-card-text\u003E\n      &lt;v-card-actions\u003E\n        &lt;v-btn\n          text\n          color=\"deep-purple accent-4\"\n        \u003E\n          Learn More\n        &lt;\u002Fv-btn\u003E\n      &lt;\u002Fv-card-actions\u003E\n    &lt;\u002Fv-card\u003E\n    &lt;\u002Fv-col\u003E\n        &lt;v-col cols=\"12\" md=\"4\" sm=\"12\" style=\"background-color:#000\"\u003E\n    &lt;v-card\n      class=\"mx-auto\"\n      max-width=\"344\"\n    \u003E\n      &lt;v-card-text\u003E\n        &lt;div\u003EWord of the Day&lt;\u002Fdiv\u003E\n        &lt;p class=\"display-1 text--primary\"\u003E\n          be•nev•o•lent\n        &lt;\u002Fp\u003E\n        &lt;p\u003Eadjective&lt;\u002Fp\u003E\n        &lt;div class=\"text--primary\"\u003E\n          well meaning and kindly.&lt;br\u003E\n          \"a benevolent smile\"\n        &lt;\u002Fdiv\u003E\n      &lt;\u002Fv-card-text\u003E\n      &lt;v-card-actions\u003E\n        &lt;v-btn\n          text\n          color=\"deep-purple accent-4\"\n        \u003E\n          Learn More\n        &lt;\u002Fv-btn\u003E\n      &lt;\u002Fv-card-actions\u003E\n    &lt;\u002Fv-card\u003E\n    &lt;\u002Fv-col\u003E\n  &lt;\u002Fv-row\u003E\n  &lt;\u002Fv-container\u003E\n&lt;\u002Ftemplate\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E画面サイズがsmになると投稿が１列になります。\u003Cbr \u002F\u003E現状max-widthがあるのですが、ここを調整なり外すなりすればいい感じになります。\u003C\u002Fp\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003Eうっす！w 久しぶりにVuetifyを使ったのでグリッドシステムでレスポンシブレイアウトを作るメモをするをするっす！w これのコードです 今回は一番下の要素（３つ並んでいるところ）についてみていきます。 まず全12ポイン&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F11\u002F08\u002Fvuetify%e3%81%ae%e3%82%b0%e3%83%aa%e3%83%83%e3%83%89%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0%e3%81%a7%e4%bd%9c%e3%82%8b%e3%83%ac%e3%82%b9%e3%83%9d%e3%83%b3%e3%82%b7%e3%83%96%e3%83%ac%e3%82%a4%e3%82%a2\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EVuetifyのグリッドシステムで作るレスポンシブレイアウト\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:k,featured_media:b,comment_status:n,ping_status:n,sticky:j,template:c,format:"standard",meta:[],categories:[o],tags:[31,53,54],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F899"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=899"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F899\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=899"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=899"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=899"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:q,slug:q,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:o,count:t,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:t,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,1,"2020-11-08T17:45:54","2020-11-08T08:45:54","open",7,3,"gulp",6,5,9)));