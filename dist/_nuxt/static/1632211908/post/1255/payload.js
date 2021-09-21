__NUXT_JSONP__("/post/1255", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{id:1255,date:m,date_gmt:n,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1255"},modified:m,modified_gmt:n,slug:"javascript%e3%81%a7%e3%82%af%e3%83%ad%e3%83%bc%e3%82%b8%e3%83%a3%e3%81%a8%e3%83%93%e3%83%ab%e3%83%80%e3%83%bc%e3%83%91%e3%82%bf%e3%83%bc%e3%83%b3%e3%81%bf%e3%81%9f%e3%81%84%e3%81%aa%e3%82%84%e3%81%a4",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F05\u002F27\u002Fjavascript%e3%81%a7%e3%82%af%e3%83%ad%e3%83%bc%e3%82%b8%e3%83%a3%e3%81%a8%e3%83%93%e3%83%ab%e3%83%80%e3%83%bc%e3%83%91%e3%82%bf%e3%83%bc%e3%83%b3%e3%81%bf%e3%81%9f%e3%81%84%e3%81%aa%e3%82%84%e3%81%a4\u002F",title:{rendered:"JavaScriptでクロージャとビルダーパターンみたいなやつ"},content:{rendered:"\n\u003Cp\u003E「クロージャとは関数内で定義された関数である」こんな薄っぺらい説明ではクロージャのクの字も語れていないと誰かが言ってました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eというわけでビルダーパターンっぽいのをクロージャを使って作ってみました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E今作ってるワードプレスのプラグインで、ajax用のパラメータを作る処理に取り入れてます。\u003Cbr \u002F\u003E普通はこんな感じでパラメータを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E    let params = new URLSearchParams();\n    params.append(\"action\", 'get_ajax_data');\n    params.append(\"nonce\", values.nonce);\n    params.append(\"post_id\",document.getElementById(\"cast_select\").value);\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこれでも別に何の問題もないのですが、クロージャを使えばビルダーパターンのような書き方ができます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E以下のような、クロージャを利用した関数を用意します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Efunction AjaxCriteria(){\n    \u002F\u002F この変数にreturn先のオブジェクトから参照できる\n    const param = new URLSearchParams();\n    \u002F\u002F console.log(this)\n    \u002F\u002F windows\n    return {\n        add(key,value){\n            param.append(key,value)\n            \u002F\u002Fconsole.log(this);\n            \u002F\u002F {}　→このオブジェクト\n            return this; \u002F\u002F つまりここで返しているのはオブジェクトであり、return{}のものと同じなので、paramを参照できるオブジェクトです。\n        },\n        build(){\n            return param;\n        }\n    };\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E関数の中で関数が定義されたオブジェクトを返しています。\u003Cbr \u002F\u003Eparamの値を変更するaddメソッドとparam自体を返すbuildメソッドです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eさぁこれを使ってみるとこんな感じです\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst params = AjaxCriteria()\n                    .add(\"action\", 'get_ajax_data')\n                    .add(\"nonce\", values.nonce)\n                    .add(\"post_id\",document.getElementById(\"cast_select\").value)\n                    .build();\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eビルダーパターンのように実装ができました。\u003Cbr \u002F\u003Eなんか関数型っぽい記載ができたので満足です。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eちなみに、ワードプレスのテーマを元に戻しました。なんかアイキャッチ画像が重いので、、、\u003C\u002Fp\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003E「クロージャとは関数内で定義された関数である」こんな薄っぺらい説明ではクロージャのクの字も語れていないと誰かが言ってました。 というわけでビルダーパターンっぽいのをクロージャを使って作ってみました。 今作ってるワードプレ&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F05\u002F27\u002Fjavascript%e3%81%a7%e3%82%af%e3%83%ad%e3%83%bc%e3%82%b8%e3%83%a3%e3%81%a8%e3%83%93%e3%83%ab%e3%83%80%e3%83%bc%e3%83%91%e3%82%bf%e3%83%bc%e3%83%b3%e3%81%bf%e3%81%9f%e3%81%84%e3%81%aa%e3%82%84%e3%81%a4\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EJavaScriptでクロージャとビルダーパターンみたいなやつ\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:k,featured_media:b,comment_status:o,ping_status:o,sticky:j,template:c,format:"standard",meta:[],categories:[l],tags:[34],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1255"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1255"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1255\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1255"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1255"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1255"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:q,slug:q,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,1,5,"2021-05-27T22:16:23","2021-05-27T13:16:23","open",3,"gulp",6,9)));