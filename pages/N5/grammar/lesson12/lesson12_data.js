const grammarLessonData = {
  level: "N5",

  lessonNumber: 12,

  title: "Ngữ pháp N5 - Bài 12",

  previousLesson: {
    href: "../lesson11/lesson11.html",
    label: "Bài 11"
  },

  nextLesson: {
    href: "../lesson13/lesson13.html",
    label: "Bài 13"
  },

  patterns: [
    {
      number: 1,
      pattern: "Thì quá khứ của tính từ, danh từ",
      detail: {
        meaning: "Trong tiếng Nhật ngoài động từ thì tính từ và danh từ cũng được chia theo thì (hiện tại, quá khứ, tương lai)",
        usages: [
          "✦ Đối với tính từ đuôi な / Danh từ : ",
          "です　→　でした　",
          "じゃありません　→　じゃありませんでした",
          "✦ Đối với tính từ đuôi い：",
          "です　→　かったです　",
          "くないです　→　くなかったです",
        ],
        extraTable: [
            {
                title: "Bảng chia thì tính từ đuôi な",
                headers: [
                    { text: "Hiện tại / Tương lai", width: "18%" },
                    { text: "Quá khứ", width: "20%" },
                    { text: "Phủ định hiện tại", width: "29%" },
                    { text: "Phủ định quá khứ", width: "33%" },
                ],

                rows: [
                    {
                        number: "きれい　です",
                        numberReading: "きれい　でした",
                        age: "きれい　じゃありません",
                        ageReading: "きれい　じゃありませんでした",
                    },
                    {
                        number: "ハンサム　です",
                        numberReading: "ハンサム　でした",
                        age: "ハンサム　じゃありません",
                        ageReading: "ハンサム　じゃありませんでした",
                    },
                    {
                        number: "親切[しんせつ]　です",
                        numberReading: "親切[しんせつ]　でした",
                        age: "親切[しんせつ]　じゃありません",
                        ageReading: "親切[しんせつ]　じゃありませんでした",
                    },
                    {
                        number: "有名[ゆうめい]　です",
                        numberReading: "有名[ゆうめい]　でした",
                        age: "有名[ゆうめい]　じゃありません",
                        ageReading: "有名[ゆうめい]　じゃありませんでした",
                    },
                    {
                        number: "元気[げんき]　です",
                        numberReading: "元気[げんき]　でした",
                        age: "元気[げんき]　じゃありません",
                        ageReading: "元気[げんき]　じゃありませんでした",
                    },
                    {
                        number: "静[しず]か　です",
                        numberReading: "静[しず]か　でした",
                        age: "静[しず]か　じゃありません",
                        ageReading: "静[しず]か　じゃありませんでした",
                    },
                    {
                        number: "にぎやか　です",
                        numberReading: "にぎやか　でした",
                        age: "にぎやか　じゃありません",
                        ageReading: "にぎやか　じゃありませんでした",
                    },
                    {
                        number: "暇[ひま]　です",
                        numberReading: "暇[ひま]　でした",
                        age: "暇[ひま]　じゃありません",
                        ageReading: "暇[ひま]　じゃありませんでした",
                    },
                    {
                        number: "便利[べんり]　です",
                        numberReading: "便利[べんり]　でした",
                        age: "便利[べんり]　じゃありません",
                        ageReading: "便利[べんり]　じゃありませんでした",
                    },
                    {
                        number: "すてき　です",
                        numberReading: "すてき　でした",
                        age: "すてき　じゃありません",
                        ageReading: "すてき　じゃありませんでした",
                    },
                    {
                        number: "上手[じょうず]　です",
                        numberReading: "上手[じょうず]　でした",
                        age: "上手[じょうず]　じゃありません",
                        ageReading: "上手[じょうず]　じゃありませんでした",
                    },
                    {
                        number: "下手[へた]　です",
                        numberReading: "下手[へた]　でした",
                        age: "下手[へた]　じゃありません",
                        ageReading: "下手[へた]　じゃありませんでした",
                    },
                    {
                        number: "好[す]き　です",
                        numberReading: "好[す]き　でした",
                        age: "好[す]き　じゃありません",
                        ageReading: "好[す]き　じゃありませんでした",
                    },
                    {
                        number: "嫌[きら]い　です",
                        numberReading: "嫌[きら]い　でした",
                        age: "嫌[きら]い　じゃありません",
                        ageReading: "嫌[きら]い　じゃありませんでした",
                    },
                ]
            },

            {
                title: "Bảng chia thì tính từ đuôi い",
                headers: [
                    { text: "Hiện tại / Tương lai", width: "25%" },
                    { text: "Quá khứ", width: "25%" },
                    { text: "Phủ định hiện tại", width: "25%" },
                    { text: "Phủ định quá khứ", width: "25%" },
                ],

                rows: [
                    {
                        number: "忙[いそが]しいです",
                        numberReading: "忙[いそが]しかったです",
                        age: "忙[いそが]しくないです",
                        ageReading: "忙[いそが]しくなかったです",
                    },
                    {
                        number: "大[おお]きいです",
                        numberReading: "大[おお]きかったです",
                        age: "大[おお]きくないです",
                        ageReading: "大[おお]きくなかったです",
                    },
                    {
                        number: "小[ちい]さいです",
                        numberReading: "小[ちい]さかったです",
                        age: "小[ちい]さくないです",
                        ageReading: "小[ちい]さくなかったです",
                    },
                    {
                        number: "新[あたら]しいです",
                        numberReading: "新[あたら]しかったです",
                        age: "新[あたら]しくないです",
                        ageReading: "新[あたら]しくなかったです",
                    },
                    {
                        number: "古[ふる]いです",
                        numberReading: "古[ふる]かったです",
                        age: "古[ふる]くないです",
                        ageReading: "古[ふる]くなかったです",
                    },
                    {
                        number: "いいです",
                        numberReading: "よかったです",
                        age: "よくないです",
                        ageReading: "よくなかったです",
                    },
                    {
                        number: "悪[わる]いです",
                        numberReading: "悪[わる]かったです",
                        age: "悪[わる]くないです",
                        ageReading: "悪[わる]くなかったです",
                    },
                    {
                        number: "暑[あつ]いです",
                        numberReading: "暑[あつ]かったです",
                        age: "暑[あつ]くないです",
                        ageReading: "暑[あつ]くなかったです",
                    },
                    {
                        number: "寒[さむ]いです",
                        numberReading: "寒[さむ]かったです",
                        age: "寒[さむ]くないです",
                        ageReading: "寒[さむ]くなかったです",
                    },
                    {
                        number: "冷[つめ]たいです",
                        numberReading: "冷[つめ]たかったです",
                        age: "冷[つめ]たくないです",
                        ageReading: "冷[つめ]たくなかったです",
                    },
                    {
                        number: "難[むずか]しいです",
                        numberReading: "難[むずか]しかったです",
                        age: "難[むずか]しくないです",
                        ageReading: "難[むずか]しくなかったです",
                    },
                    {
                        number: "易[やさ]しいです",
                        numberReading: "易[やさ]しかったです",
                        age: "易[やさ]しくないです",
                        ageReading: "易[やさ]しくなかったです",
                    },
                    {
                        number: "高[たか]いです",
                        numberReading: "高[たか]かったです",
                        age: "高[たか]くないです",
                        ageReading: "高[たか]くなかったです",
                    },
                    {
                        number: "安[やす]いです",
                        numberReading: "安[やす]かったです",
                        age: "安[やす]くないです",
                        ageReading: "安[やす]くなかったです",
                    },
                    {
                        number: "低[ひく]いです",
                        numberReading: "低[ひく]かったです",
                        age: "低[ひく]くないです",
                        ageReading: "低[ひく]くなかったです",
                    },
                ]
            },
        ],
                
        examples: [
        {
            sentence: "❶　昨日[きのう]は　雨[あめ]でした。",
            meaning: "Hôm qua trời mưa.",
            audio: "lesson12_001",
        },
        {
            sentence: "❷　昨日[きのう]は　寒[さむ]かったです。",
            meaning: "Hôm qua trời lạnh.",
            audio: "lesson12_002",
        },
    ]
}
    },

    {
      number: 2,
      pattern: "N1は　N2より　Adjです。",
      detail: {
        meaning: "N1 hơn N2",
        explanations: [
            "🔹<strong>N1, N2</strong> là danh từ",
            "🔹<strong>Adj</strong> là tính từ",
            "🔹<strong>より</strong> là từ ngữ so sánh có nghĩa là “hơn”",
        ],
        usages: [
          "✦ Sử dụng để so sánh hơn, kém.",
        ],

        examples: [
        {
            sentence: "❶　東京[とうきょう]は　大阪[おおさか]より　大[おお]きいです。",
            meaning: "Tokyo lớn hơn Osaka",
            audio: "lesson12_003",
        },
        {
            sentence: "❷　このシャツは　そのシャツより　きれいです。",
            meaning: "Cái áo này đẹp hơn cái áo đó.",
            audio: "lesson12_004",
        },
        ]
    }
},
    
    {
        number: 3,
        pattern: "N1と　N2と　どちらが　Adjですか。\n→　N1(N2)のほうが　Adjです。\n→　どちらも　Adjです。",
        detail: {
            meaning: "N1 và N2 cái nào Adj hơn.\n→ N1(N2) Adj hơn.\n→ Cái nào cũng Adj.",
            explanations: [

            ],
            usages: [
                "✦ Dùng để so sánh hơn kém giữa 2 chủ thể",
            ],

           examples: [
            {
            sentence: "❶　本[ほん]と　映画[えいが]と　どちらが　おもしろいですか。",
            meaning: "Sách và phim cái nào thú vị hơn",
            audio: "lesson12_005",
            answer: 
                {
                    sentence: "映画[えいが]のほうが　おもしろいです。",
                    meaning: "Phim thú vị hơn",
                    audio: "lesson12_006"
                } 
            
        },
        {
            sentence: "❷　男[おとこ]の子[こ]と　女[おんな]の子[こ]と　どちらが　いいですか。",
            meaning: "Bé trai và bé gái đằng nào tốt hơn.",
            audio: "lesson12_007",
             answer: 
                {
                    sentence: "どちらも　いいです。",
                    meaning: "Trai, gái gì cũng được.",
                    audio: "lesson12_008"
                }          
        },
        ]
    },  
},

{
      number: 4,
      pattern: "N[のなか]で　何[なに]／誰[だれ]／どこ／いつ　が　いちばん　Adjですか。",
      detail: {
        meaning: "Trong phạm vi N thì cái gì, ai, ở đâu, khi nào là Adj nhất?",
        usages: [
          "✦ Sử dụng để so sánh nhất",
          "✦ [のなか] có thể có hoặc không.",
        ],

        examples: [
        {
            sentence: "❶　家族[かぞく]で　誰[だれ]が　いちばん　好[す]きですか。",
            meaning: "Trong gia đình thì bạn thích ai nhất?",
            audio: "lesson12_009",
            answer: 
                {
                    sentence: "妹[いもうと]が　いちばん　すきです。",
                    meaning: "Thích em gái nhất.",
                    audio: "lesson12_010"
                }   
        },
        {
            sentence: "❷　果物[くだもの]の中[なか]で　何[なに]が　いちばん　美味[おい]しいですか",
            meaning: "Trong các loại trái cây thì trái nào là ngon nhất.",
            audio: "lesson12_011",
             answer: 
                {
                    sentence: "バナナが　いちばん　美味[おい]しいです。",
                    meaning: "Trái chuối ngon nhất",
                    audio: "lesson12_012"
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
                content: [
                "きのう・いい天気[てんき]　→　<strong>昨日[きのう]は　いい天気[てんき]でした。</strong>",   
                ]
            },

            questions: [
                {
                    prompt: "➊　おととい・雨[あめ]→",
                    answers: [
                        "おとといは　あめでした。",
                        "おとといは　雨でした。"
                    ]
                },
                {
                    prompt: "➋　図書館[としょかん]・休[やす]み　→",
                    answers: [
                        "としょかんは　やすみでした。",
                        "図書館[としょかん]は　休[やす]みでした。"
                    ]
                },
                {
                    prompt: "➌　先週[せんしゅう]・暇[ひま]　→",
                    answers: [
                        "せんしゅうは　ひまでした。",
                        "先週[せんしゅう]は　暇[ひま]でした。"
                    ]
                },
                {
                    prompt: "➍　奈良公園[ならこうえん]・静[しず]か　→",
                    answers: [
                        "ならこうえんは　しずかでした。",
                        "奈良公園[ならこうえん]は　静[しず]かでした。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "昨日[きのう]・涼[すず]しい。　→　<strong>昨日[きのう]は　涼[すず]しかったです。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　先月[せんげつ]・忙[いそが]しい　→",
                    answers: [
                        "せんげつは　いそがしかったです。",
                        "先月[せんげつ]は　忙[いそが]しかったです。"
                    ]
                },
                {
                    prompt: "➋　お祭[まつ]り・楽[たの]しい　→",
                    answers: [
                        "おまつりは　たのしかったです。",
                        "お祭[まつ]りは　楽[たの]しかったです。"
                    ]
                },
                {
                    prompt: "➌　去年[きょねん]の　冬[ふゆ]・暖[あたた]かい　→",
                    answers: [
                        "きょねんの　ふゆは　あたたかかったです。",
                        "去年[きょねん]の　冬[ふゆ]は　暖[あたた]かかったです。"
                    ]
                },
                {
                    prompt: "➍　公園[こうえん]・人[ひと]が　多[おお]い　→",
                    answers: [
                        "こうえんは　ひとが　おおかったです。",
                        "公園[こうえん]は　人[ひと]が　多[おお]かったです。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: [
                        "れい１：サントスさんは　元気[げんき]でしたか。（はい）　→　<strong>はい、元気[げんき]でした。</strong>",
                        "れい2：パーティーの　料理[りょうり]は　美味[おい]しいですか。（いいえ）　→　<strong>いいえ、美味[おい]しくなかったです。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　お祭[まつ]りは　にぎやかでしたか。（はい、とても）　→",
                    answers: [
                        "はい、とても　にぎやかでした。"
                    ]
                },
                {
                    prompt: "➋　試験[しけん]は　簡単[かんたん]でしたか。（いいえ）　→",
                    answers: [
                        "いいえ、かんたんじゃありませんでした。",
                        "いいえ、簡単[かんたん]じゃありませんでした。"
                    ]
                },
                {
                    prompt: "➌　歌舞伎[かぶき]は　おもしろかったですか。（はい）　→",
                    answers: [
                        "はい、おもしろかったです。"
                    ]
                },
                {
                    prompt: "➍　コンサートは　よかったですか。（いいえ、あまり）　→",
                    answers: [
                        "いいえ、あまり　よくなかったです。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 4",
            example: {
                content: [
                "東京[とうきょう]は　どうでしたか。（とても　きれい）→　<strong>とても　きれいでした。</strong>",   
                ]
            },

            questions: [
                {
                    prompt: "➊　天気[てんき]は　どうでしたか。（くもり）　→",
                    answers: [
                        "くもりでした。"
                    ]
                },
                {
                    prompt: "➋　タイ料理[りょうり]は　どうでしたか。（辛[から]い）　→",
                    answers: [
                        "からかったです。",
                        "辛[から]かったです。"
                    ]
                },
                {
                    prompt: "➌　北海道[ほっかいどう]は　どうでしたか。（あまり　寒[さむ]くない）　→",
                    answers: [
                        "あまり　さむくなかったです。",
                        "あまり　寒[さむ]くなかったです。"
                    ]
                },
                {
                    prompt: "➍　ホテルの　部屋[へや]は　どうでしたか。（とても　すてき）　→",
                    answers: [
                        "とても　すてきでした。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                image: "/assets/images/grammar_n5_lesson12/practice5.jpg",
                content: [
                "北海道[ほっかいどう]・大阪[おおさか]・涼[すず]しい　→　<strong>北海道[ほっかいどう]は　大阪[おおさか]より　涼[すず]しいです。</strong>",   
                ] 
            },
            questions: [
                {
                    prompt: "➊　このかばん・そのかばん・重[おも]い　→",
                    answers: [
                        "このかばんは　そのかばんより　おもいです。",
                        "このかばんは　そのかばんより　重いです。"
                    ]
                },
                {
                    prompt: "➋　牛肉[ぎゅうにく]・とり肉[にく]・高[たか]い　→",
                    answers: [
                        "ぎゅうにくは　とりにくより　たかいです。",
                        "牛肉[ぎゅうにく]は　とり肉[にく]より　高[たか]いです。"
                    ]
                },
                {
                    prompt: "➌　ホンコン・シンガポール・近[ちか]い　→",
                    answers: [
                        "ホンコンは　シンガポールより　ちかいです。",
                        "ホンコンは　シンガポールより　近[ちか]いです。"
                    ]
                },
                {
                    prompt: "➍　ミラーさん・サントスさん・テニスが　上手[じょうず]　→",
                    answers: [
                        "ミラーさんは　サントスさんより　テニスが　じょうずです。",
                        "ミラーさんは　サントスさんより　テニスが　上手[じょうず]です。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: 
                    "今週[こんしゅう]と来週[らいしゅう]と　どちらが　暇[ひま]ですか。（来週[らいしゅう]）→　<strong>来週[らいしゅう]の　ほうが　暇[ひま]です。</strong>。",
            },

            questions: [
                {
                    prompt: "➊　ひらがなと　かたかなと　どちらが　難[むずか]しいですか。→",
                    answers: [
                        "かたかなの　ほうが　むずかしいです。",
                        "かたかなの　ほうが　難[むずか]しいです。"
                    ]
                },
                {
                    prompt: "➋　大[おお]きい　みかんと　小[ちい]さい　みかんと　どちらが　甘[あま]いですか。→",
                    answers: [
                        "ちいさい　みかんの　ほうが　あまいです。",
                        "小[ちい]さい　みかんの　ほうが　甘[あま]いです。"
                    ]
                },
                {
                    prompt: "➌　お父[とう]さんと　お母[かあ]さんと　どちらが　料理[りょうり]が　上手[じょうず]ですか。→",
                    answers: [
                        "ちちは　ははより　りょうりが　じょうずです。",
                        "父[ちち]は　母[はは]より　料理[りょうり]が　上手[じょうず]です。"
                    ]
                },
                {
                    prompt: "➍　春[はる]と　秋[あき]と　どちらが　好[す]きですか。→",
                    answers: [
                        "どちらも　すきです。",
                        "どちらも　好[す]きです。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: [
                    "お母[かあ]さんの　料理[りょうり]で　何[なに]が　一番[いちばん]　美味[おい]しいですか。→　<strong>カレーが　一番[いちばん]　美味[おい]しいです。</strong>。",
                ]
            },

            questions: [
                
                {
                    prompt: "➊　消[け]しゴムは　机[つくえ]（　　）上[うえ]（　　）あります。→",
                    answers: [
                        "の、に"
                    ]
                },
                {
                    prompt: "➋　花屋[はなや]（　　）スーパー（　　）銀行[ぎんこう]（　　）間[あいだ]に　あります。→",
                    answers: [
                        "は、と、の"
                    ]
                },
                {
                    prompt: "➌　公園[こうえん]（　　）だれ（　　）いません。→",
                    answers: [
                        "に、も"
                    ]
                },
                {
                    prompt: "➍　箱[はこ]（　　）中[なか]（　　）何[なに]（　　）ありません。→",
                    answers: [
                        "の、に、も"
                    ]
                },
                {
                    prompt: "➎　駅[えき]（　　）近[ちか]く（　　）コンビニ（　　）スーパーなど（　　）あります。→",
                    answers: [
                        "の、に、や、が"
                    ]
                },
            ]
        },
    ]
};