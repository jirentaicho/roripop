__NUXT_JSONP__("/post/593", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{id:593,date:m,date_gmt:n,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=593"},modified:m,modified_gmt:n,slug:"aibehaviorhowtouse",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F08\u002F30\u002Faibehaviorhowtouse\u002F",title:{rendered:"【無料アセット】AI Behaviorを使う【初心者】"},content:{rendered:"\n\u003Cp\u003Eこの記事は\u003Cstrong\u003EAI Behavior\u003C\u002Fstrong\u003Eを使いたいので調査の記録です。正直このアセットの使い方全く知らない状態での調査になりますので、間違っている内容がある可能性が非常に可能性として、まぁ可能性としてある可能性があります。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E一応PDFのマニュアルを読みつつ進めます。引用箇所はグーグル翻訳かけたった箇所ですw\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E調査対象　08a_state_ranged_attack_and_move\u003Cbr \u002F\u003Eパス Assets\u002FAIBehavior\u002FScenes\u002FVideo_Examples\u002FStates\u002F08_state_ranged_attack.unity\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eこのシーンは敵キャラがなんか丸い物体を投げてくる。敵キャラから離れると追いかけてくる。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003E基本情報の確認\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eまずはどんなステートが登録されているか確認\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-19.06.25.png\" alt=\"\" class=\"wp-image-594\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E再生してみるとIdleとSeekとRangedAttackが使われている。Fleeはよくわからん。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eとりあえず、Idleはアイドル状態で他のステータスへの遷移を行なっている。\u003Cbr \u002F\u003ESeekが追っかけてくる。攻撃は攻撃のステートのやつ。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003EIdleステートのTriggersを調査\u003C\u002Fh2\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-19.08.14.png\" alt=\"\" class=\"wp-image-595\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E一番下のChange to Stateが次のステートへの遷移で、その条件が上に書いてあると思う。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-19.12.42.png\" alt=\"\" class=\"wp-image-598\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eそれでいうと、一応Fleeステートへの遷移情報もある。\u003C\u002Fp\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E3.4.2 Beyond distance trigger\u003C\u002Fp\u003E\u003Ccite\u003E3.4.2距離を超えたトリガー\u003Cbr \u002F\u003EAIターゲットタグのあるGameObjectが指定された「距離」よりも遠いかどうかを確認します。 「チェックモード」は、タグの付いたゲームオブジェクトまたはそのすべてが距離を超えているかどうかを指定します。\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E3.4.21 Within distance trigger\u003C\u002Fp\u003E\u003Ccite\u003E3.4.21距離内トリガー\u003Cbr \u002F\u003E指定されたタグを持つGameObjectが指定された距離よりも近いかどうかをチェックします。 「チェックモード」は、タグ付きのゲームオブジェクトまたはそれらすべてが距離内にあるかどうかを指定します。\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003Eプレイヤーを判断しているのはGeneral AP Propertiesでタグ(Player)を指定しているのかなと。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-19.22.06.png\" alt=\"\" class=\"wp-image-601\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch2\u003ESeekステートの調査\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E走って追いかけてくるときのステート\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-19.24.11.png\" alt=\"\" class=\"wp-image-603\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E距離が10になったら攻撃ステートへ遷移している。またAnimationsでアニメーションを設定しているのがわかる。\u003C\u002Fp\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E2.3.3 Seek State\u003C\u002Fp\u003E\u003Ccite\u003E2.3.3シーク状態\u003Cbr \u002F\u003E&#8220;No Seek Target Transition&#8221;「シークターゲット遷移なし」は、ターゲットがない場合に変化する状態です。\u003Cbr \u002F\u003E&#8220;No Movement Transition&#8221;は、AIが何らかの理由（たとえば、ターゲットに到達できないなど）で停止したときに発生する状態です。\u003Cbr \u002F\u003E「Seek Target Reached Transition」は、ターゲットに到達したときに変化する状態です（たとえば、AIがプレイヤーを追跡していて、プレイヤーに到達したときに攻撃状態に変わります）。\u003Cbr \u002F\u003E「Distance To Target Threshold」は、AIがターゲットに近づく距離です。 有効にすることもできます\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Ch2\u003ERangedAttackステートの調査\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eトリガーなどの設定はほとんどない（なんてこったー）\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-19.31.25.png\" alt=\"\" class=\"wp-image-606\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eその代わりAttackPropertiesが結構書いてあります。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-19.32.18.png\" alt=\"\" class=\"wp-image-608\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eダメージやら書いてあるます。でも一番大事なのは一番下かな？メソッド呼び出し設定ですね。\u003Cbr \u002F\u003EExample Attack Compoenentってスクリプトがアタッチされています。このスクリプトのRangedAttackメソッドを呼んでいるようです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E攻撃タイミングはアニメーションによるのかな？\u003C\u002Fp\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E2.3.5 Attack State &amp; Mecanim Attack State\u003C\u002Fp\u003E\u003Ccite\u003E「攻撃ベース」は、「攻撃方法」が呼び出されるタイミングを定義します。これは、アニメーションの特定のポイントまたは時間間隔に基づくことができます。\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Ch2\u003E応用編使ってみる\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eというわけで、ちょっと使ってみます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E今、開発中のゲームなので色々記載されていますが、気にしないでください。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EAI管理したいオブジェクトを選択して、ToolsからAI Behavior &gt; Mecanim Setupを選択すると、色々と勝手にアタッチされます。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-20.19.12.png\" alt=\"\" class=\"wp-image-613\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E地面にはNavigationをbakeして歩けるようにしておきます。\u003Cbr \u002F\u003E次にAIにNav Mesh Agentをアタッチしておきます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E最初に色々なステートが付いているのでIdleとAttackとSeekとFlee以外を消しておきます。\u003Cbr \u002F\u003E（画像はIdleに-してますがIdleは残しておいてください）\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-20.26.16.png\" alt=\"\" class=\"wp-image-615\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EとりあえずIdleからAttackにしてみようと思います。（まずは簡単なところからいきますw）\u003Cbr \u002F\u003EIdleのEidtを押してIdleの編集をします。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E下記のようなトリガーを追加します。\u003Cbr \u002F\u003Eとりあえずトリガー条件をWithinDistanceTriggerにしてください。画像のDistanceが0になっていますが、10にしておきます。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-20.38.53.png\" alt=\"\" class=\"wp-image-616\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eその前にアニメーションの設定を行います。AI Animation Stateスクリプトをみます。これはアニメーションを管理するスクリプトです。ここに登録されているアニメーションのステート名をレイヤー.ステート名で指定します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-20.50.51.png\" alt=\"\" class=\"wp-image-618\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eそしたら、いったりきたりになりますが、Idleの設定に持っどってAnimationsに先ほど追加したアニメーションを設定します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-20.46.27.png\" alt=\"\" class=\"wp-image-617\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E次に攻撃のステートの設定をします。\u003Cbr \u002F\u003E攻撃のAnimationsは攻撃用のステートにしておきます。攻撃用のメソッドを追加しておきます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eこれを追加にするにはAIBehavior.AttackDataを引数にとったメソッドが必要らしいです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EEnemyAITest.cs\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E\nusing UnityEngine;\nusing AIBehavior;\npublic class EnemeyAITest : MonoBehaviour\n{\n    public void Test(AttackData attackData)\n    {\n        Debug.Log(\"AI-TEST\");\n    }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EこれをAIキャラクターにアタッチしておきます。そうするとメソッドが選択できるようになります。\u003Cbr \u002F\u003Eかならずpublicメソッドにしてください。参照できません。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-29-21.21.04.png\" alt=\"\" class=\"wp-image-619\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eよーし実行実行！\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eうーんステートが変化してるんだけよくわからんw\u003Cbr \u002F\u003Eというわけで、私の場合はステート変化しませんでした。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E見直す点はここです。\u003Cbr \u002F\u003Eアニメーションの設定スクリプトでCross Fade In とCross Fade Outにチェックを入れました。\u003Cbr \u002F\u003Eあと、アニメーションのステートNameは空白に注意してくださいw\u003Cbr \u002F\u003E私は空白があってうまく動いていませんでした。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-30-0.46.27.png\" alt=\"\" class=\"wp-image-622\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eこれでうまく行きました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E近寄ると攻撃してくる\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-30-0.48.51.png\" alt=\"\" class=\"wp-image-623\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eなんとなくコツというか基本操作は覚えたので、ゴリゴリ組んでいけそうな気がする・・・？\u003C\u002Fp\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E1.4.2 Mecanim animations\u003C\u002Fp\u003E\u003Ccite\u003E追加のコードなしでAIがアニメーションを完全に制御できるようにするには、「クロスフェードイン」および「クロスフェードアウト」オプションをオンにする必要があります。\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Ch2\u003E追記メモ\u003C\u002Fh2\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003EQ. 攻撃時に意図しない動きになる\u003C\u002Fp\u003E\u003Ccite\u003EA. AIBehabiorsの攻撃ステートがMecanimAttackStateになっていることを確認します。\u003Cbr \u002F\u003E例えば、普通のAttackStateだと私の場合はダメでした。\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eまた、攻撃ステートのFind Visible Target Onlyのチェックも外しておくと良いかも。\u003Cbr \u002F\u003E\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-30-7.59.56-1.png\" alt=\"\" class=\"wp-image-627\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F08\u002Fスクリーンショット-2020-08-30-8.01.44.png\" alt=\"\" class=\"wp-image-628\"\u002F\u003E\u003C\u002Ffigure\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003Eこの記事はAI Behaviorを使いたいので調査の記録です。正直このアセットの使い方全く知らない状態での調査になりますので、間違っている内容がある可能性が非常に可能性として、まぁ可能性としてある可能性があります。 一応&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F08\u002F30\u002Faibehaviorhowtouse\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003E【無料アセット】AI Behaviorを使う【初心者】\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:k,featured_media:b,comment_status:o,ping_status:o,sticky:j,template:c,format:"standard",meta:[],categories:[l],tags:[12,14,51],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F593"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=593"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F593\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=593"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=593"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=593"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:q,slug:q,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,1,6,"2020-08-30T00:50:45","2020-08-29T15:50:45","open",3,"gulp",5,9)));