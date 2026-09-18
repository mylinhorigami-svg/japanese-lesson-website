const grammarLessonData = {
  level: "N5",

  lessonNumber: 8,

  title: "Ngữ pháp N5 - Bài 8",

  previousLesson: {
    href: "../lesson7/lesson7.html",
    label: "Bài 7"
  },

  nextLesson: {
    href: "../lesson9/lesson9.html",
    label: "Bài 9"
  },

  patterns: [
    {
      number: 1,
      pattern: "な－形容詞[けいようし]／いー形容詞[けいようし] - Tính từ đuôi「な」và tính từ đuôi「い」",
      detail: {
        meaning: " Tính từ đuôi「な」và tính từ đuôi「い」",
        explanations: [
            "🔹Tính từ đuôi「な」có đuôi tận cùng là「な」 ",
            "🔹Tính từ đuôi「い」có đuôi tận cùng là「い」",
            "🔹Thể phủ định của đuôi「な」là bỏ đuôi「な」thêm <strong>じゃありません</strong> hoặc <strong>ではありません</strong>",
            "🔹Thể phủ định của đuôi「い」là bỏ đuôi「い」thêm <strong>くない</strong>",
        ],
        usages: [
          "✦ Bổ nghĩa cho danh từ được nhắc đến trong câu.",
        ],
        notes: [
          "✦ Do một số chức năng ngữ pháp mà đuôi「な」có lúc không xuất hiện trong từ và câu nên người ta thường để đuôi「な」trong ngoặc.",
          "✦ Một số tính từ đuôi「な」dễ nhầm lẫn thành tính từ đuôi「い」(xem bảng tính từ bên dưới) ",

        ],

        extraTable: [
            {
                title: "Tính từ đuôi「な」",
                headers: [
                    { text: "Khẳng định", width: "20%" },
                    { text: "Nghĩa", width: "25%" },
                    { text: "Phủ định", width: "30%" },
                    { text: "Nghĩa", width: "25%" },
                ],

                rows: [
                    {
                        number: "🔸きれい（な）",
                        numberReading: "Đẹp, xinh đẹp, sạch sẽ",
                        age: "きれい　じゃありません",
                        ageReading: "Không đẹp, không sạch",
                    },
                    {
                        number: "ハンサム（な）",
                        numberReading: "Đẹp trai",
                        age: "ハンサム　じゃありません",
                        ageReading: "Không đẹp trai",
                    },
                    {
                        number: "しんせつ（な）",
                        numberReading: "Tử tế, tốt bụng, thân thiện",
                        age: "しんせつ　じゃありません",
                        ageReading: "Không tử tế, không tốt bụng",
                    },
                    {
                        number: "🔸ゆうめい（な）",
                        numberReading: "Nổi tiếng",
                        age: "ゆうめい　じゃありません",
                        ageReading: "Không nổi tiếng",
                    },
                    {
                        number: "げんき（な）",
                        numberReading: "Khỏe mạnh",
                        age: "げんき　じゃありません",
                        ageReading: "Không khỏe",
                    },
                    {
                        number: "しずか（な）",
                        numberReading: "Yên tĩnh",
                        age: "しずか　じゃありません",
                        ageReading: "Không yên tĩnh",
                    },
                    {
                        number: "にぎやか（な）",
                        numberReading: "Đông đúc, nhộn nhịp",
                        age: "にぎやか　じゃありません",
                        ageReading: "Không đông đúc, không nhộn nhịp",
                    },
                    {
                        number: "ひま（な）",
                        numberReading: "Rảnh rỗi",
                        age: "ひま　じゃありません",
                        ageReading: "Không rảnh",
                    },
                    {
                        number: "べんり（な）",
                        numberReading: "Tiện lợi",
                        age: "べんり　じゃありません",
                        ageReading: "Không tiện lợi",
                    },
                    {
                        number: "すてき（な）",
                        numberReading: "Đẹp, tuyệt vời",
                        age: "すてき　じゃありません",
                        ageReading: "Không đẹp, không tuyệt vời",
                    },
                ],
            },

            {
                title: "Tính từ đuôi「い」",
                headers: [
                    { text: "Khẳng định", width: "25%" },
                    { text: "Nghĩa", width: "25%" },
                    { text: "Phủ định", width: "25%" },
                    { text: "Nghĩa", width: "25%" },
                ],

                rows: [
                    {
                        number: "いそがしい",
                        numberReading: "Bận rộn",
                        age: "いそがし　くない",
                        ageReading: "Không bận",
                    },
                    {
                        number: "おおきい",
                        numberReading: "To, lớn",
                        age: "おおき　くない",
                        ageReading: "Không to, không lớn",
                    },
                    {
                        number: "ちいさい",
                        numberReading: "Nhỏ, bé",
                        age: "ちいさ　くない",
                        ageReading: "Không nhỏ, không bé",
                    },
                    {
                        number: "あたらしい",
                        numberReading: "Mới",
                        age: "あたらし　くない",
                        ageReading: "Không mới",
                    },
                    {
                        number: "ふるい",
                        numberReading: "Cũ",
                        age: "ふるく　ない",
                        ageReading: "Không cũ",
                    },
                    {
                        number: "<strong>いい</strong>",
                        numberReading: "Tốt, đẹp",
                        age: "<strong>よ　くない</strong>",
                        ageReading: "Không tốt",
                    },
                    {
                        number: "わるい",
                        numberReading: "Tồi, xấu",
                        age: "わる　くない",
                        ageReading: "Không tồi, không xấu",
                    },
                    {
                        number: "あつい",
                        numberReading: "Nóng (thời tiết)",
                        age: "あつ　くない",
                        ageReading: "Không nóng",
                    },
                    {
                        number: "さむい",
                        numberReading: "Lạnh, rét",
                        age: "さむ　くない",
                        ageReading: "Không lạnh, không rét",
                    },
                    {
                        number: "つめたい",
                        numberReading: "Lạnh (đồ vật, nhiệt độ, tính cách)",
                        age: "つめた　くない",
                        ageReading: "Không lạnh",
                    },
                    {
                        number: "むずかしい",
                        numberReading: "Khó",
                        age: "むずかし　くない",
                        ageReading: "Không khó",
                    },
                    {
                        number: "やさしい",
                        numberReading: "Dễ",
                        age: "やさし　くない",
                        ageReading: "Không dễ",
                    },
                    {
                        number: "たかい",
                        numberReading: "Đắt, cao",
                        age: "たか　くない",
                        ageReading: "Không đắt, không cao",
                    },
                    {
                        number: "やすい",
                        numberReading: "Rẻ",
                        age: "やす　くない",
                        ageReading: "Không rẻ",
                    },
                    {
                        number: "ひくい",
                        numberReading: "Thấp",
                        age: "ひく　くない",
                        ageReading: "Không thấp",
                    },
                    {
                        number: "おもしろい",
                        numberReading: "Hay, thú vị",
                        age: "おもしろ　くない",
                        ageReading: "Không hay, không thú vị",
                    },
                    {
                        number: "おいしい",
                        numberReading: "Ngon",
                        age: "おいし　くない",
                        ageReading: "Không ngon",
                    },
                    {
                        number: "たのしい",
                        numberReading: "Vui vẻ",
                        age: "たのし　くない",
                        ageReading: "Không vui",
                    },
                    {
                        number: "さびしい",
                        numberReading: "Buồn, cô đơn",
                        age: "さびし　くない",
                        ageReading: "Không buồn, không cô đơn",
                    },
                    {
                        number: "しろい",
                        numberReading: "Trắng",
                        age: "しろ　くない",
                        ageReading: "Không trắng",
                    },
                    {
                        number: "くろい",
                        numberReading: "Đen",
                        age: "くろ　くない",
                        ageReading: "Không đen",
                    },
                    {
                        number: "あかい",
                        numberReading: "Đỏ",
                        age: "あか　くない",
                        ageReading: "Không đỏ",
                    },
                    {
                        number: "あおい",
                        numberReading: "Xanh",
                        age: "あお　くない",
                        ageReading: "Không xanh",
                    },
                ],
            },
        ],
        examples: [
        {
            sentence: "❶　あのビルは　高[たか]いです。",
            meaning: "Tòa nhà kia thì cao",
            audio: "lesson8_001",
        },
        {
            sentence: "❷　この道[みち]は　にぎやか　じゃありません。",
            meaning: "Con đường này không có đông đúc.",
            audio: "lesson8_002",
        },
    ]
}
    },

    {
      number: 2,
      pattern: "Nは　な－形容詞[けいようし]／いー形容詞[けいようし] です。",
      detail: {
        meaning: "N thì ...",
        explanations: [
            "🔹<strong>N</strong> là danh từ người, vật, sự việc...",
            "🔹<strong>な－形容詞[けいようし]</strong> là tính từ đuôi 「な」（bỏ な）",
            "🔹<strong>いー形容詞[けいようし]</strong> là tính từ đuôi 「い」（giữ nguyên い）",
        ],
        usages: [
          "✦ Sử dụng để miêu tả một người, vật, sự vật, sự việc nào đó",
        ],
        notes: [
          "✦ Tính từ đuôi「い」thì giữ nguyên 「い」 ",
          "✦ Tính từ đuôi「な」thì bỏ 「な」 ",
        ],

        examples: [
          {
            sentence: "❶　田中先生[たなかせんせい]は　しんせつ　です。",
            meaning: "Thầy Tanaka tốt bụng",
            audio: "lesson8_003",
        },
        {
            sentence: "❷　ベトナムの食[た]べ物[もの]は　おいしい　です。",
            meaning: "Đồ ăn của Việt Nam ngon.",
            audio: "lesson8_004",
        }
        ]
    }
},
    
    {
        number: 3,
        pattern: "Nは　[Phủ định của tính từ] です。",
        detail: {
            meaning: "N thì không ...",
            explanations: [
            "🔹<strong>N</strong> là danh từ người, vật, sự việc...",
            "🔹Phủ định của tính từ đuôi「な」là bỏ「な」thêm じゃありません hoặc ではありません",
            "🔹Phủ định của tính từ đuôi「い」là bỏ「い」 thêm くない",
            ],
            usages: [
                "✦ Sử dụng để miêu tả một người, vật, sự vật, sự việc nào đó",
            ],
            notes: [
                "🔸Kết thúc câu là 1 dạng động từ thì không có です",
            ],

           examples: [
        {
            sentence: "❶　この部屋[へや]は　きれい　じゃありません。",
            meaning: "Căn phòng này không sạch.",
            audio: "lesson8_005",
        },
        {
            sentence: "❷　日本語[にほんご]は　やさし　くないです。",
            meaning: "Tiếng Nhật không dễ.",
            audio: "lesson8_006",
        },
        ]
    },
},

    {
        number: 4,
        pattern: "な－形容詞[けいようし]（な）／いー形容詞[けいようし] + N",
        detail: {
            meaning: "N ...",
            explanations: [
                "✦ <strong>N</strong> là danh từ người, vật, sự việc...",
                "🔹<strong>な－形容詞[けいようし]（な）</strong> là tính từ đuôi 「な」（giữ nguyên な）",
                "🔹<strong>いー形容詞[けいようし]</strong> là tính từ đuôi 「い」（giữ nguyên い）",
            ],
            usages: [
                "🔸Cách nói tính chất của danh từ.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],
           examples: [
        {
            sentence: "❶　彼[かれ]は　いい人[ひと]です。",
            meaning: "Anh ấy là người tốt.",
            audio: "lesson8_007",
        },
        {
            sentence: "❷　日本[にほん]は　きれいな国[くに]　です。",
            meaning: "Nhật Bản là đất nước xinh đẹp.",
            audio: "lesson8_008",
        },
        ]
    }
},

{
        number: 5,
        pattern: "とても／あまり + Phủ định của tính từ",
        detail: {
            meaning: "Rất / Không ... lắm",
            explanations: [
                "✦ <strong>とても</strong> là từ chỉ mức độ nhiều có nghĩa là “rất”",
                "✦ <strong>あまり + Phủ định</strong> là cụm từ chỉ mức độ ít có nghĩa là “không ... lắm”",
            ],
            usages: [
                "🔸Cách nói tính chất của danh từ.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],
           examples: [
        {
            sentence: "❶　この時計[とけい]は　高[たかい]ですか。",
            meaning: "Cái đồng hồ này đắt không ?",
            audio: "lesson8_009",
            answer: {
                sentence: "はい、とても　高[たか]いです。",
                meaning: "Vâng, đắt lắm",
                audio: "lesson8_010"
            }
        },
        {
            sentence: "❷　この映画[えいが]は　有名[ゆうめい]　ですか。",
            meaning: "Phim này có nổi tiếng không ?",
            audio: "lesson8_011",
            answer: {
                sentence: "いいえ、あまり　有名[ゆうめい]　じゃありません。",
                meaning: "Không, không nổi lắm đâu.",
                audio: "lesson8_012"
            }
        },
        ]
    }
},

    {
        number: 6,
        pattern: "どう／どんなN　ですか。",
        detail: {
            meaning: "N như thế nào ? / N là ... như thế nào ?",
            explanations: [
                "どう　là từ để hỏi có nghĩa là “như thế nào ?”",
                "どんな　cũng là từ để hỏi có nghĩa là “như thế nào ?” nhưng luôn luôn có danh từ theo sau.",
            ],
            usages: [
                "🔸Cách hỏi về tính chất",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],

           examples: [
        {
            sentence: "❶　日本[にほん]の生活[せいかつ]は　どう　ですか。",
            meaning: "Cuộc sống ở Nhật như thế nào ?",
            audio: "lesson8_013",

            answer: {
                sentence: "とても　大変[たいへん]です。",
                meaning: "Rất vất vả.",
                audio: "lesson8_014"
            }
        },
        {
            sentence: "❷　木村[きむら]さんの家[いえ]は　どんな家[いえ]　ですか。",
            meaning: "Nhà của anh Kimura là nhà như thế nào ?",
            audio: "lesson8_015",

            answer: {
                sentence: "大[おお]きい家[いえ]です。",
                meaning: "Nhà bự",
                audio: "lesson8_016"
            }
        },
        ]
    }
    },

    {
        number: 7,
        pattern: "Nは　A1　ですが、A2　です。",
        detail: {
            meaning: "N thì A1 nhưng A2",
            explanations: [
                "✦ <strong>A1</strong> là tính từ thứ 1",
                "✦ <strong>A2</strong> là tính từ thứ 2",
                "✦ <strong>が</strong> là trợ từ nối 2 mệnh đề ngược nghĩa",
            ],
            usages: [
                "🔸Cách nói 2 mệnh đề ngược nghĩa.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới"
            ],

           examples: [
        {
            sentence: "❶　日本[にほん]の食[た]べ物[もの]は　どうですか。",
            meaning: "Đồ ăn Nhật như thế nào ? ",
            audio: "lesson8_017",
            answer: {
                sentence: "おいしい　ですが、高[たか]いです。",
                meaning: "Ngon nhưng mà đắt.",
                audio: "lesson8_018"
            }
        },
        {
            sentence: "❷　大学[だいがく]の寮[りょう]は　どうですか。",
            meaning: "Ký túc xá của đại học như thế nào ? ",
            audio: "lesson8_019",
            answer: {
                sentence: "古[ふる]い　ですが、便利[べんり]です。",
                meaning: "Cũ nhưng tiện lợi.",
                audio: "lesson8_020"
            }
        },
        ]
    }
    },

    {
        number: 8,
        pattern: "Nは　A1　です。そして、A2　です。",
        detail: {
            meaning: "N thì A1、và còn A2",
            explanations: [
                "✦ <strong>A1</strong> là tính từ thứ 1",
                "✦ <strong>A2</strong> là tính từ thứ 2",
                "✦ <strong>そして</strong> là trợ từ nối 2 mệnh đề tương đồng",
            ],
            usages: [
                "🔸Cách nói 2 mệnh đề tương đồng.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới"
            ],

           examples: [
        {
            sentence: "❶　ベトナムの食[た]べ物[もの]は　どうですか。",
            meaning: "Đồ ăn Việt như thế nào ? ",
            audio: "lesson8_021",
            answer: {
                sentence: "おいしい　です。そして、安[やす]いです。",
                meaning: "Ngon và còn rẻ nữa.",
                audio: "lesson8_022"
            }
        },
        {
            sentence: "❷　大阪[おおさか]は　どんな町[まち]ですか。",
            meaning: "Osaka là thành phố như thế nào ? ",
            audio: "lesson8_023",
            answer: {
                sentence: "にぎやかな　町[まち]です。そして、おもしろいです。",
                meaning: "Là thành phố nhộn nhịp và thú vị.",
                audio: "lesson8_024"
            }
        },
        ]
    }
    },

     {
        number: 9,
        pattern: "Nは　どれ　ですか。",
        detail: {
            meaning: "N là cái nào ?",
            explanations: [
                "✦ <strong>どれ</strong> là từ để hỏi",
            ],
            usages: [
                "🔸Cách hỏi đồ vật.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới"
            ],

           examples: [
        {
            sentence: "山田[やまだ]さんの　かばんは　どれ　ですか。",
            meaning: "Cái túi của anh Yamada là cái nào ? ",
            audio: "lesson8_025",
            answer: {
                sentence: "あおい　かばんです。",
                meaning: "Là cái túi xanh.",
                audio: "lesson8_026"
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
                content: "ミラーさん・しんせつ（な）　→　<strong>ミラーさんは　しんせつです。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　サントスさん・元気[げんき]　→",
                    answers: [
                        "サントスさんは　げんきです。",
                        "サントスさんは　元気です。"
                    ]
                },
                {
                    prompt: "➋　カリナさん・きれい　→",
                    answers: [
                        "カリナさんは　きれいです。"
                    ]
                },
                {
                    prompt: "➌　富士山[ふじさん]・高[たか]い　→",
                    answers: [
                        "ふじさんは　たかいです。",
                        "富士山は　高いです。"
                    ]
                },
                {
                    prompt: "➍　8月[がつ]・暑[あつ]い　→",
                    answers: [
                        "8がつは　あついです。",
                        "8月は　暑いです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "やまださん・元気[げんき]　→　<strong>やまださんは　元気[げんき]　じゃありません。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　イーさん・暇[ひま]　→",
                    answers: [
                        "イーさんは　ひま　じゃありません。",
                        "イーさんは　暇[ひま]　じゃありません。"
                    ]
                },
                {
                    prompt: "➋　ワンさんの　部屋[へや]・きれい　→",
                    answers: [
                        "ワンさんの　へやは　きれい　じゃありません。",
                        "ワンさんの　部屋[へや]は　きれい　じゃありません。"
                    ]
                },
                {
                    prompt: "➌　大学[だいがく]の　寮[りょう]・便利[べんり]　→",
                    answers: [
                        "だいがくの　りょうは　べんり　じゃありません。",
                        "大学[だいがく]の　寮[りょう]は　便利[べんり]　じゃありません。"
                    ]
                },
                {
                    prompt: "➍　IMC・有名[ゆうめい]　→",
                    answers: [
                        "IMCは　ゆうめい　じゃありません。",
                        "IMCは　有名[ゆうめい]　じゃありません。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: "この　自転車[じてんしゃ]・新[あたら]しい　→　<strong>この　自転車[じてんしゃ]は　新[あたら]しくないです。</strong>",    
                    },

            questions: [
                {
                    prompt: "➊　ミラーさん・忙[いそが]しい　→",
                    answers: [
                        "ミラーさんは　いそがしくないです。",
                        "ミラーさんは　忙[いそが]しくないです。"
                    ]
                },
                {
                    prompt: "➋　日本語[にほんご]・易[やさ]しい　→",
                    answers: [
                        "にほんごは　やさしくないです。",
                        "日本語[にほんご]は　易[やさ]しくないです。"
                    ]
                },
                {
                    prompt: "➌　この　お茶[ちゃ]・熱[あつ]い　→",
                    answers: [
                        "この　おちゃは　あつくないです。",
                        "この　お茶[ちゃ]は　熱[あつ]くないです。"
                    ]
                },
                {
                    prompt: "➍　この　辞書[じしょ]・いい　→",
                    answers: [
                        "この　じしょは　よくないです。",
                        "この　辞書[じしょ]は　よくないです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 4",
            example: {
                content: ["ミラーさんは　ハンサムですか。　→　<strong>……はい、ハンサムです。</strong>",
                    "日本[にほん]の　カメラは　高[たか]いですか。　→　<strong>……いいえ、高[たか]くないです。</strong>"

                ]
            },

            questions: [
                {
                    prompt: "➊　あの　レストランは　静[しず]かですか。（いいえ）　→",
                    answers: [
                        "いいえ、しずか　じゃありません。",
                        "いいえ、静[しず]か　じゃありません。"
                    ]
                },
                {
                    prompt: "➋　会社[かいしゃ]の　食堂[しょくどう]は　安[やす]いですか。（はい）　→",
                    answers: [
                        "はい、やすいです。",
                        "はい、安[やす]いです。"
                    ]
                },
                {
                    prompt: "➌　その　パソコンは　いいですか。（いいえ、あまり）　→",
                    answers: [
                        "いいえ、あまり　よくないです。"
                    ]
                },
                {
                    prompt: "➍　その　手帳[てちょう]は　便利[べんり]ですか。（はい、とても）　→",
                    answers: [
                        "はい、とても　べんりです。",
                        "はい、とても　便利[べんり]です。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: ["日本[にほん]の地下鉄[ちかてつ]は　どうですか。(便利[べんり]、きれい)　→　<strong>……便利[べんり]です。そして、きれいです。</strong>",
                    "日本[にほん]の車[くるま]は　どうですか。（高[たか]い、いい）　→　<strong>……高[たか]いですが、いいです。</strong>"
                ]
            },
            questions: [
                {
                    prompt: "➊　会社[かいしゃ]の寮[りょう]は　どうですか。（新[あたら]しい、きれい）　→",
                    answers: [
                        "あたらしいです。そして、きれいです。",
                        "新[あたら]しいです。そして、きれいです。"
                    ]
                },
                {
                    prompt: "➋　先生[せんせい]は　どうですか。（親切[しんせつ]、おもしろい）　→",
                    answers: [
                        "しんせつです。そして、おもしろいです。",
                        "親切[しんせつ]です。そして、おもしろいです。"
                    ]
                },
                {
                    prompt: "➌　日本[にほん]の食[た]べ物[もの]は　どうですか。（おいしい、高[たか]い）　→",
                    answers: [
                        "おいしいですが、たかいです。",
                        "おいしいですが、高[たか]いです。"
                    ]
                },
                {
                    prompt: "➍　日本[にほん]の生活[せいかつ]は　どうですか。（忙[いそが]しい、おもしろい）　→",
                    answers: [
                        "いそがしいですが、おもしろいです。",
                        "忙[いそが]しいですが、おもしろいです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: [
                    "大阪[おおさか]・（にぎやか）町[まち]　→　<strong>大阪[おおさか]は　にぎやかな　町[まち]です。</strong>",
                    "東京[とうきょう]駅[えき]・（大[おお]きい）駅[えき]　→　<strong>東京[とうきょう]駅[えき]は　大[おお]きい　駅[えき]です。</strong>"
                ]
            },

            questions: [
                {
                    prompt: "➊　IMC・（新[あたら]しい）会社[かいしゃ]　→",
                    answers: [
                        "IMCは　あたらしい　かいしゃです。",
                        "IMCは　新[あたら]しい　会社[かいしゃ]です。"
                    ]
                },
                {
                    prompt: "➋　神戸[こうべ]病院[びょういん]・（有名[ゆうめい]）病院[びょういん]　→",
                    answers: [
                        "こうべびょういんは　ゆうめいな　びょういんです。",
                        "神戸[こうべ]病院[びょういん]は　有名[ゆうめい]な　病院[びょういん]です。"
                    ]
                },
                {
                    prompt: "➌　ワットさん・（いい）先生[せんせい]　→",
                    answers: [
                        "ワットさんは　いい　せんせいです。",
                        "ワットさんは　いい　先生[せんせい]です。"
                    ]
                },
                {
                    prompt: "➍　富士山[ふじさん]・（きれい）山[やま]　→",
                    answers: [
                        "ふじさんは　きれいな　やまです。",
                        "富士山[ふじさん]は　きれいな　山[やま]です。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: [
                    "奈良[なら]は　どんな　町[まち]ですか。(静[しず]か)→　<strong>……静[しず]かな　町[まち]です。</strong>",
                ]
            },

            questions: [
                {
                    prompt: "➊　七人[しちにん]の　侍[さむらい]は　どんな　映画[えいが]ですか。（おもしろい）　→",
                    answers: [
                        "おもしろい　えいがです。",
                        "おもしろい　映画[えいが]です。"
                    ]
                },
                {
                    prompt: "➋　サントスさんは　どんな　人[ひと]ですか。（親切[しんせつ]）　→",
                    answers: [
                        "しんせつな　ひとです。",
                        "親切[しんせつ]な　人[ひと]です。"
                    ]
                },
                {
                    prompt: "➌　さくら大学[だいがく]は　どんな　大学[だいがく]ですか。（新[あたら]しい）　→",
                    answers: [
                        "あたらしい　だいがくです。",
                        "新[あたら]しい　大学[だいがく]です。"
                    ]
                },
                {
                    prompt: "➍　スイスは　どんな　国[くに]ですか。（きれい）　→",
                    answers: [
                        "きれいな　くにです。",
                        "きれいな　国[くに]です。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 8",
            example: {
                content: [
                    "日本[にほん]の　食[た]べ物[もの]は　安[やす]いですか。",
                    ".....いいえ、(<strong>やすくないです</strong>)。とても　高[たか]いです。",
                ]
            },

            questions: [
                {
                    prompt: "❶　あなたの　パソコンは　新[あたら]しいですか。\n.....いいえ、(　　)。古[ふる]いです。",
                    answers: [
                        "あたらしくないです",
                        "新[あたら]しくないです"
                    ]
                },
                {
                    prompt: "❷　イギリスは　今[いま]　暑[あつ]いですか。\n.....いいえ、あまり　(　　)。",
                    answers: [
                        "あつくないです",
                        "暑[あつ]くないです"
                    ]
                },
                {
                    prompt: "❸　大阪[おおさか]は　静[しず]かですか。\n.....いいえ、(　　)。とても　にぎやかです。",
                    answers: [
                        "しずかじゃありません",
                        "静[しず]かじゃありません"
                    ]
                },
                {
                    prompt: "❹　この　手帳[てちょう]は　便利[べんり]ですか。\n.....いいえ、あまり　(　　)。",
                    answers: [
                        "べんりじゃありません",
                        "便利[べんり]じゃありません"
                    ]
                },
            ]
        },
    ]
};