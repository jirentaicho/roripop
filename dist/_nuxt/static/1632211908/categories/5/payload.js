__NUXT_JSONP__("/categories/5", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{posts:{post:[{id:1255,date:v,date_gmt:w,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1255"},modified:v,modified_gmt:w,slug:"javascript%e3%81%a7%e3%82%af%e3%83%ad%e3%83%bc%e3%82%b8%e3%83%a3%e3%81%a8%e3%83%93%e3%83%ab%e3%83%80%e3%83%bc%e3%83%91%e3%82%bf%e3%83%bc%e3%83%b3%e3%81%bf%e3%81%9f%e3%81%84%e3%81%aa%e3%82%84%e3%81%a4",status:m,type:n,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F05\u002F27\u002Fjavascript%e3%81%a7%e3%82%af%e3%83%ad%e3%83%bc%e3%82%b8%e3%83%a3%e3%81%a8%e3%83%93%e3%83%ab%e3%83%80%e3%83%bc%e3%83%91%e3%82%bf%e3%83%bc%e3%83%b3%e3%81%bf%e3%81%9f%e3%81%84%e3%81%aa%e3%82%84%e3%81%a4\u002F",title:{rendered:"JavaScriptでクロージャとビルダーパターンみたいなやつ"},content:{rendered:"\n\u003Cp\u003E「クロージャとは関数内で定義された関数である」こんな薄っぺらい説明ではクロージャのクの字も語れていないと誰かが言ってました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eというわけでビルダーパターンっぽいのをクロージャを使って作ってみました。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E今作ってるワードプレスのプラグインで、ajax用のパラメータを作る処理に取り入れてます。\u003Cbr \u002F\u003E普通はこんな感じでパラメータを作成します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E    let params = new URLSearchParams();\n    params.append(\"action\", 'get_ajax_data');\n    params.append(\"nonce\", values.nonce);\n    params.append(\"post_id\",document.getElementById(\"cast_select\").value);\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこれでも別に何の問題もないのですが、クロージャを使えばビルダーパターンのような書き方ができます。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E以下のような、クロージャを利用した関数を用意します。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Efunction AjaxCriteria(){\n    \u002F\u002F この変数にreturn先のオブジェクトから参照できる\n    const param = new URLSearchParams();\n    \u002F\u002F console.log(this)\n    \u002F\u002F windows\n    return {\n        add(key,value){\n            param.append(key,value)\n            \u002F\u002Fconsole.log(this);\n            \u002F\u002F {}　→このオブジェクト\n            return this; \u002F\u002F つまりここで返しているのはオブジェクトであり、return{}のものと同じなので、paramを参照できるオブジェクトです。\n        },\n        build(){\n            return param;\n        }\n    };\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E関数の中で関数が定義されたオブジェクトを返しています。\u003Cbr \u002F\u003Eparamの値を変更するaddメソッドとparam自体を返すbuildメソッドです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eさぁこれを使ってみるとこんな感じです\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst params = AjaxCriteria()\n                    .add(\"action\", 'get_ajax_data')\n                    .add(\"nonce\", values.nonce)\n                    .add(\"post_id\",document.getElementById(\"cast_select\").value)\n                    .build();\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eビルダーパターンのように実装ができました。\u003Cbr \u002F\u003Eなんか関数型っぽい記載ができたので満足です。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eちなみに、ワードプレスのテーマを元に戻しました。なんかアイキャッチ画像が重いので、、、\u003C\u002Fp\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003E「クロージャとは関数内で定義された関数である」こんな薄っぺらい説明ではクロージャのクの字も語れていないと誰かが言ってました。 というわけでビルダーパターンっぽいのをクロージャを使って作ってみました。 今作ってるワードプレ&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F05\u002F27\u002Fjavascript%e3%81%a7%e3%82%af%e3%83%ad%e3%83%bc%e3%82%b8%e3%83%a3%e3%81%a8%e3%83%93%e3%83%ab%e3%83%80%e3%83%bc%e3%83%91%e3%82%bf%e3%83%bc%e3%83%b3%e3%81%bf%e3%81%9f%e3%81%84%e3%81%aa%e3%82%84%e3%81%a4\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003EJavaScriptでクロージャとビルダーパターンみたいなやつ\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:b,comment_status:j,ping_status:j,sticky:g,template:c,format:o,meta:[],categories:[l],tags:[p],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1255"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1255"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1255\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1255"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1255"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1255"}],curies:[{name:e,href:f,templated:a}]}},{id:1111,date:x,date_gmt:y,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=1111"},modified:x,modified_gmt:y,slug:"javascriptmoden",status:m,type:n,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F01\u002F01\u002Fjavascriptmoden\u002F",title:{rendered:"「JavaScriptモダンプログラミング完全ガイド　堅牢なコードを効率的に開発できる！」を買った"},content:{rendered:"\n\u003Cp\u003E先日発売された「JavaScriptモダンプログラミング完全ガイド　堅牢なコードを効率的に開発できる！」を買いましたので、自分用のメモと感想など。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003E第一章「値と変数」\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E型について、オブジェクトについての説明がある。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Elet pikachu = { name : 'ピカチュウ', hp : 100};\n\u002F\u002F 分割を使うと、配列やオブジェクトの中身を簡単に取り出せる\nlet {name , hp} = pikachu\nconsole.log(`${name}　：　${hp}`) \u002F\u002F \"ピカチュウ　：　100\"\nconsole.log(typeof pikachu) \u002F\u002F \"object\"\n\u002F\u002F nullはobjectではないが、typeofを使うとobjectという文字列が帰ってくる。\nconsole.log(typeof null) \u002F\u002F \"object\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E名前を変えてオブジェクトから取り出したい場合\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Elet { name : metamonname, hp : metamonhp} = pikachu\nconsole.log(`${metamonname}　：　${metamonhp}`);\n\u002F\u002F \"ピカチュウ　：　100\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Erest演算子でオブジェクトを分割する。その他要素がオブジェクトになる。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Elet pikachu = { name : 'ピカチュウ', hp : 100};\nlet{name ,...otherProp} = pikachu\nconsole.log(otherProp)\n\u002F* ---------------------\n&#91;object Object] {\n  hp: 100\n}\n-----------------------*\u002F\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eその他配列のおもろい動き\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Elet array = &#91;1,2,3,&#91;4,5,6]];\nconsole.log(array&#91;3]);\n\u002F\u002F配列の中の配列も文字列化される\nconsole.log(array.join())\n\u002F\u002F要素がない場合はundefined\nconsole.log(array&#91;4.5])\n\u002F\u002F こんなこともできる\narray&#91;4.5] = \"小数点を番号にする\";\nconsole.log(array&#91;4.5]);\n------------------------------\n&#91;4, 5, 6]\n\"1,2,3,4,5,6\"\nundefined\n\"小数点を番号にする\"\n&#91;1, 2, 3, &#91;4, 5, 6]]\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003E第二章「制御構造」\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003Eプログラミングであるあるの制御構文などの説明メイン。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E比較には===を使って型も含めて厳密に比較する。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E比較時の型変換にに注意する\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Elet amount = '100';\nif(amount &gt; 50){ \u002F\u002F '100'が数値に変換される\n  console.log(\"success\");\n}else{\n  console.log(\"error\");\n}\n\u002F\u002F \"success\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003E第三章「関数と関数型プログラミング」\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E通常の関数、無名関数、高階関数、ラムダ、クロージャ、スプレッド演算子、ホイスティング、例外の説明。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eクロージャはprivateな仕組みを作ったり堅いオブジェクト。\u003Cbr \u002F\u003E関数の中で宣言した変数は、外部からアクセスできない特別な環境が作られる。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003EPHPにもクロージャがあったけど、無名関数のことをクロージャみたいに言ってる記述を見たことがあるけど、あれって合ってるのかな？\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst character = () =&gt; {\n  let hp = 100;\n  return {\n    damege : (val) =&gt; {\n      hp -= val;\n    },\n    add : (val) =&gt; {\n      hp += val;\n    },\n    showState : () =&gt; {\n      console.log(hp);\n    }\n  }\n}\nconst character = () =&gt; {\n  let hp = 100;\n  return {\n    damege : (val) =&gt; {\n      hp -= val;\n    },\n    add : (val) =&gt; {\n      hp += val;\n    },\n    showState : () =&gt; {\n      console.log(hp);\n    }\n  }\n}\nconst takashi = character();\nconsole.log(takashi.hp); \u002F\u002F直接アクセスできない\n--------------------\nundefined\nconsole.log(takashi.showState());\n\u002F\u002F 100\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E\u003Cbr \u002F\u003E直接hpにはアクセスできないが、関数から返された関数から（内部）はアクセスできる。\u003Cbr \u002F\u003Eこれを使ってprivateなメソッドも作成できる。\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003Eホイスティングとは\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econsole.log(hoge);\nconsole.log(fuga);\nvar hoge;\nlet fuga;\n---------------\nundefined\n\"error\"\n\"ReferenceError: Cannot access 'fuga' before initialization\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Evarで宣言した場合は宣言箇所より前で宣言されることになるので、undefinedになる。\u003Cbr \u002F\u003Eこれを防ぐには\u003C\u002Fp\u003E\n\n\n\u003Cul\u003E\u003Cli\u003Evarを使わない\u003C\u002Fli\u003E\u003Cli\u003Estrictモードを使う\u003C\u002Fli\u003E\u003Cli\u003E宣言箇所を使用箇所より前にする\u003C\u002Fli\u003E\u003C\u002Ful\u003E\n\n\n\u003Cp\u003E昔の書き方では無名関数を定義してすぐに実行するということをやっていた。これは全ての変数をローカルスコープとして定義するため。（宣言のカプセル化）\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E\u002F\u002F 昔流 jQueryなどもこれで書かれていた。\n(function(){\n  var localValue = \"ローカル\";\n})();\nconsole.log(localValue); \u002F\u002F not defined\n\u002F\u002F 今流\n{\n  let _localValue = \"ローキャル\";\n}\nconsole.log(_localValue); \u002F\u002F not defined\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Ch2\u003E第四章「オブジェクト指向プログラミング」\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003EJavaScriptのclassはJavaなどのclassとは根底が違う。\u003Cbr \u002F\u003Eそもそもプロトタイプについては知らないことが多かった。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eオブジェクトを作成するときに同じ関数は、プロトタイプを設定すると全てのオブジェクトで１つの関数を共用できる。\u003Cbr \u002F\u003Eこのプロトタイプは、内部スロット(internal slot)となり、プログラマ視点では操作できず、内部的に操作されるオブジェクト属性となる。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst commonProp = {\n  sayHello(){\n    console.log(`こんにちは${this.name}です。性別は${this.gender}です。`);\n  }\n}\nfunction createUser(name,gender){\n  \u002F\u002F オブジェクトを返す\n  const user = {\n    name : name,\n    gender, \u002F\u002Fこんな書き方もできますね\n    \u002F\u002F ここを共通化する。\n    \u002F*\n    sayHello : function() {\n      console.log(`こんにちは${name}です。`);\n    }\n    *\u002F\n  }\n  \u002F\u002F プロトタイプを設定する\n  Object.setPrototypeOf(user,commonProp);\n  return user;\n}\nconst takashi = createUser(\"たかし\",\"男\");\nconst kosei = createUser(\"こうせい\",\"男\");\ntakashi.sayHello();\nkosei.sayHello();\n--------------------\n\"こんにちはたかしです。性別は男です。\"\n\"こんにちはこうせいです。性別は男です。\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EtakashiのオブジェクトでsayHelloがないのでプロトタイプで検索される、これが見つかるまで深く探される（プロトタイプチェーン)Javaで言えば継承みたいな感じ？\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eオブジェクトを生成するのにオブジェクトを返却する関数を書いていたが、これをnewで行うことができる。クラスに使うものではなくオブジェクトの生成に使う。コンストラクタ関数です。コンストラクタ関数にプロトタイプも設定できます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E\u002F\u002F コンストラクタ\nfunction Human(name){\n  this.name = name;\n}\n\u002F\u002Fプロトタイプの設定\nHuman.prototype.greet = function(){\n  console.log(`私の名前は、${this.name} です。`);\n}\n\u002F\u002Fオブジェクトの生成\nconst takashi = new Human(\"たかし\");\ntakashi.greet(); \u002F\u002F \"私の名前は、たかし です。\"\nconst kosei = new Human(\"こうせい\");\nkosei.greet(); \u002F\u002F \"私の名前は、こうせい です。\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003EJavaScriptのクラスは上記のコンストラクタ関数が根底にある。つまり他のオブジェクト指向言語とは違う。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eclass構文を使うサンプル\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E\u002F\u002F サブクラスも継承できる思想としてはプロトタイプチェーン\nclass Human{\n  \u002F\u002F コンストラクタ\n  constructor(name,age){\n    this.name = name;\n    this.age = age;\n  }\n  \u002F\u002Fプロトタイプ\n  greet(){\n    console.log(`私は${this.name}と申す。年は${this.age}でござる。`);\n  }\n  \u002F\u002F ゲッター。メソッドをプロパティのようにアクセスが可能。\n  get humanProp(){\n    return `${this.name}.${this.age}`;\n  }\n}\nconst takashi = new Human(\"たかし\",15);\ntakashi.greet(); \u002F\u002F 私はたかしと申す。年は15でござる。\nconsole.log(takashi.humanProp); \u002F\u002F たかし.15\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eまたthisについての説明。\u003Cbr \u002F\u003Ejsの場合はthisのクセが強い。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E例えばコールバック関数の中で、その外側の変数にアクセスしようとするとundefinedになる。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst customer = {\n  anc : \"様\",\n  customers : &#91;\"飯田\",\"吉野\",\"山岸\",\"新山\"],\n  showCustomers(){\n    this.customers.forEach(function(customer){\n      console.log(`${customer}${this.anc}`);\n    });\n  }\n}\ncustomer.showCustomers();\n\u002F\u002F thisはundefined\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eラムダを使うことでthisを束縛できます。用語はさておき、thisを使っても外側の変数にアクセスできることが確認できます。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst customer = {\n  anc : \"様\",\n  customers : &#91;\"飯田\",\"吉野\",\"山岸\",\"新山\"],\n  showCustomers(){\n    this.customers.forEach((customer) =&gt; {\n      console.log(`${customer}${this.anc}`);\n    });\n  }\n}\ncustomer.showCustomers();\n\u002F\u002F \"飯田様\" \"吉野様\" \"山岸様\" \"新山様\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E続きはまた今度。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E説明は簡潔ですが、ゆえにわかりやすい。\u003Cbr \u002F\u003Eこれからプログラミング言語を始めようって人には向いていない。\u003C\u002Fp\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003E先日発売された「JavaScriptモダンプログラミング完全ガイド　堅牢なコードを効率的に開発できる！」を買いましたので、自分用のメモと感想など。 第一章「値と変数」 型について、オブジェクトについての説明がある。 名前&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2021\u002F01\u002F01\u002Fjavascriptmoden\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003E「JavaScriptモダンプログラミング完全ガイド　堅牢なコードを効率的に開発できる！」を買った\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:1200,comment_status:j,ping_status:j,sticky:g,template:c,format:o,meta:[],categories:[l],tags:[p,70],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1111"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=1111"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F1111\u002Frevisions"}],"wp:featuredmedia":[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia\u002F1200"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=1111"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=1111"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=1111"}],curies:[{name:e,href:f,templated:a}]}},{id:156,date:z,date_gmt:A,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=156"},modified:z,modified_gmt:A,slug:"%e9%96%a2%e6%95%b0%e5%9e%8bjavascript",status:m,type:n,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F05\u002F24\u002F%e9%96%a2%e6%95%b0%e5%9e%8bjavascript\u002F",title:{rendered:"関数型JavaScript"},content:{rendered:"\n\u003Cp\u003E暇な人は読んでください。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E勉強メモ的なものです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E俺は激怒した\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003EBuild = function (name,Maketype){\n  const machineName = name;\n  return function (cost){\n    Maketype(cost,machineName);\n  }\n}\ntypeOne = function(cost,name){\n  console.log(\"Made In TypeOne - cost is:\" + cost + \" name is \" + \"'\"+ name +\"'\");\n}\ntypeTwo = function(cost,name){\n  console.log(\"Made In TypeTwo- cost is:\" + cost * 2 + \" name is \" + name + \" (C) \");\n}\nconst Robo1 = Build(\"zaku\",typeOne);\nRobo1(100);\nconst Robo2 = Build(\"guhu\",typeTwo);\nRobo2(100);\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E&#8220;Made In TypeOne &#8211; cost is:100 name is &#8216;zaku'&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;Made In TypeTwo- cost is:200 name is guhu (C) &#8220;\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003Eこれは関数を返す関数やらクロージャーやらが使われている。\u003Cbr \u002F\u003Eなぜこんなことが起きてしまうかと言うと、JavaScriptは関数が第一級オブジェクトであるからだ。\u003Cbr \u002F\u003E簡単に言えば、関数を引数にしたり戻り値として使えるということ。\u003Cbr \u002F\u003Eまた、関数を引数にとる高階関数もある。高階関数で有名なのがmap関数だ。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Efunction calcTax(num){\n  return num * 1.08;\n}\nconst values = &#91;100,150,200];\nconst plusTax = values.map( v =\u003E calcTax(v) );\nconsole.log(plusTax);\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E[108, 162, 216]\u003C\u002Fp\u003E\u003Cp\u003Eここではわかりやすく&#8221;あえて&#8221;calcTaxを定義しています。\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003EこのようにJavaScriptは関数の使用範囲が広いのだ。\u003Cbr \u002F\u003E関数型言語というのは関数が主体となっていくため、このように関数を柔軟に扱う必要がある。そしてJavaScriptはそれができる。\u003C\u002Fp\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E純粋関数型言語：Haskellのような言語は純粋関数型言語と呼ばれている。例えば変数に値を再代入することはもちろん、for文なんかも許されていない。またNullという概念自体がなくMaybeなどモナドという考えがある。また関数は必ず値を受け取って必ず値を返す。\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Ch2\u003Eカリー化\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E関数を美味しくするにはスパイスが必要だ。Haskellのような神々しい言語では全ての関数は引数を一つしか取らない。だが実際には複数の引数を取っている関数を定義できる。理由としては内部で美味しいスパイスが効いているから。。。ごほん、引数をとる関数を返すというのを繰り返しているのです。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eでは、関数を返しまくる関数を作ってみた\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Efunction addNum(num1){\n  return function(num2){\n    return num1 + num2;\n  }\n}\nconst addTen = addNum(10);\nconsole.log(addTen(3));\nfunction makeDOM(item){\n  return function(child){\n    return function(parrent){\n      return function(text){\n        return \"&lt;\" + parrent + \"\u003E&lt;\" + child + \"\u003E&lt;\" + item + \"\u003E\" + text + \"&lt;\u002F\" + item + \"\u003E&lt;\u002F\" + child + \"\u003E&lt;\u002F\" + parrent + \"\u003E\";\n      }\n    }\n  }\n}\nconst makeH2 = makeDOM(\"B\")(\"SPAN\")(\"H2\");\nconsole.log(makeH2(\"ネオグランゾンの倒し方\"));\nconsole.log(makeH2(\"サフィーネをレベル30にする方法\"));\nconsole.log(makeH2(\"ナグツァート無敵モードを倒す方法\"));\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E13\u003C\u002Fp\u003E\u003Cp\u003E&#8220;&lt;H2&gt;&lt;SPAN&gt;&lt;B&gt;ネオグランゾンの倒し方&lt;\u002FB&gt;&lt;\u002FSPAN&gt;&lt;\u002FH2&gt;&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;&lt;H2&gt;&lt;SPAN&gt;&lt;B&gt;サフィーネをレベル30にする方法&lt;\u002FB&gt;&lt;\u002FSPAN&gt;&lt;\u002FH2&gt;&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;&lt;H2&gt;&lt;SPAN&gt;&lt;B&gt;ナグツァート無敵モードを倒す方法&lt;\u002FB&gt;&lt;\u002FSPAN&gt;&lt;\u002FH2&gt;&#8221;\u003C\u002Fp\u003E\u003Ccite\u003Eh2 span bという謎は置いといてくれ。\u003C\u002Fcite\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst newLink = makeDOM(\"NEW\")(\"LINK\");\nconst blankLink = makeDOM(\"BKANK\")(\"LINK\")\nconst blueNewLink = newLink(\"BLUE\");\nconst blackBankLink = blankLink(\"BLACK\");\nconst link1 = blueNewLink(\"youtube.com\");\nconst link2 = blackBankLink(\"niconico.com\");\nconsole.log(link1)\nconsole.log(link2)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E&#8220;&lt;BLUE&gt;&lt;LINK&gt;&lt;NEW&gt;youtube.com&lt;\u002FNEW&gt;&lt;\u002FLINK&gt;&lt;\u002FBLUE&gt;&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;&lt;BLACK&gt;&lt;LINK&gt;&lt;BKANK&gt;niconico.com&lt;\u002FBKANK&gt;&lt;\u002FLINK&gt;&lt;\u002FBLACK&gt;&#8221;\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003Eカリー化された関数を使って新しい関数を作っているのがわかる。これは関数を部分適用している。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E近代的な書き方ではこのようにもできる\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst callType = name =\u003E type =\u003E name + type;\nconsole.log(callType(\"横山\")(\"様\"));\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E&#8220;横山様&#8221;\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Ch2\u003E関数型で考えたサンプル\u003C\u002Fh2\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Efunction validation(rule,message){\n  return function(value){\n    if(rule(value)){\n      console.log(\"OK\");\n    }else{\n      console.log(message)\n    }\n  }\n}\nconst overTen = validation( x =\u003E x \u003E 10 , \"１０以下なのでだめでーす\");\noverTen(4)\noverTen(10)\noverTen(11)\nconsole.log(\"---------------------\")\nconst odd = validation( x =\u003E x % 2 === 0, \"奇数はエラーです\");\nodd(5);\nodd(6);\nconsole.log(\"---------------------\")\nvalidation( x =\u003E x===true ,\"とりあえずエラーです\")(false)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cblockquote class=\"wp-block-quote\"\u003E\u003Cp\u003E&#8220;１０以下なのでだめでーす&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;１０以下なのでだめでーす&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;OK&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8220;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;奇数はエラーです&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;OK&#8221;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8220;\u003C\u002Fp\u003E\u003Cp\u003E&#8220;とりあえずエラーです&#8221;\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\n\n\n\u003Cp\u003Eバリデーション。ルールとメッセージを関数に渡すとバリデーション関数が出来上がるという仕組み\u003C\u002Fp\u003E\n\n\n\u003Ch2\u003E関数合成\u003C\u002Fh2\u003E\n\n\n\u003Cp\u003E関数合成を簡単な例でやってみる\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst addTow = x =\u003E x + 2;\nconst double = x =\u003E x * 2;\nconst addOne = x =\u003E x + 1;\nconst result = double(addOne(addTow(1)));\n\u002F\u002F 3 → 4 → 8\nconsole.log(result) \u002F\u002F 8\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E読みづらい。関数を適用した結果を別の関数に適用するを繰り返すだけ。\u003Cbr \u002F\u003Eよくあるのがreduceを使う関数合成方法。\u003Cbr \u002F\u003Ereduceは値を合計しながら関数を適用し続けることができる。\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst datas = &#91;1,2,3,4];\nconst reduceresult = datas.reduce( (accumu,current) =\u003E {\n  return accumu += current;\n});\nconsole.log(reduceresult);\n\u002F\u002F 10\nconst datas = &#91;1,2,3,4];\nconst reduceresult = datas.reduce( (accumu,current) =\u003E {\n  return accumu += current;\n},100); \u002F\u002F 100が初期値\nconsole.log(reduceresult);\n\u002F\u002F 110\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Eこのようにreduceは初期値を使用することもでき、配列に入った要素をぐるぐる回しながら合計値として値を保持できる。ということは配列の中に関数があった場合はどうなるのか\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Econst datas = &#91;addOne,addOne,addOne,addOne];\nconst reduceresult = datas.reduce( (accumu,fun) =\u003E {\n  return fun(accumu);\n},0);\nconsole.log(reduceresult); \u002F\u002F 4\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003Ewow！ファンタスティック！配列の中にaddOne関数が入っていて、それを初期値0に適用し続ければ関数合成ができた！\u003C\u002Fp\u003E\n\n\n\u003Ch3\u003Eスプレッド演算子を使ってみる\u003C\u002Fh3\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003Efunction showArgs(...args){\n  console.log(args);\n}\nshowArgs(1,2,3,4,5,6,7,8,9,10);\n\u002F\u002F &#91;1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E&#8230;から始まるスプレッド演算子を使うと、複数の要素を配列に変換してくれる。\u003Cbr \u002F\u003Evue.jsでもどっかで使われていたような気がする。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eあとはクロージャと組み合わせれば関数合成の完成だ！\u003C\u002Fp\u003E\n\n\n\u003Cpre class=\"wp-block-code\"\u003E\u003Ccode\u003E\u002F\u002F 複数の関数を受け取る関数\nfunction composition(...funs){\n  return (targetValue) =\u003E {\n    return funs.reduce( (accum,func) =\u003E {\n      return func(accum);\n    },targetValue)\n  }\n}\nconst sugeResult = composition(addOne,addOne,addOne,addOne)(10);\nconsole.log(sugeResult);\n\u002F\u002F 14\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\n\u003Cp\u003E関数型っぽくなってきた。\u003C\u002Fp\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003E暇な人は読んでください。 勉強メモ的なものです。 俺は激怒した &#8220;Made In TypeOne &#8211; cost is:100 name is &#8216;zaku&#8217;&#8221; &#8220;&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F05\u002F24\u002F%e9%96%a2%e6%95%b0%e5%9e%8bjavascript\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003E関数型JavaScript\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:b,comment_status:j,ping_status:j,sticky:g,template:c,format:o,meta:[],categories:[l],tags:[26,p,75],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F156"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=156"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F156\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=156"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=156"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=156"}],curies:[{name:e,href:f,templated:a}]}},{id:B,date:C,date_gmt:D,guid:{rendered:"https:\u002F\u002Fvolkruss.com\u002F?p=7"},modified:C,modified_gmt:D,slug:"canvas%e3%81%a7tiled%e3%82%92%e5%88%a9%e7%94%a8%e3%81%97%e3%81%9frpg%e3%82%b2%e3%83%bc%e3%83%a0",status:m,type:n,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F05\u002F17\u002Fcanvas%e3%81%a7tiled%e3%82%92%e5%88%a9%e7%94%a8%e3%81%97%e3%81%9frpg%e3%82%b2%e3%83%bc%e3%83%a0\u002F",title:{rendered:"CanvasでTiledを利用したRPGゲーム"},content:{rendered:"\n\u003Cp\u003Eサンプル\u003Cbr \u002F\u003E\u003Ca href=\"https:\u002F\u002Fvolkruss.com\u002Frpggame01\u002Ftilerelad\u002F\"\u003Ehttps:\u002F\u002Fvolkruss.com\u002Frpggame01\u002Ftilerelad\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\n\u003Cfigure class=\"wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio\"\u003E\u003Cdiv class=\"wp-block-embed__wrapper\"\u003E\n\u003Ciframe loading=\"lazy\" title=\"TiledとJavaScriptとCanvasでRPGゲームの基本を作ってみる EP1\" width=\"750\" height=\"422\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002F2hWbAbmx_Bw?start=10&#038;feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Ffigure\u003E\n\n\n\u003Cp\u003Emelon.jsならTiledをサポートしているとのことだったので、早速試したがなんせ学習コストがあったのでやめた。\u003Cbr \u002F\u003ETiledを使ったブラウザゲームって大変なのだろうか？\u003Cbr \u002F\u003Eとりあえずjsonファイルなのでなんとかなるだろうという意気込みで作ってなんとかなった。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003Eしかし、ゲームを作るとなるとタイルマップ が使えるというメリットよりも、コライダーやらアニメーションやらの設定が大変というデメリットのほうが大きいので、こういう時は無理せずUnityやらを使うのが正しい判断なんだなと改めて思った。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E\u003C\u002Fp\u003E\n",protected:g},excerpt:{rendered:"\u003Cp\u003Eサンプルhttps:\u002F\u002Fvolkruss.com\u002Frpggame01\u002Ftilerelad\u002F melon.jsならTiledをサポートしているとのことだったので、早速試したがなんせ学習コストがあったのでやめた。Tiledを&hellip; \u003Ca class=\"more-link\" href=\"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002F2020\u002F05\u002F17\u002Fcanvas%e3%81%a7tiled%e3%82%92%e5%88%a9%e7%94%a8%e3%81%97%e3%81%9frpg%e3%82%b2%e3%83%bc%e3%83%a0\u002F\"\u003E続きを読む \u003Cspan class=\"screen-reader-text\"\u003ECanvasでTiledを利用したRPGゲーム\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",protected:g},author:k,featured_media:b,comment_status:j,ping_status:j,sticky:g,template:c,format:o,meta:[],categories:[l],tags:[17,p,49,64],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F7"}],collection:[{href:q}],about:[{href:r}],author:[{embeddable:a,href:s}],replies:[{embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcomments?post=7"}],"version-history":[{count:b,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts\u002F7\u002Frevisions"}],"wp:attachment":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fmedia?parent=7"}],"wp:term":[{taxonomy:d,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories?post=7"},{taxonomy:t,embeddable:a,href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftags?post=7"}],curies:[{name:e,href:f,templated:a}]}}]},categoryName:E}],fetch:{"0":{categories:{categories:[{id:2,count:u,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fblender\u002F",name:"Blender",slug:"blender",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F2"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=2"}],curies:[{name:e,href:f,templated:a}]}},{id:F,count:u,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fdocker\u002F",name:"Docker",slug:"docker",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F3"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=3"}],curies:[{name:e,href:f,templated:a}]}},{id:77,count:k,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fgulp\u002F",name:G,slug:G,taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F77"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=77"}],curies:[{name:e,href:f,templated:a}]}},{id:u,count:H,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjava\u002F",name:"Java",slug:"java",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F4"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=4"}],curies:[{name:e,href:f,templated:a}]}},{id:l,count:u,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fjavascript\u002F",name:E,slug:"javascript",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F5"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=5"}],curies:[{name:e,href:f,templated:a}]}},{id:H,count:40,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funity\u002F",name:"Unity",slug:"unity",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F6"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=6"}],curies:[{name:e,href:f,templated:a}]}},{id:B,count:I,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fvue-js\u002F",name:"Vue.js",slug:"vue-js",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F7"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=7"}],curies:[{name:e,href:f,templated:a}]}},{id:8,count:l,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Fwordpress\u002F",name:"WordPress",slug:"wordpress",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F8"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=8"}],curies:[{name:e,href:f,templated:a}]}},{id:I,count:F,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002F%e3%81%9d%e3%81%ae%e4%bb%96\u002F",name:"その他",slug:"%e3%81%9d%e3%81%ae%e4%bb%96",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F9"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=9"}],curies:[{name:e,href:f,templated:a}]}},{id:k,count:b,description:c,link:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fcategory\u002Funcategorized\u002F",name:"未分類",slug:"uncategorized",taxonomy:d,parent:b,meta:[],_links:{self:[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories\u002F1"}],collection:[{href:h}],about:[{href:i}],"wp:post_type":[{href:"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts?categories=1"}],curies:[{name:e,href:f,templated:a}]}}]}}},mutations:void 0}}(true,0,"","category","wp","https:\u002F\u002Fapi.w.org\u002F{rel}",false,"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fcategories","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftaxonomies\u002Fcategory","open",1,5,"publish","post","standard",34,"https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fposts","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Ftypes\u002Fpost","https:\u002F\u002Fwww.volkruss.com\u002Fnuxt\u002Fapi\u002Fwp-json\u002Fwp\u002Fv2\u002Fusers\u002F1","post_tag",4,"2021-05-27T22:16:23","2021-05-27T13:16:23","2021-01-01T22:30:17","2021-01-01T13:30:17","2020-05-24T18:35:32","2020-05-24T09:35:32",7,"2020-05-17T02:10:54","2020-05-16T17:10:54","JavaScript",3,"gulp",6,9)));