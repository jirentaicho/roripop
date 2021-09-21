__NUXT_JSONP__("/post/449", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{id:449,date:m,date_gmt:n,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=449"},modified:m,modified_gmt:n,slug:"playmaker%e3%81%a7ugui%e3%81%aebutton%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88%e3%82%92%e7%99%ba%e7%81%ab%e3%81%99%e3%82%8b",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F06\u002F28\u002Fplaymaker%e3%81%a7ugui%e3%81%aebutton%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88%e3%82%92%e7%99%ba%e7%81%ab%e3%81%99%e3%82%8b\u002F",title:{rendered:"PlaymakerでUGUIのButtonイベントを発火する"},content:{rendered:"\n\u003Cp\u003EUnityのButtonはクリックイベントを手軽につけることができるし、簡単にスクリプトのメソッドを発火できるのですが、いちいちスクリプト用意するの面倒くさいし、コードが増えるし、キーボード打つと指が痛いですよね。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eというわけで、Playmakerで簡単にイベントを発火させましょう。\u003Cbr \u002F\u003Eまずはボタンのイベントを受け取るようのゲームオブジェクトを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EPlaymakerUIという名前にしました。なんでもいいですおー＾＾\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"430\" height=\"242\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-28-18.56.35.png\" alt=\"\" class=\"wp-image-452\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EこいつにFSMをつけます。\u003Cbr \u002F\u003EまずはEventを設定します。今回はバックボタンを押した時を想定しています。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-28-18.58.23.png\" alt=\"\" class=\"wp-image-453\" width=\"510\" height=\"119\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E次にAdd Global Transitionをクリックして今作成したEventを指定します。\u003Cbr \u002F\u003E勝手に新しいステートをもった遷移情報が出来上がります。こいつをPlatmakerから呼び出す簡単なお仕事です。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-28-18.59.57.png\" alt=\"\" class=\"wp-image-454\" width=\"347\" height=\"213\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eイベントを発火させたいButtonを以下のようにします。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EPlaymakerの設定がしてあるPlaymakerUIってゲームオブジェクトを指定します。そしてイベントはPlaymakerFSMからSendEventを選択ですぅ。イベントは先ほどのEvent名であるClickBackを入力すればおけ\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"514\" height=\"214\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-28-18.49.02.png\" alt=\"\" class=\"wp-image-450\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F06\u002Fスクリーンショット-2020-06-28-19.02.47.png\" alt=\"\" class=\"wp-image-455\" width=\"434\" height=\"484\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E以上で、ボタンからPlaymakerのイベントを発火できます。\u003C\u002Fp\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003EUnityのButtonはクリックイベントを手軽につけることができるし、簡単にスクリプトのメソッドを発火できるのですが、いちいちスクリプト用意するの面倒くさいし、コードが増えるし、キーボード打つと指が痛いですよね。 とい&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F06\u002F28\u002Fplaymaker%e3%81%a7ugui%e3%81%aebutton%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88%e3%82%92%e7%99%ba%e7%81%ab%e3%81%99%e3%82%8b\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EPlaymakerでUGUIのButtonイベントを発火する\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:k,featured_media:b,comment_status:o,ping_status:o,sticky:j,template:c,format:"standard",meta:[],categories:[l],tags:[42],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F449"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=449"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F449\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=449"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=449"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=449"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:q,slug:q,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,1,6,"2020-06-28T19:04:20","2020-06-28T10:04:20","open",3,"gulp",5,9)));