const grammarLessonData = {
  level: "N5",

  lessonNumber: 7,

  title: "Ngữ pháp N5 - Bài 7",

  previousLesson: {
    href: "../lesson6/lesson6.html",
    label: "Bài 6"
  },

  nextLesson: {
    href: "../lesson8/lesson8.html",
    label: "Bài 8"
  },

  patterns: [
    {
      number: 1,
      pattern: "N で　Vます。",
      detail: {
        meaning: "Làm bằng N",
        explanations: [
            "🔹<strong>N</strong> là từ danh từ chỉ phương tiện, công cụ.",
            "🔹<strong>で</strong> là trợ từ chỉ phương tiện, phương thức, phương pháp.",
        ],
        usages: [
          "✦ Cách thể hiện làm gì đó bằng phương tiện, công cụ, phương pháp gì đó",
        ],
        notes: [
          "✦ Xem bảng chia thì động từ và ví dụ bên dưới.",

        ],

        extraTable: {
                title: "Bảng chia thì động từ",
                headers: [
                    {
                    text: "Hiện tại \n Tương lai",
                    audio: "lesson7_001",
                    width: "20%"
                    },
                    {
                    text: "Quá khứ",
                    audio: "lesson7_002",
                    width: "25%"
                    },
                    {
                    text: "Phủ định",
                    audio: "lesson7_003",
                    width: "25%"
                    },
                    {
                    text: "Phủ định quá khứ",
                    audio: "lesson7_004",
                    width: "30%"
                    }
                ],
                rows: [
                        {
                            number: "切[き]ります",
                            numberReading: "切[き]りました",
                            age: "切[き]りません",
                            ageReading: "切[き]りませんでした",
                        },
                        {
                            number: "修理[しゅうり]します",
                            numberReading: "修理[しゅうり]しました",
                            age: "修理[しゅうり]しません",
                            ageReading: "修理[しゅうり]しませんでした",
                        },
                        {
                            number: "かけます",
                            numberReading: "かけました",
                            age: "かけません",
                            ageReading: "かけませんでした",
                        },
                        {
                            number: "あげます",
                            numberReading: "あげました",
                            age: "あげません",
                            ageReading: "あげませんでした",
                        },
                        {
                            number: "もらいます",
                            numberReading: "もらいました",
                            age: "もらいません",
                            ageReading: "もらいませんでした",
                        },
                        {
                            number: "教[おし]えます",
                            numberReading: "教[おし]えました",
                            age: "教[おし]えません",
                            ageReading: "教[おし]えませんでした",
                        },
                        {
                            number: "習[なら]います",
                            numberReading: "習[なら]いました",
                            age: "習[なら]いません",
                            ageReading: "習[なら]いませんでした",
                        },
                        {
                            number: "貸[か]します",
                            numberReading: "貸[か]しました",
                            age: "貸[か]しません",
                            ageReading: "貸[か]しませんでした",
                        },
                        {
                            number: "借[か]ります",
                            numberReading: "借[か]りました",
                            age: "借[か]りません",
                            ageReading: "借[か]りませんでした",
                        },
                        {
                            number: "送[おく]ります",
                            numberReading: "送[おく]りました",
                            age: "送[おく]りません",
                            ageReading: "送[おく]りませんでした",
                        },
                    ]
                },
        examples: [
        {
            sentence: "❶　パソコンで　映画[えいが]を　見[み]ます。",
            meaning: "Tôi xem phim bằng máy tính",
            audio: "lesson7_005",
        },
        {
            sentence: "❷　日本語[にほんご]で　レポートを　書[か]きます。",
            meaning: "Tôi viết báo cáo bằng tiếng Nhật.",
            audio: "lesson7_006",
        },
        {
            sentence: "➌　箸[はし]で　ご飯[はん]を　食[た]べます。",
            meaning: "Tôi ăn cơm bằng đũa.",
            audio: "lesson7_007",
        }
    ]
}
    },

    {
      number: 2,
      pattern: "～は　N語で　なんですか。",
      detail: {
        meaning: "～trong tiếng N gọi là gì ?",
        explanations: [
            "🔹<strong>N</strong> là danh từ chỉ quốc gia.",
        ],
        usages: [
          "✦ Sử dụng để hỏi 1 từ / 1 cụm từ / 1 câu bằng thứ tiếng nào đó.",
        ],
        notes: [
          "✦ Xem ví dụ bên dưới.",

        ],

        examples: [
          {
            sentence: "❶　「ありがとう」は　英語で　なんですか。",
            meaning: "「ありがとう」trong tiếng Anh là gì?",
            audio: "lesson7_008",

            answer: {
                sentence: "「Thank you」です。",
                meaning: "Là 「Thank you」.",
                audio: "lesson7_009"
            }
        },
        {
            sentence: "❷　「Good bye」は　日本語[にほんご]で　なんですか。",
            meaning: "「Good bye」trong tiếng Nhật là gì",
            audio: "lesson7_010",

            answer: {
                sentence: "「さようなら」です。",
                meaning: "Là さようなら」",
                audio: "lesson7_011"
            }
        }
        ]
    }
},
    
    {
        number: 3,
        pattern: "N1に　N2を　Vます。",
        detail: {
            meaning: "Làm N2 cho N1",
            explanations: [
                "✦ <strong>N1</strong> là danh từ chỉ đối tượng nhận hành động.",
                "✦ <strong>N2</strong> là danh từ chỉ đối tượng chịu tác động của hành động.",  
                "✦ <strong>に</strong> là trợ từ chỉ hướng đến đối tượng nhận hành động." 
            ],
            usages: [
                "✦ Cách nói làm gì cho ai đó",
            ],
            notes: [
                "🔸Trừ các động từ もらいます、借[か]ります、習[なら]います",
            ],

           examples: [
        {
            sentence: "❶　母[はは]に　手紙[てがみ]を　書[か]きます。",
            meaning: "Tôi viết thư cho mẹ",
            audio: "lesson7_012",
        },
        {
            sentence: "❷　ミラーさんに　日本語[にほんご]を　教[おし]えます。",
            meaning: "Tôi chỉ (dạy) tiếng nhật cho Mira.",
            audio: "lesson7_013",
        },
        ]
    },
},

    {
        number: 4,
        pattern: "N1に　N2を　もらいます／借ります／ならいます。",
        detail: {
            meaning: "Nhận / mượn / học được N2 từ N1",
            explanations: [
                "✦ <strong>N1</strong> là danh từ chỉ đối tượng cho hành động.",
                "✦ <strong>N2</strong> là danh từ chỉ đối tượng chịu tác động của hành động.",  
                "✦ <strong>に</strong> là trợ từ chỉ hướng đến đối tượng cho hành động." 
            ],
            usages: [
                "🔸Cách nói nhận / mượn / học được cái gì từ ai đó.",
            ],
            notes: [
                "🔸Nếu N1 là công ty, tổ chức thì dùng <strong>から</strong>　thay cho <strong>に</strong>",
            ],
           examples: [
        {
            sentence: "❶　ミラーさんに　英語[えいご]を　習[なら]いました。",
            meaning: "Tôi học được tiếng anh từ Mira.",
            audio: "lesson7_014",
        },
        {
            sentence: "❷　銀行[ぎんこう]から　お金[かね]を　借[か]りました。",
            meaning: "Tôi vay tiền từ ngân hàng.",
            audio: "lesson7_015",
        },
         {
            sentence: "➌　山田[やまだ]さんに　プレゼントを　もらいました。",
            meaning: "Tôi nhận quà từ anh Yamada.",
            audio: "lesson7_016",
        },
        ]
    }
},

    {
        number: 5,
        pattern: "だれに　Nを　Vます。",
        detail: {
            meaning: "Làm N cho ai ?",
            explanations: [
                "",
            ],
            usages: [
                "🔸Cách hỏi làm hoặc nhận gì cho ai / từ ai ?",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới",
            ],

           examples: [
        {
            sentence: "❶　だれに　このプレゼントを　あげますか。",
            meaning: "Bạn tặng quà này cho ai vậy ?",
            audio: "lesson7_017",

            answer: {
                sentence: "妹[いもうと]に　あげます。",
                meaning: "Tặng cho em gái.",
                audio: "lesson7_018"
            }
        },
        {
            sentence: "❷　だれに　花[はな]を　もらいましたか。",
            meaning: "Nhận hoa từ ai vậy ?",
            audio: "lesson7_019",

            answer: {
                sentence: "佐藤[さとう]さんに　もらいました。",
                meaning: "Nhận từ anh Satou",
                audio: "lesson7_020"
            }
        },
        ]
    }
    },

    {
        number: 6,
        pattern: "もう／まだ",
        detail: {
            meaning: "Đã ... rồi / Vẫn chưa",
            explanations: [
                "",
            ],
            usages: [
                "🔸Cách nói đã làm rồi hoặc chưa làm việc gì đó.",
            ],
            notes: [
                "🔸Xem ví dụ bên dưới"
            ],

           examples: [
        {
            sentence: "❶　もう　晩[ばん]ご飯[はん]を　食[た]べましたか。",
            meaning: "Bạn ăn cơm tối rồi à ? ",
            audio: "lesson7_021",
            answer: {
                sentence: "はい、もう　食[た]べました。",
                meaning: "Vâng, tôi ăn rồi",
                audio: "lesson7_022"
            }
        },
        {
            sentence: "❷　もう　メールを　送[おく]りましたか。",
            meaning: "Bạn gửi mail rồi chứ ? ",
            audio: "lesson7_023",
            answer: {
                sentence: "いいえ、まだです。",
                meaning: "Tôi vẫn chưa gửi.",
                audio: "lesson7_024"
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
                image: "/assets/images/grammar_n5_lesson7/practice1.jpg",
                content: "例[れい]： ごはんを　食[た]べます。　→　<strong>はしで　ごはんを　食[た]べます。</strong>",      
            },

            questions: [
                {
                    prompt: "➊　手紙[てがみ]を　書[か]きます。→",
                    answers: [
                        "ペンと　かみで　てがみを　かきます。",
                        "ペンと　紙で　手紙を　書きます。"
                    ]
                },
                {
                    prompt: "➋　紙[かみ]を　切[き]ります。→",
                    answers: [
                        "はさみで　かみを　きります。",
                        "はさみで　紙を　切ります。"
                    ]
                },
                {
                    prompt: "➌　ご飯[はん]を　食[た]べます。→",
                    answers: [
                        "てで　ごはんを　たべます。",
                        "手で　ご飯を　食べます。"
                    ]
                },
                {
                    prompt: "➍　写真[しゃしん]を　撮[と]ります。→",
                    answers: [
                        "けいたいで　しゃしんを　とります。",
                        "携帯で　写真を　撮ります。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                image: "/assets/images/grammar_n5_lesson7/practice2.jpg",
                content: [
                        "例[れい]：これは　日本語で　なんですか。　→　<strong>「パソコン」です。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　→",
                    answers: [
                        "「パンチ」です。",
                    ]
                },
                {
                    prompt: "➋　→",
                    answers: [
                        "「セロテープ」です。",
                    ]
                },
                {
                    prompt: "➌　→",
                    answers: [
                        "「ホチキス」です。",
                    ]
                },
                {
                    prompt: "➍　→",
                    answers: [
                        "「けしゴム」です。",
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                image: "/assets/images/grammar_n5_lesson7/practice3.jpg",
                content: "例[れい]：あげます　→　<strong>テレーちゃんに　ノートを　あげます。</strong>",
            },

            questions: [
                {
                    prompt: "➊　かします　→",
                    answers: [
                        "イーさんに　ほんを　かします。",
                        "イーさんに　本を　貸します。"
                    ]
                },
                {
                    prompt: "➋　おしえます　→",
                    answers: [
                        "たろうちゃんに　えいごを　おしえます。",
                        "太郎ちゃんに　英語を　教えます。"
                    ]
                },
                {
                    prompt: "➌　かきます　→",
                    answers: [
                        "ははに　てがみを　かきます。",
                        "母に　手紙を　書きます。"
                    ]
                },
                {
                    prompt: "➍　かけます　→",
                    answers: [
                        "シュミットさんに　でんわを　かけます。",
                        "シュミットさんに　電話を　かけます。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 4",
            example: {
                image: "/assets/images/grammar_n5_lesson7/practice4.jpg",
                content: "例[れい]：もらいます　→　<strong>ちちに　シャツを　もらいます。</strong>",
            },


            questions: [
                {
                    prompt: "➊　かります　→",
                    answers: [
                        "カリナさんに　CDを　かります。",
                        "カリナさんに　CDを　借ります。"
                    ]
                },
                {
                    prompt: "➋　ならいます　→",
                    answers: [
                        "ワンさんに　ちゅうごくごを　ならいます。",
                        "ワンさんに　中国語を　習います。"
                    ]
                },
                {
                    prompt: "➌　もらいます　→",
                    answers: [
                        "きむらさんに　メールを　もらいます。",
                        "木村さんに　メールを　もらいます。"
                    ]
                },
                {
                    prompt: "➍　もらいます　→",
                    answers: [
                        "サントスさんに　でんわを　もらいます。",
                        "サントスさんに　電話を　もらいます。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                    "お母[かあ]さんの　誕生日[たんじょうび]に　なにを　あげましたか。（花[はな]）→　<strong>花[はな]を　あげました。</strong>",
                ]
            },

            questions: [
                {
                    prompt: "➊　去年[きょねん]の　クリスマスに　なにを　もらいましたか。\n（ネクタイと　本[ほん]）　→",
                    answers: [
                        "ネクタイと　ほんを　もらいました。",
                        "ネクタイと　本を　もらいました。"
                    ]
                },
                {
                    prompt: "➋　どこで　日本語[にほんご]を　習[なら]いましたか。（アメリカの　大学[だいがく]）　→",
                    answers: [
                        "アメリカの　だいがくで　ならいました。",
                        "アメリカの　大学で　習いました。"
                    ]
                },
                {
                    prompt: "➌　いつ　先生[せんせい]に　レポートを　送[おく]りますか。（あした）　→",
                    answers: [
                        "あした　おくります。",
                        "明日　送ります。"
                    ]
                },
                {
                    prompt: "➍　だれに　この　CDを　借[か]りましたか。（友達[ともだち]）　→",
                    answers: [
                        "ともだちに　かりました。",
                        "友達に　借りました。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: [
                    "もう　きっぷを　買[か]いましたか（はい）→　<strong>はい、もう　買[]いました。</strong>",
                    "もう　レポートを　送[おく]りますか（いいえ）→　<strong>いいえ、まだです。</strong>",
                ]
            },

            questions: [
                {
                    prompt: "➊　もう　宿題[しゅくだい]を　しますか。（いいえ）　→",
                    answers: [
                        "いいえ、まだです。"
                    ]
                },
                {
                    prompt: "➋　もう　京都[きょうと]へ　行[い]きますか。（はい）　→",
                    answers: [
                        "はい、もう　いきました。",
                        "はい、もう　行きました。"
                    ]
                },
                {
                    prompt: "➌　もう　ミラーさんは　帰[かえ]りますか。（いいえ）　→",
                    answers: [
                        "いいえ、まだです。"
                    ]
                },
                {
                    prompt: "➍　もう　テレーザちゃんは　寝[ね]ますか。（はい）　→",
                    answers: [
                        "はい、もう　ねました。",
                        "はい、もう　寝ました。"
                    ]
                },
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: 
                    "<strong>例[れい]</strong>：これは　イタリア（<strong>の</strong>）くつです。",
            },

            questions: [
                {
                    prompt: "❶　わたしは　はし（　）ご飯[はん]を　食[た]べます。",
                    answers: [
                        "で"
                    ]
                },
                {
                    prompt: "❷　メール（　）レポートを　送[おく]りました。",
                    answers: [
                        "で"
                    ]
                },
                {
                    prompt: "❸　「さようなら」は　英語[えいご]（　）何[なん]ですか。",
                    answers: [
                        "で"
                    ]
                },
                {
                    prompt: "❹　わたしは　きのう　彼女[かのじょ]（　）手紙[てがみ]（　）書[か]きました。",
                    answers: [
                        "に,を"
                    ]
                },
                {
                    prompt: "❺　わたしは　友達[ともだち]（　）お土産[みやげ]（　）もらいました。",
                    answers: [
                        "に,を"
                    ]
                },
            ]
        },
    ]
};