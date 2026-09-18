const grammarLessonData = {
  level: "N5",

  lessonNumber: 1,

  title: "Ngữ pháp N5 - Bài 1",

  previousLesson: null,

  nextLesson: {
    href: "../lesson2/lesson2.html",
    label: "Bài 2"
  },

  patterns: [
    {
      number: 1,
      pattern: "N1 は N2 です",
      detail: {
        formula: "N1 は N2 です。",
        meaning: "N1 là N2.",
        explanations: [
            "🔹<strong>N1</strong> là danh từ làm chủ ngữ.",
            "🔹<strong>は</strong> là trợ từ.",
            "🔹<strong>N2</strong> là danh từ chỉ người, vật, sự việc, ...",
            "🔹<strong>です</strong> là từ kết thúc câu khẳng định lịch sự."
        ],
        usages: [
          "✦ Giới thiệu tên, tuổi, nghề nghiệp,...",
          "✦ Khẳng định một vấn đề nào đó."
        ],
        notes: [
          "<strong>は</strong> khi là trợ từ thì được đọc là Wa."
        ],
        examples: [
          {
            sentenceParts: [
              {
                text: "①　わたし　は　たなか　です。"
              }
            ],
            meaning: "Tôi là Tanaka.",
            audio: "lesson1_001"
          },

          {
            sentenceParts: [
              {
                text: "②　わたし　は　"
              },
              {
                kanji: "学生",
                reading: "がくせい"
              },
              {
                text: "　です。"
              }
            ],
            meaning: "Tôi là học sinh.",
            audio: "lesson1_002"
          }
        ]
      }
    },

    {
    number: 2,
    pattern: "N1　は　N2　では　ありません。",
    detail: {
        meaning: "N1 không phải là N2.",
        explanations: [
        "🔹<strong>N1</strong> là danh từ làm chủ ngữ.",
        "🔹<strong>は</strong> là trợ từ chỉ chủ đề của câu.",
        "🔹<strong>N2</strong> là danh từ chỉ người, vật, sự việc, ...",
        "🔹<strong>ではありません</strong> là dạng phủ định lịch sự của <strong>です</strong>"
        ],
        usages: [
        "Phủ định một sự việc nào đó một cách lịch sự."
        ],
        notes: [
        "🔸<strong>ではありません</strong> thường dùng trong văn viết hoặc tình huống trang trọng.",
        "🔸Trong giao tiếp thường dùng <strong>じゃありません</strong> ",
        "🔸<strong>では</strong> đọc là <strong>Dewa</strong>"
        ],
        examples: [
        {
            sentenceParts: [
            {
                text: "❶　わたし　は　"
            },
            {
                kanji: "学生",
                reading: "がくせい"
            },
            {
                text: "　では　ありません。"
            }
            ],
            meaning: "Tôi không phải là học sinh.",
            audio: "lesson1_003"
        },

        {
            sentenceParts: [
            {
                text: "➋　あの"
            },
            {
                kanji: "人",
                reading: "ひと"
            },
            {
                text: "　は　"
            },
            {
                kanji: "先生",
                reading: "せんせい"
            },
            {
                text: "　では　ありません。"
            }
            ],
            meaning: "Người kia không phải là giáo viên.",
            audio: "lesson1_004"
        }
        ]
    }
    },

    {
        number: 3,
        pattern: "N1　は　N2　です　か。",
        detail: {
            meaning: "N1 là N2 phải không ?",
            explanations: [
                "🔸N1, N2 là danh từ",
                "🔸<strong>は</strong> là trợ từ của câu.",
                "🔸<strong>ですか</strong> là kết thúc câu hỏi lịch sự."
            ],
            usages: [
                "Để trả lời cho câu hỏi này thì dùng:",
                "🔹<strong>はい、...</strong> : Vâng, ...",
                "🔹<strong>いいえ、...</strong> : Không, ..."
            ],
            notes: [
                "Khi nói thì lên giọng ở chữ <strong>か</strong> ",
            ],
           examples: [
        {
            sentenceParts: [
            {
                text: "❶　マイさん　は　ベトナム"
            },
            {
                kanji: "人",
                reading: "じん"
            },
            {
                text: "　ですか。"
            }
            ],
            meaning: "Bạn Mai là người Việt Nam phải không?",
            audio: "lesson1_005",

            answer: {
            sentenceParts: [
                {
                text: "はい、ベトナム"
                },
                {
                kanji: "人",
                reading: "じん"
                },
                {
                text: "　です。"
                }
            ],
            meaning: "Vâng, là người Việt Nam.",
            audio: "lesson1_006"
            }
        },

        {
            sentenceParts: [
            {
                text: "➋　ミラさん　は　"
            },
            {
                kanji: "学生",
                reading: "がくせい"
            },
            {
                text: "　ですか。"
            }
            ],
            meaning: "Bạn Mira là học sinh phải không?",
            audio: "lesson1_007",

            answer: {
            sentenceParts: [
                {
                text: "いいえ、"
                },
                {
                kanji: "学生",
                reading: "がくせい"
                },
                {
                text: "　じゃ　ありません。"
                }
            ],

            meaning: "Không, Mira không phải là học sinh.",
            audio: "lesson1_008"
            }
        }
        ]
    }
    },

        {
    number: 4,
    pattern: "N1 の N2",
    detail: {
        meaning: "N2 của N1 / N2 thuộc về N1.",
        explanations: [
            "🔹<strong>N1, N2</strong> là danh từ.",
            "🔹<strong>の</strong> là trợ từ nối hai danh từ."
        ],
        usages: [
            "✦ Biểu thị quan hệ sở hữu: N2 của N1.",
            "✦ Biểu thị N2 thuộc về N1.",
        ],
        notes: [
            "Không có lưu ý gì đặc biệt. "
        ],
        examples: [
            {
                sentenceParts: [
                    {
                        text: "❶　わたし　は　IMC の　"
                    },
                    {
                        kanji: "社員",
                        reading: "しゃいん"
                    },
                    {
                        text: "　です。"
                    },
                ],
                meaning: "Tôi là nhân viên của IMC.",
                audio: "lesson1_009"
            },

            {
                sentenceParts: [
                    {
                        text: "➋　そのかさ　は　わたしの　かさ　です。"
                    },
                ],
                meaning: "Cái ô kia là cái ô của tôi.",
                audio: "lesson1_010"
            },
        ]
    }
},

        {
    number: 6,
    pattern: "N　は　だれ ／ どなた　ですか。",
    detail: {
        meaning: "N là ai?",
        explanations: [
            "🔹<strong>N</strong> là danh từ chỉ người.",
            "🔹<strong>だれ</strong> có nghĩa là <strong>ai</strong>.",
            "🔹<strong>どなた</strong> là cách nói lịch sự của <strong>だれ</strong>.",
            "🔹<strong>ですか</strong> dùng để kết thúc câu hỏi lịch sự."
        ],

        usages: [
            "✦ Dùng để hỏi thân phận của ai đó."
        ],

        notes: [
            "🔸<strong>だれ</strong> được dùng trong giao tiếp thông thường.",
            "🔸<strong>どなた</strong> được dùng trong tình huống lịch sự."
        ],

        examples: [
            {
                sentenceParts: [
                    {
                        text: "❶　あの　"
                    },
                    {
                        kanji: "方",
                        reading: "かた"
                    },
                    {
                        text: "　は　どなた　ですか。"
                    }
                ],
                meaning: "Người kia là ai?",
                audio: "lesson1_011",

                answer: {
                    sentenceParts: [
                        {
                            text: "タンさん　です。"
                        }
                    ],
                    meaning: "Là anh Tân.",
                    audio: "lesson1_012"
                }
            },

            {
                sentenceParts: [
                    {
                        text: "➋　その　"
                    },
                    {
                        kanji: "人",
                        reading: "ひと"
                    },
                    {
                        text: "　は　だれ　ですか。"
                    }
                ],
                meaning: "Người kia là ai?",
                audio: "lesson1_013",

                answer: {
                    sentenceParts: [
                        {
                            text: "やまださん　です。"
                        },
                        {
                            kanji: "大阪病院",
                            reading: "おおさかびょういん"
                        },
                        {
                            text: "　の　"
                        },
                        {
                            kanji: "医者",
                            reading: "いしゃ"
                        },
                        {
                            text: "　です。"
                        },
                    ],
                    meaning: "Là anh Yamada. Bác sĩ của bênh viện Osaka.",
                    audio: "lesson1_014"
                }
            },
        ]
    }
},
        {
        number: 6,
        pattern: "N も",
        detail: {
            meaning: "N cũng ...",
            explanations: [
                "🔹<strong>も</strong> là trợ từ có nghĩa là <strong>cũng</strong>.",
                "🔹<strong>も</strong> thay thế cho trợ từ <strong>は</strong> khi diễn tả cùng chủ đề."
            ],
            usages: [
                "✦ Dùng để diễn tả một thông tin đã được nhắc đến trước đó."
            ],

            notes: [
                "🔸Khi dùng <strong>も</strong>, không dùng thêm <strong>は</strong>."
            ],
            examples: [
                {
                    sentenceParts: [
                        {
                            text: "❶　ミラーさん　は　"
                        },
                        {
                            kanji: "会社員",
                            reading: "かいしゃいん"
                        },
                        {
                            text: "　です。"
                        },
                    
                        {
                            text: "グプタさん　も　"
                        },
                        {
                            kanji: "会社員",
                            reading: "かいしゃいん"
                        },
                        {
                            text: "　ですか。"
                        }
                    ],
                        meaning: "Mira là nhân viên công ty. Gupta cũng là nhân viên công ty phải không?",
                        audio: "lesson1_015",

                        answer: {
                            sentenceParts: [
                                {
                                    text: "はい、グプタさん　も　"
                                },
                                {
                                    kanji: "会社員",
                                    reading: "かいしゃいん"
                                },
                                {
                                    text: "　です。"
                                }
                            ],
                            meaning: "Vâng, anh Gupta cũng là nhân viên công ty.",
                            audio: "lesson1_016"
                        }
                    },
                
                    {
                    sentenceParts: [
                        {
                            text: "➋　ミラーさん　は　アメリカ"
                        },
                        {
                            kanji: "人",
                            reading: "じん"
                        },
                        {
                            text: "　です。グプタさん　も　アメリカ"
                        },
                        {
                                kanji: "人",
                                reading: "じん"
                        },
                        {
                                text: "　です。"
                        }
                    ],
                        meaning: "Chị Mira là người Mỹ, anh Gupta cũng là người Mỹ",
                        audio: "lesson1_017",
                },
            ]
        }
    },

        {
        number: 7,
        pattern: "～さい",

        detail: {
            meaning: "tuổi.",

            explanations: [
            "✦ Câu hỏi tuổi : <strong>なんさい　ですか。</strong>(Bao nhiêu tuổi)",
            "✦ <strong>なんさい</strong> là từ để hỏi tuổi"
            ],

            usages: [
            "✦ Dùng để nói về tuổi",
            "✦ Trong tình huống trang trọng thường dùng câu :", 
            "<strong>おいくつ　ですか。</strong> để hỏi tuổi."
            ],

            notes: [
            "Xem bảng đọc số và đọc tuổi bên dưới"
            ],

            extraTable: {
                title: "Cách đọc số và tuổi",
                numberReadingAudio:"lesson1_018",
                ageReadingAudio:"lesson1_019",
                rows: [
                    {
                    number: "1",
                    numberReading: "いち", 
                    age: "<strong>1 tuổi</strong>",
                    ageReading: "<strong>いっさい</strong>",
                    },
                    {
                    number: "2",
                    numberReading: "に",                      
                    age: "2 tuổi",
                    ageReading: "にさい"
                    },
                    {
                    number: "3",
                    numberReading: "さん",                        
                    age: "3 tuổi",
                    ageReading: "さんさい"
                    },
                    {
                    number: "4",
                    numberReading: "よん / し",
                    age: "4 tuổi",
                    ageReading: "よんさい"
                    },

                    {
                    number: "5",
                    numberReading: "ご",
                    age: "5 tuổi",
                    ageReading: "ごさい"     
                    },
                    {
                    number: "6",
                    numberReading: "ろく",                       
                    age: "6 tuổi",
                    ageReading:"ろくさい"
                    },
                    {
                    number: "7",
                    numberReading: "なな / しち",
                    age: "7 tuổi",
                    ageReading: "ななさい" 
                    },

                    {
                    number: "8",
                    numberReading: "はち",
                    age: "<strong>8 tuổi</srong>",
                    ageReading: "<strong>はっさい</srong>"                       
                    },
                    {
                    number: "9",
                    numberReading: "きゅう / く",
                    age: "9 tuổi",
                    ageReading: "きゅうさい"                       
                    },
                    
                    {
                    number: "10",
                    numberReading: "じゅう",
                    age: "<strong>10 tuổi</strong>",
                    ageReading: "<strong>じゅっさい</strong>"                       
                    },
                    {
                    number: "11",
                    numberReading: "じゅういち",
                    age: "11 tuổi",
                    ageReading: "じゅういっさい"                       
                    },
                    {
                    number: "20",
                    numberReading: "にじゅう",
                    age: "<strong>20 tuổi</strong>",
                    ageReading: "<strong>はたち</strong>"                       
                    },
                    {
                    number: "21",
                    numberReading: "にじゅういち",
                    age: "<strong>21 tuổi</strong>",
                    ageReading: "<strong>にじゅういっさい</strong>"                       
                    },
                    {
                    number: "100",
                    numberReading: "ひゃく",
                    age: "...",
                    ageReading: "..."                       
                    },
                    {
                    number: "1000",
                    numberReading: "せん",
                    age: "...",
                    ageReading: "..."                       
                    },
                    {
                    number: "10 000",
                    numberReading: "いちまん",
                    age: "...",
                    ageReading: "..."                       
                    },
                ]
                },

            examples: [
             {
                sentenceParts: [
                    {
                        text: "ミラーさん　は　"
                    },
                    {
                        kanji: "何歳",
                        reading: "なんさい"
                    },
                    {
                        text: "　ですか。"
                    },
                ],
                    meaning: "Mira ơi, bạn bao nhiêu tuổi?",
                    audio: "lesson1_020",

                    answer: {
                        sentenceParts: [
                            {
                                text: "28"
                            },
                            {
                                kanji: "歳",
                                reading: "さい"
                            },
                            {
                                text: "　です。"
                            }
                        ],
                        meaning: "Tôi 28 tuổi.",
                        audio: "lesson1_021"
                    }
                 },
            ]
        }
        }
    ],

    practice: [
        {
            title: "Luyện tập 1",
            example: {
                content: "ミラー・アメリカ　→　<strong>ミラーさんは　アメリカじんです。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　やまだ・にほん　→",
                    answers: [
                        "やまださんは　にほんじんです。",
                        "山田さんは　日本人です。"
                    ]
                },
                {
                    prompt: "➋　ワット・イギリス　→",
                    answers: [
                        "ワットさんは　イギリスじんです。",
                        "ワットさんは　イギリス人です。"
                    ]
                },
                {
                    prompt: "➌　タワポン・タイ　→",
                    answers: [
                        "タワポンさんは　タイじんです。",
                        "タワポンさんは　タイ人です。"
                    ]
                },
                {
                    prompt: "➍　シュミット・ドイツ　→",
                    answers: [
                        "シュミットさんは　ドイツじんです。",
                        "シュミットさんは　ドイツ人です。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: "ミラー・かいしゃいん　→　<strong>ミラーさんは　かいしゃいんです。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　やまだ・ぎんこういん　→",
                    answers: [
                        "やまださんは　ぎんこういんです。",
                        "山田さんは　銀行員です。"
                    ]
                },
                {
                    prompt: "➋　ワット・せんせい　→",
                    answers: [
                        "ワットさんは　せんせいです。",
                        "ワットさんは　先生です。"
                    ]
                },
                {
                    prompt: "➌　タワポン・がくせい　→",
                    answers: [
                        "タワポンさんは　がくせいです。",
                        "タワポンさんは　学生です。"
                    ]
                },
                {
                    prompt: "➍　シュミット・かいしゃいん　→",
                    answers: [
                        "シュミットさんは　かいしゃいんです。",
                        "シュミットさんは　会社員です。"
                    ]
                }
        
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: "ミラーさん・ぎんこういん　→　<strong>ミラーさんは　ぎんこういん　じゃありません。</strong>"
            },

            questions: [
                {
                    prompt: "➊　やまださん・がくせい　→",
                    answers: [
                        "やまださんは　がくせい　じゃありません。",
                        "山田さんは　学生　じゃありません。"
                    ]
                },
                {
                    prompt: "➋　ワットさん・ドイツじん　→",
                    answers: [
                        "ワットさんは　ドイツじん　じゃありません。",
                        "ワットさんは　ドイツ人　じゃありません。"
                    ]
                },
                {
                    prompt: "➌　タワポンさん・せんせい　→",
                    answers: [
                        "タワポンさんは　せんせい　じゃありません。",
                        "タワポンさんは　先生　じゃありません。"
                    ]
                },
                {
                    prompt: "➍　シュミット・アメリカじん　→",
                    answers: [
                        "シュミットさんは　アメリカじん　じゃありません。",
                        "シュミットさんは　アメリカ人　じゃありません。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 4",

            example: {
                content: "ミラーさんは　アメリカじん　→　<strong>ミラーさんは　アメリカじんですか。</strong>"
            },

            questions: [
                {
                    prompt: "❶　やまださん・ぎんこういん　→",
                    answers: [
                        "やまださんは　ぎんこういんですか。",
                        "山田さんは　銀行員ですか。"
                    ]
                },
                {
                    prompt: "➋　ワットさん・かいしゃいん　→",
                    answers: [
                        "ワットさんは　かいしゃいんですか。",
                        "ワットさんは　会社員ですか。"
                    ]
                },
                {
                    prompt: "➌　タワポンさん・せんせい　→",
                    answers: [
                        "タワポンさんは　せんせい　ですか。",
                        "タワポンさんは　先生　ですか。"
                    ]
                },
                {
                    prompt: "➍　シュミットさん・ドイツじん　→",
                    answers: [
                        "シュミットさんは　ドイツじんですか。",
                        "シュミットさんは　ドイツ人ですか。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: "あのかたは　どなたですか。\n グプタ・IMC・社員　→　<strong>グプタさんです。IMCのしゃいんです。</strong>"
            },

            questions: [
                {
                    prompt: "❶　イー・AKC・けんきゅうしゃ　→",
                    answers: [
                        "イーさんです。AKCのけんきゅうしゃです。",
                        "イーさんです。AKCの研究者です。"
                    ]
                },
                {
                    prompt: "➋　ワン・こうべびょういん・いしゃ　→",
                    answers: [
                        "ワンさんです。こうべびょういんのいしゃです。",
                        "ワンさんです。神戸病院の医者です。"
                    ]
                },
                {
                   prompt: "➌　カリナ・ふじだいがく・がくせい　→",
                    answers: [
                        "カリナさんです。ふじだいがくのがくせいです。",
                        "カリナさんです。富士大学の学生です。"
                    ]
                },
                {
                    prompt: "➍　サントス・ブラジルエアー・しゃいん　→",
                    answers: [
                        "サントスさんです。ブラジルエアーのしゃいんです。",
                        "サントスさんです。ブラジルエアーの社員です。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: "ミラーさんは　かいしゃいんです。グプタさんも　かいしゃいんですか。\n→　<strong>はい、グプタさんも　かいしゃいんです。</strong>\n→　<strong>いいえ、グプタさんは　かいしゃいん　じゃありません。</strong>" ,
            },

            questions: [
                {
                    prompt: "❶　やまださんは　ぎんこういんです。\nイーさんも　ぎんこういんですか。<strong>（はい、）</strong>",
                    answers: [
                        "はい、イーさんも　ぎんこういんです。",
                        "はい、イーさんも　銀行員です。"
                    ]
                },
                {
                    prompt: "➋　ワットさんは　せんせいです。\nワンさんも　せんせいですか。<strong>（いいえ、）</strong>",
                    answers: [
                        "いいえ、ワンさんも　せんせい　じゃありません。",
                        "いいえ、ワンさんは　先生　じゃありません。"
                    ]
                },
                {
                    prompt: "➌　タワポンさんは　がくせいです。\nカリナさんも　がくせいですか。<strong>（はい、）</strong>",
                    answers: [
                        "はい、カリナさんも　がくせいです。",
                        "はい、カリナさんも　学生です。"
                    ]
                },
                {
                    prompt: "➍　シュミットさんは　ドイツじんです。\nサントスさんも　ドイツじんですか。<strong>（いいえ、）</strong>",
                    answers: [
                        "いいえ、サントスさんは　ドイツじん　じゃありません。",
                        "いいえ、サントスさんは　ドイツ人　じゃありません。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 7",

            example: {
                content: "ミラーさんは　なんさいですか。\nミラーさん・28　→　<strong>ミラーさんは　28さいです。</strong>",
            },

            questions: [
                {
                    prompt: "❶　たなかさん・38",
                    answers: [
                        "たなかさんは　38さいです。",
                        "田中さんは　38歳です。"
                    ]
                },
                {
                    prompt: "➋　ワットさん・45",
                    answers: [
                        "ワットさんは　45さいです。",
                        "ワットさんは　45歳です。"
                    ]
                },
                {
                    prompt: "➌　タワポンさん・19",
                    answers: [
                        "タワポンさんは　19さいです。",
                        "タワポンさんは　19歳です。"
                    ]
                },
                {
                    prompt: "➍　シュミットさん・52",
                    answers: [
                        "シュミットさんは　52さいです。",
                        "シュミットさんは　52歳です。"
                    ]
                }
            ]
        }
    ]
}