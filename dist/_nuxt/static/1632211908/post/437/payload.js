__NUXT_JSONP__("/post/437", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{id:437,date:m,date_gmt:n,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=437"},modified:m,modified_gmt:n,slug:"playmaker%e3%81%aegetnextchild%e3%82%92%e3%81%97%e3%81%b0%e3%81%8d%e5%80%92%e3%81%99",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F06\u002F27\u002Fplaymaker%e3%81%aegetnextchild%e3%82%92%e3%81%97%e3%81%b0%e3%81%8d%e5%80%92%e3%81%99\u002F",title:{rendered:"PlaymakerのGetNextChildをしばき倒す"},content:{rendered:"\n\u003Cp\u003Eアセットをダウンロードしたんですが、子要素全てにMeshColliderをアタッチしたいと思いました。というわけでPlaymakerで子要素をループしてアタッチする方法です。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-27-0.39.49.png\" alt=\"\" class=\"wp-image-440\" width=\"478\" height=\"218\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EとにかくChildがいる間はアタッチしまくって、ChildがなくなったらEndLoopにいきます。\u003Cbr \u002F\u003EState1ではGetNextChildというActionを使います。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E子要素を走査していき、見つかったら子要素を変数CurrentChildに格納します。\u003Cbr \u002F\u003EそしてNextChildというEventに遷移します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"730\" height=\"276\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-27-0.44.54.png\" alt=\"\" class=\"wp-image-441\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003ENextChildでは、その子要素にコライダーを付与する。\u003Cbr \u002F\u003E終わったらまたState1に戻ります。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-27-0.47.03-1024x419.png\" alt=\"\" class=\"wp-image-442\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eこの調子で子要素が順番に処理されていき、全ての子要素のループが終わったらEndLoopにいきます。EndLoopはActionも何もないただの状態です。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eスクリプト書くより早いですね。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003E子要素の子要素までループする\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E子要素の子要素まで走査できないので作ります。\u003Cbr \u002F\u003E複雑になりますがやっていることは同じです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eただし、子要素の子要素へループする前、つまり親要素の子要素をループする際に、コライダーをつけるじAddChildColiderというStateを用意しています。\u003Cbr \u002F\u003E子要素のループが走った時に毎回コライダーがつけられてしまうのでね。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"824\" height=\"360\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-27-1.13.38.png\" alt=\"\" class=\"wp-image-444\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E子要素の子要素をループする。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-27-1.16.02-1024x476.png\" alt=\"\" class=\"wp-image-445\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-27-1.16.53-1024x485.png\" alt=\"\" class=\"wp-image-446\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch3\u003E追記\u003C\u002Fh3\u003E\n\n\n\u003Cp\u003E普通にヒエラルキーで子要素全選択してコライダーアタッチすれば一発だったわあはははは\u003Cbr \u002F\u003Eでも、Playmakerで子要素ループする練習にはなったかな^^^\u003C\u002Fp\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003Eアセットをダウンロードしたんですが、子要素全てにMeshColliderをアタッチしたいと思いました。というわけでPlaymakerで子要素をループしてアタッチする方法です。 とにかくChildがいる間はアタッチしまくっ&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F06\u002F27\u002Fplaymaker%e3%81%aegetnextchild%e3%82%92%e3%81%97%e3%81%b0%e3%81%8d%e5%80%92%e3%81%99\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EPlaymakerのGetNextChildをしばき倒す\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:k,featured_media:b,comment_status:o,ping_status:o,sticky:j,template:c,format:"standard",meta:[],categories:[l],tags:[42,51],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F437"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=437"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F437\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=437"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=437"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=437"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:q,slug:q,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,1,6,"2020-06-27T01:17:24","2020-06-26T16:17:24","open",3,"gulp",5,9)));