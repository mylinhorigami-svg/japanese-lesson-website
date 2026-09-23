const grammarLessonData = {
  level: "N5",

  lessonNumber: 11,

  title: "Ngữ pháp N5 - Bài 11",

  previousLesson: {
    href: "../lesson10/lesson10.html",
    label: "Bài 10"
  },

  nextLesson: {
    href: "../lesson12/lesson12.html",
    label: "Bài 12"
  },

  patterns: [
    {
      number: 1,
      pattern: "Đơn vị đếm",
      detail: {
        meaning: "",
        explanations: [
            "🔹～つ：Đếm đồ vật nói chung",
            "🔹～人（にん）: Đếm người",
            "🔹～個（こ）: Đếm đồ vật nhỏ",
            "🔹～台（だい）: Đếm đồ vật lớn (máy móc, phương tiện)",
            "🔹～本（ほん）: Đếm đồ vật dài",
            "🔹～枚（まい）: Đếm đồ vật mỏng, dẹt",
            "🔹～冊（さつ）: Đếm đồ vật dạng sách, vở",
            "🔹～匹（ひき）: Đếm động vật nhỏ",
            "🔹～回（かい）: Đếm số lần"

        ],
        usages: [
          "✦ Sử dụng để đếm người, động vật, đồ vật, số lần, ...",
          "✦ Các đơn vị đếm khác không được liệt kê ở trên thì lấy số đếm kết hợp với đơn vị đếm của nó",
        ],
        notes: [
          "✦ Xem bảng đơn vị đếm và ví dụ bên dưới.",
        ],
        extraTable: [
            {
                title: "Bảng đếm đồ vật chung, đếm người",
                headers: [
                    { text: "Đếm đồ vật chung", width: "20%" },
                    { text: "Nghĩa", width: "15%" },
                    { text: "Đếm người", width: "15%" },
                    { text: "Nghĩa", width: "15%" },
                    { text: "Đếm đồ vật dài", width: "20%" },
                    { text: "Nghĩa", width: "15%" },
                ],

                rows: [
                        {
                            number: "ひとつ",
                            numberReading: "1 cái (quả)",
                            age: "ひとり",
                            ageReading: "1 người",
                            times: "いっぽん",
                            timesReading: "1 cái (cây)",
                        },
                        {
                            number: "ふたつ",
                            numberReading: "2 cái (quả)",
                            age: "ふたり",
                            ageReading: "2 người",
                            times: "にほん",
                            timesReading: "2 cái (cây)",
                        },
                        {
                            number: "みっつ",
                            numberReading: "3 cái (quả)",
                            age: "さんにん",
                            ageReading: "3 người",
                            times: "さんぼん",
                            timesReading: "3 cái (cây)",
                        },
                        {
                            number: "よっつ",
                            numberReading: "4 cái (quả)",
                            age: "よにん",
                            ageReading: "4 người",
                            times: "よんほん",
                            timesReading: "4 cái (cây)",
                        },
                        {
                            number: "いつつ",
                            numberReading: "5 cái (quả)",
                            age: "ごにん",
                            ageReading: "5 người",
                            times: "ごほん",
                            timesReading: "5 cái (cây)",
                        },
                        {
                            number: "むっつ",
                            numberReading: "6 cái (quả)",
                            age: "ろくにん",
                            ageReading: "6 người",
                            times: "ろっぽん",
                            timesReading: "6 cái (cây)",
                        },
                        {
                            number: "ななつ",
                            numberReading: "7 cái (quả)",
                            age: "ななにん",
                            ageReading: "7 người",
                            times: "ななほん",
                            timesReading: "7 cái (cây)",
                        },
                        {
                            number: "やっつ",
                            numberReading: "8 cái (quả)",
                            age: "はちにん",
                            ageReading: "8 người",
                            times: "はっぽん",
                            timesReading: "8 cái (cây)",
                        },
                        {
                            number: "ここのつ",
                            numberReading: "9 cái (quả)",
                            age: "きゅうにん",
                            ageReading: "9 người",
                            times: "きゅうほん",
                            timesReading: "9 cái (cây)",
                        },
                        {
                            number: "とお",
                            numberReading: "10 cái (quả)",
                            age: "じゅうにん",
                            ageReading: "10 người",
                            times: "じゅっぽん",
                            timesReading: "10 cái (cây)",
                        },

                        {
                        number: "<span class='grammar-highlight'>いくつ</span>",
                        numberReading: "<span class='grammar-highlight'>Mấy cái?</span>",
                        age: "<span class='grammar-highlight'>なんにん</span>",
                        ageReading: "<span class='grammar-highlight'>Mấy người?</span>",
                        times:"<span class='grammar-highlight'>なんぼん</span>",
                        timesReading:"<span class='grammar-highlight'>Mấy cái (cây)?</span>"
                    },
                    ],
            },

            {
                title: "Bảng đếm đồ vật mỏng, dạng cuốn, con vật nhỏ",
                headers: [
                    { text: "Đếm vật mỏng", width: "20%" },
                    { text: "Nghĩa", width: "20%" },
                    { text: "Đếm sách, vở", width: "15%" },
                    { text: "Nghĩa", width: "15%" },
                    { text: "Đếm con vật nhỏ", width: "15%" },
                    { text: "Nghĩa", width: "15%" },
                ],

                rows: [
                    {
                        number: "いちまい",
                        numberReading: "1 miếng (tờ)",
                        age: "いちさつ",
                        ageReading: "1 cuốn",
                        times: "いっぴき",
                        timesReading: "1 con",
                    },
                    {
                        number: "にこ",
                        numberReading: "2 cái (cục)",
                        age: "にだい",
                        ageReading: "2 cái (chiếc)",
                        times: "にかい",
                        timesReading: "2 lần",
                    },
                    {
                        number: "さんこ",
                        numberReading: "3 cái (cục)",
                        age: "さんだい",
                        ageReading: "3 cái (chiếc)",
                        times: "さんかい",
                        timesReading: "3 lần",
                    },
                    {
                        number: "<span class='grammar-highlight'>なんこ</span>",
                        numberReading: "<span class='grammar-highlight'>Mấy cái?</span>",
                        age: "<span class='grammar-highlight'>なんだい</span>",
                        ageReading: "<span class='grammar-highlight'>Mấy chiếc?</span>",
                        times: "<span class='grammar-highlight'>なんかい</span>",
                        timesReading: "<span class='grammar-highlight'>Mấy lần?</span>",
                    },
                ],
            },

            {
                title: "Bảng đếm đồ vật mỏng, dạng cuốn, con vật nhỏ",
                headers: [
                    { text: "Đếm vật mỏng", width: "20%" },
                    { text: "Nghĩa", width: "20%" },
                    { text: "Đếm sách, vở", width: "15%" },
                    { text: "Nghĩa", width: "15%" },
                    { text: "Đếm con vật nhỏ", width: "15%" },
                    { text: "Nghĩa", width: "15%" },
                ],

                rows: [
                    {
                        number: "いちまい",
                        numberReading: "1 miếng (tờ)",
                        age: "いっさつ",
                        ageReading: "1 cuốn",
                        times: "いっぴき",
                        timesReading: "1 con",
                    },
                    {
                        number: "にまい",
                        numberReading: "2 miếng (tờ)",
                        age: "にさつ",
                        ageReading: "2 cuốn",
                        times: "にひき",
                        timesReading: "2 con",
                    },
                    {
                        number: "さんまい",
                        numberReading: "3 miếng (tờ)",
                        age: "さんさつ",
                        ageReading: "3 cuốn",
                        times: "さんびき",
                        timesReading: "3 con",
                    },
                    {
                        number: "よんまい",
                        numberReading: "4 miếng (tờ)",
                        age: "よんさつ",
                        ageReading: "4 cuốn",
                        times: "よんひき",
                        timesReading: "4 con",
                    },
                    {
                        number: "ごまい",
                        numberReading: "5 miếng (tờ)",
                        age: "ごさつ",
                        ageReading: "5 cuốn",
                        times: "ごひき",
                        timesReading: "5 con",
                    },
                    {
                        number: "ろくまい",
                        numberReading: "6 miếng (tờ)",
                        age: "ろくさつ",
                        ageReading: "6 cuốn",
                        times: "ろっぴき",
                        timesReading: "6 con",
                    },
                    {
                        number: "ななまい",
                        numberReading: "7 miếng (tờ)",
                        age: "ななさつ",
                        ageReading: "7 cuốn",
                        times: "ななひき",
                        timesReading: "7 con",
                    },
                    {
                        number: "はちまい",
                        numberReading: "8 miếng (tờ)",
                        age: "はっさつ",
                        ageReading: "8 cuốn",
                        times: "はっぴき",
                        timesReading: "8 con",
                    },
                    {
                        number: "きゅうまい",
                        numberReading: "9 miếng (tờ)",
                        age: "きゅうさつ",
                        ageReading: "9 cuốn",
                        times: "きゅうひき",
                        timesReading: "9 con",
                    },
                    {
                        number: "じゅうまい",
                        numberReading: "10 miếng (tờ)",
                        age: "じゅっさつ",
                        ageReading: "10 cuốn",
                        times: "じゅっぴき",
                        timesReading: "10 con",
                    },
                    {
                        number: "<span class='grammar-highlight'>なんまい</span>",
                        numberReading: "<span class='grammar-highlight'>Mấy miếng (tờ)?</span>",
                        age: "<span class='grammar-highlight'>なんさつ</span>",
                        ageReading: "<span class='grammar-highlight'>Mấy cuốn?</span>",
                        times: "<span class='grammar-highlight'>なんびき</span>",
                        timesReading: "<span class='grammar-highlight'>Mấy con?</span>",
                    },
                ],
            },
        ],
                
        examples: [
        {
            sentence: "❶　りんごを　いくつ　買[か]いましたか。",
            meaning: "Bạn đã mua mấy quả táo?",
            audio: "lesson11_001",
             answer: {
                sentence: "4つ　買いました。",
                meaning: "Tôi mua 4 quả.",
                audio: "lesson11_002"
            }
        },
        {
            sentence: "❷　家族[かぞく]は　何人[なんにん]　ですか。",
            meaning: "Gia đình bạn có mấy người?",
            audio: "lesson11_003",
            answer: {
                sentence: "4人[にん]です。主人[しゅじん]と　二人[ふたり]男[おとこ]の子[こ]が　います。",
                meaning: "Gia đình tôi có 4 người. Đó là chồng và 2 người con trai",
                audio: "lesson11_004"
            }
        },
        {
            sentence: "❷　一週間[いっしゅうかん]に　何回[なんかい]　スーパーへ　行[い]きますか。",
            meaning: "1 tuần đi siêu thị mấy lần ?",
            audio: "lesson11_005",
            answer: {
                sentence: "2回[かい]ぐらい　行[い]きます。",
                meaning: "Đi khoảng 2 lần.",
                audio: "lesson11_006"
            }
        },
    ]
}
    },

    {
      number: 2,
      pattern: "どのぐらい（くらい）　Vますか。",
      detail: {
        meaning: "Làm (gì đó) khoảng bao lâu ... ?",
        explanations: [
            "🔹<strong>どのぐらい</strong> là từ để hỏi khoảng thời gian",
            "🔹<strong>ぐらい（くらい）</strong> đứng sau từ chỉ số lượng, có nghĩa là “khoảng”",
        ],
        usages: [
          "✦ Cách hỏi khoảng thời gian, thường đi cùng với động từ <strong>かかります</strong>",
          "✦ ぐらい mang nghĩa nhẹ nhàng hơn くらい",
        ],
        notes: [
          "✦ Xem ví dự bên dưới",
        ],

        examples: [
        {
            sentence: "❶　家[いえ]から　会社[かいしゃ]まで　どのくらい　かかりますか。",
            meaning: "Từ nhà đến công ty mất khoảng bao lâu ?",
            audio: "lesson11_005",
            answer: {
                sentence: "45分[ふん]ぐらい　かかります。",
                meaning: "Mất khoảng 45 phút.",
                audio: "lesson11_006"
            }
        },
        {
            sentence: "❷　どのぐらい　日本語[にほんご]を　勉強[べんきょう]しましたか。",
            meaning: "Bạn đã học tiếng Nhật khoảng bao lâu rồi ?",
            audio: "lesson11_005",
            answer: {
                sentence: "10年[ねん]ぐらい　勉強[べんきょう]しました。",
                meaning: "Tôi học khoảng 10 năm rồi.",
                audio: "lesson11_006"
            }
        },
        ]
    }
},
    
    {
        number: 3,
        pattern: "。。。だけ 。。。",
        detail: {
            meaning: "... Chỉ ...",
            explanations: [

            ],
            usages: [
                "✦ Là từ chỉ mức độ, đứng sau danh từ.",
            ],
            notes: [
                "✦ Xem ví dụ bên dưới",

            ],

           examples: [
            {
            sentence: "❶　家[うち]から　駅[えき]まで　5分[ふん]だけ　かかります。",
            meaning: "Từ nhà tôi đến ga mất chỉ 5 phút.",
            audio: "lesson11_009",
            
        },
        {
            sentence: "❷　一週間[いっしゅうかん]に　何日[なんにち]　休[やす]みますか。",
            meaning: "1 tuần nghỉ mấy ngày ?",
            audio: "lesson11_010",
             answer: 
                {
                    sentence: "一日[いちにち]だけです。",
                    meaning: "Chỉ có 1 ngày",
                    audio: "lesson11_011"
                }          
        },
        ]
    },
},
   
],

    practice: [
        {
            title: "Luyện tập 1",
            example: {
                image: "/assets/images/grammar_n5_lesson11/practice1.jpg",
                content: [
                "れい：りんごが　いくつ　ありますか。　→　<strong>３つ　あります。</strong>",   
                ]
            },

            questions: [
                {
                    prompt: "➊　いすが　いくつ　ありますか。→",
                    answers: [
                        "1つ　あります。",
                        "ひとつ　あります。"
                    ]
                },
                {
                    prompt: "➋　たまごが　いくつ　ありますか。→",
                    answers: [
                        "4つ　あります。",
                        "よっつ　あります。"
                    ]
                },
                {
                    prompt: "➌　かばんが　いくつ　ありますか。→",
                    answers: [
                        "2つ　あります。",
                        "ふたつ　あります。"
                    ]
                },
                {
                    prompt: "➍　くつが　いくつ　ありますか。→",
                    answers: [
                        "6つ　あります。",
                        "むっつ　あります。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                image: "/assets/images/grammar_n5_lesson11/practice2.jpg",
                content: [
                        "れい１：テレビが　何台[なんだい]　ありますか。　→　<strong>2台[だい]　あります。</strong>",
                        "れい２：シャツが　何枚[なんまい]　ありますか。　→　<strong>１枚[まい]　あります。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　CDが　何枚[なんまい]　ありますか。　→",
                    answers: [
                        "5枚　あります。",
                        "ごまい　あります。"
                    ]
                },
                {
                    prompt: "➋　パソコンが　何台[なんだい]　ありますか。　→",
                    answers: [
                        "3台　あります。",
                        "さんだい　あります。",
                        "3だい　あります。"
                    ]
                },
                {
                    prompt: "➌　手紙[てがみ]が　何枚[なんまい]　ありますか。　→",
                    answers: [
                        "2枚　あります。",
                        "にまい　あります。",
                        "2まい　あります。"
                    ]
                },
                {
                    prompt: "➍　車[くるま]が　何台[なんだい]　ありますか。　→",
                    answers: [
                        "5台　あります。",
                        "ごだい　あります。",
                        "5だい　あります。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                image: "/assets/images/grammar_n5_lesson11/practice3.jpg",
                content: 
                    "はがきを　何枚[なんまい]　買[か]いましたか。　→　<strong>10枚[まい]　買[か]いました。</strong>",   
                    },

            questions: [
                {
                    prompt: "➊　写真[しゃしん]を　何枚[なんまい]　撮[と]りましたか。　→",
                    answers: [
                        "5枚　撮りました。",
                        "5まい　とりました。"
                    ]
                },
                {
                    prompt: "➋　自転車[じてんしゃ]を　何台[なんだい]　買[か]いましたか。　→",
                    answers: [
                        "2台　買いました。",
                        "2だい　かいました。"
                    ]
                },
                {
                    prompt: "➌　みかんを　何個[なんこ]　食[た]べましたか。　→",
                    answers: [
                        "5個　食べました。",
                        "5こ　たべました。"
                    ]
                },
                {
                    prompt: "➍　荷物[にもつ]を　何個[なんこ]　送[おく]りましたか。　→",
                    answers: [
                        "9個　送りました。",
                        "9こ　おくりました。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 4",
            example: {
                image: "/assets/images/grammar_n5_lesson10/practice4.jpg",
                content: [
                "れい１：　はさみは　どこに　ありますか。→　<strong>箱[はこ]の　中[なか]に　あります。</strong>",   
                "れい２：　ミラ－さんは　どこに　いますか。→　<strong>事務所[じむしょ]に　います。</strong>",  
                ]
            },

            questions: [
                {
                    prompt: "➊　自転車[じてんしゃ]は　どこに　ありますか。→",
                    answers: [
                        "車[くるま]の　上[うえ]に　あります。",
                        "くるまの　うえに　あります。"
                    ]
                },
                {
                    prompt: "➋　男[おとこ]の子[こ]は　どこに　いますか。→",
                    answers: [
                        "ドアの　後[うし]ろに　います。",
                        "ドアの　うしろに　います。"
                    ]
                },
                {
                    prompt: "➌　写真[しゃしん]は　どこに　ありますか。→",
                    answers: [
                        "本[ほん]の　下[した]に　あります。",
                        "ほんの　したに　あります。"
                    ]
                },
                {
                    prompt: "➍　犬[いぬ]は　どこに　いますか。→",
                    answers: [
                        "男[おとこ]の子[こ]と　女[おんな]の子[こ]の　間[あいだ]に　います。",
                        "おとこのこと　おんなのこの　あいだに　います。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                image: "/assets/images/grammar_n5_lesson10/practice5.jpg",
                content: [
                "れい１：　バースの　乗[の]り場[ば]は　どこに　ありますか。→　<strong>トイレの　前[まえ]に　あります。</strong>",   
                "れい２：　パンダは　どこに　いますか。→　<strong>大[おお]きい木[き]の　下[した]に　います。</strong>",  
                ] 
            },
            questions: [
                {
                    prompt: "➊　レストランは　どこに　ありますか。→",
                    answers: [
                        "事務所の　隣に　あります。",
                        "じむしょの　となりに　あります。",
                        "事務所の　近くに　あります。",
                        "じむしょの　ちかくに　あります。"
                    ]
                },
                {
                    prompt: "➋　象[ぞう]は　どこに　いますか。→",
                    answers: [
                        "山の　後ろに　います。",
                        "やまの　うしろに　います。"
                    ]
                },
                {
                    prompt: "➌　自動販売機[じどうはんばいき]は　どこに　ありますか。→",
                    answers: [
                        "事務所の　近くに　あります。",
                        "じむしょの　ちかくに　あります。",
                         "事務所の　隣に　あります。",
                        "じむしょの　となりに　あります。"
                    ]
                },
                {
                    prompt: "➍　お土産屋[おみやげや]は　どこに　ありますか。→",
                    answers: [
                        "時計の　左に　あります。",
                        "とけいの　ひだりに　あります。",
                        "時計の　隣に　あります。",
                        "とけいの　となりに　あります。",
                        "時計の　近くに　あります。",
                        "とけいの　ちかくに　あります。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: 
                    "受付[うけつけ]に　ミラーさんが　（<strong>います</strong>）。",
            },

            questions: [
                {
                    prompt: "➊　ワイン売[う]り場[ば]は　地下[ちか]に（　　　）。→",
                    answers: [
                        "あります"
                    ]
                },
                {
                    prompt: "➋　犬[いぬ]は　どこに（　　　）か。→",
                    answers: [
                        "います"
                    ]
                },
                {
                    prompt: "➌　あそこに　小[ちい]さい　男[おとこ]の子[こ]が（　　　）。→",
                    answers: [
                        "います"
                    ]
                },
                {
                    prompt: "➍　冷蔵庫[れいぞうこ]の　中[なか]に　何[なに]も（　　　）。→",
                    answers: [
                        "ありません"
                    ]
                },
                {
                    prompt: "➎　事務所[じむしょ]に　だれも（　　　）。→",
                    answers: [
                        "いません"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: [
                    "いす（<strong>の</strong>）下[した]（<strong>に</strong>）猫[ねこ]（<strong>が</strong>）います。",
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