__NUXT_JSONP__("/post/1263", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{id:1263,date:k,date_gmt:l,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1263"},modified:k,modified_gmt:l,slug:"wordpress%e3%81%ae%e3%83%97%e3%83%a9%e3%82%b0%e3%82%a4%e3%83%b3%e3%81%8b%e3%82%89%e3%82%ab%e3%82%b9%e3%82%bf%e3%83%a0%e6%8a%95%e7%a8%bf%e3%82%bf%e3%82%a4%e3%83%97%e3%82%92%e4%bd%9c%e3%81%a3%e3%81%9f",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F06\u002Fwordpress%e3%81%ae%e3%83%97%e3%83%a9%e3%82%b0%e3%82%a4%e3%83%b3%e3%81%8b%e3%82%89%e3%82%ab%e3%82%b9%e3%82%bf%e3%83%a0%e6%8a%95%e7%a8%bf%e3%82%bf%e3%82%a4%e3%83%97%e3%82%92%e4%bd%9c%e3%81%a3%e3%81%9f\u002F",title:{rendered:"WordPressのプラグインからカスタム投稿タイプを作ったけどsingleが全く機能しない件"},content:{rendered:"\n\u003Cp\u003E今、ワードプレスのプラグインを作っています。\u003Cbr \u002F\u003Eプラグインの中でカスタム投稿タイプを作成しましたが、こいつがsingle.phpで全く認識しない問題がありました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E原因は正直よくわかりませんでしたが、一応解決できたのでメモしておきます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EAddCastPostTypeクラスでcastというカスタム投稿タイプを作成しています。\u003Cbr \u002F\u003E以下は失敗例です。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E&lt;?php\nclass AddCastPostType{\n    public function __construct(){\n        if (!defined('ABSPATH')) {\n            exit;\n        }\n        add_action('init',array($this,'create_item_post_type'));\n    }\n    function create_item_post_type() {\n        register_post_type( 'cast', &#91;\n            'labels' =\u003E &#91;\n                'name'          =\u003E 'キャスト',\n                'singular_name' =\u003E 'cast',\n                'add_new_casr' =\u003E 'キャストを追加',\n                'add_new' =\u003E '新規キャスト登録',\n            ],\n            \u002F\u002F'rewrite'       =\u003E array( 'slug' =\u003E 'cast' ),\n            'public'        =\u003E true,\n            'has_archive'   =\u003E true,\n            'menu_position' =\u003E 610,\n            'show_in_rest'  =\u003E true,\n        ]);\n    }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E問題なく管理画面にキャストが追加されます。\u003Cbr \u002F\u003E次はこのクラスをインスタンス化します。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eプラグインファイルにてクラスのインスタンス化します。\u003Cbr \u002F\u003E（余計な箇所は省略しています）\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Erequire_once dirname( __FILE__ ) . '\u002Fapp\u002FCustomPost\u002FCast\u002FAddCastPostType.php';\n\u002F**\n * 初期化します。\n *\u002F\nclass ItemManager{\n    public function init(){\n        \u002F**\n         * 必要なクラスをインスタンス化する\n         * それぞれクラスはコンストラクタからadd_actionなどで処理を行って行く\n         *\u002F\n        if(HelperUtility::isLoginStatus()){\n            $cast_post_type = new AddCastPostType();\r \u002F\u002Fこれが問題\n        }\n    }\n}\n\u002F**\n * クラスをインスタンス化して初期化メソッドを実行する\n *\u002F\n$item_manager = new ItemManager();\n$item_manager-\u003Einit();\n\r\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eプログラミングのお作法に基づいてクラスをインスタンス化したんですけど、これが問題でした。\u003Cbr \u002F\u003Eなんでかわかりませんが、以下の書き方に変えるとsingle.phpで認識するようになりました。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E&lt;?php\n\r\u002F\u002Fここでインスタンス化？？？\n$addCastPostType = new AddCastPostType;\nclass AddCastPostType{\n    public function __construct(){\n        if (!defined('ABSPATH')) {\n            exit;\n        }\n        add_action('init',array($this,'create_item_post_type'));\n    }\n    function create_item_post_type() {\n        register_post_type( 'cast', &#91;\n            'labels' =\u003E &#91;\n                'name'          =\u003E 'キャスト',\n                'singular_name' =\u003E 'cast',\n                'add_new_casr' =\u003E 'キャストを追加',\n                'add_new' =\u003E '新規キャスト登録',\n            ],\n            \u002F\u002F'rewrite'       =\u003E array( 'slug' =\u003E 'cast' ),\n            'public'        =\u003E true,\n            'has_archive'   =\u003E true,\n            'menu_position' =\u003E 610,\n            'show_in_rest'  =\u003E true,\n        ]);\n    }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eクラス内の変数にインスタンス化？したクラスを持たせることで、解決しました。\u003Cbr \u002F\u003Eつまり、プラグインファイルからはインクルードするだけで、インスタンス化はしません。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Eclass ItemManager{\n    public function init(){\n        if(HelperUtility::isLoginStatus()){\n            \u002F\u002F$cast_post_type = new AddCastPostType();\n 。\n        }\n    }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eとりあえず、$addCastPostType = new AddCastPostType;のような書き方について調べる必要がありますが、解決しました。\u003C\u002Fp\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003E今、ワードプレスのプラグインを作っています。プラグインの中でカスタム投稿タイプを作成しましたが、こいつがsingle.phpで全く認識しない問題がありました。 原因は正直よくわかりませんでしたが、一応解決できたのでメモし&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F06\u002F06\u002Fwordpress%e3%81%ae%e3%83%97%e3%83%a9%e3%82%b0%e3%82%a4%e3%83%b3%e3%81%8b%e3%82%89%e3%82%ab%e3%82%b9%e3%82%bf%e3%83%a0%e6%8a%95%e7%a8%bf%e3%82%bf%e3%82%a4%e3%83%97%e3%82%92%e4%bd%9c%e3%81%a3%e3%81%9f\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EWordPressのプラグインからカスタム投稿タイプを作ったけどsingleが全く機能しない件\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:m,featured_media:b,comment_status:n,ping_status:n,sticky:j,template:c,format:"standard",meta:[],categories:[o],tags:[56],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1263"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1263"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1263\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1263"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1263"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1263"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:q,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:q,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:o,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:m,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,"2021-06-06T21:55:56","2021-06-06T12:55:56",1,"open",8,3,6,5,9)));