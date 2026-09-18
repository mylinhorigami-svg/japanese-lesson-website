const grammarLessonData = {
  level: "N5",

  lessonNumber: 4,

  title: "Ngữ pháp N5 - Bài 4",

  previousLesson: {
    href: "../lesson3/lesson3.html",
    label: "Bài 3"
  },

  nextLesson: {
    href: "../lesson5/lesson5.html",
    label: "Bài 5"
  },

  patterns: [
    {
      number: 1,
      pattern: "～じ、～ふん（ぷん）",
      detail: {
        meaning: "～Giờ, ～Phút",
        explanations: [
            "🔹<strong>～じ</strong> dùng để chỉ giờ.",
            "🔹<strong>～ふん（ぷん）</strong> dùng để chỉ phút.",
        ],
        usages: [
          "✦ Sử dụng đẻ nói về giờ giấc",
          "✦ Câu hỏi giờ : <strong>なんじ　ですか。</strong> (Mấy giờ?)",
          "✦ Câu hỏi giờ : <strong>なんぷん　ですか。</strong> (Mấy phút?)",
        ],
        notes: [
          "Xem bảng đọc giờ, phút bên dưới",
        ],

        extraTable: {
                title: "Cách đọc giờ phút",
                headers: [
                    {
                    text: "Giờ",
                    width: "25%"
                    },
                    {
                    text: "Cách đọc giờ",
                    audio: "lesson4_001",
                    width: "35%"
                    },
                    {
                    text: "Phút",
                    width: "25%"
                    },
                    {
                    text: "Cách đọc phút",
                    audio: "lesson4_002",
                    width: "35%"
                    }
                ],
                rows: [
                    {
                    number: "1:00",
                    numberReading: "いちじ", 
                    age: "1 phút",
                    ageReading: "<strong>いっぷん</strong>",
                    },
                    {
                    number: "2:00",
                    numberReading: "にじ",                      
                    age: "2 phút",
                    ageReading: "にふん"
                    },
                    {
                    number: "3:00",
                    numberReading: "さんじ",                        
                    age: "<strong>3 phút</strong>",
                    ageReading: "<strong>さんぷん</strong>"
                    },
                    {
                    number: "<strong>4:00</strong>",
                    numberReading: "<strong>よじ</strong>",
                    age: "<strong>4 phút<strong>",
                    ageReading: "<strong>よんぷん<strong>"
                    },

                    {
                    number: "5:00",
                    numberReading: "ごじ",
                    age: "5 phút",
                    ageReading: "ごふん"     
                    },
                    {
                    number: "6:00",
                    numberReading: "ろくじ",
                    age: "<strong>6 phút</strong>",
                    ageReading:"<strong>ろっぷん</strong>"
                    },
                    {
                    number: "<strong>7:00</strong>",
                    numberReading: "<strong>しちじ</strong>",                  
                    age: "<strong>7 phút</strong>",
                    ageReading:"<strong>ななふん</strong>"
                    },
                    {
                    number: "8:00",
                    numberReading: "はちじ",
                    age: "<strong>8 phút</strong>",
                    ageReading:"<strong>はっぷん</strong>"
                    },

                    {
                     number: "<strong>9:00</strong>",
                    numberReading: "<strong>くじ</strong>",
                    age: "<strong>9 phút</srong>",
                    ageReading: "<strong>きゅうふん</srong>"                       
                    },
                   {
                    number: "10:00",
                    numberReading: "じゅうじ",
                    age: "<strong>10 phút</strong>",
                    ageReading:"<strong>じゅっぷん</strong>"
                    },
                    
                    {
                    number: "11:00",
                    numberReading: "じゅういちじ",
                    age: "15 phút",
                    ageReading:"じゅうごふん"
                    },
                    {
                    number: "12:00",
                    numberReading: "じゅうにじ",
                    age: "<strong>20 phút</strong>",
                    ageReading:"<strong>にじゅっぷん</strong>"
                    },
                    {
                    number: "00:00",
                    numberReading: "れいじ",
                    age: "<strong>30 phút</strong>",
                    ageReading:"<strong>さんじゅっぷん</strong>"
                    },
                    {
                    number: "<strong>1:30<strong>",
                    numberReading: "<strong>いちじはん<strong>",
                    age: "<strong>40 phút</strong>",
                    ageReading:"<strong>よんじゅっぷん</strong>"
                    },
                    {
                    number: "<strong>6:00 AM<strong>",
                    numberReading: "<strong>ごぜんろくじ<strong>",
                    age: "<strong>45 phút</strong>",
                    ageReading:"<strong>よんじゅうごふん</strong>"
                    },                                     
                    {
                    number: "<strong>7:00 PM<strong>",
                    numberReading: "<strong>ごごしちじ<strong>",
                    age: "<strong>50 phút</strong>",
                    ageReading:"<strong>ごじゅっぷん</strong>"
                    },   
                    {
                        number: "<span class='grammar-highlight'>Mấy giờ ?</span>",
                        numberReading: "<span class='grammar-highlight'>なんじ</span>",
                        age: "<span class='grammar-highlight'>Mấy phút ?</span>",
                        ageReading: "<span class='grammar-highlight'>なんぷん</span>"
                    },
                ]
                },
        examples: [
          {
            sentenceParts: [
            {
                text: "❶　"
            },
            {
                kanji: "今",
                reading: "いま"
            },
            {
                text: "、"
            },
            {
                kanji: "何時",
                reading: "なんじ"
            },
            {
                text: "　ですか。"
            },

            ],
            meaning: "Bây giờ là mấy giờ?.",
            audio: "lesson4_003",

            answer: {
            sentenceParts: [
                {
                text: "9"
                },
                {
                kanji: "時半",
                reading: "じはん"
                },
                {
                text: "　です。"
                },
                
            ],
            meaning: "9 giờ rưỡi",
            audio: "lesson4_004"
            }

          },

          {
            sentenceParts: [
                {
            text: "➋　"
            },
            {
                kanji: "東京",
                reading: "とうきょう"
            },
            {
            text: "は　"
            },
            {
                kanji: "今",
                reading: "いま"
              },
              {
                text: "、"
              },
               {
                kanji: "何時",
                reading: "なんじ"
              },
              {
                text: "　ですか。"
              }
        ],
        meaning: "Tokyo bây giờ là mấy giờ ?.",
        audio: "lesson4_005",

         answer: {
            sentenceParts: [
                {
                text: "10"
                },
                {
                kanji: "時",
                reading: "じ"
                },
                {
                text: "45"
                },
                {
                kanji: "分",
                reading: "ふん"
                },
                {
                text: "　です。"
                },
                
            ],
            meaning: "10 giờ 45 phút.",
            audio: "lesson4_006"
            }
        },
    ]
    }
},

    {
    number: 2,
    pattern: "Nは　なんようび　ですか。",
    detail: {
        meaning: "N là thứ mấy ?.",
        explanations: [
        "🔹<strong>N</strong> là danh từ chỉ ngày",
        
        ],
        usages: [
        "✦ Sử dụng để nói về 7 ngày trong tuần",
        ],
        notes: [
        "🔸Xem ví dụ bên dưới",
        ],
        examples: [
        {
            sentenceParts: [
            {
                text: "❶　"
            },
            {
                kanji: "今日",
                reading: "きょう"
                },
                {
                text: "は　"
                },
                {
                kanji: "何曜日",
                reading: "なんようび"
                },
                {
                text: "　ですか。"
                },
            ],
            meaning: "Hôm nay là thứ mấy ?",
            audio: "lesson4_007",

            answer: {
            sentenceParts: [
                
                {
                kanji: "今日",
                reading: "きょう"
                },
                {
                text: "は　"
                },
                {
                kanji: "月曜日",
                reading: "げつようび"
                },
                {
                text: "　です。"
                },
                
            ],
            meaning: "Hôm nay là thứ 2.",
            audio: "lesson4_008"
            }
        },

        {
           sentenceParts: [
            {
                text: "➋　あさっては　"
            },
                {
                kanji: "何曜日",
                reading: "なんようび"
                },
                {
                text: "　ですか。"
                },
            ],
            meaning: "Ngày kia là thứ mấy ?",
            audio: "lesson4_009",

            answer: {
            sentenceParts: [
                
                {
                text: "あさっては　"
                },
                {
                kanji: "水曜日",
                reading: "すいようび"
                },
                {
                text: "　です。"
                },               
            ],
            meaning: "Ngày kia là thứ 4.",
            audio: "lesson4_010"
            }
        },
        ]
    }
},
    
    {
        number: 3,
        pattern: "N に　+　Vます",
        detail: {
            meaning: "Làm V vào lúc N.",
            explanations: [
                "🔸<strong>N</strong> là danh từ chỉ thời gian",
                "🔸<strong>に</strong> là trợ từ theo sau danh từ chỉ ngày, giờ",
            ],
            usages: [
                "✦ Sử dụng để nói về hoạt động vào thời gian nào đó",
            ],
            notes: [
                "🔸Ngoài danh từ chỉ ngày, giờ thì không cần sử dụng trợ từ <strong>に</strong>",
                "🔸Xem bảng chia thì động từ bên dưới",
            ],

            extraTable: {
                title: "Cách chia thì động từ",

                headers: [
                    {
                    text: "Hiện tại\nTương lai",
                    audio: "lesson4_011",
                    width: "20%"
                    },
                    {
                    text: "Quá khứ",
                    audio: "lesson4_012",
                    width: "25%"
                    },
                    {
                    text: "Phủ định",
                    audio: "lesson4_013",
                    width: "25%"
                    },
                    {
                    text: "Phủ định quá khứ",
                    audio: "lesson4_014",
                    width: "30%"
                    }
                ],

                rows: [
                    {
                        number: "おきます",
                        numberReading: "おきました",
                        age: "おきません",
                        ageReading: "おきませんでした"
                    },
                    {
                        number: "ねます",
                        numberReading: "ねました",
                        age: "ねません",
                        ageReading: "ねませんでした"
                    },
                    {
                        number: "はたらきます",
                        numberReading: "はたらきました",
                        age: "はたらきません",
                        ageReading: "はたらきませんでした"
                    },
                    {
                        number: "やすみます",
                        numberReading: "やすみました",
                        age: "やすみません",
                        ageReading: "やすみませんでした"
                    },
                    {
                        number: "べんきょうします",
                        numberReading: "べんきょうしました",
                        age: "べんきょうしません",
                        ageReading: "べんきょうしませんでした"
                    },
                    {
                        number: "はじめます",
                        numberReading: "はじめました",
                        age: "はじめません",
                        ageReading: "はじめませんでした"
                    },
                    {
                        number: "おわります",
                        numberReading: "おわりました",
                        age: "おわりません",
                        ageReading: "おわりませんでした"
                    },
                ]
                },
           examples: [
        {
            sentenceParts: [
            {
                text: "❶　"
            },
            {
                kanji: "毎朝",
                reading: "まいあさ"
            },
            {
                text: "　６"
            },
            {
                kanji: "時",
                reading: "じ"
            },
            {
                text: "に　"
            },
            {
                kanji: "起",
                reading: "お"
            },
            {
                text: "きます。"
            },
            ],
            meaning: "Mỗi sáng tôi thức dậy lúc 6 giờ",
            audio: "lesson4_015",
        },

        {
            sentenceParts: [
            {
                text: "➋　"
            },
            {
                kanji: "明日",
                reading: "あした"
            },
            {
                text: "　"
            },
            {
                kanji: "休",
                reading: "やす"
            },
            {
                text: "みます。"
            }
            ],
            meaning: "Ngày mai tôi nghỉ (làm, học, ...)",
            audio: "lesson4_016",
        },

        {
            sentenceParts: [
            {
                text: "➌　"
            },
            {
                kanji: "昨日",
                reading: "きのう"
            },
            {
                text: "　"
            },
            {
                kanji: "勉強",
                reading: "べんきょう"
            },
            {
                text: "しませんでした。"
            }
            ],
            meaning: "Hôm qua tôi không học",
            audio: "lesson4_017",
        },
        ]
    }
    },

    {
        number: 4,
        pattern: "なんじ　に　Vますか。",
        detail: {
            meaning: "Làm V lúc mấy giờ?",
            explanations: [
                ""
            ],
            usages: [
                "🔸Dùng để hỏi giờ hoạt động",
            ],
            notes: [
                "Chú ý sử dụng đúng thì của động từ",
            ],
           examples: [
        {
            sentenceParts: [
            {
                text: "❶　"
            },
            {
                kanji: "昨日",
                reading: "きのう"
            },
            {
                text: "の"
            },
            {
                kanji: "晩",
                reading: "ばん"
            },
            {
                text: "　"
            },
            {
                kanji: "何時",
                reading: "なんじ"
            },
            {
                text: "に　"
            },
            {
                kanji: "寝",
                reading: "ね"
            },
             {
                text: "ましたか。"
            },
            ],
            meaning: "Tối hôm qua ngủ lúc mấy giờ?",
            audio: "lesson4_018",

            answer: {
            sentenceParts: [
                {
                text: "11"
                },
                {
                kanji: "時",
                reading: "じ"
                },
                {
                text: "に　"
                },
                {
                kanji: "寝",
                reading: "ね"
                },
                {
                text: "ました。"
                },
            ],
            meaning: "Ngủ lúc 11 giờ.",
            audio: "lesson4_019"
            }
        },

        {
            sentenceParts: [
            {
                text: "➋　"
            },
            {
                kanji: "明日",
                reading: "あした"
            },
            
            {
                text: "の"
            },
            {
                kanji: "会議",
                reading: "かいぎ"
            },
            {
                text: "は"
            },
            {
                text: "　"
            },
            {
                kanji: "何時",
                reading: "なんじ"
            },
            {
                text: "に　"
            },
            {
                kanji: "始",
                reading: "はじ"
            },
             {
                text: "めますか。"
            },
            ],
            meaning: "Cuộc họp ngày mai bắt đầu lúc mấy giờ?",
            audio: "lesson4_020",

            answer: {
            sentenceParts: [
                {
                text: "9"
                },
                {
                kanji: "時",
                reading: "じ"
                },
                {
                text: "に　"
                },
                {
                kanji: "始",
                reading: "はじ"
                },
                {
                    text: "めます。"
                },
            ],
            meaning: "Bắt đầu lúc 9 giờ.",
            audio: "lesson4_021"
            }
        }
        ]
    }
    },

    {
        number: 5,
        pattern: "～から～まで",
        detail: {
            meaning: "Từ ~ Đến ~",
            explanations: [
                "",
            ],
            usages: [
                "🔸Dùng để nói khoảng thời gian, khoảng cách",
            ],
            notes: [
                "🔸<strong>から、まで</strong> không nhất thiết phải sử dụng cùng lúc.",
            ],

           examples: [
        {
            sentenceParts: [
            {
                text: "❶　わたしは　8じから　5じまで　"
            },
            {
                kanji: "働",
                reading: "はたら"
            },
            {
                text: "きます。"
            },
            ],
            meaning: "Tôi làm việc từ 8 giờ đến 5 giờ.",
            audio: "lesson4_022",

        },

        {
            sentenceParts: [
            {
                text: "➋　"
            },
            {
                kanji: "日曜日",
                reading: "にちようび"
            },
            {
                text: "　"
            },
            {
                kanji: "午前",
                reading: "ごぜん"
            },
            {
                text: "９"
            },
            {
                kanji: "時",
                reading: "じ"
            },
            {
                text: "まで",
            },
            {
                kanji: "寝",
                reading: "ね"
            },
            {
                text: "ます。",
            },
            ],
            meaning: "Chủ nhật tôi ngủ đến 9 giờ sáng.",
            audio: "lesson4_023",
        },

        {
            sentenceParts: [
            {
                text: "➌　ABC"
            },
            {
                kanji: "銀行",
                reading: "ぎんこう"
            },
            {
                text: "は"
            },
            {
                kanji: "何時",
                reading: "なんじ"
            },
            {
                text: "から　"
            },
            {
                kanji: "何時",
                reading: "なんじ"
            },
            {
                text: "まで",
            },
            
            {
                text: "ですか。",
            },
            ],
            meaning: "Ngân hàng ABC mở cửa từ mấy giờ đến mấy giờ.",
            audio: "lesson4_024",

            answer: {
            sentenceParts: [
                {
                text: "9"
                },
                {
                kanji: "時",
                reading: "じ"
                },
                {
                text: "から　6"
                },
                {
                kanji: "時",
                reading: "じ"
                },
                {
                    text: "までです。"
                },
            ],
            meaning: "Từ 9 giờ đến 6 giờ.",
            audio: "lesson4_025"
            }
        }
        ]
    }
    },
    {
        number: 6,
        pattern: "～と～",
        detail: {
            meaning: "~ và ~",
            explanations: [
                "",
            ],
            usages: [
                "🔸Dùng để nối 2 danh từ",
            ],
            notes: [
                "🔸Xem ví dụ",
            ],

           examples: [
        {
            sentenceParts: [
            {
                text: "やすみは　"
            },
            {
                kanji: "何曜日",
                reading: "なんようび"
            },
            {
                text: "ですか。"
            },
            ],
            meaning: "Ngày nghỉ là vào thứ mấy ?.",
            audio: "lesson4_026",

            answer: {
            sentenceParts: [
                
                {
                kanji: "土曜日",
                reading: "どようび"
                },
                {
                text: "と　"
                },
                {
                kanji: "日曜日",
                reading: "にちようび"
                },
                {
                    text: "です。"
                },
            ],
            meaning: "Thứ 7 và chủ nhật.",
            audio: "lesson4_027"
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
                content: "いま、なんじ　ですか。（3：00）　→　<strong>３じです。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　7：30　→",
                    answers: [
                        "7じはんです。",
                        "7時半です。"
                    ]
                },
                {
                    prompt: "➋　1：15 PM　→",
                    answers: [
                        "ごご1じ15ふん。",
                        "午後1時15分です。"
                    ]
                },
                {
                    prompt: "➌　2：45 PM　→",
                    answers: [
                        "ごご２じ４５ふんです。",
                        "午後2時45分です。"
                    ]
                },
                {
                    prompt: "➍　10：20 AM　→",
                    answers: [
                        "ごぜん１０じ２０ぷんです。",
                        "午前10時20分です。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "ぎんこうは　なんじから　なんじまでですか。（9：00～3：00）　→　<strong>９じから　３じまでです。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　ゆうびんきょくは　なんじから　なんじまでですか。\n（9：00～5：00）　→　",
                    answers: [
                        "9じから　5じまでです。",
                        "9時から5時までです。"
                    ]
                },
                {
                    prompt: "❷　デパートは　なんじから　なんじまでですか。\n（10：00～8：30）　→　",
                    answers: [
                        "10じから　8じはんまでです。",
                        "10時から　8時半までです。"
                    ]
                },
                {
                    prompt: "➌　としょかんは　なんじから　なんじまでですか。\n（8：00～6：30）　→　",
                    answers: [
                        "8じから　6じはんまでです。",
                        "8時から　6時半までです。"
                    ]
                },
                {
                    prompt: "➍　かいしゃは　なんじから　なんじまでですか。\n（9：15～5：45）　→　",
                    answers: [
                        "9じ15ふんから　5じ45ふんまでです。",
                        "9時15分から　5時45分までです。"
                    ]
                },
        
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: "まいあさ・おきます（7：00）　→　<strong>まいあさ　７じに　おきます。</strong>"
            },

            questions: [
                {
                    prompt: "➊　まいばん・ねます（11：00）　→",
                    answers: [
                        "まいばん　11じに　ねます。",
                        "毎晩　11時に　寝ます。"
                    ]
                },
                {
                    prompt: "➋　あした・おきます（6：30）　→",
                    answers: [
                        "あした　６じはんに　おきます。",
                        "明日　6時半に　起きます。",
                    ]
                },
                {
                    prompt: "➌　こんばん・ねます（12：00）　→",
                    answers: [
                        "こんばん　12じに　ねます。",
                        "今晩　12時に　寝ます。",
                    ]
                },

                {
                    prompt: "➍　にちようび・おきます（10：00）　→",
                    answers: [
                        "にちようび　10じに　おきます。",
                        "日曜日　10時に　起きます。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 4",
            example: {
                content: "まいばん・べんきょうします（7：30～9：30）　→　<strong>まいばん　７じはんから　９じはんまで　べんきょうします。</strong>"
            },

            questions: [
                {
                prompt: "➊　まいにち・はたらきます（9：30～5：30）　→",
                answers: [
                    "まいにち　9じはんから　5じはんまで　はたらきます。",
                    "毎日　9時半から　5時半まで　働きます。"
                ]
                },
                {
                    prompt: "➋　ひる・やすみます（12：00～1：00）　→",
                    answers: [
                        "ひる　12じから　1じまで　やすみます。",
                        "昼　12時から　1時まで　休みます。"
                    ]
                },
                {
                    prompt: "➌　どようび・はたらきます（9：00～2：00）　→",
                    answers: [
                        "どようび　9じから　2じまで　はたらきます。",
                        "土曜日　9時から　2時まで　働きます。"
                    ]
                },
                {
                    prompt: "➍　まいあさ・べんきょうします（7：00～8：00）　→",
                    answers: [
                        "まいあさ　7じから　8じまで　べんきょうします。",
                        "毎朝　7時から　8時まで　勉強します。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                    "きのう　べんきょうしましたか。（はい）→　<strong>はい、べんきょうしました。</strong>",
                    "きのう　べんきょうしましたか。（いいえ）→　<strong>いいえ、べんきょうしませんでした。</strong>",
                ]
            },

            questions: [
                {
                    prompt: "➊　あさって　はたらきますか。（いいえ）　→",
                    answers: [
                        "いいえ、はたらきません。",
                        "いいえ、働きません。"
                    ]
                },
                {
                    prompt: "➋　まいばん　べんきょうしますか。（はい）　→",
                    answers: [
                        "はい、べんきょうします。",
                        "はい、勉強します。"
                    ]
                },
                {
                    prompt: "➌　きのうのばん　べんきょうしましたか。（はい）　→",
                    answers: [
                        "はい、べんきょうしました。",
                        "はい、勉強しました。"
                    ]
                },
                {
                    prompt: "➍　きのう　はたらきましたか。（いいえ）　→",
                    answers: [
                        "いいえ、はたらきませんでした。",
                        "いいえ、働きませんでした。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: "あのひとは<strong>（だれ）</strong>ですか。\n....ミラーさんです。" ,
            },

            questions: [
                {
                    prompt: "❶　いま（　）ですか。\n.....5じです。",
                    answers: [
                        "なんじ",
                        "何時"
                    ]
                },
                {
                    prompt: "➋　さとうさんの　でんわばんごうは（　）ですか。\n.....020の　3333の　4367です。",
                    answers: [
                        "なんばん",
                        "何番"
                    ]
                },
                {
                    prompt: "➌　きょうは（　）ですか。\n.....かようびです。",
                    answers: [
                        "なんようび",
                        "何曜日"
                    ]
                },
                {
                    prompt: "➍　テレーザちゃんは（　）ですか。\n.....9さいです。",
                    answers: [
                        "なんさい",
                        "何歳"
                    ]
                },
                {
                    prompt: "➎　きのう（　）まで　はたらきましたか。\n.....9じまで　はたらきました。",
                    answers: [
                        "なんじ",
                        "何時"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: "これは　スイス（の）とけいです。\nでんわは　どこ（ｘ）ですか。"
            },

            questions: [
                {
                prompt: "❶　まいあさ（　）6じ（　）おきます。",
                answers: [
                    "x、に",
                ]
                },
                {
                    prompt: "➋　びじゅつかんは　なんじ（　）なんじ（　）ですか。",
                    answers: [
                        "から、まで"
                    ]
                },
                {
                    prompt: "➌　いま　なんじ（　）ですか。",
                    answers: [
                        "x"
                    ]
                },
                {
                    prompt: "➍　もくようび（　）ごご　びょういんは　やすみです。",
                    answers: [
                        "の"
                    ]
                },
                {
                    prompt: "➎　だいがくは　なんじ（　）おわりますか。",
                    answers: [
                        "に"
                    ]
                },
                {
                    prompt: "➏　ぎんこうの　やすみは　どようび（　）にちようびです。",
                    answers: [
                        "と"
                    ]
                }
            ]
        },
    ]
};