__NUXT_JSONP__("/post/472", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{id:472,date:m,date_gmt:n,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=472"},modified:m,modified_gmt:n,slug:"animedokuzi",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F08\u002F22\u002Fanimedokuzi\u002F",title:{rendered:"vThirdPersonに独自のアニメーションを追加する方法"},content:{rendered:"\n\u003Cp\u003EvThirdPersonを使うと簡単に高機能ハイセンスプロアングルカメラを追加できます。\u003Cbr \u002F\u003E⇨\u003Ca href=\"https:\u002F\u002Fvolkruss.com\u002F2020\u002F06\u002F15\u002Funity%e3%81%a7%e7%84%a1%e6%96%99%e3%81%a7third-person-controller%e3%82%92%e4%bd%bf%e3%81%a3%e3%81%9f%e7%b5%90%e6%9e%9c\u002F\"\u003Ehttps:\u002F\u002Fvolkruss.com\u002F2020\u002F06\u002F15\u002Funity%e3%81%a7%e7%84%a1%e6%96%99%e3%81%a7third-person-controller%e3%82%92%e4%bd%bf%e3%81%a3%e3%81%9f%e7%b5%90%e6%9e%9c\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eまずは普通に作る\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-22-0.01.17-909x1024.png\" alt=\"\" class=\"wp-image-473\" width=\"486\" height=\"547\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch2\u003E攻撃アニメーションを追加する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003EこれでCreateするとカメラもプレイヤーのアニメーションも全て完成された状態になっています。\u003Cbr \u002F\u003Eでは、アニメーションを追加するにはどうしたらいいのか？\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E移動のアニメーションはこのままでいいとして、攻撃アニメーションを追加してみます。\u003Cbr \u002F\u003Eまず、そもそもこんなコントローラーになっているのです。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"492\" height=\"228\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-22-11.32.14.png\" alt=\"\" class=\"wp-image-475\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E移動に関してはLocomotionが担っております。スペースキーを押すとジャンプできますが、それはAirborneが担っております。しかし線がありません。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eこれはどういうことかというと、\u003Cstrong\u003ECrossFadeInFixedTime\u003C\u002Fstrong\u003Eというメソッドを利用しています。\u003Cbr \u002F\u003Eこれについては詳しい記事がありました。\u003Cbr \u002F\u003E⇨\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fwww.hanachiru-blog.com\u002Fentry\u002F2019\u002F05\u002F14\u002F185408\" target=\"_blank\"\u003Ehttps:\u002F\u002Fwww.hanachiru-blog.com\u002Fentry\u002F2019\u002F05\u002F14\u002F185408\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E簡単に言えばスクリプトからアニメーションを操作します。そうすることで大量の線で結ばれたコントローラーから解放されます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E第一引数にステート名、第二引数に遷移にかかる時間を指定してメソッドを利用します。\u003Cbr \u002F\u003EvThirdPersonControllerではこのように使用されています。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E        public virtual void Jump()\n        {\n            \u002F\u002F trigger jump behaviour\n            jumpCounter = jumpTimer;\n            isJumping = true;\n            \u002F\u002F trigger jump animations\n            if (input.sqrMagnitude &lt; 0.1f)\n                animator.CrossFadeInFixedTime(\"Jump\", 0.1f);\n            else\n                animator.CrossFadeInFixedTime(\"JumpMove\", .2f);\n        }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこうやってみると使い方は簡単なので早速攻撃アニメーションを追加します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EvThirdPersonControllerに以下を追加します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E        public virtual void Punch()\n        {\n            if (!isJumping)\n            {\n                animator.CrossFadeInFixedTime(\"Punch\", 0.1f);\n            }\n        }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E続いてvThirdPersonInputに以下のメソッドを追加します\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E\n        protected virtual void PunchInput()\n        {\n            if (Input.GetKeyDown(KeyCode.U))\n            {\n                cc.Punch();\n            }\n        }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EさらにvThirdPersonInputのInputHandleメソッドにこのメソッドを呼ぶように追記します\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E        protected virtual void InputHandle()\n        {\n            MoveInput();\n            CameraInput();\n            SprintInput();\n            StrafeInput();\n            JumpInput();\n            PunchInput();\n        }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EちなみにこのメソッドはUpdateから呼ばれているメソッドです。これでPunchを繰り出す準備ができました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EまずはSub-State Machineを追加します。適当にAtackという名前でもつけておきます。そしたら作成したAtackをダブルクリックします。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"792\" height=\"388\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-22-11.41.36.png\" alt=\"\" class=\"wp-image-476\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EステートをPunchという名前で追加します。ここは名前をスクリプトに合わせておく必要があります。追加すると勝手にEntryから線が引かれます。ステートを追加したらExitに線を引っ張っておきます。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"704\" height=\"250\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-22-11.43.09.png\" alt=\"\" class=\"wp-image-477\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EPunchにアニメーションを設定しておきます。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-22-11.45.53.png\" alt=\"\" class=\"wp-image-478\" width=\"295\" height=\"312\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eさぁゲームを開始します。Uボタンを押下すると攻撃アニメーションが始まるので確認します。\u003Cbr \u002F\u003E\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"568\" height=\"336\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-22-11.50.33.png\" alt=\"\" class=\"wp-image-481\"\u002F\u003E\u003C\u002Ffigure\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003EvThirdPersonを使うと簡単に高機能ハイセンスプロアングルカメラを追加できます。⇨https:\u002F\u002Fvolkruss.com\u002F2020\u002F06\u002F15\u002Funity%e3%81%a7%e7%84%a1%e6%96%99%&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F08\u002F22\u002Fanimedokuzi\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EvThirdPersonに独自のアニメーションを追加する方法\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:k,featured_media:b,comment_status:o,ping_status:o,sticky:j,template:c,format:"standard",meta:[],categories:[l],tags:[51,58],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F472"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=472"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F472\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=472"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=472"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=472"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:q,slug:q,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,1,6,"2020-08-22T11:52:28","2020-08-22T02:52:28","open",3,"gulp",5,9)));