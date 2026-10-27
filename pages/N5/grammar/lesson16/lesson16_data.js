const grammarLessonData = {
  level: "N5",

  lessonNumber: 16,

  title: "Ngữ pháp N5 - Bài 16",

  previousLesson: {
    href: "../lesson15/lesson15.html",
    label: "Bài 15"
  },

  nextLesson: {
    href: "../lesson17/lesson17.html",
    label: "Bài 17"
  },

  patterns: [
    {
      number: 1,
      pattern: "V1て、V2て、Vます。",
      detail: {
        meaning: "Làm V1, làm V2,..., làm V.",
        usages: [
          "✦ Sử dụng để liệt kê hành động theo thứ tự.",
          "✦ Thì của cả câu được chia ở động từ cuối cùng.",
        ],

        examples: [
        {
            sentence: "❶　朝[あさ]　ジョギングを　して、シャワーを　浴[あ]びて、会社[かいしゃ]へ　行[い]きます。",
            meaning: "Buổi sáng tôi chạy bộ, tắm vòi sen rồi đi đến công ty.",
            audio: "lesson16_001",
        },
        {
            sentence: "❷　昨日[きのう]　何[なに]を　しましたか。",
            meaning: "Hôm qua bạn làm gì ?",
            audio: "lesson16_002",
            answer: 
                {
                    sentence: "図書館[としょかん]へ　行[い]って、本[ほん]を　借[か]りて、それから　友達[ともだち]に　会[あ]いました。",
                    meaning: "Tôi đi thư viện mượn sách, sau đó thì gặp bạn.",
                    audio: "lesson16_003"
                }
        },
        ]
    }
},
{
        number: 2,
        pattern: "どうやって　Vます。",
        detail: {
            meaning: "Làm V như thế nào? / Làm V bằng cách nào?",
            usages: [
                "✦ Dùng để hỏi cách làm, phương thức làm một việc nào đó",
            ],

           examples: [
            {
            sentence: "大学[だいがく]まで　どうやって　行[い]きますか。",
            meaning: "Đến trường đại học đi như thế nào?",
            audio: "lesson16_004",
            answer: 
                {
                    sentence: "京都駅[きょうとえき]から　16番[ばん]のバスに　乗[の]って、大学前[だいがくまえ]で　降[お]ります。",
                    meaning: "Từ ga Kyouto lên xe buýt số 19 và xuống xe trước trường đại học",
                    audio: "lesson16_005"
                }          
            },
            
         
        ]
    },  
},

    {
        number: 3,
        pattern: "V1てから、V2ます。",
        detail: {
            meaning: "Sau khi làm V1 thì làm V2.",
            usages: [
                "✦ Dùng để diễn tả 2 hành động liên tiếp, hành động 1 kết thúc rồi làm hành động 2.",
            ],

           examples: [
            {
            sentence: "❶　コンサートが　終[お]わってから、レストランで　食事[しょくじ]しました。",
            meaning: "Sau khi hòa nhạc kết thúc thì dùng bữa ở nhà hàng.",
            audio: "lesson16_006",
            },
            {
            sentence: "❷　今[いま]から　大阪城[おおさかじょう]を　見学[けんがく]しますか。",
            meaning: "Từ bây giờ đi tham quan lâu đài OSAKA à?",
            audio: "lesson16_007",
             answer: 
                {
                    sentence: "いいえ、昼[ひる]ご飯[はん]を　食[た]べてから、見学[けんがく]します。",
                    meaning: "Không, ăn trưa xong rồi mới tham quan.",
                    audio: "lesson16_008"
                }          
        },
         
        ]
    },  
},

{
      number: 4,
      pattern: "Adj1－<span class='remove-masu'>い</span>　くて、Adj2\nAdj1－<span class='remove-masu'>な</span>　で、Adj2",
      
      detail: {
        meaning: "Liệt kê tính chất của sự vật, sự việc được nói đến.",
        usages: [
          "✦ Cách nối 2 hay nhiều tính từ đuôi い và tính từ đuôi な",
           "✦ Không nối 2 hay nhiều tính từ mang nghiawx trái ngược nhau.",
        ],

        examples: [
        {
            sentence: "❶　この部屋[へや]は　明[あか]るくて、広[ひろ]いです。",
            meaning: "Căn phòng này sáng và rộng.",
            audio: "lesson16_009",
              
        },
        {
            sentence: "❷　ラオさんは　ハンサムで、親切[しんせつ]な　人[ひと]です。",
            meaning: "Anh Rao là người đẹp trai và tốt bụng.",
            audio: "lesson16_010",
            
        },
        
        ]
    }
},
{
      number: 5,
      pattern: "N1は　N2が　Adjです。",
      
      detail: {
        meaning: "N1 có N2 Adj",
        usages: [
          "✦ Để miêu tả cụ thể một phần, một bộ phận của một vật hoặc người.",
        ],

        examples: [
        {
            sentence: "❶　ベトナムは　食[た]べ物[もの]が　美味[おい]しいです。",
            meaning: "Việt Nam thì có đồ ăn ngon.",
            audio: "lesson16_011",
              
        },
        {
            sentence: "❷　マリアさんは　かみが　長[なが]い人[ひと]です。",
            meaning: "Maria là người có mái tóc dài.",
            audio: "lesson16_012",
            
        },
        
        ]
    }
},
{
      number: 6,
      pattern: "どの　N　ですか。",
      
      detail: {
        meaning: "Là N nào?",
        usages: [
          "✦ Dùng để hỏi một danh từ cụ thể nào đó.",
          "✦ Sau どの luôn là 1 danh từ.",
        ],

        examples: [
        {
            sentence: "❶　田中[たなか]さんは　どの人[ひと]ですか。",
            meaning: "Anh Tanaka là người nào?",
            audio: "lesson16_013",
            answer: 
                {
                    sentence: "あの　背[せ]が　高[たか]い人[ひと]です。",
                    meaning: "Là người cao cao đó.",
                    audio: "lesson16_014"
                }    
              
        },
        {
            sentence: "❷　マリアさんのかばんは　どのかばんですか。",
            meaning: "Cái cặp của Maria là cái cặp nào?",
            audio: "lesson16_015",
            answer: 
                {
                    sentence: "大きくて、赤いかばんです。",
                    meaning: "Là cái cặp to, màu đỏ.",
                    audio: "lesson16_016"
                }   
        },
        
        ]
    }
},
   
],

    practice: [
        {
        title: "Luyện tập 1",
         example: {
        content: "日曜日[にちようび]　梅田[うめだ]へ　行[い]きます・友達[ともだち]に　会[あ]います　→ <strong>日曜日[にちようび]　梅田[うめだ]へ　行[い]って、友達[ともだち]に　会[あ]います。</strong>",
         },
        questions: [
            {
            prompt: "➊　昼[ひる]　1時間[いちじかん]　休[やす]みます・午後[ごご]　5時[ごじ]まで　働[はたら]きます。→",
            answers: [
                "昼1時間休んで、午後5時まで働きます。",
                "ひるいちじかんやすんで、ごごごじまではたらきます。"
            ]
            },
            {
            prompt: "➋　京都駅[きょうとえき]から　JRに　乗[の]ります・大阪[おおさか]で　地下鉄[ちかてつ]に　乗[の]り換[か]えます。→",
            answers: [
                "京都駅からJRに乗って、大阪で地下鉄に乗り換えます。",
                "きょうとえきからJRにのって、おおさかでちかてつにのりかえます。"
            ]
            },
            {
            prompt: "➌　市役所[しやくしょ]と　銀行[ぎんこう]へ　行[い]きました・うちへ　帰[かえ]りました。→",
            answers: [
                "市役所と銀行へ行って、うちへ帰りました。",
                "しやくしょとぎんこうへいって、うちへかえりました。"
            ]
            },
            {
            prompt: "➍　サンドイッチを　買[か]いました・公園[こうえん]で　食[た]べました。→",
            answers: [
                "サンドイッチを買って、公園で食べました。",
                "サンドイッチをかって、こうえんでたべました。"
            ]
            }
        ]
        },

        {
            title: "Luyện tập 2",
            example: {
                image: "/assets/images/grammar_n5_lesson16/practice2.jpg",
                content: [
                        "例[れい]：6時[ろくじ]に　起[お]きて、散歩[さんぽ]して、それから　朝[あさ]ごはんを　食[た]べました。",
                        ]     
                    },

            questions: [
                {
                prompt: "➊",
                answers: [
                    "新聞を読んで、コーヒーを飲んで、それから会社へ行きました。",
                    "しんぶんをよんで、コーヒーをのんで、それからかいしゃへいきました。"
                ]
                },
                {
                prompt: "➋",
                answers: [
                    "晩ごはんを食べて、うちへ帰って、それから日本語を勉強しました。",
                    "ばんごはんをたべて、うちへかえって、それからにほんごをべんきょうしました。",
                    "晩ご飯を食べて、うちへ帰って、それから日本語を勉強しました。"
                ]
                },
                {
                prompt: "➌",
                answers: [
                    "シャワーを浴びて、本を読んで、それから寝ました。",
                    "シャワーをあびて、ほんをよんで、それからねました。"
                ]
                }
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: [
                "電話[でんわ]を　かけます・友達[ともだち]の　うちへ　行[い]きます。　→ <strong>電話[でんわ]を　かけてから、友達[ともだち]の　うちへ　行[い]きます。</strong>",   
                ]
                    },

            questions: [
               {
                prompt: "➊　お金[かね]を　下[お]ろします・買[か]い物[もの]に　行[い]きます。→",
                answers: [
                    "お金を下ろしてから、買い物に行きます。",
                    "おかねをおろしてから、かいものにいきます。"
                ]
                },
                {
                prompt: "➋　きのう　仕事[しごと]が　終[お]わりました・飲[の]みに　行[い]きました。→",
                answers: [
                    "きのう仕事が終わってから、飲みに行きました。",
                    "きのうしごとがおわってから、のみにいきました。",
                    "昨日仕事が終わってから、飲みに行きました。"
                ]
                },
                {
                prompt: "➌　日本[にほん]へ　来[き]ました・日本語[にほんご]の　勉強[べんきょう]を　始[はじ]めました。→",
                answers: [
                    "日本へ来てから、日本語の勉強を始めました。",
                    "にほんへきてから、にほんごのべんきょうをはじめました。"
                ]
                },
                {
                prompt: "➍　お金[かね]を　入[い]れます・ボタンを　押[お]して　ください。→",
                answers: [
                    "お金を入れてから、ボタンを押してください。",
                    "おかねをいれてから、ボタンをおしてください。"
                ]
                }
            ]

        },

        {
            title: "Luyện tập 4",
            example: {
                content: [
                 "もう　レポートを　出[だ]しましたか。（もう　一度[いちど]　読[よ]みます）　\n→ <strong>いいえ、まだです。もう　一度[いちど]　読[よ]んでから、出[だ]します。</strong>",
                ]
            },

            questions: [
                 {
                prompt: "➊　もう　昼[ひる]ごはんを　食[た]べましたか。\n（この　仕事[しごと]が　終[お]わります）→",
                answers: [
                    "いいえ、まだです。この仕事が終わってから、食べます。",
                    "いいえ、まだです。このしごとがおわってから、たべます。"
                ]
                },
                {
                prompt: "➋　もう　IMCに　電話[でんわ]しましたか。（メールを　送[おく]ります）→",
                answers: [
                    "いいえ、まだです。メールを送ってから、電話します。",
                    "いいえ、まだです。メールをおくってから、でんわします。"
                ]
                },
                {
                prompt: "➌　もう　会議[かいぎ]の　資料[しりょう]を　コピーしましたか。\n（松本[まつもと]さんに　見[み]せます）→",
                answers: [
                    "いいえ、まだです。松本さんに見せてから、コピーします。",
                    "いいえ、まだです。まつもとさんにみせてから、コピーします。"
                ]
                },
                {
                prompt: "➍　もう　パワー電気[でんき]へ　行[い]きましたか。\n（午後[ごご]の　会議[かいぎ]が　終[お]わります）→",
                answers: [
                    "いいえ、まだです。午後の会議が終わってから、行きます。",
                    "いいえ、まだです。ごごのかいぎがおわってから、いきます。"
                ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                "雪[ゆき]・多[おお]い　→　<strong>北海道[ほっかいどう]は　雪[ゆき]が　多[おお]いです。</strong>",    
                ] 
            },
            questions: [
                {
                prompt: "➊　人[ひと]・少[すく]ない　→",
                answers: [
                    "北海道は人が少ないです。",
                    "ほっかいどうはひとがすくないです。"
                ]
                },
                {
                prompt: "➋　冬[ふゆ]・長[なが]い　→",
                answers: [
                    "北海道は冬が長いです。",
                    "ほっかいどうはふゆがながいです。"
                ]
                },
                {
                prompt: "➌　食[た]べ物[もの]・おいしい　→",
                answers: [
                    "北海道は食べ物がおいしいです。",
                    "ほっかいどうはたべものがおいしいです。",
                    "北海道は食べ物が美味しいです。"
                ]
                },
                {
                prompt: "➍　雪祭[ゆきまつ]り・有名[ゆうめい]　→",
                answers: [
                    "北海道は雪祭りが有名です。",
                    "ほっかいどうはゆきまつりがゆうめいです。"
                ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: 
                    "例[れい]1：この　カメラ・大[おお]きい・重[おも]い　→ <strong>この　カメラは　大[おお]きくて、重[おも]いです。</strong><br><br>例[れい]2：ワットさん・親切[しんせつ]・すてき　→　<strong>ワットさんは　親切[しんせつ]で、すてきです。</strong>",
            },

            questions: [
                    {
                prompt: "➊　わたしの　部屋[へや]・狭[せま]い・暗[くら]い　→",
                answers: [
                    "わたしの部屋は狭くて、暗いです。",
                    "わたしのへやはせまくて、くらいです。",
                    "私の部屋は狭くて、暗いです。"
                ]
                },
                {
                prompt: "➋　沖縄[おきなわ]の　海[うみ]・青[あお]い・きれい　→",
                answers: [
                    "沖縄の海は青くて、きれいです。",
                    "おきなわのうみはあおくて、きれいです。"
                ]
                },
                {
                prompt: "➌　東京[とうきょう]・にぎやか・おもしろい　→",
                answers: [
                    "東京はにぎやかで、おもしろいです。",
                    "とうきょうはにぎやかで、おもしろいです。",
                    "東京は賑やかで、面白いです。"
                ]
                },
                {
                prompt: "➍　ワットさん・45歳[よんじゅうごさい]・独身[どくしん]　→",
                answers: [
                    "ワットさんは45歳で、独身です。",
                    "ワットさんは４５歳で、独身です。",
                    "ワットさんはよんじゅうごさいで、どくしんです。"
                ]
                }
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: [
                    "例[れい]1：奈良[なら]は　どんな　町[まち]ですか。（緑[みどり]が　多[おお]い・静[しず]か）→　<strong>緑[みどり]が　多[おお]くて、静[しず]かな　町[まち]です。</strong><br><br>例[れい]2：きのうの　パーティーは　どうでしたか。（にぎやか・楽[たの]しい）→　<strong>にぎやかで、楽[たの]しかったです。</strong>",
                ]
            },
            questions: [
                
                {
                prompt: "➊　ミラーさんは　どんな　人[ひと]ですか。<br>（頭[あたま]が　いい・おもしろい）→",
                answers: [
                    "頭がよくて、おもしろい人です。",
                    "あたまがよくて、おもしろいひとです。",
                    "頭がよくて、面白い人です。"
                ]
                },
                {
                prompt: "➋　サントスさんは　どんな　人[ひと]ですか。（元気[げんき]・親切[しんせつ]）→",
                answers: [
                    "元気で、親切な人です。",
                    "げんきで、しんせつなひとです。"
                ]
                },
                {
                prompt: "➌　寮[りょう]の　部屋[へや]は　どうですか。（広[ひろ]い・明[あか]るい）→",
                answers: [
                    "広くて、明るいです。",
                    "ひろくて、あかるいです。"
                ]
                },
                {
                prompt: "➍　ホテルは　どうでしたか。（静[しず]か・サービスが　いい）→",
                answers: [
                    "静かで、サービスがよかったです。",
                    "しずかで、サービスがよかったです。"
                ]
                }
            ]
        },
        {
            title: "Luyện tập 8",
            example: {
                content: [
                   "例[れい]1：マリアさんは　どの　人[ひと]ですか。（髪[かみ]が　長[なが]い・きれい）<br>→ <strong>あの　髪[かみ]が　長[なが]くて、きれいな　人[ひと]です。</strong><br><br>例[れい]2：マリアさんの　かばんは　どれですか。（白[しろ]い・大[おお]きい）<br>→ <strong>あの　白[しろ]くて、大[おお]きい　かばんです。</strong>",
                ]
            },
            questions: [
                
                {
                prompt: "➊　ミラーさんは　どの　人[ひと]ですか。（若[わか]い・背[せ]が　高[たか]い）→",
                answers: [
                    "あの若くて、背が高い人です。",
                    "あのわかくて、せがたかいひとです。"
                ]
                },
                {
                prompt: "➋　ワットさんは　どの　人[ひと]ですか。<br>（ダンスが　上手[じょうず]・すてき）→",
                answers: [
                    "あのダンスが上手で、すてきな人です。",
                    "あのダンスがじょうずで、すてきなひとです。",
                    "あのダンスが上手で、素敵な人です。"
                ]
                },
                {
                prompt: "➌　ミラーさんの　かばんは　どれですか。（黒[くろ]い・古[ふる]い）→",
                answers: [
                    "あの黒くて、古いかばんです。",
                    "あのくろくて、ふるいかばんです。"
                ]
                },
                {
                prompt: "➍　カリナさんの　かばんは　どれですか。（赤[あか]い・小[ちい]さい）→",
                answers: [
                    "あの赤くて、小さいかばんです。",
                    "あのあかくて、ちいさいかばんです。"
                ]
                }
            ]
        },
        {
            title: "Luyện tập 9",
            example: {
                image: "/assets/images/grammar_n5_lesson16/practice9.jpg",
                content: [
                    "窓[まど]を（<strong>閉[し]めて</strong>）、電気[でんき]を　消[け]して、寝[ね]ました。",
                ]
            },
            questions: [
                
                {
                prompt: "➊　デパートへ（　）、買[か]い物[もの]して、それから映画[えいが]を見[み]ます。",
                answers: [
                    "行って",
                    "いって"
                ]
                },
                {
                prompt: "➋　銀行[ぎんこう]で　お金[かね]を（　）から、買[か]い物[もの]に　行[い]きます。",
                answers: [
                    "下ろして",
                    "おろして"
                ]
                },
                {
                prompt: "➌　甲子園[こうしえん]から　電車[でんしゃ]に（　）、梅田[うめだ]で　地下鉄[ちかてつ]に（　）、日本橋[にっぽんばし]で　降[お]ります。",
                answers: [
                    "乗って、乗り換えて",
                    "のって、のりかえて"
                ]
                },
                {
                prompt: "➍　シャワーを（　）から、プールに　入[はい]って　ください。",
                answers: [
                    "浴びて",
                    "あびて"
                ]
                }
            ]
        },
        {
            title: "Luyện tập 10",
            example: {
                image: "/assets/images/grammar_n5_lesson16/practice10.jpg",
                content: [
                    "奈良[なら]は　緑[みどり]が（<strong>多[おお]くて</strong>）、きれいな　町[まち]です。",
                ]
            },
            questions: [
                
                {
                prompt: "➊　カリナさんは　富士大学[ふじだいがく]の（　）、美術[びじゅつ]を　勉強[べんきょう]しています。",
                answers: [
                    "学生で",
                    "がくせいで"
                ]
                },
                {
                prompt: "➋　佐藤[さとう]さんは　頭[あたま]が（　）、すてきな　人[ひと]です。",
                answers: [
                    "よくて",
                    "良くて"
                ]
                },
                {
                prompt: "➌　新[あたら]しい　パソコンは（　）、便利[べんり]です。",
                answers: [
                    "軽くて",
                    "かるくて"
                ]
                },
                {
                prompt: "➍　東京[とうきょう]は（　）、おもしろい　町[まち]です。",
                answers: [
                    "にぎやかで",
                    "賑やかで"
                ]
                }
            ]
        },
        {
            title: "Luyện tập 11",
            example: {
                content: [
                    "ミラーさんは　背[せ]（<strong>が</strong>）高[たか]いです。",
                ]
            },
            questions: [
                
                {
                prompt: "➊　国[くに]へ　帰[かえ]ってから、大学[だいがく]（...）入[はい]って、経済[けいざい]の　研究[けんきゅう]を　します。",
                answers: ["に"]
                },
                {
                prompt: "➋　大阪駅[おおさかえき]から　JR（...）乗[の]って、京都駅[きょうとえき]（...）降[お]ります。",
                answers: ["に、で"]
                },
                {
                prompt: "➌　京都[きょうと]で　古[ふる]い　お寺[てら]（...）見学[けんがく]しました。",
                answers: ["を"]
                },
                {
                prompt: "➍　日本[にほん]は　山[やま]（...）多[おお]いです。",
                answers: ["が"]
                },
                {
                prompt: "➎　北海道[ほっかいどう]は　きれいで、食[た]べ物[もの]（...）おいしいです。",
                answers: ["が"]
                },
                {
                prompt: "➏　ここ（...）お金[かね]（...）入[い]れて　ください。",
                answers: ["に、を"]
                },
                {
                prompt: "➐　ジョギングを　して、シャワー（...）浴[あ]びて、学校[がっこう]へ　行[い]きます。",
                answers: ["を"]
                },
                {
                prompt: "➑　大学[だいがく]（...）出[で]てから、父[ちち]の　会社[かいしゃ]（...）働[はたら]きました。",
                answers: ["を、で"]
                }
            ]
        },
    ]
};