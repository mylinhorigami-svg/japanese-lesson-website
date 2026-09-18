const grammarLessonData = {
  level: "N5",

  lessonNumber: 3,

  title: "Ngữ pháp N5 - Bài 3",

  previousLesson: {
    href: "../lesson2/lesson2.html",
    label: "Bài 2"
  },

  nextLesson: {
    href: "../lesson4/lesson4.html",
    label: "Bài 4"
  },

  patterns: [
    {
      number: 1,
      pattern: "ここ／そこ／あそこ は N です。",
      detail: {
        meaning: "Chỗ này／chỗ đó／chỗ kia là N.",
        explanations: [
            "🔹<strong>ここ</strong> dùng để chỉ địa điểm ở phạm vi người nói.",
            "🔹<strong>そこ</strong> dùng để chỉ địa điểm ở phạm vi người nghe.",
            "🔹<strong>あそこ</strong> dùng để chỉ địa điểm ở xa cả người nói và người nghe.",
            "🔹<strong>N</strong> là danh từ chỉ địa điểm được nói đến."
        ],
        usages: [
          "✦ Dùng để chỉ thị một địa điểm",
        ],
        notes: [
          "Khi người nói và người nghe ở cùng 1 địa điểm thì cả 2 đều sử dụng <strong>ここ</strong>.",
        ],
        examples: [
          {
            sentenceParts: [
              {
                text: "❶　ここ　は　"
              },
              {
                kanji: "教室",
                reading: "きょうしつ"
              },
              {
                text: "　です。"
              }
            ],
            meaning: "Đây là lớp học.",
            audio: "lesson3_001"
          },

          {
            sentenceParts: [
            {
            text: "➋　そこは　"
            },
            {
                kanji: "食堂",
                reading: "しょくどう"
              },
              {
                text: "　です。"
              }
        ],
        meaning: "Đó là phòng ăn.",
        audio: "lesson3_002",
        },
        {
            sentenceParts: [
            {
            text: "➌　あそこは　お"
            },
            {
                kanji: "手洗",
                reading: "てあら"
              },
              {
                text: "い　です。"
              }
        ],
        meaning: "Kia là toilet.",
        audio: "lesson3_003",
        },

    ]
    }
},

    {
    number: 2,
    pattern: "Nは　ここ／そこ／あそこ　です。",
    detail: {
        meaning: "N thì ở đây／ở đó／ở kia.",
        explanations: [
        "🔹<strong>N</strong> là danh từ chỉ người, vật, địa điểm",
        
        ],
        usages: [
        "✦ Chỉ sự tồn tại của người, vật, địa điểm.",
        "✦ Sử dụng từ để hỏi: <strong>どこ</strong> để hỏi về địa điểm.",
        
        ],
        notes: [
        "🔸Xem ví dụ để dễ hiểu hơn",
        ],
        examples: [
        {
            sentenceParts: [
            {
                text: "❶　トイレは　どこ　ですか。"
            },
            ],
            meaning: "Toilet ở đâu?",
            audio: "lesson3_004",

            answer: {
            sentenceParts: [
                
                {
                text: "トイレは　あそこ　です。"
                },
                
            ],
            meaning: "Toilet ở đằng kia.",
            audio: "lesson3_005"
            }
        },

        {
           sentenceParts: [
            {
                text: "➋　エレベーターは　どこ　ですか。"
            },
            ],
            meaning: "Thang máy ở đâu?",
            audio: "lesson3_006",

            answer: {
            sentenceParts: [
                
                {
                text: "エレベーターは　ここ　です。"
                },
            ],
            meaning: "Thang máy ở đây.",
            audio: "lesson3_007"
            }
        },
        {
        sentenceParts: [
            {
                text: "➌　マイさんは　どこ　ですか。"
            },
            ],
            meaning: "Mai ở đâu?",
            audio: "lesson3_008",

            answers:[
            {
            sentenceParts: [
                {
                text: "マイさんは　"
                },
                {
                kanji: "会議室",
                reading: "かいぎしつ"
                },
                {
                text: "　です。"
                },
            ],
            meaning: "Mai ở phòng họp",
            audio: "lesson3_009"
            },
        ]
        }
        
        ]
    }
    },
    

    {
        number: 3,
        pattern: "Nは　こちら／そちら／あちら　です。",
        detail: {
            meaning: "N ở đằng này / đằng đó / đằng kia",
            explanations: [
                "🔸N là danh từ chỉ người, vật, địa điểm",
            ],
            usages: [
                "🔸Giống <strong>ここ／そこ／あそこ</strong> nhưng lịch sự hơn.",
                "🔸Sử dụng từ để hỏi <strong>どちら</strong>"
            ],
            notes: [
                "🔸Khi hỏi về công ty thì ý là hỏi công ty nào",
            ],
           examples: [
        {
            sentenceParts: [
            {
                text: "❶　でんわは　どちら　ですか。"
            },
            ],
            meaning: "Điện thoại ở đâu?",
            audio: "lesson3_010",

            answer: {
            sentenceParts: [
                {
                text: "あちら　です。"
                },
            ],
            meaning: "Ở đằng kia",
            audio: "lesson3_011"
            }
        },

        {
            sentenceParts: [
            {
                text: "➋　お"
            },
            {
                kanji: "国",
                reading: "くに"
            },
            {
                text: "は　どちら　ですか。"
            }
            ],
            meaning: "Đất nước của bạn ở đâu?",
            audio: "lesson3_012",

            answer: {
            sentenceParts: [
                {
                text: "ベトナム　です。"
                }
            ],
            meaning: "Việt Nam.",
            audio: "lesson3_013"
            }
        },

        {
            sentenceParts: [
            {
                text: "➌　あなたの"
            },
            {
                kanji: "会社",
                reading: "かいしゃ"
            },
            {
                text: "は　どちら　ですか。"
            }
            ],
            meaning: "Công ty bạn là công ty nào?",
            audio: "lesson3_014",

            answer: {
            sentenceParts: [
                {
                text: "FPT　です。"
                }
            ],
            meaning: "Là công ty FPT.",
            audio: "lesson3_015"
            }
        }
        ]
    }
    },

    {
        number: 4,
        pattern: "N1のN2",
        detail: {
            meaning: "N2 của N1",
            explanations: [
                "🔸N1 là danh từ chỉ nơi xuất xứ",
                "🔸N2 là danh từ chỉ vật được nói đến",
            ],
            usages: [
                "🔸Dùng để nói về nguồn gốc, xuất xứ của 1 đồ vật",
                "🔸Sử dụng từ để hỏi là <strong>どこの</strong>",
            ],
            notes: [
                "Khi nói về công ty thì ý nói công ty sản xuất cái gì",
            ],
           examples: [
        {
            sentenceParts: [
            {
                text: "❶　これは　どこの　"
            },
            {
                kanji: "自動車",
                reading: "じどうしゃ"
            },
            {
                text: "　ですか。"
            },
            ],
            meaning: "Cái này là ô tô của nước nào? / công ty nào?",
            audio: "lesson3_016",

            answer: {
            sentenceParts: [
                {
                kanji: "日本",
                reading: "にほん"
                },
                {
                text: "の"
                },
                {
                kanji: "自動車",
                reading: "じどうしゃ"
                },
                {
                text: "　です。"
                },
            ],
            meaning: "Ô tô của Nhật.",
            audio: "lesson3_017"
            }
        },

        {
            sentenceParts: [
            {
                text: "➋　FPTは　コンピューターの"
            },
            {
                kanji: "会社",
                reading: "かいしゃ"
            },
            {
                text: "　です。"
            }
            ],
            meaning: "FPT là công ty sản xuất máy tính",
            audio: "lesson3_018",
        }
        ]
    }
    },

    {
        number: 5,
        pattern: "いくら　ですか。",
        detail: {
            meaning: "Bao nhiêu tiền? / Giá bao nhiêu?",
            explanations: [
                "",
            ],
            usages: [
                "🔸Dùng để hỏi giá cả",
            ],
            notes: [
                "🔸Xem bảng đếm tiền yên bên dưới",
            ],

            extraTable: {
                title: "Cách đọc số tiền yên và số tầng",
                numberReadingAudio:"lesson3_019",
                ageReadingAudio:"lesson3_020",
                rows: [
                    {
                    number: "1 yên",
                    numberReading: "いちえん", 
                    age: "<strong>Tầng 1</strong>",
                    ageReading: "<strong>いっかい</strong>",
                    },
                    {
                    number: "2 yên",
                    numberReading: "にえん",                      
                    age: "Tầng 2",
                    ageReading: "にかい"
                    },
                    {
                    number: "3 yên",
                    numberReading: "さんえん",                        
                    age: "<strong>Tầng 3</strong>",
                    ageReading: "<strong>さんがい</strong>"
                    },
                    {
                    number: "<strong>4 yên</strong>",
                    numberReading: "<strong>よえん</strong>",
                    age: "Tầng 4",
                    ageReading: "よんかい"
                    },

                    {
                    number: "5 yên",
                    numberReading: "ごえん",
                    age: "Tầng 5",
                    ageReading: "ごかい"     
                    },
                    {
                    number: "6 yên",
                    numberReading: "ろくえん",                       
                    age: "<strong>Tầng 6</strong>",
                    ageReading:"<strong>ろっかい</strong>"
                    },
                    {
                    number: "7 yên",
                    numberReading: "ななえん",
                    age: "Tầng 7",
                    ageReading: "ななかい" 
                    },

                    {
                    number: "8 yên",
                    numberReading: "はちえん",
                    age: "<strong>Tầng 8</srong>",
                    ageReading: "<strong>はっかい</srong>"                       
                    },
                    {
                    number: "9 yên",
                    numberReading: "きゅうえん",
                    age: "Tầng 9",
                    ageReading: "きゅうかい"                       
                    },
                    
                    {
                    number: "10 yên",
                    numberReading: "じゅうえん",
                    age: "<strong>Tầng 10</strong>",
                    ageReading: "<strong>じゅっかい</strong>"                       
                    },
                    {
                    number: "11 yên",
                    numberReading: "じゅういちえん",
                    age: "Tầng 11",
                    ageReading: "じゅういっかい"                       
                    },
                    {
                    number: "100 yên",
                    numberReading: "ひゃくえん",
                    age: "...",
                    ageReading: "..."                       
                    },
                    {
                    number: "300 yên",
                    numberReading: "<strong>さんびゃくえん</strong>",
                    age: "...",
                    ageReading: "..."                      
                    },
                    {
                    number: "600 yên",
                    numberReading: "<strong>ろっびゃくえん</strong>",
                    age: "...",
                    ageReading: "..."                                          
                    },
                    {
                    number: "<strong>800 yên<strong>",
                    numberReading: "<strong>はっぴゃくえん<strong>",
                    age: "...",
                    ageReading: "..."                       
                    },
                    {
                    number: "<strong>1000 yên</strong>",
                    numberReading: "<strong>せんえん<strong>",
                    age: "...",
                    ageReading: "..."                    
                    },
                    {
                    number: "<strong>3000 yên<strong>",
                    numberReading: "<strong>さんぜんえん<strong>",
                    age: "...",
                    ageReading: "..."    
                    },
                    {
                    number: "6000 yên",
                    numberReading: "ろくせんえん",
                    age: "...",
                    ageReading: "..."       
                    },
                    {
                    number: "<strong>8000 yên<strong>",
                    numberReading: "<strong>はっせんえん<strong>",
                    age: "...",
                    ageReading: "..."        
                    },
                    {
                    number: "10 000 yên",
                    numberReading: "いちまんえん",
                    age: "...",
                    ageReading: "..."             
                    },
                    {
                    number: "<strong>Bao nhiêu tiền?<strong>",
                    numberReading: "<strong>いくら<strong>",
                    age: "<strong>Tầng mấy？<strong>",
                    ageReading: "<strong>なんがい<strong>"             
                    },
                ]
                },
           examples: [
        {
            sentenceParts: [
            {
                text: "❶　この"
            },
            {
                kanji: "時計",
                reading: "とけい"
            },
            {
                text: "は　いくら　ですか。"
            },
            ],
            meaning: "Đồng hồ này bao nhiêu tiền ?",
            audio: "lesson3_021",

            answer: {
            sentenceParts: [
                {
                text: "18,600"
                },
                {
                kanji: "円",
                reading: "えん"
                },
                {
                text: "　です。"
                },
            ],
            meaning: "18,600 yên",
            audio: "lesson3_022"
            }
        },

        {
            sentenceParts: [
            {
                text: "➋　このネクタイは　いくら　ですか。"
            },
            
            ],
            meaning: "Cái cà vạt này bao nhiêu tiền",
            audio: "lesson3_023",

            answer: {
            sentenceParts: [
                {
                text: "1,500"
                },
                {
                kanji: "円",
                reading: "えん"
                },
                {
                text: "　です。"
                },
            ],
            meaning: "1,500 yên",
            audio: "lesson3_024"
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
                content: "しょくどう　→　<strong>ここは　しょくどう　です。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　うけつけ　→",
                    answers: [
                        "ここは　うけつけ　です。",
                        "ここは　受付　です。"
                    ]
                },
                {
                    prompt: "➋　じむしょ　→",
                    answers: [
                        "ここは　じむしょです。",
                        "ここは事務所です。"
                    ]
                },
                {
                    prompt: "➌　かいぎしつ　→",
                    answers: [
                        "ここは　かいぎしつ　です。",
                        "ここは　会議室　です。"
                    ]
                },
                {
                    prompt: "➍　トイレ　→",
                    answers: [
                        "ここは　トイレ　です。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "トイレ　→　<strong>トイレは　どこ　ですか。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　かいぎしつ　→",
                    answers: [
                        "かいぎしつは　どこ　ですか。",
                        "会議室は　どこ　ですか。"
                    ]
                },
                {
                    prompt: "➋　じどうはんばいき　→",
                    answers: [
                        "自動販売機は　どこ　ですか。",
                        "じどうはんばいきは　どこ　ですか。"
                    ]
                },
                {
                    prompt: "➌　やまださん　→",
                    answers: [
                        "やまださんは　どこ　ですか",
                        "山田さんはどこ　ですか",
                    ]
                },
        
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: "じどうはんばいきは　どこ　ですか。（２かい）　→　<strong>２かい　です。</strong>"
            },

            questions: [
                {
                    prompt: "➊　トイレは　どこ　ですか。（あそこ）　→",
                    answers: [
                        "あそこ　です。",
                    ]
                },
                {
                    prompt: "➋　テレーザちゃんは　どこですか。\n（きょうしつ）　→",
                    answers: [
                        "きょうしつです。",
                        "教室です。",
                    ]
                },
                {
                    prompt: "➌　しょくどうは　どこですか。（ちか）　→",
                    answers: [
                        "ちかです。",
                        "地下です。",
                    ]
                },

                {
                    prompt: "➍　かいぎしつの　かぎは　どこですか。\n（じむしょ）　→",
                    answers: [
                        "じむしょです。",
                        "事務所です。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 4",

            example: {
                content: "かいだんは　どちら　ですか。（あちら）　→　<strong>あちらです。</strong>"
            },

            questions: [
                {
                    prompt: "❶　エスカレーターは　どちら　ですか。\n（そちら）　→",
                    answers: [
                        "そちらです。",
                    ]
                },
                {
                    prompt: "➋　でんわは　どちらですか。（こちら）　→",
                    answers: [
                        "こちらです。",
                    ]
                },
                {
                    prompt: "➌　カリナさんの　へやは　どちらですか。\n（さんがい）　→",
                    answers: [
                        "さんがいです。",
                        "3階です。。"
                    ]
                },
                {
                    prompt: "➍　うちは　どちらですか。（おおさか）　→",
                    answers: [
                        "おおさかです。",
                        "大阪です。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: "これは　どこの　かばん　ですか。（かんこく）　→　<strong>かんこくの　かばんです。</strong>"
            },

            questions: [
                {
                    prompt: "❶　これは　どこの　ワインですか。\n（フランス）　→",
                    answers: [
                        "フランスのワインです。",
                    ]
                },
                {
                    prompt: "➋　これは　どこの　カメラですか。（にほん）　→",
                    answers: [
                        "にほんの　カメラです。",
                        "日本の　カメラです。",
                    ]
                },
                {
                   prompt: "➌　これは　どこの　パソコンですか。\n（アメリカ）　→",
                    answers: [
                        "アメリカの　パソコンです。",
                    ]
                },
                {
                    prompt: "➍　これは　どこの　くるまですか。（ドイツ）　→",
                    answers: [
                        "ドイツの　くるまです。",
                        "ドイツの　車です。",
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: "このかばんは　いくら　ですか。（￥7,300）　→　<strong>7,300えんです。</strong>" ,
            },

            questions: [
                {
                    prompt: "❶　このワインは　いくら　ですか。(￥3,200)　→　",
                    answers: [
                        "3,200えんです。",
                        "3,200円です。"
                    ]
                },
                {
                    prompt: "➋　このパソコンは　いくらですか。（￥25,800）　→",
                    answers: [
                        "25,800えんです。",
                        "25,800円です。",
                    ]
                },
                {
                    prompt: "➌　このくるまは　いくらですか。（￥4,500,000）　→",
                    answers: [
                        "4,500,000えんです。",
                        "4,500,000円です。。"
                    ]
                },
                {
                    prompt: "➍　このカメラは　いくらですか。（￥143,000）　→",
                    answers: [
                        "143,000えんです。",
                        "143,000円です。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: "（わたし、わたしは、わたしの）ミラーです。　→　<strong>わたしは</strong>"
            },

            questions: [
                {
                    prompt: "❶　（これ、この、ここ）は　ドイツの　くるまです。",
                    answers: [
                        "これ"
                    ]
                },
                {
                    prompt: "➋　（それ、その、そこ）かばんは　（わたし、わたしは、わたしの）です。",
                    answers: [
                        "その、わたしの"
                    ]
                },
                {
                    prompt: "➌　じむしょは　（あれ、あの、あそこ）です。",
                    answers: [
                        "あそこ"
                    ]
                },
                {
                    prompt: "➍　すみません。でんわは　（だれ、なん、どこ）ですか。",
                    answers: [
                        "どこ"
                    ]
                }
            ]
        },
    ]
};