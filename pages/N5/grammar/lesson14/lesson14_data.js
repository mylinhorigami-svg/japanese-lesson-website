const grammarLessonData = {
  level: "N5",

  lessonNumber: 14,

  title: "Ngữ pháp N5 - Bài 14",

  previousLesson: {
    href: "../lesson13/lesson13.html",
    label: "Bài 13"
  },

  nextLesson: {
    href: "../lesson15/lesson15.html",
    label: "Bài 15"
  },

  patterns: [
    {
      number: 1,
      pattern: "Các nhóm động từ và cách chia động từ thể <strong>て</strong>",
      detail: {
        meaning: "Trong tiếng Nhật, động từ được chia thành 3 nhóm: ",
      explanations: [
            "🔹Nhóm 1: Động từ đứng trước đuôi <strong>ます</strong> là các chữ cái thuộc hàng “i”",
            "🔹Nhóm 2: Động từ đứng trước đuôi <strong>ます</strong> là các chữ cái thuộc hàng “e”",
            "🔹Nhóm 3: Động từ có cấu trúc <strong>N + します</strong> và động từ <strong>きます</strong> (đến)",
        ],
        usages: [
          "✦ Dùng để chia động từ thể <strong>て</strong> sử dụng cho các mẫu câu ở phần tiếp theo.",
          "✦ Xem kỹ bản chia động từ thể <strong>て</strong> bên dưới.",
        ],

        extraTable: [
            {
                title: "Động từ nhóm 1",
                headers: [
                    { text: "Động từ nguyên mẫu （Vます）", width: "40%" },
                    { text: "Động từ thể て （Vて）", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],

                rows: [
                        {
                            number: "働[はたら]きます",
                            numberReading: "働[はたら]いて",
                            age: "Làm việc",
                        },
                        {
                            number: "書[か]きます",
                            numberReading: "書[か]いて",
                            age: "Viết",
                        },
                        {
                            number: "聞[き]きます",
                            numberReading: "聞[き]いて",
                            age: "Nghe",
                        },
                        {
                            number: "",
                            numberReading: "",
                            age: "",
                        },
                        {
                            number: "泳[およ]ぎます",
                            numberReading: "泳[およ]いで",
                            age: "Bơi",
                        },
                        {
                            number: "急[いそ]ぎます",
                            numberReading: "急[いそ]いで",
                            age: "Vội vàng, khẩn trương",
                        },
                        {
                            number: "",
                            numberReading: "",
                            age: "",
                        },
                        {
                            number: "休[やす]みます",
                            numberReading: "休[やす]んで",
                            age: "Nghỉ, Nghỉ ngơi",
                        },
                        {
                            number: "飲[の]みます",
                            numberReading: "飲[の]んで",
                            age: "Uống",
                        },
                        {
                            number: "読[よ]みます",
                            numberReading: "読[よ]んで",
                            age: "Đọc",
                        },
                        {
                            number: "遊[あそ]びます",
                            numberReading: "遊[あそ]んで",
                            age: "Chơi",
                        },  
                        {
                            number: "死[し]にます",
                            numberReading: "死[し]んで",
                            age: "Chết",
                        },   
                        {
                            number: "",
                            numberReading: "",
                            age: "",
                        },
                        {
                        number: "吸[す]います",
                        numberReading: "吸[す]って",
                        age: "Hút (thuốc lá)",
                    },
                    {
                        number: "買[か]います",
                        numberReading: "買[か]って",
                        age: "Mua",
                    },
                    {
                        number: "会[あ]います",
                        numberReading: "会[あ]って",
                        age: "Gặp, gặp gỡ",
                    },
                    {
                        number: "もらいます",
                        numberReading: "もらって",
                        age: "Nhận",
                    },
                    {
                        number: "習[なら]います",
                        numberReading: "習[なら]って",
                        age: "Học (từ ai đó)",
                    },
                    {
                        number: "手伝[てつだ]います",
                        numberReading: "手伝[てつだ]って",
                        age: "Giúp đỡ",
                    },
                    {
                        number: "言[い]います",
                        numberReading: "言[い]って",
                        age: "Nói",
                    },
                    {
                        number: "終[お]わります",
                        numberReading: "終[お]わって",
                        age: "Xong, Kết thúc",
                    },
                    {
                        number: "帰[かえ]ります",
                        numberReading: "帰[かえ]って",
                        age: "Trở về",
                    },
                    {
                        number: "取[と]ります",
                        numberReading: "取[と]って",
                        age: "Lấy, cầm",
                    },
                    {
                        number: "切[き]ります",
                        numberReading: "切[き]って",
                        age: "Cắt",
                    },
                    {
                        number: "送[おく]ります",
                        numberReading: "送[おく]って",
                        age: "Gửi, đưa đi",
                    },
                    {
                        number: "分[わ]かります",
                        numberReading: "分[わ]かって",
                        age: "Hiểu, biết",
                    },
                    {
                        number: "あります",
                        numberReading: "あって",
                        age: "Có (đồ vật, sự vật)",
                    },
                    {
                        number: "かかります",
                        numberReading: "かかって",
                        age: "Mất, tốn (thời gian, tiền bạc)",
                    },
                    {
                        number: "入[はい]ります",
                        numberReading: "入[はい]って",
                        age: "Vào",
                    },
                    {
                        number: "降[ふ]ります",
                        numberReading: "降[ふ]って",
                        age: "Rơi (mưa, tuyết)",
                    },
                    {
                        number: "曲[ま]がります",
                        numberReading: "曲[ま]がって",
                        age: "Rẽ, quẹo",
                    },
                    {
                        number: "待[ま]ちます",
                        numberReading: "待[ま]って",
                        age: "Chờ, đợi",
                    },
                    {
                        number: "持[も]ちます",
                        numberReading: "持[も]って",
                        age: "Cầm, mang",
                    },
                    {
                        number: "<strong>** 行[い]きます</strong>",
                        numberReading: "<strong>行[い]って</strong>",
                        age: "<strong>Đi</strong>",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "貸[か]します",
                        numberReading: "貸[か]して",
                        age: "Cho mượn",
                    },
                    {
                        number: "出[だ]します",
                        numberReading: "出[だ]して",
                        age: "Đưa ra, nộp",
                    },
                    {
                        number: "話[はな]します",
                        numberReading: "話[はな]して",
                        age: "Nói chuyện",
                    },
                    {
                        number: "消[け]します",
                        numberReading: "消[け]して",
                        age: "Tắt, xóa",
                    },
                ],
            },

            {
                title: "Động từ nhóm 2",
                headers: [
                    { text: "Động từ nguyên mẫu （Vます）", width: "40%" },
                    { text: "Động từ thể て （Vて）", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],

                rows: [
                        
                    {
                        number: "寝[ね]ます",
                        numberReading: "寝[ね]て",
                        age: "Ngủ, đi ngủ",
                    },
                    {
                        number: "始[はじ]めます",
                        numberReading: "始[はじ]めて",
                        age: "Bắt đầu",
                    },
                    {
                        number: "食[た]べます",
                        numberReading: "食[た]べて",
                        age: "Ăn",
                    },
                    {
                        number: "見[み]ます",
                        numberReading: "見[み]て",
                        age: "Xem, nhìn",
                    },
                    {
                        number: "かけます",
                        numberReading: "かけて",
                        age: "Gọi (điện thoại)",
                    },
                    {
                        number: "あげます",
                        numberReading: "あげて",
                        age: "Cho, tặng",
                    },
                    {
                        number: "教[おし]えます",
                        numberReading: "教[おし]えて",
                        age: "Dạy, chỉ bảo",
                    },
                    
                    
                    {
                        number: "迎[むか]えます",
                        numberReading: "迎[むか]えて",
                        age: "Đón",
                    },
                    {
                        number: "変[か]えます",
                        numberReading: "変[か]えて",
                        age: "Thay đổi",
                    },
                    {
                        number: "疲[つか]れます",
                        numberReading: "疲[つか]れて",
                        age: "Mệt mỏi",
                    },
                    {
                        number: "出[で]ます",
                        numberReading: "出[で]て",
                        age: "Ra, rời khỏi",
                    },
                    {
                        number: "覚[おぼ]えます",
                        numberReading: "覚[おぼ]えて",
                        age: "Ghi nhớ, học thuộc",
                    },
                    {
                        number: "見[み]せます",
                        numberReading: "見[み]せて",
                        age: "Cho xem",
                    },
                    {
                        number: "つけます",
                        numberReading: "つけて",
                        age: "Bật (điện, thiết bị)",
                    },
                    {
                        number: "開[あ]けます",
                        numberReading: "開[あ]けて",
                        age: "Mở",
                    },
                    {
                        number: "閉[し]めます",
                        numberReading: "閉[し]めて",
                        age: "Đóng",
                    },
                    {
                        number: "止[と]めます",
                        numberReading: "止[と]めて",
                        age: "Dừng, đỗ (xe)",
                    },  
                    {
                        number: "<strong>** 起[お]きます</strong>",
                        numberReading: "<strong>** 起[お]きて</strong>",
                        age: "<strong>Thức dậy</strong>",
                    },
                    {
                        number: "<strong>** います</strong>",
                        numberReading: "<strong>** いて</strong>",
                        age: "<strong>Có, ở (người, động vật)</strong>",
                    },
                    {
                        number: "<strong>** 見[み]ます</strong>",
                        numberReading: "<strong>** 見[み]て</strong>",
                        age: "<strong>Xem, nhìn</strong>",
                    },
                    {
                        number: "<strong>** 借[か]ります</strong>",
                        numberReading: "<strong>** 借[か]りて</strong>",
                        age: "<strong>Mượn, vay</strong>",
                    },   
                ],
            },

            {
                title: "Động từ nhóm 3",
                headers: [
                    { text: "Động từ nguyên mẫu （Vます）", width: "40%" },
                    { text: "Động từ thể て （Vて）", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],

                rows: [
                        {
                        number: "来[き]ます",
                        numberReading: "来[き]て",
                        age: "Đến",
                    },
                    {
                        number: "します",
                        numberReading: "して",
                        age: "Làm, chơi (thể thao, trò chơi)",
                    },
                    {
                        number: "勉強[べんきょう]します",
                        numberReading: "勉強[べんきょう]して",
                        age: "Học",
                    },
                    {
                        number: "修理[しゅうり]します",
                        numberReading: "修理[しゅうり]して",
                        age: "Sửa chữa",
                    },
                    {
                        number: "結婚[けっこん]します",
                        numberReading: "結婚[けっこん]して",
                        age: "Kết hôn",
                    },
                    {
                        number: "買[か]い物[もの]します",
                        numberReading: "買[か]い物[もの]して",
                        age: "Mua sắm",
                    },
                    {
                        number: "食事[しょくじ]します",
                        numberReading: "食事[しょくじ]して",
                        age: "Ăn uống, dùng bữa",
                    },
                    {
                        number: "散歩[さんぽ]します",
                        numberReading: "散歩[さんぽ]して",
                        age: "Đi dạo",
                    },
                    {
                        number: "見物[けんぶつ]します",
                        numberReading: "見物[けんぶつ]して",
                        age: "Tham quan, ngắm cảnh",
                    },
                    {
                        number: "見学[けんがく]します",
                        numberReading: "見学[けんがく]して",
                        age: "Tham quan học tập",
                    },
                    {
                        number: "コピーします",
                        numberReading: "コピーして",
                        age: "Sao chép, photocopy",
                    },
                         
                ],
            },
        ],
                
        examples: [
        {
            sentence: "Xem cách sử dụng động từ thể <strong>て</strong> trong các phần tiếp theo.",
        },
        
        ]
    }
    },

    {
      number: 2,
      pattern: "Vて　ください。",
      detail: {
        meaning: "Hãy làm V, Vui lòng làm V.",
        usages: [
          "✦ Sử dụng để yêu cầu, nhờ vả ai đó làm gì đó.",
        ],

        examples: [
        {
            sentence: "❶　ちょっと　待[ま]って　ください。",
            meaning: "Xin hãy đợi một chút",
            audio: "lesson14_001",
        },
        {
            sentence: "❷　ボールペンで　名前[なまえ]を　書[か]いて　ください。",
            meaning: "Xin hãy viết tên bằng bút bi.",
            audio: "lesson14_002",
            answer: 
                {
                    sentence: "はい、分[わ]かりました。",
                    meaning: "Vâng, tôi hiểu rồi.",
                    audio: "lesson14_003"
                }
        },
        {
            sentence: "➌　すみませんが、この漢字の　読み方を　教[おし]えてください。",
            meaning: "Xin lỗi ... nhưng, vui lòng chỉ cho tôi cách đọc chữ kanji này.",
            audio: "lesson14_004",
        },
        ]
    }
},
    
    {
        number: 3,
        pattern: "Vて　います。",
        detail: {
            meaning: "Đang làm V.",
            usages: [
                "✦ Dùng để diễn tả một hành động đang diễn ra tại thời điểm nói.",
            ],

           examples: [
            {
            sentence: "❶　ミラーさんは　今[いま]　電話[でんわ]を　かけています。",
            meaning: "Anh Mira bây giờ đang gọi điện.",
            audio: "lesson14_005",
            },
            {
            sentence: "❷　佐藤[さとう]さんは　今[いま]　どこ　ですか。",
            meaning: "Bây giờ anh Sato đang ở đâu?",
            audio: "lesson14_006",
             answer: 
                {
                    sentence: "会議室[かいぎしつ]で　松本[まつもと]さんと　話[はな]しています。",
                    meaning: "Anh Sato đang nói chuyện với Matsumoto trong phòng họp.",
                    audio: "lesson14_007"
                }          
        },
         {
            sentence: "❷　今[いま]、雨[あめ]が　降[ふ]っていますか。",
            meaning: "Bây giờ trời đang mua à ?",
            audio: "lesson14_008",
             answer: 
                {
                    sentence: "いいえ、降[ふ]っていませんよ。",
                    meaning: "Không, không có mưa đâu.",
                    audio: "lesson14_009"
                }          
        },
        ]
    },  
},

{
      number: 4,
      pattern: "V<span class='remove-masu'>ます</span>　ましょうか。",
      detail: {
        meaning: "Tôi làm V cho bạn nhé?",
        usages: [
          "✦ Sử dụng để ngỏ lời làm gì đó giúp người khác.",
        ],

        examples: [
        {
            sentence: "❶　暑[あつ]いですね。窓[まど]を　開[あ]けましょうか。",
            meaning: "Nóng nhỉ, tôi mở cửa sổ nhé!",
            audio: "lesson14_010",
            answer: 
                {
                    sentence: "。。。すみません、お願[ねが]いします。",
                    meaning: "Cảm ơn, nhờ bạn nhé!",
                    audio: "lesson14_011"
                }     
        },
        {
            sentence: "❷　駅[えき]まで　迎[むか]えに　行[い]きましょうか。",
            meaning: "Tôi đến ga đón bạn nhé!",
            audio: "lesson14_012",
            answer: 
                {
                    sentence: "タクシーで　行[い]きますから、けっこうです。",
                    meaning: "Vì tôi đi taxi nên không cần đâu.",
                    audio: "lesson14_013"
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
                image: "/assets/images/grammar_n5_lesson14/practice1.jpg",
                content: [
                "れい：パスポートを　見[み]せてください。",   
                ]
            },

            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "荷物[にもつ]を　開[あ]けてください。",
                        "にもつを　あけてください。",
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "コピーしてください。",
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "まっすぐ　行[い]ってください。",
                        "まっすぐ　いってください。",
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "レポートを　出[だ]してください。",
                        "レポートを　だしてください。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "ちょっと　手伝[てつだ]います。　→　<strong>ちょっと　手伝[てつだ]って　ください。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　エアコンを　つけます。→",
                    answers: [
                        "エアコンを　つけて　ください。",
                    ]
                },
                {
                    prompt: "➋　ドアを　閉[し]めます。→",
                    answers: [
                        "ドアを　閉[し]めて　ください。",
                        "ドアを　しめて　ください。",
                    ]
                },
                {
                    prompt: "➌　写真[しゃしん]を　撮[と]ります。→",
                    answers: [
                        "写真[しゃしん]を　撮[と]って　ください。",
                        "しゃしんを　とって　ください。",
                    ]
                },
                {
                    prompt: "➍　もう　少[すこ]し　ゆっくり　話[はな]します。→",
                    answers: [
                        "もう　少[すこ]し　ゆっくり　話[はな]して　ください。",
                        "もう　すこし　ゆっくり　はなして　ください。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                image: "/assets/images/grammar_n5_lesson14/practice3.jpg",
                content: [
                "れい：どうぞ　飲[の]んでください",   
                ]
                    },

            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "どうぞ　入[はい]ってください。",
                        "どうぞ　はいってください。",
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "どうぞ　座[すわ]ってください。",
                        "どうぞ　すわってください。",
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "どうぞ　食[た]べてください。",
                        "どうぞ　たべてください。",
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "どうぞ　使[つか]ってください。",
                        "どうぞ　つかってください。",
                    ]
                },
            ]

        },

        {
            title: "Luyện tập 4",
            example: {
                content: [
                "電気[でんき]を　消[け]します。　→　<strong>電気[でんき]を　消[け]しましょうか。</strong>",   
                ]
            },

            questions: [
                {
                    prompt: "➊　地図[ちず]を　書[か]きます。　→",
                    answers: [
                        "地図を　書きましょうか。",
                        "ちずを　かきましょうか。"
                    ]
                },
                {
                    prompt: "➋　荷物[にもつ]を　持[も]ちます。　→",
                    answers: [
                        "荷物[にもつ]を　持[も]ちましょうか。",
                        "にもつを　もちましょうか。",
                    ]
                },
                {
                    prompt: "➌　エアコンを　つけます。　→",
                    answers: [
                        "エアコンを　つけましょうか。",
                    ]
                },
                {
                    prompt: "➍　駅[えき]まで　迎[むか]えに　行[い]きます。　→",
                    answers: [
                        "駅[えき]まで　迎[むか]えに　行[い]きましょうか。",
                        "えきまで　むかえに　いきましょうか。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                "電気[でんき]を　消[け]しましょうか。（ええ）　→　<strong>ええ、お願[ねが]いします。</strong>",   
                "電気[でんき]を　消[け]しましょうか。（いいえ）　→　<strong>いいえ、けっこうです。</strong>",   
                ] 
            },
            questions: [
                {
                    prompt: "➊　地図[ちず]を　書[か]きましょうか。（ええ）　→",
                    answers: [
                        "ええ、お願[ねが]いします。",
                        "ええ、おねがいします。"
                    ]
                },
                {
                    prompt: "➋　荷物[にもつ]を　持[も]ちましょうか。（いいえ）　→",
                    answers: [
                        "いいえ、結構[けっこう]です。",
                        "いいえ、けっこうです。"
                    ]
                },
                {
                    prompt: "➌　エアコンを　つけましょうか。（ええ）　→",
                    answers: [
                        "ええ、お願[ねが]いします。",
                        "ええ、おねがいします。"
                    ]
                },
                {
                    prompt: "➍　駅[えき]まで　迎[むか]えに　行[い]きましょうか。（いいえ）　→",
                    answers: [
                        "いいえ、結構[けっこう]です。",
                        "いいえ、けっこうです。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: 
                    "窓[もど]を　開[あ]けましょうか。→　<strong>ええ、少[すこ]し　開[あ]けてください。</strong>",
            },

            questions: [
                 {
                    prompt: "➊　これを　コピーしましょうか。（5枚[まい]）→",
                    answers: [
                        "ええ、5枚[まい]を　コピーしてください。",
                        "ええ、5まいを　コピーしてください。"
                    ]
                },
                {
                    prompt: "➋　レポートを　送[おく]りましょうか。（すぐ）→",
                    answers: [
                        "ええ、すぐ　送[おく]ってください。",
                        "ええ、すぐ　おくってください。"
                    ]
                },
                {
                    prompt: "➌　タクシーを　呼[よ]びましょうか。（2台[だい]）→",
                    answers: [
                        "ええ、2台[だい]を　呼[よ]んでください。",
                        "ええ、２だいを　よんでください。"
                    ]
                },
                {
                    prompt: "➍　あしたも　来[き]ましょうか。（10時[じ]）→",
                    answers: [
                        "ええ、10時[じ]に　来[き]てください。",
                        "ええ、10じに　きてください。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                image: "/assets/images/grammar_n5_lesson14/practice7.jpg",
                content: [
                    "れい：何[なに]を　していますか。→　<strong>レポートを　書[か]いています。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　→",
                    answers: [
                        "電話[でんわ]を　かけています。",
                        "でんわを　かけています。"
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "コーヒーを　飲[の]んでいます。",
                        "コーヒーを　のんでいます。"
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "ダンスを　しています。",
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "バスを　待[ま]っています。",
                        "バスを　まっています。"
                    ]
                }
            ]
        },
        {
            title: "Luyện tập 8",
            example: {
                image: "/assets/images/grammar_n5_lesson14/practice8.jpg",
                content: [
                    "例[れい]：カリナさんは　何[なに]を　かいて　いますか。→　<strong>花[はな]を　かいて　います。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　山田[やまだ]さんは　何[なに]を　して　いますか。→",
                    answers: [
                        "子供[こども]と　遊[あそ]んで　います。",
                        "こどもと　あそんで　います。"
                    ]
                },
                {
                    prompt: "➋　サントスさんは　どこで　寝[ね]て　いますか。→",
                    answers: [
                        "木[き]の　下[した]で　寝[ね]て　います。",
                        "きの　したで　ねて　います。"
                    ]
                },
                {
                    prompt: "➌　ワンさんは　何[なに]を　読[よ]んで　いますか。→",
                    answers: [
                        "新聞[しんぶん]を　読[よ]んで　います。",
                        "しんぶんを　よんで　います。"
                    ]
                },
                {
                    prompt: "➍　ミラーさんは　だれと　話[はな]して　いますか。→",
                    answers: [
                        "シュミットさんと　話[はな]して　います。",
                        "シュミットさんと　はなして　います。"
                    ]
                },
                {
                    prompt: "➎　シュミットさんは　釣[つ]りを　して　いますか。→",
                    answers: [
                        "いいえ、釣[つ]りを　して　いません。",
                        "いいえ、つりを　して　いません。"
                    ]
                },
                {
                    prompt: "➏　今[いま]　雨[あめ]が　降[ふ]って　いますか。→",
                    answers: [
                        "いいえ、降[ふ]って　いません。",
                        "いいえ、ふって　いません。"
                    ]
                }
            ]
        },
        {
            title: "Luyện tập 9",
            example: {
                image: "/assets/images/grammar_n5_lesson14/practice9.jpg",
                content: [
                    "例1：すみませんが、ボールペンを（ <strong>貸[か]して</strong> ）ください。",
                    "例2：寒[さむ]いですね。窓[まど]を（ <strong>閉[し]め</strong> ）ましょうか。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　時間[じかん]が　ありませんから、（　　　）ください。",
                    answers: [
                        "急[いそ]いで",
                        "いそいで"
                    ]
                },
                {
                    prompt: "➋　今[いま]　忙[いそが]しいですから、あとで（　　　）ください。",
                    answers: [
                        "来[き]て",
                        "きて"
                    ]
                },
                {
                    prompt: "➌　荷物[にもつ]が　多[おお]いですね。1つ（　　　）ましょうか。→　\n……すみません。お願[ねが]いします。",
                    answers: [
                        "持[も]ち",
                        "もち"
                    ]
                },
                {
                    prompt: "➍　IMCに　この　レポートを（　　　）ましょうか。→　\n……ええ、すぐ（　　　）ください。",
                    answers: [
                        "送[おく]り、送[おく]って",
                        "おくり、おくって"
                    ]
                }
            ]
        },
        {
            title: "Luyện tập 10",
            example: {
                image: "/assets/images/grammar_n5_lesson14/practice10.jpg",
                content: [
                    "山田[やまだ]さんは　今[いま]　昼[ひる]ごはんを（　<strong>食[た]べて</strong>　）います。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　テレーザちゃんは　どこですか。\n……2階[かい]です。太郎[たろう]ちゃんと（　　　）いますよ。",
                    answers: [
                        "遊[あそ]んで",
                        "あそんで"
                    ]
                },
                {
                    prompt: "➋　雨[あめ]が（　　　）いますね。タクシーを　呼[よ]びましょうか。",
                    answers: [
                        "降[ふ]って",
                        "ふって"
                    ]
                },
                {
                    prompt: "➌　サントスさんは　今[いま]　何[なに]を（　　　）いますか。\n……プールで（　　　）います。→",
                    answers: [
                        "して、泳[およ]いで",
                        "して、およいで"
                    ]
                }
                
            ]
        },
    ]
};