const grammarLessonData = {
  level: "N5",

  lessonNumber: 2,

  title: "Ngữ pháp N5 - Bài 2",

  previousLesson: {
    href: "../lesson1/lesson1.html",
    label: "Bài 1"
  },

  nextLesson: {
    href: "../lesson3/lesson3.html",
    label: "Bài 3"
  },

  patterns: [
    {
      number: 1,
      pattern: "これ／それ／あれ は N です",
      detail: {
        meaning: "Cái này／cái đó／cái kia là N.",
        explanations: [
            "🔹<strong>これ</strong> dùng để chỉ vật ở gần người nói.",
            "🔹<strong>それ</strong> dùng để chỉ vật ở xa người nói(gần người nghe).",
            "🔹<strong>あれ</strong> dùng để chỉ vật ở xa cả người nói và người nghe.",
            "🔹<strong>N</strong> là danh từ chỉ vật được nói đến."
        ],
        usages: [
          "✦ Dùng để chỉ thị một vật, việc nào đó",
          "✦ Câu hỏi với từ để hỏi: \n<strong>これは　なん　ですか。</strong> (Cái này là cái gì?)",
        ],
        notes: [
          "Không có danh từ liền sau <strong>これ／それ／あれ</strong>.",
        ],
        examples: [
          {
            sentenceParts: [
              {
                text: "❶　これ　は　"
              },
              {
                kanji: "本",
                reading: "ほん"
              },
              {
                text: "　です。"
              }
            ],
            meaning: "Đây là cuốn sách.",
            audio: "lesson2_001"
          },

          {
            sentenceParts: [
            {
            text: "➋　これ　は　ノート　ですか。"
            }
        ],
        meaning: "Cái này là cuốn tập phải không?",
        audio: "lesson2_002",

        answers: [
            {
            sentenceParts: [
                {
                text: "はい、そうです。"
                },
            ],
            meaning: "Vâng, đúng vậy.",
            audio: "lesson2_003"
            },

            {
            sentenceParts: [
                {
                text: "いいえ、それ　は　"
                },
                {
                kanji: "手帳",
                reading: "てちょう"
                },
                {
                text: "　です。"
                }
            ],
            meaning: "Không, cái đó là cuốn sổ tay.",
            audio: "lesson2_004"
            },
        ]
    }
    ]
    }
},

    {
    number: 2,
    pattern: "このN／そのN／あのN",
    detail: {
        meaning: "cái N này／cái N đó／cái N kia.",
        explanations: [
        "🔹<strong>N</strong> là danh từ chỉ người, vật, việc",
        "🔹<strong>この／その／あの</strong> là từ bổ nghĩa cho danh từ N.",
        
        ],
        usages: [
        "✦ Nói đến người, vật cụ thể nào đó.",
        "✦ Câu hỏi dùng cho người: \n<strong>だれのN　ですか。</strong> (Là N của ai?)", 
        "✦ Câu hỏi dùng cho vật: \n<strong>なんのN　ですか。</strong> (Là N của cái gì?)", 
        
        ],
        notes: [
        "🔸Luôn có danh từ theo sau <strong>この／その／あの</strong>",
        ],
        examples: [
        {
            sentenceParts: [
            {
                text: "❶　それは　なんの　"
            },
            {
                kanji: "雑誌",
                reading: "ざっし"
            },
            {
                text: "　ですか。"
            }
            ],
            meaning: "Cái đó là tạp chí về cái gì?",
            audio: "lesson2_005",

            answer: {
            sentenceParts: [
                {
                kanji: "車",
                reading: "くるま"
                },
                {
                text: "の"
                },
                {
                kanji: "雑誌",
                reading: "ざっし"
                },
                {
                text: "です。"
                },
            ],
            meaning: "Là tạp chí về xe hơi.",
            audio: "lesson2_006"
            }
        },

        {
           sentenceParts: [
            {
                text: "➋　あれは　だれの　かばん　ですか。"
            },
            ],
            meaning: "Cái kia là túi xách của ai?",
            audio: "lesson2_007",

            answer: {
            sentenceParts: [
                {
                kanji: "佐藤",
                reading: "さとう"
                },
                {
                text: "さんの　かばん　です。"
                },
            ],
            meaning: "Là túi xách của anh Satou.",
            audio: "lesson2_008"
            }
        },
        {
        sentenceParts: [
            {
                text: "➌　このかぎ　は　あなたの　ですか。"
            },
            ],
            meaning: "Cái chìa khóa này là của bạn phải không?",
            audio: "lesson2_009",

            answers:[
            {
            sentenceParts: [
                {
                text: "はい、そうです。/　はい、わたしの　です。"
                },
            ],
            meaning: "Vâng, đúng vậy./　Vâng, là của tôi.",
            audio: "lesson2_010"
            },
            {
            sentenceParts: [
                
                {
                text: "いいえ、わたしの　じゃありません。"
                },
                
            ],
            meaning: "Không, không phải của tôi.",
            audio: "lesson2_011"
            },
        ]
        }
        ]
    }
    },
    

    {
        number: 3,
        pattern: "N1　ですか。N2　ですか。",
        detail: {
            meaning: "Là N1 hay N2 ?",
            explanations: [
                "🔸N1, N2 là danh từ chỉ người, vật",
            ],
            usages: [
                "Để lựa chọn khi không biết rõ đối tượng được nói đến",
            ],
            notes: [
                "Không dùng <strong>はい／いいえ</strong> để trả lời.",
            ],
           examples: [
        {
            sentenceParts: [
            {
                text: "❶　それは「あ」ですか。「お」ですか。"
            },
            ],
            meaning: "Cái đó là \"a\" hay \"o\"?",
            audio: "lesson2_012",

            answer: {
            sentenceParts: [
                {
                text: "それは「あ」です。"
                },
        
            ],
            meaning: "Đó là \"a\".",
            audio: "lesson2_013"
            }
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
                text: "は　ミラーさんですか。カリナさんですか。"
            }
            ],
            meaning: "Người kia là Mira-san hay Karina-san?",
            audio: "lesson2_014",

            answer: {
            sentenceParts: [
                {
                text: "ミラーさんです。"
                }
            ],
            meaning: "Là Mira-san.",
            audio: "lesson2_015"
            }
        }
        ]
    }
    }
],

    practice: [
        {
            title: "Luyện tập 1",
            example: {
                content: "これ・じしょ　→　<strong>これは　じしょです。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　それ・かばん　→",
                    answers: [
                        "それは　かばんです。"
                    ]
                },
                {
                    prompt: "➋　これ・かぎ　→",
                    answers: [
                        "これは　かぎです。"
                    ]
                },
                {
                    prompt: "➌　あれ・テレビ　→",
                    answers: [
                        "あれは　テレビです。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "これは　ほんですか。（ほん）　→　<strong>はい、ほんです。</strong>",
                        "これは　てちょうですか。（ほん）　→　<strong>いいえ、ほんです。</strong>"
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　これは　とけい　ですか。（とけい）　→",
                    answers: [
                        "はい、とけいです。",
                        "はい、時計です。"
                    ]
                },
                {
                    prompt: "➋　これは　ラジオ　ですか。（カメラ）　→",
                    answers: [
                        "いいえ、カメラです。",
                    ]
                },
                {
                    prompt: "➌　これは　えんぴつ　ですか。（ボールペン）　→",
                    answers: [
                        "いいえ、ボールペンです。",
                    ]
                },
                {
                    prompt: "➍　これは　いす　ですか。（いす）　→",
                    answers: [
                        "はい、いすです。",
                        "はい、椅子です。"
                    ]
                }
        
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: "これは　ほんですか。ざっしですか。（ほん）　→　<strong>ほん　です。</strong>"
            },

            questions: [
                {
                    prompt: "➊　これは「い」ですか。「り」ですか。（い）　→",
                    answers: [
                        "い　です。",
                    ]
                },
                {
                    prompt: "➋　これは　「１」ですか。「７」ですか。（７）　→",
                    answers: [
                        "7　です。",
                    ]
                },
                {
                    prompt: "➌　これは「シ」ですか。「ツ」ですか。（ツ）　→",
                    answers: [
                        "ツ　です。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 4",

            example: {
                content: "それは　なんの　かぎですか。（くるま）　→　<strong>くるまの　かぎです。</strong>"
            },

            questions: [
                {
                    prompt: "❶　それは　なんの　ざっしですか。（くるま）　→",
                    answers: [
                        "くるまの　ざっしです。",
                        "車の雑誌です。"
                    ]
                },
                {
                    prompt: "➋　これは　なんの　CDですか。（にほんご）　→",
                    answers: [
                        "にほんごの　CDです。",
                        "日本語のCDです。"
                    ]
                },
                {
                    prompt: "➌　あれは　なんの　ざっしですか。（カメラ）　→",
                    answers: [
                        "カメラの　ざっしです。",
                        "カメラの雑誌です。"
                    ]
                },
                {
                    prompt: "➍　これは　なんの　ほんですか。（にほんご）　→",
                    answers: [
                        "にほんごの　ほんです。",
                        "日本語の本です。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: "これは　だれの　ノートですか。（カリナさん）　→　<strong>カリナさんの　ノートです。</strong>"
            },

            questions: [
                {
                    prompt: "❶　これは　だれの　かばんですか。\n（やまださん）　→",
                    answers: [
                        "やまださんの　かばんです。",
                        "山田さんの　かばんです。"
                    ]
                },
                {
                    prompt: "➋　これは　だれの　カメラですか。\n（サントスさん）　→",
                    answers: [
                        "サントスさんの　カメラです。",
                    ]
                },
                {
                   prompt: "➌　これは　だれの　かさですか。\n（さとうさん）　→",
                    answers: [
                        "さとうさんの　かさです。",
                        "佐藤さんの　傘です。"
                    ]
                },
                {
                    prompt: "➍　これは　だれの　てちょうですか。\n（ミラーさん）　→",
                    answers: [
                        "ミラーさんの　てちょうです。",
                        "ミラーさんの　手帳です。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: "このノートは　だれのですか。（カリナさん）　→　<strong>カリナさんの　です。</strong>" ,
            },

            questions: [
                {
                    prompt: "❶　このかばんは　だれの　ですか。\n（やまださん）　→　",
                    answers: [
                        "やまださんのです。",
                        "山田さんのです。"
                    ]
                },
                {
                    prompt: "➋　このカメラは　だれの　ですか。\n（サントスさん）　→",
                    answers: [
                        "サントスさんのです。",
                    ]
                },
                {
                    prompt: "➌　このかさは　だれの　ですか。\n（さとうさん）　→",
                    answers: [
                        "さとうさんのです。",
                        "佐藤さんのです。"
                    ]
                },
                {
                    prompt: "➍　このてちょうは　だれの　ですか。\n（ミラーさん）　→",
                    answers: [
                        "ミラーさんのです。",
                        "ミラーさんのです。"
                    ]
                }
            ]
        },
    ]
};