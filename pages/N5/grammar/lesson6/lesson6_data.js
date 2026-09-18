const grammarLessonData = {
  level: "N5",

  lessonNumber: 6,

  title: "Ngữ pháp N5 - Bài 6",

  previousLesson: {
    href: "../lesson5/lesson5.html",
    label: "Bài 5"
  },

  nextLesson: {
    href: "../lesson7/lesson7.html",
    label: "Bài 7"
  },

  patterns: [
    {
      number: 1,
      pattern: "N を　Vます。",
      detail: {
        meaning: "Làm N",
        explanations: [
            "🔹<strong>N</strong> là từ danh từ chỉ đối tượng của hành động.",
            "🔹<strong>を</strong> là trợ từ chỉ đối tượng tác động của hành động.",
            "🔹<strong>V</strong> là động từ hành động.",
        ],
        usages: [
          "✦ Sử dụng để nói về hành động của người, vật, ...",
        ],
        notes: [
          "✦ Gặp ai đó thì sử dụng trợ từ <strong>に</strong>.",
          "✦ Xem bảng chia thì động từ và ví dụ bên dưới.",

        ],

        extraTable: {
                title: "Bảng chia thì động từ",
                headers: [
                    {
                    text: "Hiện tại \n Tương lai",
                    audio: "lesson6_001",
                    width: "20%"
                    },
                    {
                    text: "Quá khứ",
                    audio: "lesson6_002",
                    width: "25%"
                    },
                    {
                    text: "Phủ định",
                    audio: "lesson6_003",
                    width: "25%"
                    },
                    {
                    text: "Phủ định quá khứ",
                    audio: "lesson6_004",
                    width: "30%"
                    }
                ],
                rows: [
                        {
                            number: "食[た]べます",
                            numberReading: "食[た]べました",
                            age: "食[た]べません",
                            ageReading: "食[た]べませんでした",
                        },
                        {
                            number: "飲[の]みます",
                            numberReading: "飲[の]みました",
                            age: "飲[の]みません",
                            ageReading: "飲[の]みませんでした",
                        },
                        {
                            number: "吸[す]います",
                            numberReading: "吸[す]いました",
                            age: "吸[す]いません",
                            ageReading: "吸[す]いませんでした",
                        },
                        {
                            number: "書[か]きます",
                            numberReading: "書[か]きました",
                            age: "書[か]きません",
                            ageReading: "書[か]きませんでした",
                        },
                        {
                            number: "読[よ]みます",
                            numberReading: "読[よ]みました",
                            age: "読[よ]みません",
                            ageReading: "読[よ]みませんでした",
                        },
                        {
                            number: "聞[き]きます",
                            numberReading: "聞[き]きました",
                            age: "聞[き]きません",
                            ageReading: "聞[き]きませんでした",
                        },
                        {
                            number: "見[み]ます",
                            numberReading: "見[み]ました",
                            age: "見[み]ません",
                            ageReading: "見[み]ませんでした",
                        },
                        {
                            number: "買[か]います",
                            numberReading: "買[か]いました",
                            age: "買[か]いません",
                            ageReading: "買[か]いませんでした",
                        },
                        {
                            number: "撮[と]ります",
                            numberReading: "撮[と]りました",
                            age: "撮[と]りません",
                            ageReading: "撮[と]りませんでした",
                        },
                        {
                            number: "します",
                            numberReading: "しました",
                            age: "しません",
                            ageReading: "しませんでした",
                        },
                        {
                            number: "会[あ]います",
                            numberReading: "会[あ]いました",
                            age: "会[あ]いません",
                            ageReading: "会[あ]いませんでした",
                        },
                    ]
                },
        examples: [
          {
            sentence: "❶　ご飯[はん]を　食[た]べます。",
            meaning: "Ăn cơm",
            audio: "lesson6_005",
        },
         {
            sentence: "❷　本[ほん]を　読[よ]みます。",
            meaning: "Đọc sách",
            audio: "lesson6_006",
        },
        {
            sentence: "➌　ミラーさんに　会[あ]います。",
            meaning: "Gặp Mira",
            audio: "lesson6_007",
        }
    ]
}
    },

    {
      number: 2,
      pattern: "なにを　Vます　か。",
      detail: {
        meaning: "Làm cái gì ?",
        explanations: [
            "🔹<strong>なに</strong> là từ để hỏi, có nghĩa là “Cái gì”",
        ],
        usages: [
          "✦ Sử dụng để hỏi về hành động của người, vật, ...",
        ],
        notes: [
          "✦ Khi trả lời không làm gì cả thì dùng trợ từ <strong>も + phủ định</strong>.",

        ],

        examples: [
          {
            sentence: "❶　毎朝[まいあさ]　なにを　食[た]べますか。",
            meaning: "Mỗi sáng bạn ăn gì ?",
            audio: "lesson6_008",

            answer: {
                sentence: "バンと　卵[たまご]を　食[た]べます。",
                meaning: "Tôi ăn bánh mỳ và trứng.",
                audio: "lesson6_009"
            }
        },
        {
            sentence: "❷　今週[こんしゅう]の日曜日[にちようび]　なにを　しますか。",
            meaning: "Chủ nhật tuần này bạn làm gì?",
            audio: "lesson6_010",

            answer: {
                sentence: "なにも　しません。",
                meaning: "Tôi không làm gì cả.",
                audio: "lesson6_011"
            }
        }
        ]
    }
},
    
    {
        number: 3,
        pattern: "N1で　N2を　Vます。",
        detail: {
            meaning: "Làm N2 ở N1",
            explanations: [
                "✦ <strong>N1</strong> là danh từ chỉ địa điểm.",
                "✦ <strong>N2</strong> là danh từ chỉ đối tượng hành động.",  
                "✦ <strong>で</strong> là trợ từ chỉ địa điểm xảy ra hành động." 
            ],
            usages: [
                "✦ Cách nói một hành động xảy ra ở địa điểm nào đó",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới.",
            ],

           examples: [
        {
            sentence: "❶　スーパーで　お茶[ちゃ]を　買[か]いました。",
            meaning: "Tôi đã mua trà ở siêu thị.",
            audio: "lesson6_012",
        },
        {
            sentence: "❷　レストランで　晩[ばん]ご飯[はん]を　食[た]べます。",
            meaning: "Tôi ăn tối ở nhà hàng.",
            audio: "lesson6_013",
        },
        ]
    },
},

    {
        number: 4,
        pattern: "どこで　Nを　Vます。",
        detail: {
            meaning: "Làm N ở đâu ?",
            explanations: [
                "🔸<strong>どこで</strong> là từ để hỏi địa điểm."
            ],
            usages: [
                "🔸Cách hỏi ai đó làm việc gì đó ở đâu.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],
           examples: [
        {
            sentence: "❶　どこで　カメラを　買いましたか。",
            meaning: "Bạn mua máy ảnh này ở đâu ?",
            audio: "lesson6_014",

            answer: {
                sentence: "アメリカで　買いました。",
                meaning: "Tôi mua ở Mỹ.",
                audio: "lesson6_015"
            }
        },
        {
            sentence: "❷　どこで　ミラーさんに　会[あ]いましたか。",
            meaning: "Bạn gặp Mira ở đâu ?",
            audio: "lesson6_016",

            answer: {
                sentence: "駅で　会いました。",
                meaning: "Tôi gặp Mira ở nhà ga.",
                audio: "lesson6_017"
            }
        },
        ]
    }
},

    {
        number: 5,
        pattern: "いっしょに　Vませんか。",
        detail: {
            meaning: "Làm ~ cùng tôi không ?",
            explanations: [
                "",
            ],
            usages: [
                "🔸Cách nói khi muốn mời, rủ ai đó cùng làm gì.",
            ],
            notes: [
                "🔸Khi từ chối 1 cách nhẹ nhàng thì sử dụng <strong>。。。ちょっと</strong>",
            ],

           examples: [
        {
            sentence: "❶　明日[あした]　いっしょに　映画[えいが]を　見[み]ませんか。",
            meaning: "Ngày mai xem phim cùng với tôi không ?",
            audio: "lesson6_018",

            answer: {
                sentence: "明日[あした]は　ちょっと。。。",
                meaning: "Ngày mai thì hơi ...",
                audio: "lesson6_019"
            }
        },
        {
            sentence: "❷　いっしょに　テニスを　しませんか。",
            meaning: "Chơi tennis cùng tôi không ?",
            audio: "lesson6_020",

            answer: {
                sentence: "ええ、いいですね。",
                meaning: "Vâng, tốt quá.",
                audio: "lesson6_021"
            }
        },
        ]
    }
    },

    {
        number: 6,
        pattern: "～Vましょう。",
        detail: {
            meaning: "Làm ~ thôi nào!",
            explanations: [
                "",
            ],
            usages: [
                "🔸Cách nói hô hào người khác làm cùng với mình.",
            ],
            notes: [
                "🔸<strong>Vましょう</strong> mang ý rủ rê mạnh mẽ, biết chắc chắn đối phương đồng ý."
            ],

           examples: [
        {
            sentence: "❶　ちょっと　休[やす]みましょう。",
            meaning: "Nghỉ 1 chút thôi nào!",
            audio: "lesson6_022",
        },
        {
            sentence: "❷　ビールを　飲[の]みましょう。",
            meaning: "Uống bia thôi nào!",
            audio: "lesson6_023"
        },
        ]
    }
    },

    {
        number: 7,
        pattern: "それから　～",
        detail: {
            meaning: "Sau đó thì ...",
            explanations: [
                "<strong>それから</strong> là liên từ nối 2 câu.",
            ],
            usages: [
                "🔸Cách diễn tả 2 hành động xảy ra liên tiếp theo thứ tự thời gian.",
            ],
            notes: [
                "🔸Nhấn mạnh thứ tự hành động."
            ],

           examples: [
        {
            sentence: "❶　今晩[こんばん]　なにを　しますか。",
            meaning: "Tối nay bạn làm gì.",
            audio: "lesson6_024",
        
                answer:{ 
                    sentence:"宿題[しゅくだい]を　します。それから、映画[えいが]を　みます。",
                    meaning: "Tôi là bài tập, sau đó thì xem phim.",
                    audio: "lesson6_025"
                    },
        },

        {
            sentence: "❷　きのう、スーパーへ行[い]きました。それから、友達[ともだち]に　会[あ]いました。",
            meaning: "Hôm qua tôi đi siêu thị rồi sau đó gặp bạn.",
            audio: "lesson6_026",
        
        },
        ]
    }
    },
],

    practice: [
        {
            title: "Luyện tập 1",
            example: {
                image: "/assets/images/grammar_n5_lesson6/practice1.jpg",
                content: "例[れい]　→　<strong>ラジオを　聞[き]きます。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "みずを　のみます。",
                        "水を　飲みます。"
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "ほんを　よみます。",
                        "本を　読みます。"
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "てがみを　かきます。",
                        "手紙を　書きます。"
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "しゃしんを　とります。",
                        "写真を　撮ります。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: [
                        "タバコを　吸[すい]いますか。（いいえ）→　<strong>いいえ、吸[すい]いません。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　お酒[さけ]を　飲[の]みますか。（いいえ）　→",
                    answers: [
                        "いいえ、のみません。",
                        "いいえ、飲みません。"
                    ]
                },
                {
                    prompt: "➋　あした　日本語[にほんご]を　勉強[べんきょう]しますか。（はい）　→",
                    answers: [
                        "はい、べんきょうします。",
                        "はい、勉強します。"
                    ]
                },
                {
                    prompt: "➌　けさ　新聞[しんぶん]を　読[よ]みましたか。（はい）　→",
                    answers: [
                        "はい、よみました。",
                        "はい、読みました。"
                    ]
                },
                {
                    prompt: "➍　きのうの　晩[ばん]　テレビを　見[み]ましたか。（いいえ）　→",
                    answers: [
                        "いいえ、みませんでした。",
                        "いいえ、見ませんでした。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: "買[か]います→　<strong>なにを　買[か]いますか。</strong>"
            },

            questions: [
                {
                    prompt: "➊　勉強[べんきょう]します　→",
                    answers: [
                        "なにを　べんきょうしますか。",
                        "なにを　勉強しますか。"
                ]
                },
                {
                    prompt: "➋　飲[の]みます　→",
                    answers: [
                        "なにを　のみますか。",
                        "なにを　飲みますか。"
                    ]
                },
                {
                    prompt: "➌　食[た]べました　→",
                    answers: [
                        "なにを　たべましたか。",
                        "なにを　食べましたか。"
                    ]
                },
                {
                    prompt: "➍　買[か]いました　→",
                    answers: [
                        "なにを　かいましたか。",
                        "なにを　買いましたか。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 4",
            example: {
                image: "/assets/images/grammar_n5_lesson6/practice4.jpg",
                content: "例[れい]：明日[あした]　なにを　しますか。→　<strong>サッカーを　します。</strong>"
            },

            questions: [
                {
                    prompt: "➊　今日[きょう]の午後[ごご]　なにを　しますか。　→",
                    answers: [
                        "レポートを　かきます。",
                        "レポートを　書きます。"
                    ]
                },
                {
                    prompt: "➋　今晩[こんばん]　なにを　しますか。　→",
                    answers: [
                        "テレビを　みます。",
                        "テレビを　見ます。"
                    ]
                },
                {
                    prompt: "➌　きのう　なにを　しましたか。　→",
                    answers: [
                        "ほんを　よみました。",
                        "本を　読みました。"
                    ]
                },
                {
                    prompt: "➍　おととい　なにを　しましたか。　→",
                    answers: [
                        "デパートへ　いきました。",
                        "デパートへ　行きました。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                    "写真[しゃしん]を　取[と]ります　→　<strong>どこで　写真[しゃしん]を　取[と]りますか。</strong>",
                ]
            },

            questions: [
                {
                    prompt: "➊　ミラーさんに　会[あ]います　→",
                    answers: [
                        "どこで　ミラーさんに　あいますか。",
                        "どこで　ミラーさんに　会いますか。"
                    ]
                },
                {
                    prompt: "➋　昼[ひる]ごはんを　食[た]べます　→",
                    answers: [
                        "どこで　ひるごはんを　たべますか。",
                        "どこで　昼ごはんを　食べますか。"
                    ]
                },
                {
                    prompt: "➌　牛乳[ぎゅうにゅう]を　買[か]いました　→",
                    answers: [
                        "どこで　ぎゅうにゅうを　かいましたか。",
                        "どこで　牛乳を　買いましたか。"
                    ]
                },
                {
                    prompt: "➍　日本語[にほんご]を　勉強[べんきょう]しました　→",
                    answers: [
                        "どこで　にほんごを　べんきょうしましたか。",
                        "どこで　日本語を　勉強しましたか。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: "どこで　写真[しゃしん]を　取[と]りますか。（にわ）　→　<strong>にわで　取[と]ります。</strong>" ,
            },

            questions: [
                {
                    prompt: "➊　どこで　ミラーさんに　会[あ]いますか。（駅[えき]）　→",
                    answers: [
                        "えきで　あいます。",
                        "駅[えき]で　会います。"
                    ]
                },
                {
                    prompt: "➋　どこで　昼[ひる]ごはんを　食[た]べますか。（会社[かいしゃ]の　食堂[しょくどう]）　→",
                    answers: [
                        "かいしゃの　しょくどうで　たべます。",
                        "会社の　食堂で　食べます。"
                    ]
                },
                {
                    prompt: "➌　どこで　牛乳[ぎゅうにゅう]を　買[か]いましたか。（スーパー）　→",
                    answers: [
                        "スーパーで　かいました。",
                        "スーパーで　買いました。"
                    ]
                },
                {
                    prompt: "➍　どこで　日本語[にほんご]を　勉強[べんきょう]しましたか。（大学[だいがく]）　→",
                    answers: [
                        "だいがくで　べんきょうしました。",
                        "大学で　勉強しました。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                image: "/assets/images/grammar_n5_lesson6/practice7.jpg",
                content: 
                    "<strong>例[れい]</strong>：今晩[こんばん]　→　<strong>うちで　宿題[しゅくだい]を　します。それから、CDを　聞[き]きます</strong>",
            },

            questions: [
                {
                    prompt: "❶　あした　→",
                    answers: [
                       "IMCで　働きます。それから、日本語を　勉強します。",
                       "IMCで　はたらきます。それから、にほんごを　べんきょうします。"
                    ]
                },
                {
                    prompt: "❷　来週[らいしゅう]の　土曜日[どようび]　→",
                    answers: [
                        "神戸で　ごはんを　食べます。それから、映画を　見ます。",
                        "こうべで　ごはんを　たべます。それから、えいがを　みます。"
                    ]
                },
                {
                    prompt: "❸　きのうの　午後[ごご]　→",
                    answers: [
                        "ロビーで　テレビを　見ました。それから、手紙を　書きました。",
                        "ロビーで　テレビを　みました。それから、てがみを　かきました。"
                    ]
                },
                {
                    prompt: "❹　先週[せんしゅう]の　日曜日[にちようび]　→",
                    answers: [
                        "庭で　サッカーを　しました。それから、ビールを　飲みました。",
                        "にわで　サッカーを　しました。それから、ビールを　のみました。"
                    ]
                },
            ]
        },

         {
            title: "Luyện tập 8",
            example: {
                image: "/assets/images/grammar_n5_lesson6/practice8.jpg",
                content: 
                    "<strong>例[れい]　</strong>　→　<strong>いっしょに　東京[とうきょう]へ　行[い]きませんか。</strong>",
            },

            questions: [
                {
                    prompt: "❶　→",
                    answers: [
                       "いっしょに　昼ごはんを　食べませんか。",
                       "いっしょに　ひるごはんを　たべませんか。"
                    ]
                },
                {
                    prompt: "❷　→",
                    answers: [
                        "いっしょに　コーヒーを　飲みませんか。",
                        "いっしょに　コーヒーを　のみませんか。"
                    ]
                },
                {
                    prompt: "❸　→",
                    answers: [
                        "いっしょに　映画を　見ませんか。",
                        "いっしょに　えいがを　みませんか。"
                    ]
                },
                {
                    prompt: "❹　→",
                    answers: [
                        "いっしょに　テニスを　しませんか。"
                    ]
                },
            ]
        },
        {
            title: "Luyện tập 9",
            example: {
                content: [
                    "毎晩[まいばん]（何時[なんじ]に、いつ、どこで）寝[ね]ますか。　→　<strong>何時[なんじ]に</strong>",
                    ".....11時[じ]に　寝[ね]ます。"
                ]         
            },

            questions: [
                {
                    prompt: 
                        "❶　日曜日[にちようび]（どこで、なにを、なんで）しますか。\n.....テニスを　します。",

                    answers: [
                        "なにを"
                    ]
                },
                {
                    prompt: 
                        "❷　（どこへ、どこで、いつ）そのカメラを　買[か]いましたか。\n.....大阪[おおさか]デパートで　買[か]いました。",

                    answers: [
                        "どこで"
                    ]
                },
                {
                    prompt: [
                        "❸　けさ（なにを、なんで、どこで）食[た]べましたか。\n.....何[なに]も　食[た]べませんでした。",
                    ],
                    answers: [
                        "なにを"
                    ]
                },
                {
                    prompt: [
                        "❹　おととい（どこで、だれに、何時[なんじ]に）会[あ]いましたか。\n.....グプタさんに　会[あ]いました。",
                    ],
                    answers: [
                        "だれに"
                    ]
                },
            ]
        },
    ]
};