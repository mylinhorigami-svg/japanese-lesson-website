const grammarLessonData = {
  level: "N5",

  lessonNumber: 9,

  title: "Ngữ pháp N5 - Bài 9",

  previousLesson: {
    href: "../lesson8/lesson8.html",
    label: "Bài 8"
  },

  nextLesson: {
    href: "../lesson10/lesson10.html",
    label: "Bài 10"
  },

  patterns: [
    {
      number: 1,
      pattern: "N　が　分[わ]かります／あります。",
      detail: {
        meaning: " Hiểu (biết) N ; Có N",
        explanations: [
            "🔹N là danh từ chỉ đối tượng được nhắc đến",
            "🔹が là trợ từ ",
        ],
        usages: [
          "✦ <strong>分[わ]かります</strong> dùng để nói đến việc hiểu, biết 1 vấn đề hay ngôn ngữ nào đó",
          "✦ <strong>あります</strong> dùng để nói có vật hoặc vấn đề nào đó.",
        ],
        notes: [
          "✦ <strong>あります</strong> chỉ dùng cho vật, không dùng cho con người và động vật.",
        ],

        examples: [
        {
            sentence: "❶　私[わたし]は　日本語[にほんご]が　分[わ]かります。",
            meaning: "Tôi biết tiếng Nhật.",
            audio: "lesson9_001",
        },
        {
            sentence: "❷　お金[かね]が　あります。",
            meaning: "Tôi có tiền",
            audio: "lesson9_002",
        },
    ]
}
    },

    {
      number: 2,
      pattern: "Nが　好[す]き／嫌[きら]い／上手[じょうず]／下手[へた]　です。",
      detail: {
        meaning: "Thích / ghét / giỏi / kém N",
        explanations: [
            "🔹<strong>N</strong> là danh từ chỉ môn học, món ăn, môn thể thao, năng khiếu, ...",
        ],
        usages: [
          "✦ Cách nói thích / ghét / giỏi / kém cái gì đó.",
        ],
        notes: [
          "✦ Xem ví dụ bên dưới",
        ],

        examples: [
          {
            sentence: "❶　私[わたし]は　魚[さかな]が　好[す]きです。",
            meaning: "Tôi thích cá.",
            audio: "lesson9_003",
        },
        {
            sentence: "❷　カリナさんは　絵[え]が　上手[じょうず]です。",
            meaning: "Karina giỏi vẽ tranh.",
            audio: "lesson9_004",
        }
        ]
    }
},
    
    {
        number: 3,
        pattern: "どんな　Nが　好[す]き／嫌[きら]い／上手[じょうず]／下手[へた]　ですか。",
        detail: {
            meaning: "Thích / ghét / giỏi / kém N nào ?",
            explanations: [

            ],
            usages: [
                "✦ Ngoài cách sử dụng ở bài 8 thì どんな còn sử dụng để hỏi người nghe lựa chọn 1 thứ trong nhóm mà danh từ đứng đằng sau どんな đưa ra",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],

           examples: [
        {
            sentence: "❶　どんな　食[た]べ物[もの]が　好[す]きですか。",
            meaning: "Bạn thích món ăn nào ?",
            audio: "lesson9_005",
             answer: 
                {
                    sentence: "フォーが　好[す]きです。",
                    meaning: "Tôi thích phở.",
                    audio: "lesson9_006"
                }
            
        },
        {
            sentence: "❷　どんな　スポーツが　上手[じょうず]ですか。",
            meaning: "Bạn giỏi môn thể thao nào ?.",
            audio: "lesson9_007",
            answer: {
                sentence: "テニスが　上手[じょうず]です。",
                meaning: "Tôi giỏi tennis",
                audio: "lesson9_008"
            }
        },
        ]
    },
},

    {
        number: 4,
        pattern: "よく／だいたい／たくさん／少[すこ]し／あまり／全然[ぜんぜん]",
        detail: {
            meaning: "Thường, rất / đại khái / nhiều / ít, một chút / không ... lắm / hoàn toàn không",
            explanations: [

            ],
            usages: [
                "🔸Đây là các phó từ đặt trước động từ, tính từ để chỉ mức độ",
                "🔸あまり／全然[ぜんぜん] thường đi với thể phủ định",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],
           examples: [
        {
            sentence: "❶　カリナさんは　日本語[にほんご]が　よく分[わ]かります。",
            meaning: "Karina rất giỏi tiếng Nhật.",
            audio: "lesson9_009",
        },
        {
            sentence: "❷　日本語[にほんご]が　分[わ]かりますか。",
            meaning: "Bạn có biết tiếng Nhật không ?",
            audio: "lesson9_010",
            answers: [
                {
                sentence: "はい、大体[だいたい]分[わ]かります。",
                meaning: "Vâng, tôi biết đại khái.",
                audio: "lesson9_011"
                },
                {
                sentence: "はい、少[すこ]し分[わ]かります。",
                meaning: "Vâng, tôi biết 1 chút.",
                audio: "lesson9_012"
                },
                {
                sentence: "いいえ、あまり分[わ]かりません。",
                meaning: "Không, tôi không hiểu lắm",
                audio: "lesson9_013"
                },
                {
                sentence: "いいえ、全然[ぜんぜん]分[わ]かりません。",
                meaning: "Không, tôi hoàn toàn không hiểu.",
                audio: "lesson9_014"
                },
            ]
        },
        ]
    }
},

{
        number: 5,
        pattern: "。。。から、。。。",
        detail: {
            meaning: "Vì ... nên ...",
            explanations: [
                
            ],
            usages: [
                "🔸Cách nói lý do và kết quả.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],
           examples: [
        {
            sentence: "❶　時間[じかん]が　ありませんから、テレビを見[み]ません。",
            meaning: "Vì không có thời gian nên tôi không xem ti vi.",
            audio: "lesson9_015",
        },
        {
            sentence: "❷　スポーツが　好[す]きですから、毎日[まいにち]します。",
            meaning: "Vì thích thể thao nên tôi tập mỗi ngày.",
            audio: "lesson9_016",
        },
        ]
    }
},

    {
        number: 6,
        pattern: "どうして",
        detail: {
            meaning: "Tại sao ? / Vì sao ?",
            explanations: [

            ],
            usages: [
                "🔸Dùng để hỏi lý do, nguyên nhân của sự việc.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],

           examples: [
        {
            sentence: "❶　どうして　宿題[しゅくだい]を　しませんか。",
            meaning: "Tại sao không làm bài tập về nhà ?",
            audio: "lesson9_017",

            answer: {
                sentence: "時間[じかん]が　ありませんから。",
                meaning: "Vì không có thời gian.",
                audio: "lesson9_018"
            }
        },
        {
            sentence: "❷　どうして　昨日[きのう]　早[はや]く　帰[かえ]りましたか。",
            meaning: "Tại sao hôm qua về sớm vậy ?",
            audio: "lesson9_019",

            answer: {
                sentence: "用事[ようじ]が　ありますから。",
                meaning: "Vì có việc bận.",
                audio: "lesson9_020"
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
                content: "ダンスが　好[す]きですですか。（いいえ）　→　<strong>いいえ、好[す]きじゃありません。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　日本料理[にほんりょうり]が　好[す]きですか。（はい）　→",
                    answers: [
                        "はい、すきです。",
                        "はい、好きです。"
                    ]
                },
                {
                    prompt: "➋　カラオケが　好[す]きですか。（いいえ、あまり）　→",
                    answers: [
                        "いいえ、あまり　すきじゃありません。",
                        "いいえ、あまり　好きじゃありません。"
                    ]
                },
                {
                    prompt: "➌　旅行[りょこう]が　好[す]きですか。（はい、とても）　→",
                    answers: [
                        "はい、とても　すきです。",
                        "はい、とても　好きです。"
                    ]
                },
                {
                    prompt: "➍　魚[さかな]が　好[す]きですか。（いいえ、あまり）　→",
                    answers: [
                        "いいえ、あまり　すきじゃありません。",
                        "いいえ、あまり　好きじゃありません。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                image: "/assets/images/grammar_n5_lesson9/practice2.jpg",
                content: [
                        "どんな　スポーツが　好[す]きですか。　→　<strong>野球[やきゅう]が　好[す]きです。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　どんな　飲[の]み物[もの]が　好[す]きですか。　→",
                    answers: [
                        "ビールが　すきです。",
                        "ビールが　好きです。"
                    ]
                },
                {
                    prompt: "➋　どんな　料理[りょうり]が　好[す]きですか。　→",
                    answers: [
                        "インドりょうりが　すきです。",
                        "インド料理[りょうり]が　好きです。"
                    ]
                },
                {
                    prompt: "➌　どんな　映画[えいが]が　好[す]きですか。　→",
                    answers: [
                        "アメリカの　えいがが　すきです。",
                        "アメリカの　映画[えいが]が　好きです。"
                    ]
                },
                {
                    prompt: "➍　どんな　音楽[おんがく]が　好[す]きですか。　→",
                    answers: [
                        "ジャズが　すきです。",
                        "ジャズが　好きです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                image: "/assets/images/grammar_n5_lesson9/practice3.jpg",
                content: [
                    "れい１：→　<strong>佐藤[さとう]さんは　歌[うた]が　上手[じょうず]です。</strong>",
                    "れい 2：→　<strong>ミラーさんは　歌[うた]が　上手[じょうず]じゃ　ありません。</strong>",     
                ]
                    },

            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "マリアさんは　ダンスが　じょうずです。",
                        "マリアさんは　ダンスが　上手です。"
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "まつもとさんは　テニスが　じょうずじゃありません。",
                        "松本さんは　テニスが　上手じゃありません。"
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "やまださんは　りょうりが　あまり　じょうずじゃありません。",
                        "山田さんは　料理が　あまり　上手じゃありません。"
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "カリナさんは　えが　とても　じょうずです。",
                        "カリナさんは　絵が　とても　上手です。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 4",
            example: {
                content: "マリアさんは　かたかなが　分[わ]かりますか（はい、少し）。　→　<strong>……はい、少[すこ]し分[わ]かります。</strong>",
            },

            questions: [
                {
                    prompt: "➊　シュミットさんは　英語[えいご]が　分[わ]かりますか。\n（はい、よく）　→",
                    answers: [
                        "はい、よく　わかります。",
                        "はい、よく　分かります。"
                    ]
                },
                {
                    prompt: "➋　テレーザちゃんは　漢字[かんじ]が　分[わ]かりますか。\n（いいえ、あまり）　→",
                    answers: [
                        "いいえ、あまり　わかりません。",
                        "いいえ、あまり　分かりません。"
                    ]
                },
                {
                    prompt: "➌　サントスさんは　日本語[にほんご]が　分[わ]かりますか。\n（はい、だいたい）　→",
                    answers: [
                        "はい、だいたい　わかります。",
                        "はい、だいたい　分かります。"
                    ]
                },
                {
                    prompt: "➍　山田[やまだ]さんの　奥[おく]さんは　フランス語[ご]が　分[わ]かりますか。（いいえ、全然[ぜんぜん]）　→",
                    answers: [
                        "いいえ、ぜんぜん　わかりません。",
                        "いいえ、全然　分かりません。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                image: "/assets/images/grammar_n5_lesson9/practice5.jpg",
                content: "<strong>れい：</strong>時間[じかん]が　ありませんから、タクシーで　行[い]きます。",  
            },
            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "えいがが　すきですから、まいばん　みます。",
                        "映画が　好きですから、毎晩　見ます。"
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "にほんごが　わかりませんから、テレビを　みません。",
                        "日本語が　分かりませんから、テレビを　見ません。"
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "つまの　たんじょうびですから、はなを　かいます。",
                        "妻の　誕生日ですから、花を　買います。"
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "おかねが　ありませんから、カメラを　かいません。",
                        "お金が　ありませんから、カメラを　買いません。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: 
                    "どうして　東京[とうきょう]へ　行[い]きませんか。(約束[やくそく])　→　<strong>約束[やくそく]が　ありますから。</strong>",
            },

            questions: [
                {
                    prompt: "➊　どうして　料理[りょうり]を　習[なら]いますか。(料理[りょうり]が　下手[へた]です)　→",
                    answers: [
                        "りょうりが　へたですから。",
                        "料理が　下手ですから。"
                    ]
                },
                {
                    prompt: "➋　どうして　ご主人[しゅじん]は　テニスを　しませんか。\n(夫[おっと]は　スポーツが　嫌[きら]いです)　→",
                    answers: [
                        "おっとは　スポーツが　きらいですから。",
                        "夫は　スポーツが　嫌いですから。"
                    ]
                },
                {
                    prompt: "➌　どうして　タイ語[ご]の　本[ほん]を　買[か]いましたか。\n(来月[らいげつ]　タイへ　行[い]きます)　→",
                    answers: [
                        "らいげつ　タイへ　いきますから。",
                        "来月　タイへ　行きますから。"
                    ]
                },
                {
                    prompt: "➍　どうして　きのう　神戸[こうべ]へ　行[い]きませんでしたか。\n(仕事[しごと]が　たくさんありました)　→",
                    answers: [
                        "しごとが　たくさん　ありましたから。",
                        "仕事が　たくさん　ありましたから。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: [
                    "<strong>ぜんぜん　　とても　　たくさん　　よく　　いつも</strong>",
                    "日曜日[にちようび]（<strong>いつも</strong>）テニスを　します。",
                ]
            },

            questions: [
                
                {
                    prompt: "➊　マリアさんは　漢字[かんじ]が（　　）分[わ]かりません。→",
                    answers: [
                        "ぜんぜん",
                        "全然"
                    ]
                },
                {
                    prompt: "➋　あの　人[ひと]は　お金[かね]が（　　）あります。→",
                    answers: [
                        "たくさん"
                    ]
                },
                {
                    prompt: "➌　この　パンは（　　）おいしいです。→",
                    answers: [
                        "とても"
                    ]
                },
                {
                    prompt: "➍　ワンさんは　英語[えいご]が（　　）分[わ]かります。→",
                    answers: [
                        "よく"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 8",
            example: {
                content: [
                    "あの方[かた]は　（どうなた）ですか。",
                    ".....まつもとさんの　奥[おく]さんです。",
                ]
            },

            questions: [
                {
                    prompt: "❶　松本[まつもと]さんの　奥[おく]さんは（　　）人[ひと]ですか。\n.....親切[しんせつ]な　人[ひと]です。",
                    answers: [
                        "どんな"
                    ]
                },
                {
                    prompt: "❷　（　　）あの　店[みせ]で　ワインを　買[か]いますか。\n.....安[やす]いですから。",
                    answers: [
                        "どうして"
                    ]
                },
                {
                    prompt: "❸　カリナさんは（　　）料理[りょうり]が　好[す]きですか。\n.....韓国[かんこく]料理[りょうり]が　好[す]きです。",
                    answers: [
                        "どんな"
                    ]
                },
                {
                    prompt: "❹　勉強[べんきょう]は（　　）ですか。\n.....おもしろいです。",
                    answers: [
                        "どう"
                    ]
                },
                {
                    prompt: "❺　国[くに]で（　　）に　日本語[にほんご]を　習[なら]いましたか。\n.....日本人[にほんじん]の　先生[せんせい]に　習[なら]いました。",
                    answers: [
                        "だれ",
                        "誰"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 9",
            example: {
                content: [
                    "ビール（<strong>を</strong>）飲[の]みます",
                ]
            },

            questions: [
                {
                    prompt: "❶　マリアさんは　ダンス（　　）上手[じょうず]です。",
                    answers: [
                        "が"
                    ]
                },
                {
                    prompt: "❷　わたしは　タイ語[ご]（　　）わかりません。",
                    answers: [
                        "が"
                    ]
                },
                {
                    prompt: "❸　日曜日[にちようび]　友達[ともだち]と　約束[やくそく]（　　）あります。",
                    answers: [
                        "が"
                    ]
                },
                {
                    prompt: "❹　あした　忙[いそが]しいです（　　）、どこも　行[い]きません。",
                    answers: [
                        "から"
                    ]
                },
                {
                    prompt: "❺　どんな　映画[えいが]（　　）好[す]きですか。",
                    answers: [
                        "が"
                    ]
                },
                {
                    prompt: "❻　歌[うた]（　　）下手[へた]です（　　）、カラオケが　嫌[きら]いです。",
                    answers: [
                        "が、から",
                    ]
                },
            ]
        },
    ]
};