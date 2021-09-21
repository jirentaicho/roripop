__NUXT_JSONP__("/post/702", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{id:702,date:m,date_gmt:n,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=702"},modified:m,modified_gmt:n,slug:"unityonline01",status:"publish",type:"post",link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F09\u002F24\u002Funityonline01\u002F",title:{rendered:"Unityでオンラインゲームを作りたい"},content:{rendered:"\n\u003Cp\u003E今回からUnityでオンラインゲームを作ろうと思います。\u003Cbr \u002F\u003E進捗とか技術的なことを随時メモしていこうかなと思います。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E途中でプロジェクトが爆発したらごめんなさい。\u003Cbr \u002F\u003Eガチでオンラインのオの字もわからない状態から始めます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Cspan class=\"has-inline-color has-vivid-red-color\"\u003E※あらかじめある程度動くUnityちゃんを作っています。\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eちなみにゲームを公開する予定はありません。\u003Cbr \u002F\u003Eでも作り方を学ぶためにやっていきます！\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eオンラインの入口\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E参考\u003Cbr \u002F\u003E\u003Ca href=\"https:\u002F\u002Fconnect.unity.com\u002Fp\u002Fpun2deshi-meruonraingemukai-fa-ru-men-sono1\" target=\"_blank\" rel=\"noreferrer noopener\"\u003Ehttps:\u002F\u002Fconnect.unity.com\u002Fp\u002Fpun2deshi-meruonraingemukai-fa-ru-men-sono1\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eとりあえず無料である程度使えるというphotonを利用します。\u003Cbr \u002F\u003E公式サイトもシンプルという文言が全面に出ているのできっと大丈夫でしょう&#8230;\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fwww.photonengine.com\u002Fen-US\u002FPhoton\" target=\"_blank\"\u003Ehttps:\u002F\u002Fwww.photonengine.com\u002Fen-US\u002FPhoton\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eとりあえずアカウント作ってCREATE A NEW APPで新規appの作成を行いました。\u003Cbr \u002F\u003EとりあえずAPP IDというのを手に入れることに成功しました。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-23-22.43.57.png\" alt=\"\" class=\"wp-image-705\" width=\"492\" height=\"351\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E次にAssetStoreから\u003Cstrong\u003EPUN 2 無料版\u003C\u002Fstrong\u003Eをインポートします。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-23-23.17.33-1024x408.png\" alt=\"\" class=\"wp-image-707\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EインポートしたらAppIDの入力を求められたので入力します。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-23-23.28.56.png\" alt=\"\" class=\"wp-image-708\" width=\"377\" height=\"284\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EこれでSetupProjectをするとAsset¥Photon¥PhotonUnityNetWorkingフォルダにPhotonServerSettings.assetが作成されます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eんで以下のように設定しました。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-24-0.05.07-632x1024.png\" alt=\"\" class=\"wp-image-711\" width=\"426\" height=\"690\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E参考サイトにいい感じのコードがあるので参考にしました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E※以下はまだ動きません\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Eusing Photon.Pun;\nusing Photon.Realtime;\nusing UnityEngine;\npublic class NetWorkScene : MonoBehaviourPunCallbacks\n{\n    void Start()\n    {\n        \u002F\u002F さっきの設定に従ってマスタサーバーへ接続する\n        PhotonNetwork.ConnectUsingSettings();\n    }\n    \u002F\u002F マスタサーバーへ接続後\n    public override void OnConnectedToMaster()\n    {\n        \u002F\u002F \"test\"ルームに参加、なければ作成\n        PhotonNetwork.JoinOrCreateRoom(\"test\", new RoomOptions(), TypedLobby.Default);\n    }\n    \u002F\u002F マッチング成功したら呼ばれる\n    public override void OnJoinedRoom()\n    {\n        PhotonNetwork.Instantiate(\"Unitychan\", new Vector3(0,0,0), Quaternion.identity);\n    }\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EまずPrefabを登録しておく必要があります。Resourcesフォルダーという名前のフォルダーにプレファブを投入します。名前が違っているとエラーになります。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-24-21.11.26-1024x44.png\" alt=\"\" class=\"wp-image-720\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eちなみにこの状態でプレイするとエラーが起きてインスタンス化できない\u003C\u002Fp\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003EPhotonNetwork.Instantiate() can only instantiate objects with a PhotonView component. This prefab does not have one: Unitychan\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003EUnitychanがPhotonViewを持っていない系らしいです。\u003Cbr \u002F\u003EというわけでプレファブのUnitychanにスクリプトをアタッチしてみます。特に設定はいじっていません。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-24-21.47.56.png\" alt=\"\" class=\"wp-image-723\" width=\"357\" height=\"287\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E実行すると空前絶後の超絶怒涛のすごいアイドルUnityちゃんが表示されました。ドーナツも床に転がっていますが気にしないでください。おそらくもう一つのデバイスで再生するとUnityちゃんが2人になっているのだろう。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-24-21.49.35.png\" alt=\"\" class=\"wp-image-724\" width=\"368\" height=\"255\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003EといわけでWebでビルドしてやってみたところ\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-24-22.12.08.png\" alt=\"\" class=\"wp-image-727\" width=\"424\" height=\"396\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003E2人登場です。しかも同じ動きをします。しかしUnityの再生側は1人しかいませんでした。まぁいいや。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eさぁ、Unityちゃんが登場するともう大丈夫だ。ここまでくればあとは怖いものはないだろう。って気持ちになりますね。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003E無料のプランの制限\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eところでこの便利なオンライン機能ですが、無料プランには制限があるようです。\u003Cbr \u002F\u003Eというのも一つのルームに500メッセージまでという制限です。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eメッセージの概念がよくわからない。出会い系でいうメッセージなら500通はなかなかのポイント消費量だがゲームでの消費量が見えにくい。\u003Cbr \u002F\u003Eとりあえず、ここでは制限が500ラブレターまでとだけ頭の片隅に置いておくことにする。\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003Eオンライン世界の私\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eここからは資料のその２に入る\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https:\u002F\u002Fconnect.unity.com\u002Fp\u002Fpun2deshi-meruonraingemukai-fa-ru-men-sono2\" target=\"_blank\"\u003Ehttps:\u002F\u002Fconnect.unity.com\u002Fp\u002Fpun2deshi-meruonraingemukai-fa-ru-men-sono2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eオンラインでの私を特定する便利な関数があるとのことです。\u003C\u002Fp\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003EPhotonView.IsMin\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003E先ほど2人のUnitychanを同じように操作してしまった。ブラウザ側とUnity側のUnitychanの両方を動かしたのは、オンライン世界の私を特定できていなかったからだ。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eさてここで困ったことに、俺が今Unityちゃんを操作しているスクリプトはすでに基底クラスを持っていたw\u003Cbr \u002F\u003Eだが心配することはない基底クラス側で継承すればいい。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EC#は複数の継承をサポートしていないいい例だぜまったく\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E話から逸れるといけないので現状の構成だけを載せておきます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eまずは以下のようなインターフェースを定義しています。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Eusing UnityEngine;\n\u002F\u002F\u002F &lt;summary\u003E\n\u002F\u002F\u002F キャラクターのインターフェースです\n\u002F\u002F\u002F &lt;\u002Fsummary\u003E\npublic interface CharacterBase\n{\n    void move();\n    void action(Collider col);\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E次にインターフェースを実装している抽象クラスです。ここに\u003Cstrong\u003EMonoBehaviourPunCallbacks\u003C\u002Fstrong\u003Eを継承する仕組みを入れてます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Eusing UnityEngine;\nusing Photon.Pun;\npublic abstract class CharacterBasicMove : MonoBehaviourPunCallbacks, CharacterBase\n{\n.......\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eそして実装クラスはCharacterBasicMoveを継承しています。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Epublic class UnityChanMove : CharacterBasicMove\n{\n......\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eさてキャラクター動かすUpdateメソッドに条件を入れます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E    private void Update()\n    {\n        if (photonView.IsMine)\n        {\n            move();\n            anim.playRun(isRun);\n        }\n    }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこれでオンラインの自分自身のみを動かすという概念が入りました。\u003Cbr \u002F\u003E実行するとそれが確認できます。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-24-22.48.50-1024x598.png\" alt=\"\" class=\"wp-image-734\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Ch2\u003Eもう1人の僕が歩き出す\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eなんだかんだいってど素人の私でもオンライン環境を確かに利用している。\u003Cbr \u002F\u003Eここまで難しいことはない。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E次にやることは私以外のキャラクターの更新を行うことです。\u003Cbr \u002F\u003Eといても参考サイトによると簡単に座標の更新ができるらしいのでやってみます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EプレファブのUnityちゃんを以下のようにする。というかPhotonTransformViewをアタッチしただけです。\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-image size-large is-resized\"\u003E\u003Cimg loading=\"lazy\" src=\"https:\u002F\u002Fvolkruss.com\u002Fwp-content\u002Fuploads\u002F2020\u002F09\u002Fスクリーンショット-2020-09-24-23.37.20.png\" alt=\"\" class=\"wp-image-735\" width=\"506\" height=\"618\"\u002F\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Eすると確かに他のプレイヤーの動きが反映されていました。ちなみにドーナツを片方が食うとちゃんと消えます。\u003Cbr \u002F\u003Eただカメラの動きがちょっとおかしい。。でも今回はここまで！\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eちょっとオンラインゲーム作っても公開予定がないのでしばらく更新しないと思います。\u003Cbr \u002F\u003E参考サイトをみるとだいたい使い方はわかると思います。\u003C\u002Fp\u003E\n",protected:j},excerpt:{rendered:"\u003Cp\u003E今回からUnityでオンラインゲームを作ろうと思います。進捗とか技術的なことを随時メモしていこうかなと思います。 途中でプロジェクトが爆発したらごめんなさい。ガチでオンラインのオの字もわからない状態から始めます。 ※あら&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F09\u002F24\u002Funityonline01\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EUnityでオンラインゲームを作りたい\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:j},author:k,featured_media:b,comment_status:o,ping_status:o,sticky:j,template:c,format:"standard",meta:[],categories:[l],tags:[44,51,60],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F702"}],collection:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts"}],about:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost"}],author:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1"}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=702"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F702\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=702"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=702"},{taxonomy:"post_tag",embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=702"}],curies:[{name:e,href:f,templated:a}]}}}],fetch:{"0":{categories:{categories:[{id:2,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:p,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:q,slug:q,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:i,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:r,count:i,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:"JavaScript",slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:7,count:s,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:r,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:s,count:p,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:g}],about:[{href:h}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory",4,false,1,6,"2020-09-24T23:41:44","2020-09-24T14:41:44","open",3,"gulp",5,9)));