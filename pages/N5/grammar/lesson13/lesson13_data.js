const grammarLessonData = {
  level: "N5",

  lessonNumber: 13,

  title: "Ngữ pháp N5 - Bài 13",

  previousLesson: {
    href: "../lesson12/lesson12.html",
    label: "Bài 12"
  },

  nextLesson: {
    href: "../lesson14/lesson14.html",
    label: "Bài 14"
  },

  patterns: [
    {
      number: 1,
      pattern: "何[なに]が　欲[ほ]しいですか。　→　Nが　欲[ほ]しいです。",
      detail: {
        meaning: "Bạn muốn có cái gì?\n→ Tôi muốn có N.",
      
        usages: [
          "✦ Dùng để hỏi và trả lời về mong muốn, muốn có cái gì đó.",
          "✦ Không dùng để nói về mong muốn của người thứ ba.",
        ],
                
        examples: [
        {
            sentence: "➊　今[いま]、何[なに]が　一[いち]番[ばん]　欲[ほ]しいですか。",
            meaning: "Bây giờ bạn muốn có cái gì nhất?",
            audio: "lesson13_001",
            answer: 
                {
                    sentence: "新[あたら]しい車が　欲[ほ]しいです。",
                    meaning: "Tôi muốn có một chiếc xe mới.",
                    audio: "lesson13_002"
                } 
        },
        {
            sentence: "❷　私[わたし]は　うちが　欲[ほ]しいです。",
            meaning: "Tôi muốn có nhà.",
            audio: "lesson13_003",
        },
    ]
}
    },

    {
      number: 2,
      pattern: "何[なに]を　Vたいですか。→　Nを　Vたいです。",
      detail: {
        meaning: "Bạn muốn làm gì? → Tôi muốn làm V.",
        explanations: [
            "🔹<strong>Vたい　＝　V<span class='remove-masu'>ます</span> + たい</strong>",
            "Ví dụ : <strong>食[た]べます　→　食[た]べたい</strong>",

        ],
        usages: [
          "✦ Sử dụng để hỏi và trả lời về mong muốn làm gì.",
          "✦ Động từ ở thể <strong>たい</strong> có tính chất giống như một tính từ đuôi <strong>い</strong>",
          "✦ <strong>～たい</strong> không dùng để nói về mong muốn của người thứ ba.",
        ],

        examples: [
        {
            sentence: "❶　何[なに]を　食[た]べたいですか。",
            meaning: "Bạn muốn ăn gì?",
            audio: "lesson13_004",
            answer: 
                {
                    sentence: "すしを　食[た]べたいです。",
                    meaning: "Tôi muốn ăn sushi.",
                    audio: "lesson13_005"
                } 
        },
        {
            sentence: "❷　夏[なつ]休[やす]みは　どこへ　行[い]きたいですか。",
            meaning: "Bạn muốn đi đâu vào kỳ nghỉ hè?",
            audio: "lesson13_006",
            answer: 
                {
                    sentence: "海[うみ]へ　行[い]きたいです。",
                    meaning: "Tôi muốn đi biển.",
                    audio: "lesson13_007"
                }
        },
        {
            sentence: "➌　今[いま]、何[なに]を　したいですか。",
            meaning: "Bây giờ bạn muốn làm gì?",
            audio: "lesson13_008",
            answer: 
                {
                    sentence: "何[なに]も　したくないです。",
                    meaning: "Tôi không muốn làm gì cả.",
                    audio: "lesson13_009"
                }
        },
        ]
    }
},
    
    {
        number: 3,
        pattern: "N1へ　V<span class='remove-masu'>ます</span>／N2に　行きます／来ます／帰ります。",
        detail: {
            meaning: "Đi/đến/trở về N1 để làm V/N2.",
            explanations: [
                 "🔹<strong>N1</strong> là danh từ chỉ địa điểm",
                 "🔹<strong>N2</strong> là danh từ chỉ mục đích hành động",

            ],
            usages: [
                "✦ Dùng để nói về mục đích đi/đến/về đâu đó để thực hiện hành động nào đó.",
            ],

           examples: [
            {
            sentence: "❶　わたしは　フランスへ　料理[りょうり]を　習[なら]いに　行[い]きます。",
            meaning: "Tôi đi Pháp để học nấu ăn.",
            audio: "lesson13_010",
            },
            {
            sentence: "❷　週末[しゅうまつ]は　何[なに]を　しますか。",
            meaning: "Cuối tuần bạn làm gì?",
            audio: "lesson13_011",
             answer: 
                {
                    sentence: "子供[こども]と　映画[えいが]を　見[み]に　行[い]きます。",
                    meaning: "Đi xem phim với con.",
                    audio: "lesson13_012"
                }          
        },
        ]
    },  
},

{
      number: 4,
      pattern: "どこか／なにか",
      detail: {
        meaning: "Nơi nào đó / cái gì đó (không xác định rõ)",
        usages: [
          "✦ Khi đứng trước động từ đi với các trợ từ へ、が、を thì các trợ từ này có thể được lược bỏ, các trợ từ khác giữ nguyên.",
        ],

        examples: [
        {
            sentence: "❶　暇[ひま]です、どこか（へ）行[い]きたいです。",
            meaning: "Vì rảnh rỗi nên tôi muốn đi đâu đó.",
            audio: "lesson13_013",
        },
        {
            sentence: "❷　暑[あつ]いですから、なにか（を）飲[の]みたいです。",
            meaning: "Vì nóng nên tôi muốn uống gì đó.",
            audio: "lesson13_014",
        },
        ]
    }
},
   
],

    practice: [
        {
            title: "Luyện tập 1",
            example: {
                image: "/assets/images/grammar_n5_lesson13/practice1.jpg",
                content: [
                "れい：わたしは　カメラが　欲[ほ]しいです。",   
                ]
            },

            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "わたしは　パソコンが　ほしいです。",
                        "私は　パソコンが　欲しいです。"
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "わたしは　くるまが　ほしいです。",
                        "私は　車が　欲しいです。"
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "わたしは　おかねが　ほしいです。",
                        "私は　お金が　欲しいです。"
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "わたしは　かのじょが　ほしいです。",
                        "私は　彼女が　欲しいです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "どんなパソコンが　欲[ほ]しいですか。（軽[かる]い）　→　<strong>軽[かる]いパソコンが　欲[ほ]しいです。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　どんな車[くるま]が　欲[ほ]しいですか。（赤[あか]い）　→",
                    answers: [
                        "赤い車[くるま]が　欲[ほ]しいです。",
                        "あかいくるまが　ほしいです。"
                    ]
                },
                {
                    prompt: "➋　どんな靴[くつ]が　欲[ほ]しいですか。（ナイキ）　→",
                    answers: [
                        "ナイキの靴[くつ]が　欲[ほ]しいです。",
                        "ナイキのくつが　ほしいです。"
                    ]
                },
                {
                    prompt: "➌　どんな時計[とけい]が　欲[ほ]しいですか。（日本[にほん]）　→",
                    answers: [
                        "日本[にほん]の時計[とけい]が　欲[ほ]しいです。",
                        "にほんのとけいが　ほしいです。"
                    ]
                },
                {
                    prompt: "➍　どんなうちが　欲[ほ]しいですか。（広[ひろ]い）　→",
                    answers: [
                        "広[ひろ]いうちが　欲[ほ]しいです。",
                        "ひろいうちが　ほしいです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                image: "/assets/images/grammar_n5_lesson13/practice3.jpg",
                content: [
                "れい：すき焼[や]きを　食[た]べたいです。",   
                ]
                    },

            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "北海道へ　行きたいです。",
                        "ほっかいどうへ　いきたいです。"
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "ビールを　飲みたいです。",
                        "ビールを　のみたいです。"
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "映画を　見たいです。",
                        "えいがを　みたいです。"
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "サッカーを　したいです。",
                        "サッカーを　したいです。"
                    ]
                },
            ]

        },

        {
            title: "Luyện tập 4",
            example: {
                content: [
                "何[なに]を　買[か]いたいですか。（自転車[じてんしゃ]）　→　<strong>自転車[じてんしゃ]を　買[か]いたいです。</strong>",   
                ]
            },

            questions: [
                {
                    prompt: "➊　いつ　北海道へ　行きたいですか。　（2がつ）→",
                    answers: [
                        "2がつに　行きたいです。",
                        "2がつに　いきたいです。"
                    ]
                },
                {
                    prompt: "➋　何[なに]を　習[なら]いたいですか。　（生[い]け花[ばな]）→",
                    answers: [
                        "生[い]け花[ばな]を　習[なら]いたいです。",
                        "いけばなを　ならいたいです。"
                    ]
                },
                {
                    prompt: "➌　だれに　会[あ]いたいですか。　（両親[りょうしん]）→",
                    answers: [
                        "両親[りょうしん]に　会[あ]いたいです。",
                        "りょうしんに　あいたいです。"
                    ]
                },
                {
                    prompt: "➍　何[なに]を　食[た]べたいですか。　（何[なに]も）→",
                    answers: [
                        "何[なに]も　食[た]べたくないです。",
                        "なにも　たべたくないです。"
                    ]
                },
                {
                    prompt: "➎　どんな本[ほん]を　読[よ]みたいですか。　（旅行[りょこう]の本[ほん]）→",
                    answers: [
                        "旅行[りょこう]の本[ほん]を　読[よ]みたいです。",
                        "りょこうのほんを　よみたいです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                "公園[こうえん]へ　行[い]きます。散歩[さんぽ]します。　→　<strong>公園[こうえん]へ　散歩[散歩]に　行[い]きます。</strong>",   
                ] 
            },
            questions: [
                {
                    prompt: "➊　横浜[よこはま]へ　行[い]きます。買[か]い物[もの]します。　→",
                    answers: [
                        "横浜[よこはま]へ　買い物[かいもの]しに　行[い]きます。",
                        "よこはまへ　かいものしに　いきます。"
                    ]
                },
                {
                    prompt: "➋　ホテルへ　行[い]きます。食事[しょくじ]します。　→",
                    answers: [
                        "ホテルへ　食事[しょくじ]しに　行[い]きます。",
                        "ホテルへ　しょくじしに　いきます。"
                    ]
                },
                {
                    prompt: "➌　川[かわ]へ　行[い]きます。釣[つ]りを　します。　→",
                    answers: [
                        "川[かわ]へ　釣[つ]りに　行[い]きます。",
                        "かわへ　つりに　いきます。"
                    ]
                },
                {
                    prompt: "➍　沖縄[おきなわ]へ　行[い]きます。旅行[りょこう]します。　→",
                    answers: [
                        "沖縄[おきなわ]へ　旅行[りょこう]に　行[い]きます。",
                        "おきなわへ　りょこうに　いきます。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: 
                    "どこへ　遊[あそ]びに　行[い]きますか。（友達[ともだち]のうち）→　<strong>友達[ともだち]のうちへ　遊[あそ]びに　行[い]きます。</strong>",
            },

            questions: [
                {
                    prompt: "➊　どこへ　泳[およ]ぎに　行[い]きますか。（ホテルの　プール）→",
                    answers: [
                        "ホテルの　プールへ　泳[およ]ぎに　行[い]きます。",
                        "ホテルの　プールへ　およぎに　いきます。"
                    ]
                },
                {
                    prompt: "➋　どこへ　お土産[みやげ]を　買[か]いに　行[い]きますか。（デパート）→",
                    answers: [
                        "デパートへ　お土産[みやげ]を　買[か]いに　行[い]きます。",
                        "デパートへ　おみやげを　かいに　いきます。"
                    ]
                },
                {
                    prompt: "➌　どこへ　絵[え]を　見[み]に　行[い]きますか。（奈良[なら]の　美術館[びじゅつかん]）→",
                    answers: [
                        "奈良[なら]の　美術館[びじゅつかん]へ　絵[え]を　見[み]に　行[い]きます。",
                        "ならの　びじゅつかんへ　えを　みに　いきます。"
                    ]
                },
                {
                    prompt: "➍　どこへ　食事[しょくじ]しに　行[い]きますか。（インド料理[りょうり]の　レストラン）→",
                    answers: [
                        "インド料理[りょうり]の　レストランへ　食事[しょくじ]しに　行[い]きます。",
                        "インドりょうりの　レストランへ　しょくじしに　いきます。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: [
                    "だれと　映画[えいが]を　見[み]に　行[い]きますか。（姉[あね]）→　<strong>姉[あね]と　見[み]に　行[い]きます。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　何[なに]を　買[か]いに　行[い]きますか。（靴[くつ]）→",
                    answers: [
                        "靴[くつ]を　買[か]いに　行[い]きます。",
                        "くつを　かいに　いきます。"
                    ]
                },
                {
                    prompt: "➋　だれに　会[あ]いに　行[い]きますか。（カリナさん）→",
                    answers: [
                        "カリナさんに　会[あ]いに　行[い]きます。",
                        "カリナさんに　あいに　いきます。"
                    ]
                },
                {
                    prompt: "➌　何時[なんじ]に　子[こ]どもを　迎[むか]えに　行[い]きますか。（2時[じ]ごろ）→",
                    answers: [
                        "2時[じ]ごろ　子[こ]どもを　迎[むか]えに　行[い]きます。",
                        "2じごろ　こどもを　むかえに　いきます。"
                    ]
                },
                {
                    prompt: "➍　いつ　旅行[りょこう]に　行[い]きますか。（来月[らいげつ]）→",
                    answers: [
                        "来月[らいげつ]　旅行[りょこう]に　行[い]きます。",
                        "らいげつ　りょこうに　いきます。"
                    ]
                },
            ]
        },
        {
            title: "Luyện tập 8",
            example: {
                image: "/assets/images/grammar_n5_lesson13/practice8.jpg",
                content: [
                    "もう　12時[じ]ですから、昼[ひる]ご飯[はん]を　（<strong>食[た]べたい</strong>）です。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　用事[ようじ]が　ありますから、5時[じ]にうちへ　（　　　）です。→",
                    answers: [
                        "帰[かえ]りたい",
                        "かえりたい"
                    ]
                },
                {
                    prompt: "➋　あしたは　休[やす]みですから、昼[ひる]まで　（　　　）です。→",
                    answers: [
                        "寝[ね]たい",
                        "ねたい"
                    ]
                },
                {
                    prompt: "➌　のどが　かわきましたから、何[なに]か　（　　　）です。→",
                    answers: [
                        "飲[の]みたい",
                        "のみたい"
                    ]
                },
                {
                    prompt: "➍　疲[つか]れましたから、何[なに]も　（　　　）です。→",
                    answers: [
                        "したくない"
                    ]
                },
                {
                    prompt: "➎　暑[あつ]いですから、どこも　（　　　）です。→",
                    answers: [
                        "行[い]きたくない",
                        "いきたくない"
                    ]
                },
            ]
        },
        {
            title: "Luyện tập 9",
            example: {
                image: "/assets/images/grammar_n5_lesson13/practice9.jpg",
                content: [
                    "喫茶店[きっさてん]へ　コーヒーを　（<strong>飲[の]み</strong>）に　行[い]きます。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　図書館[としょかん]へ　本[ほん]を　（　　　）に　行[い]きます。→",
                    answers: [
                        "借[か]り",
                        "かり"
                    ]
                },
                {
                    prompt: "➋　郵便局[ゆうびんきょく]へ　切手[きって]を　（　　　）に　行[い]きました。→",
                    answers: [
                        "買[か]い",
                        "かい"
                    ]
                },
                {
                    prompt: "➌　デパートへ　（　　　）に　行[い]きたいです。→",
                    answers: [
                        "買い物[かいもの]し",
                        "かいものし"
                    ]
                },
                {
                    prompt: "➍　暑[あつ]いですから、プールへ　（　　　）に　行[い]きましょう。→",
                    answers: [
                        "泳[およ]ぎ",
                        "およぎ"
                    ]
                },
                {
                    prompt: "➎　日本[にほん]に　1年[ねん]　いますから、いろいろな　所[ところ]へ　（　　　）に　行[い]きたいです。→",
                    answers: [
                        "旅行[りょこう]し",
                        "りょこうし"
                    ]
                },
            ]
        },
        {
            title: "Luyện tập 10",
            example: {
                content: [
                    "昼[ひる]ごはん（　を　）　食[た]べます。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　わたしは　大[おお]きい　うち（　　）　欲[ほ]しいです。　→",
                    answers: [
                        "が"
                    ]
                },
                {
                    prompt: "➋　きょうは　雨[あめ]ですから、どこ（　　）　行[い]きたくないです。　→",
                    answers: [
                        "も"
                    ]
                },
                {
                    prompt: "➌　京都[きょうと]の　大学[だいがく]（　　）　美術[びじゅつ]（　　）　勉強[べんきょう]します。　→",
                    answers: [
                        "で、を"
                    ]
                },
                
                {
                    prompt: "➍　日本[にほん]（　　）　日本語[にほんご]（　　）　勉強[べんきょう]（　　）　来[き]ました。　→",
                    answers: [
                        "へ、を、に",
                    ]
                },
                
                
                {
                    prompt: "➎　おなかが　すきましたから、レストラン（　　）　食事[しょくじ]（　　）　行[い]きます。　→",
                    answers: [
                        "へ、に",
                    ]
                },
                
            ]
        },
    ]
};