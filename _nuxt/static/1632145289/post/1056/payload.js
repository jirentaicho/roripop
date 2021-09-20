__NUXT_JSONP__("/post/1056", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{post:{id:1056,date:l,date_gmt:m,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1056"},modified:l,modified_gmt:m,slug:"%e3%82%bb%e3%83%bc%e3%83%ab%e3%81%a7dialogsystem%e3%82%92%e8%b2%b7%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%a7%e3%83%a1%e3%83%a2%e3%80%90unity%e3%80%91",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F12\u002F10\u002F%e3%82%bb%e3%83%bc%e3%83%ab%e3%81%a7dialogsystem%e3%82%92%e8%b2%b7%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%a7%e3%83%a1%e3%83%a2%e3%80%90unity%e3%80%91\u002F",title:{rendered:"セールでDialogSystemを買ったのでメモ【Unity】"},content:{rendered:"\n\u003Cp\u003Eこの前のセールで安くなっていたので買ってみました。\u003Cbr \u002F\u003Eとりあえず\u003Ca href=\"https:\u002F\u002Fwww.pixelcrushers.com\u002Fdialogue_system\u002Fmanual2x\u002Fhtml\u002F\" data-type=\"URL\" data-id=\"https:\u002F\u002Fwww.pixelcrushers.com\u002Fdialogue_system\u002Fmanual2x\u002Fhtml\u002F\" target=\"_blank\" rel=\"noreferrer noopener\"\u003Eドキュメント\u003C\u002Fa\u003Eがあるのですが、YouTubeにも動画あってこっちのほうがわかりやすい\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-embed-youtube wp-block-embed is-type-rich is-provider-埋め込みハンドラー wp-embed-aspect-16-9 wp-has-aspect-ratio\"\u003E\u003Cdiv class=\"wp-block-embed__wrapper\"\u003E\n\u003Ciframe loading=\"lazy\" title=\"Dialogue System for Unity 2.x Quick Start\" width=\"750\" height=\"422\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FrCVGwSIDI-4?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch2\u003EUIを簡単に変更する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003EデフォルトのUIってあんまり良いと思わないので変更します。\u003Cbr \u002F\u003Eある程度用意されているので、DialogManagerのDialogue Systemを見ると、DialogueUIがありそこに用意されてるPrefabを設定すると簡単に変更できる。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EちなみにPrefabは以下にいくつかあるので好みのものを使ってみると良いと思います。\u003Cbr \u002F\u003EAssets\u002FPlugins\u002FPixel Crushers\u002FDialogue System\u002FPrefabs\u002FStandard UI Prefabs\u002FTemplates\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-18.39.36.png\" alt=\"\" class=\"wp-image-1063\" width=\"571\" height=\"363\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch2\u003E会話発生時のボタンを変更する\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003ESelectorのUseKeyを変更する(デフォルトはスペース)\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-16.27.20.png\" alt=\"\" class=\"wp-image-1060\" width=\"444\" height=\"450\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EちなみにこのSelectAtで会話の発生トリガーを変更できます。今回は画面の真ん中にきたときに会話発生可能にしています。（デモシーンと同じ）\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eサンプルのクエストを見てみる\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eまずはサンプルのシーンを実行してどんな動きをするか見ておきます。\u003Cbr \u002F\u003Eとりあえずサンプルシーンを見ると、いくつかクエストが用意されています。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-21.23.26-1024x206.png\" alt=\"\" class=\"wp-image-1066\" width=\"407\" height=\"81\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eこの一番上のクエストの詳細をみると色々書いてありますが、大事なのはStateだと思います。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-22.43.41.png\" alt=\"\" class=\"wp-image-1073\" width=\"473\" height=\"360\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E初期値はunassingedとなっており、まだアサインされていない状態ですね。\u003Cbr \u002F\u003E他にもactiveやsuccessなどあります。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E会話は３つに分岐していて、クエストを受け取っていない時、クエスト実行中の時、クエスト完了の時、\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-21.46.22.png\" alt=\"\" class=\"wp-image-1068\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E真ん中のAnyLuckDownloading the I..と書かれているところの、Conditionsに以下のような記載があります。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003ECurrentQuestState(&#8220;Get the Launch Codes&#8221;) == &#8220;active&#8221;\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E見た感じではGet the Launch Codesというクエストがactiveの時にフローがいくようになっている。\u003Cbr \u002F\u003EさらにIll find the password. [E&#8230;となっているところのScriptには以下のような記載があります。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003ESetQuestState(&#8220;Get the Launch Codes&#8221;, &#8220;active&#8221;);\u003Cbr \u002F\u003EVariable[&#8220;Alert&#8221;] = &#8220;Mission: Get the Launch Codes&#8221;\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EGet the Launch Codesというクエストをactiveにしています。\u003Cbr \u002F\u003Eこのようにしてスクリプトを通してクエストを制御しているようですね。というわけで作成してみます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EちなみにこのCurrentQuestStateというのは関数のようです。\u003Cbr \u002F\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fwww.pixelcrushers.com\u002Fdialogue-system-documentation\u002F\" data-type=\"URL\" data-id=\"https:\u002F\u002Fwww.pixelcrushers.com\u002Fdialogue-system-documentation\u002F\" target=\"_blank\"\u003Eドキュメント\u003C\u002Fa\u003Eを見ると、Quest-Related Lua Functionsという見出しに関数の説明があります。Luaという言語らしいですね（cocos2dxかなんかであったような・・・）\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eクエストを作る\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eどんなクエストにしようか考えたのですが、サンプルっぽくパスワードをゲットするみたいなクエストを作ってみます。Get the Codeというシンプルなクエストです。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-22.16.49-1024x190.png\" alt=\"\" class=\"wp-image-1071\" width=\"613\" height=\"113\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E同じようにクエスト未実施と実行中と完了の3つ子要素を作っておきます。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-22.22.00.png\" alt=\"\" class=\"wp-image-1072\" width=\"538\" height=\"175\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eクエスト未実施のConditionsに以下を設定(クエストがアサインされてない場合のみ実施)\u003Cbr \u002F\u003ECurrentQuestState(&#8220;Get the Code&#8221;) == &#8220;unassigned&#8221;\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eクエスト実行中のConditionsに以下を設定(クエストがactiveの時のみ実施)\u003Cbr \u002F\u003ECurrentQuestState(&#8220;Get the Code&#8221;) == &#8220;active&#8221;\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E続いてそれぞれに子ノードを作ります。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-22.52.18.png\" alt=\"\" class=\"wp-image-1075\" width=\"498\" height=\"216\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eクエストを開始します。のScriptに以下を設定(クエストのStateをactiveに変更)\u003Cbr \u002F\u003ESetQuestState(&#8220;Get the Code&#8221;, &#8220;active&#8221;);\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eこれでクエストを開始します。のあとはクエストがactiveになりパスワードを見つけてくれというふうになります。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E次に新しいConversationsを作成します。+ボタンから新規作成できます\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-22.56.24.png\" alt=\"\" class=\"wp-image-1078\" width=\"407\" height=\"187\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eパスワードを見つけたというノードのScriptを以下に設定(クエスト成功)\u003Cbr \u002F\u003ESetQuestState(&#8220;Get the Code&#8221;, &#8220;success&#8221;);\u003Cbr \u002F\u003EConditionsに以下を設定(クエスト実行中のみ実施)\u003Cbr \u002F\u003ECurrentQuestState(&#8220;Get the Code&#8221;) == &#8220;active&#8221;\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E次に先程のConversationsに戻って、クエスト完了の子ノードを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-09-22.59.01.png\" alt=\"\" class=\"wp-image-1079\" width=\"426\" height=\"179\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eクエスト完了のConditionsに以下を設定(クエスト完了というか成功の場合）\u003Cbr \u002F\u003ECurrentQuestState(&#8220;Get the Code&#8221;) == &#8220;success&#8221;\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eこれでクエストの基本的な仕組みはできました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eちなみにコードを発見する時のConversationは以下のようにすればOKです\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-10-0.23.53.png\" alt=\"\" class=\"wp-image-1081\" width=\"430\" height=\"349\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch2\u003Eおまけ、GameCreatorのActionを発火させる\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E会話中にキャラクターが動いてしまうのを制御します。\u003Cbr \u002F\u003EGameCreatorを使っている場合はActionのTimeScaleを0にすることで停止できます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eといわで、停止と再生のアクションのみを持つゲームオブジェクトを作成しておきます。\u003Cbr \u002F\u003EそれぞれTimeScaleを0にするのと1にするActionを持たせます\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-10-0.26.13.png\" alt=\"\" class=\"wp-image-1084\" width=\"380\" height=\"255\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EそしてプレイヤーにつけているDialog System Eventsを以下のようにします。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-10-0.29.23.png\" alt=\"\" class=\"wp-image-1085\" width=\"472\" height=\"400\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E会話中は停止のActionを持ったゲームオブジェクトのActions.Executeを実行することで、Actionが実行されます。ここでTimeScaleを0にします。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eそして会話が終了したら再生のゲームオブジェクトのActions.Executeを実行してTimeScaleを1に戻す。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F12\u002Fスクリーンショット-2020-12-10-0.34.30-1024x483.png\" alt=\"\" class=\"wp-image-1087\" width=\"417\" height=\"196\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003Eこの前のセールで安くなっていたので買ってみました。とりあえずドキュメントがあるのですが、YouTubeにも動画あってこっちのほうがわかりやすい UIを簡単に変更する デフォルトのUIってあんまり良いと思わないので変更しま&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F12\u002F10\u002F%e3%82%bb%e3%83%bc%e3%83%ab%e3%81%a7dialogsystem%e3%82%92%e8%b2%b7%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%a7%e3%83%a1%e3%83%a2%e3%80%90unity%e3%80%91\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EセールでDialogSystemを買ったのでメモ【Unity】\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:n,featured_media:b,comment_status:o,ping_status:o,sticky:j,template:c,format:"standard",meta:[],categories:[k],tags:[20,28,51],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1056"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1056"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1056\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1056"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1056"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1056"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:q,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:q,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:n,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,6,"2020-12-10T00:35:26","2020-12-09T15:35:26",1,"open",3,5,9)));