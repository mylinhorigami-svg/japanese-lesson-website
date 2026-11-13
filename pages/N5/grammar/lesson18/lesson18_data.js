const grammarLessonData = {
  level: "N5",

  lessonNumber: 18,

  title: "Ngữ pháp N5 - Bài 18",

  previousLesson: {
    href: "../lesson17/lesson17.html",
    label: "Bài 17"
  },

  nextLesson: {
    href: "../lesson19/lesson19.html",
    label: "Bài 19"
  },

  patterns: [
    {
      number: 1,
      pattern: "Vる",
      detail: {
        meaning: "Vる hay còn gọi là động từ thể từ điển, là động từ ở dạng ngắn của Vます.",
      explanations: [
            "🔹<strong>Nhóm 1</strong>: Bỏ <strong>ます</strong> chuyển hàng “i” thành hàng “u”",
            "🔹<strong>Nhóm 2</strong>: Bỏ <strong>ます</strong> + <strong>る</strong>",
            "🔹<strong>Nhóm 3</strong>: <strong>N + します</strong> thành <strong>N + する</strong> \n<strong>きます</strong> (đến) → <strong>くる</strong>",
        ],
        usages: [
          "✦ Sử dụng cho các mẫu câu ở phần tiếp theo.",
          "✦ Xem kỹ bản chia động từ thể từ điển bên dưới.",
        ],

        extraTable: [
            {
                title: "Động từ nhóm 1",
                headers: [
                    { text: "Động từ nguyên mẫu （Vます）", width: "40%" },
                    { text: "Động từ thể từ điển （Vる）", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],
                rows: [
                    {
                        number: "行[い]きます",
                        numberReading: "行[い]く",
                        age: "Đi",
                    },
                    {
                        number: "働[はたら]きます",
                        numberReading: "働[はたら]く",
                        age: "Làm việc",
                    },
                    {
                        number: "書[か]きます",
                        numberReading: "書[か]く",
                        age: "Viết",
                    },
                    {
                        number: "聞[き]きます",
                        numberReading: "聞[き]く",
                        age: "Nghe",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "泳[およ]ぎます",
                        numberReading: "泳[およ]ぐ",
                        age: "Bơi",
                    },
                    {
                        number: "急[いそ]ぎます",
                        numberReading: "急[いそ]ぐ",
                        age: "Vội vàng, khẩn trương",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "休[やす]みます",
                        numberReading: "休[やす]む",
                        age: "Nghỉ, Nghỉ ngơi",
                    },
                    {
                        number: "飲[の]みます",
                        numberReading: "飲[の]む",
                        age: "Uống",
                    },
                    {
                        number: "読[よ]みます",
                        numberReading: "読[よ]む",
                        age: "Đọc",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "遊[あそ]びます",
                        numberReading: "遊[あそ]ぶ",
                        age: "Chơi",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "吸[す]います",
                        numberReading: "吸[す]う",
                        age: "Hút (thuốc lá)",
                    },
                    {
                        number: "買[か]います",
                        numberReading: "買[か]う",
                        age: "Mua",
                    },
                    {
                        number: "会[あ]います",
                        numberReading: "会[あ]う",
                        age: "Gặp, gặp gỡ",
                    },
                    {
                        number: "もらいます",
                        numberReading: "もらう",
                        age: "Nhận",
                    },
                    {
                        number: "習[なら]います",
                        numberReading: "習[なら]う",
                        age: "Học (từ ai đó)",
                    },
                    {
                        number: "手伝[てつだ]います",
                        numberReading: "手伝[てつだ]う",
                        age: "Giúp đỡ",
                    },
                    {
                        number: "言[い]います",
                        numberReading: "言[い]う",
                        age: "Nói",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "終[お]わります",
                        numberReading: "終[お]わる",
                        age: "Xong, Kết thúc",
                    },
                    {
                        number: "帰[かえ]ります",
                        numberReading: "帰[かえ]る",
                        age: "Trở về",
                    },
                    {
                        number: "取[と]ります",
                        numberReading: "取[と]る",
                        age: "Lấy, cầm",
                    },
                    {
                        number: "切[き]ります",
                        numberReading: "切[き]る",
                        age: "Cắt",
                    },
                    {
                        number: "送[おく]ります",
                        numberReading: "送[おく]る",
                        age: "Gửi, đưa đi",
                    },
                    {
                        number: "分[わ]かります",
                        numberReading: "分[わ]かる",
                        age: "Hiểu, biết",
                    },
                    {
                        number: "あります",
                        numberReading: "ある",
                        age: "Có (đồ vật, sự vật)",
                    },
                    {
                        number: "かかります",
                        numberReading: "かかる",
                        age: "Mất, tốn (thời gian, tiền bạc)",
                    },
                    {
                        number: "入[はい]ります",
                        numberReading: "入[はい]る",
                        age: "Vào",
                    },
                    {
                        number: "降[ふ]ります",
                        numberReading: "降[ふ]る",
                        age: "Rơi (mưa, tuyết)",
                    },
                    {
                        number: "曲[ま]がります",
                        numberReading: "曲[ま]がる",
                        age: "Rẽ, quẹo",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "待[ま]ちます",
                        numberReading: "待[ま]つ",
                        age: "Chờ, đợi",
                    },
                    {
                        number: "持[も]ちます",
                        numberReading: "持[も]つ",
                        age: "Cầm, mang",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "貸[か]します",
                        numberReading: "貸[か]す",
                        age: "Cho mượn",
                    },
                    {
                        number: "出[だ]します",
                        numberReading: "出[だ]す",
                        age: "Đưa ra, nộp",
                    },
                    {
                        number: "話[はな]します",
                        numberReading: "話[はな]す",
                        age: "Nói chuyện",
                    },
                    {
                        number: "消[け]します",
                        numberReading: "消[け]す",
                        age: "Tắt, xóa",
                    },
                ],
            },

            {
                title: "Động từ nhóm 2",
                headers: [
                    { text: "Động từ nguyên mẫu （Vます）", width: "40%" },
                    { text: "Động từ thể từ điển （Vる）", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],

                rows: [
                    {
                        number: "寝[ね]ます",
                        numberReading: "寝[ね]る",
                        age: "Ngủ, đi ngủ",
                    },
                    {
                        number: "始[はじ]めます",
                        numberReading: "始[はじ]める",
                        age: "Bắt đầu",
                    },
                    {
                        number: "食[た]べます",
                        numberReading: "食[た]べる",
                        age: "Ăn",
                    },
                    {
                        number: "見[み]ます",
                        numberReading: "見[み]る",
                        age: "Xem, nhìn",
                    },
                    {
                        number: "かけます",
                        numberReading: "かける",
                        age: "Gọi (điện thoại)",
                    },
                    {
                        number: "あげます",
                        numberReading: "あげる",
                        age: "Cho, tặng",
                    },
                    {
                        number: "教[おし]えます",
                        numberReading: "教[おし]える",
                        age: "Dạy, chỉ bảo",
                    },
                    {
                        number: "迎[むか]えます",
                        numberReading: "迎[むか]える",
                        age: "Đón",
                    },
                    {
                        number: "変[か]えます",
                        numberReading: "変[か]える",
                        age: "Thay đổi",
                    },
                    {
                        number: "疲[つか]れます",
                        numberReading: "疲[つか]れる",
                        age: "Mệt mỏi",
                    },
                    {
                        number: "出[で]ます",
                        numberReading: "出[で]る",
                        age: "Ra, rời khỏi",
                    },
                    {
                        number: "覚[おぼ]えます",
                        numberReading: "覚[おぼ]える",
                        age: "Ghi nhớ, học thuộc",
                    },
                    {
                        number: "見[み]せます",
                        numberReading: "見[み]せる",
                        age: "Cho xem",
                    },
                    {
                        number: "つけます",
                        numberReading: "つける",
                        age: "Bật (điện, thiết bị)",
                    },
                    {
                        number: "開[あ]けます",
                        numberReading: "開[あ]ける",
                        age: "Mở",
                    },
                    {
                        number: "閉[し]めます",
                        numberReading: "閉[し]める",
                        age: "Đóng",
                    },
                    {
                        number: "止[と]めます",
                        numberReading: "止[と]める",
                        age: "Dừng, đỗ (xe)",
                    },
                    {
                        number: "起[お]きます",
                        numberReading: "起[お]きる",
                        age: "Thức dậy",
                    },
                    {
                        number: "います",
                        numberReading: "いる",
                        age: "Có, ở (người, động vật)",
                    },
                    {
                        number: "見[み]ます",
                        numberReading: "見[み]る",
                        age: "Xem, nhìn",
                    },
                    {
                        number: "借[か]ります",
                        numberReading: "借[か]りる",
                        age: "Mượn, vay",
                    },
                ],
            },

            {
                title: "Động từ nhóm 3",
                headers: [
                    { text: "Động từ nguyên mẫu （Vます）", width: "40%" },
                    { text: "Động từ thể từ điển （Vる）", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],

                rows: [
                    {
                        number: "来[き]ます",
                        numberReading: "来[く]る",
                        age: "Đến",
                    },
                    {
                        number: "",
                        numberReading: "",
                        age: "",
                    },
                    {
                        number: "します",
                        numberReading: "する",
                        age: "Làm, chơi (thể thao, trò chơi)",
                    },
                    {
                        number: "勉強[べんきょう]します",
                        numberReading: "勉強[べんきょう]する",
                        age: "Học",
                    },
                    {
                        number: "修理[しゅうり]します",
                        numberReading: "修理[しゅうり]する",
                        age: "Sửa chữa",
                    },
                    {
                        number: "結婚[けっこん]します",
                        numberReading: "結婚[けっこん]する",
                        age: "Kết hôn",
                    },
                    {
                        number: "買[か]い物[もの]します",
                        numberReading: "買[か]い物[もの]する",
                        age: "Mua sắm",
                    },
                    {
                        number: "食事[しょくじ]します",
                        numberReading: "食事[しょくじ]する",
                        age: "Ăn uống, dùng bữa",
                    },
                    {
                        number: "散歩[さんぽ]します",
                        numberReading: "散歩[さんぽ]する",
                        age: "Đi dạo",
                    },
                    {
                        number: "見物[けんぶつ]します",
                        numberReading: "見物[けんぶつ]する",
                        age: "Tham quan, ngắm cảnh",
                    },
                    {
                        number: "見学[けんがく]します",
                        numberReading: "見学[けんがく]する",
                        age: "Tham quan học tập",
                    },
                    {
                        number: "コピーします",
                        numberReading: "コピーする",
                        age: "Sao chép, photocopy",
                    },
                ],
            },
        ],
                
        examples: [
        {
            sentence: "Xem cách sử dụng động từ thể từ điển trong các phần sau.",
        },
        
        ]
    }
},
{
        number: 2,
        pattern: "N／Vること　が　できます。",
        detail: {
            meaning: "Có thể làm V / biết (hiểu) N",
            usages: [
                "✦ Cách nói về khả năng, năng lực, có thể làm gì đó.",
                "✦ N là danh từ có tính tác động (các danh từ ghép được với します)."
            ],

           examples: [
            {
            sentence: "①　車[くるま]の運転[うんてん]が　できますか。",
            meaning: "Bạn có thể lái xe ô tô không ?",
            audio: "lesson18_001",   
            answer: 
                {
                    sentence: "はい、できます。",
                    meaning: "Vâng, tôi có thể.",
                    audio: "lesson18_002"
                }                    
            },
            {
            sentence: "②　日本語[にほんご]が　できますか。",
            meaning: "Bạn có thể nói tiếng Nhật không ?",
            audio: "lesson18_003",   
            answer: 
                {
                    sentence: "はい、できます。",
                    meaning: "Vâng, tôi có thể.",
                    audio: "lesson18_004"
                }                    
            },
            {
            sentence: "③　マリアさんは　自転車[じてんしゃ]に　乗[の]ることが　できますか。",
            meaning: "Maria có thể đạp xe không?",
            audio: "lesson18_005",  
            answer: 
                {
                    sentence: "いいえ、できません。",
                    meaning: "Không, cô ấy không thể.",                    
                    audio: "lesson18_006"
                }                  
            },
            {
            sentence: "④　カードで　払[はら]うことが　できますか。",
            meaning: "Có thể thanh toán bằng thẻ không?",
            audio: "lesson18_007",  
            answer: 
                {
                    sentence: "すみませんが、現金[げんきん]で　おねがいします。",
                    meaning: "Xin lỗi, vui lòng thanh toán bằng tiền mặt.",
                    audio: "lesson18_008"
                }                  
            },
        ]
    },  
},

    {
        number: 3,
        pattern: "私[わたし]の趣味[しゅみ]は　N／Vること　です。",
        detail: {
            meaning: "Sở thích của tôi là N / làm V.",
            usages: [
                "✦ Cách nói về sở thích.",
            ],

           examples: [
            {
            sentence: "❶　私[わたし]の趣味[しゅみ]は　スポーツです。",
            meaning: "Sở thích của tôi là thể thao.",
            audio: "lesson18_009",
            
            },
            {
            sentence: "❷　趣味[しゅみ]は　何[なん]ですか。",
            meaning: "Sở thích của bạn là gì?",
            audio: "lesson18_010", 
            answer: 
                {
                    sentence: "古[ふる]い時計[とけい]を　集[あつ]めることです。",
                    meaning: "Sở thích của tôi là sưu tập đồng hồ cổ.",
                    audio: "lesson18_011"
                }        
        },
         
        ]
    },  
},

{
      number: 4,
      pattern: "Vる／Nの／thời gian (có số) + まえに、V2。",
      
      detail: {
        meaning: "Trước khi làm V / trước khi N / trước thời gian (có số) thì làm V2.",
        usages: [
          "✦ Cách diễn tả hành động thứ 2 diễn ra trước hành động thứ 1.",
          "✦ Thì của câu được chia ở V2.",
        ],

        examples: [
        {
            sentence: "❶　日本[にほん]の子供[こども]は　学校[がっこう]を　入[はい]る前[まえ]に、ひらがなを　覚[おぼ]えなければなりませんか。",
            meaning: "Trẻ em Nhật trước khi vào trường học có phải học thuộc bảng chữ cái Hiragana không?",
            audio: "lesson18_012",
            answer: 
                {
                    sentence: "覚[おぼ]えなくてもいいです。",
                    meaning: "Không, không cần học thuộc cũng được.",
                    audio: "lesson18_013"
                }   
              
        },
        {
            sentence: "❷　食事[しょくじ]の前[まえ]に、この薬[くすり]を　飲[の]んでください。",
            meaning: "Hãy uống thuốc này trước khi ăn.",
            audio: "lesson18_014",
            answer: 
                {
                    sentence: "...はい、分[わ]かりました。",
                    meaning: "Vâng, tôi hiểu rồi.",
                    audio: "lesson18_015"
                }   
        },
        {
            sentence: "❷　いつ　結婚[けっこん]しましたか。",
            meaning: "Bạn kết hôn khi nào?",
            audio: "lesson18_016",
            answer: 
                {
                    sentence: "3年前[ねんまえ]に　結婚[けっこん]しました。",
                    meaning: "Tôi kết hôn từ 3 năm trước.",
                    audio: "lesson18_017"
                }   
        },
        
        ]
    }
},
{
      number: 5,
      pattern: "なかなか　Vません。",
      
      detail: {
        meaning: "Mãi mà không ... / mãi mà không thể ...",
        usages: [
          "✦ Dùng để diễn tả sự việc không xảy ra như mong muốn, hoặc không thể thực hiện được.", 
        ],

        examples: [
        {
            sentence: "❶　日本[にほん]では　なかなか　馬[うま]を　見[み]ることが　できません。",
            meaning: "Ở Nhật Bản, mãi mà không thể thấy con ngựa.",
            audio: "lesson18_018",
              
        },
        {
            sentence: "❷　バスが　なかなか　来[き]ません。",
            meaning: "Xe buýt mãi mà không đến.",
            audio: "lesson18_019",
        },
        
        ]
    }
},
{
      number: 6,
      pattern: "ぜひ",
      
      detail: {
        meaning: "Nhất định …",
        usages: [
          "✦ Dùng để biểu thị sự hi vọng hay yêu cầu.", 
          "✦ Thường đi với các dạng câu có ほしいです。Ｖたいです。Ｖてください。",
        ],

        examples: [
        {
            sentence: "❶　ぜひ　日本[にほん]へ　行きたいです。",
            meaning: "Tôi nhất định sẽ đi Nhật Bản. (Tôi rất muốn đi Nhật Bản.)",
            audio: "lesson18_020",
              
        },
        {
            sentence: "❷　ぜひ　遊[あそ]びに　来[き]てください。",
            meaning: "Nhất định hãy đến chơi nhé.",
            audio: "lesson18_021",
        },
        
        ]
    }
},
   
],

    practice: [
        {
        title: "Luyện tập 1",
         example: {
        content: "テニス　→ <strong>ミラーさんは　テニスが　できます。</strong>",
         },
        questions: [
            {
                prompt: "➊　運転[うんてん]　→",
                answers: [
                    "ミラーさんは運転ができます。",
                    "ミラーさんはうんてんができます。"
        ]
            },
            {
                prompt: "➋　料理[りょうり]　→",
                answers: [
                    "ミラーさんは料理ができます。",
                    "ミラーさんはりょうりができます。"
                ]
            },
            {
                prompt: "➌　サッカー　→",
                answers: [
                    "ミラーさんはサッカーができます。"
                ]
            },
            {
                prompt: "➍　ダンス　→",
                answers: [
                    "ミラーさんはダンスができます。"
                ]
            }
        ]
        },

        {
            title: "Luyện tập 2",
            example: {
                 image: "/assets/images/grammar_n5_lesson18/practice2.jpg",
                content: ["例[れい]1：ひらがなを　書[か]く　ことが　できますか。→　<strong>……はい、できます。</strong>",

                            "例[れい]2：漢字[かんじ]を　読[よ]む　ことが　できますか。→　<strong>……いいえ、できません。</strong>", ]
                    },

            questions: [
                {
                    prompt: "➊　ピアノを　弾[ひ]く　ことが　できますか。→",
                    answers: [
                        "はい、できます。"
                    ]
                },
                {
                    prompt: "➋　日本語[にほんご]を　話[はな]す　ことが　できますか。→",
                    answers: [
                        "いいえ、できません。"
                    ]
                },
                {
                    prompt: "➌　泳[およ]ぐ　ことが　できますか。→",
                    answers: [
                        "はい、できます。"
                    ]
                },
                {
                    prompt: "➍　ビールを　飲[の]む　ことが　できますか。→",
                    answers: [
                        "いいえ、できません。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: [
                "どんな　外国語[がいこくご]を　話[はな]す　ことが　できますか。（英語[えいご]）→ <strong>英語[えいご]を　話[はな]す　ことが　できます。</strong>",   
                ]
                    },

            questions: [
               {
                    prompt: "➊　何[なん]メートルぐらい　泳[およ]ぐ　ことが　できますか。\n（100メートルぐらい）→",
                    answers: [
                        "100メートルぐらい泳ぐことができます。",
                        "100メートルぐらいおよぐことができます。"
                    ]
                },
                {
                    prompt: "➋　どんな　料理[りょうり]を　作[つく]る　ことが　できますか。\n（てんぷら）→",
                    answers: [
                        "てんぷらを作ることができます。",
                        "てんぷらをつくることができます。"
                    ]
                },
                {
                    prompt: "➌　漢字[かんじ]を　いくつ　書[か]く　ことが　できますか。\n（50ぐらい）→",
                    answers: [
                        "漢字を50ぐらい書くことができます。",
                        "かんじを50ぐらいかくことができます。",
                        "50ぐらい書くことができます。",
                        "50ぐらいかくことができます。"
                    ]
                },
                {
                    prompt: "➍　日本[にほん]の　歌[うた]で　何[なに]を　歌[うた]う　ことが　できますか。（「故郷[ふるさと]」）→",
                    answers: [
                        "「故郷」を歌うことができます。",
                        "「ふるさと」を歌うことができます。",
                        "ふるさとをうたうことができます。"
                    ]
                },
            ]

        },

        {
            title: "Luyện tập 4",
            example: {
                content: [
                 "この公園[こうえん]・サッカー　→ <strong>この公園[こうえん]で　サッカーが　できますか。</strong>",
                ]
            },

            questions: [
                {
                    prompt: "➊　寮[りょう]の　部屋[へや]・料理[りょうり]　→",
                    answers: [
                        "寮の部屋で料理ができますか。",
                        "りょうのへやでりょうりができますか。"
                    ]
                },
                {
                    prompt: "➋　インターネット・ホテルの　予約[よやく]　→",
                    answers: [
                        "インターネットでホテルの予約ができますか。",
                        "インターネットでホテルのよやくができますか。"
                    ]
                },
                {
                    prompt: "➌　図書館[としょかん]・辞書[じしょ]を　借[か]ります　→",
                    answers: [
                        "図書館で辞書を借りることができますか。",
                        "としょかんでじしょをかりることができますか。"
                    ]
                },
                {
                    prompt: "➍　ホテルから　バス・空港[くうこう]へ　行[い]きます　→",
                    answers: [
                        "ホテルからバスで空港へ行くことができますか。",
                        "ホテルからバスでくうこうへいくことができますか。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                "どこで　安[やす]い　カメラを　買[か]う　ことが　できますか。（秋葉原[あきはばら]）→ <strong>秋葉原[あきはばら]で　買[か]う　ことが　できます。</strong>",    
                ] 
            },
            questions: [
                {
                    prompt: "➊　この　車[くるま]に　何人[なんにん]　乗[の]る　ことが　できますか。（8人[にん]）→",
                    answers: [
                        "8人乗ることができます。",
                        "はちにんのることができます。"
                    ]
                },
                {
                    prompt: "➋　いつ　北海道[ほっかいどう]で　桜[さくら]を　見[み]る　ことが　できますか。\n（5月[がつ]）→",
                    answers: [
                        "5月に見ることができます。",
                        "ごがつにみることができます。"
                    ]
                },
                {
                    prompt: "➌　何日[なんにち]　本[ほん]を　借[か]りる　ことが　できますか。（2週間[しゅうかん]）→",
                    answers: [
                        "2週間借りることができます。",
                        "にしゅうかんかりることができます。"
                    ]
                },
                {
                    prompt: "➍　何時[なんじ]から　何時[なんじ]まで　会議室[かいぎしつ]を　使[つか]う　ことが　できますか。（9時[じ]・6時[じ]）→",
                    answers: [
                        "9時から6時まで使うことができます。",
                        "くじからろくじまでつかうことができます。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                image: "/assets/images/grammar_n5_lesson18/practice6.jpg",
                content: [
                    "例[れい]：趣味[しゅみ]は　何[なん]ですか。→ <strong>絵[え]を　かく　ことです。</strong>",
                ]
                },

            questions: [
                {
                    prompt: "➊　趣味[しゅみ]は　何[なん]ですか。→",
                    answers: [
                        "えいがをみることです。",
                        "映画を見ることです。"
                    ]
                },
                {
                    prompt: "➋　趣味[しゅみ]は　何[なん]ですか。→",
                    answers: [
                        "写真を撮ることです。",
                        "しゃしんをとることです。"
                    ]
                },
                {
                    prompt: "➌　趣味[しゅみ]は　何[なん]ですか。→",
                    answers: [
                        "歌を歌うことです。",
                        "うたをうたうことです。"
                    ]
                },
                {
                    prompt: "➍　趣味[しゅみ]は　何[なん]ですか。→",
                    answers: [
                        "車を運転することです。",
                        "くるまをうんてんすることです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                image: "/assets/images/grammar_n5_lesson18/practice7.jpg",
                content: [
                    "例[れい]：→　<strong>寝[ね]る前[まえ]に、お祈[いの]りを　します。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　→",
                    answers: [
                        "ごはんを食べるまえに、手を洗います。",
                        "ごはんをたべるまえに、てをあらいます。"
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "泳ぐまえに、シャワーを浴びます。",
                        "およぐまえに、シャワーをあびます。"
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "友達のうちへ行くまえに、電話をかけます。",
                        "ともだちのうちへいくまえに、でんわをかけます。"
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "旅行するまえに、お金を換えます。",
                        "りょこうするまえに、おかねをかえます。"
                    ]
                },
            ]
        },
        {
            title: "Luyện tập 8",
            example: {
                content: [
                   "いつ　この薬[くすり]を　飲[の]みますか（寝[ね]ます）→ <strong>寝[ね]る前[まえ]に、飲[の]みます。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　いつ　ジョギングを　しますか。（会社[かいしゃ]へ　行[い]きます）→",
                    answers: [
                        "会社へ行く前に、します。",
                        "かいしゃへいくまえに、します。"
                    ]
                },
                {
                    prompt: "➋　いつ　その　カメラを　買[か]いましたか。\n（日本[にほん]へ　来[き]ます）→",
                    answers: [
                        "日本へ来る前に、買いました。",
                        "にほんへくるまえに、かいました。"
                    ]
                },
                {
                    prompt: "➌　いつ　資料[しりょう]を　コピーしますか。（会議[かいぎ]）→",
                    answers: [
                        "会議の前に、コピーします。",
                        "かいぎのまえに、コピーします。"
                    ]
                },
                {
                    prompt: "➍　いつ　国[くに]へ　帰[かえ]りますか。（クリスマス）→",
                    answers: [
                        "クリスマスの前に、帰ります。",
                        "クリスマスのまえに、かえります。"
                    ]
                },
                {
                    prompt: "➎　いつ　日本[にほん]へ　来[き]ましたか。（5年[ごねん]）→",
                    answers: [
                        "5年前に、来ました。",
                        "ごねんまえに、きました。"
                    ]
                },
                {
                    prompt: "➏　いつ　荷物[にもつ]を　送[おく]りましたか。（3日[みっか]）→",
                    answers: [
                        "3日前に、送りました。",
                        "みっかまえに、おくりました。"
                    ]
                },
            ]
        },
        {
            title: "Luyện tập 9",
            example: {
                image: "/assets/images/grammar_n5_lesson18/practice9.jpg",
                content: [
                    "例[れい]：わたしは　ピアノを（弾[ひ]く）ことが　できます。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　わたしは　自転車[じてんしゃ]に（　　　）ことが　できません。",
                    answers: [
                        "乗る",
                        "のる"
                    ]
                },
                {
                    prompt: "➋　電話[でんわ]で　飛行機[ひこうき]の　チケットを（　　　）ことが　できます。",
                    answers: [
                        "予約する",
                        "よやくする"
                    ]
                },
                {
                    prompt: "➌　趣味[しゅみ]は　絵[え]を（　　　）ことです。",
                    answers: [
                        "かく"
                    ]
                },
                {
                    prompt: "➍　どこで　お金[かね]を（　　　）ことが　できますか。",
                    answers: [
                        "換える",
                        "かえる"
                    ]
                },
            ]
        },
        {
            title: "Luyện tập 10",
            example: {
                content: [
                    "例[れい]1：友達[ともだち]の　うちへ　（行[い]きます）、電話[でんわ]を　かけます。→　行[い]く　まえに",
                    "例[れい]2：仕事[しごと]が　（終[お]わります）、飲[の]みに　行[い]きます。→　終[お]わってから",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　朝[あさ]　うちで　コーヒーを　（飲[の]みます）、会社[かいしゃ]へ　行[い]きます。→",
                    answers: [
                        "飲んでから",
                        "のんでから"
                    ]
                },
                {
                    prompt: "➋　料理[りょうり]を　（始[はじ]めます）、手[て]を　洗[あら]います。→",
                    answers: [
                        "始める前に",
                        "はじめるまえに"
                    ]
                },
                {
                    prompt: "➌　夜[よる]　（寝[ね]ます）、日記[にっき]を　書[か]きます。→",
                    answers: [
                        "寝る前に",
                        "ねるまえに"
                    ]
                },
                {
                    prompt: "➍　銀行[ぎんこう]で　お金[かね]を　（下[お]ろします）、買[か]い物[もの]に　行[い]きました。→",
                    answers: [
                        "下ろしてから",
                        "おろしてから"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 11",
            example: {
                content: [
                    "例[れい]：100メートル（ × ）泳[およ]ぐ　こと（ が ）できます。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　車[くるま]（　　）　運転[うんてん]（　　）　できます。",
                    answers: [
                        "の、が",
                        "の が",
                        "のが"
                    ]
                },
                {
                    prompt: "➋　漢字[かんじ]（　　）　50ぐらい　書[か]く　こと（　　）　できます。",
                    answers: [
                        "を、が",
                        "を が",
                        "をが"
                    ]
                },
                {
                    prompt: "➌　会議[かいぎ]（　　）　まえに、資料[しりょう]を　コピーしなければ　なりません。",
                    answers: [
                        "の"
                    ]
                },
                {
                    prompt: "➍　2年[ねん]（　　）　まえに、大学[だいがく]を　出[で]ました。",
                    answers: [
                        "ｘ",
                        "✕",
                        "なし"
                    ]
                }
            ]
        },
    ]
};



