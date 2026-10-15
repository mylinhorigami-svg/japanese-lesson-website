const grammarLessonData = {
  level: "N5",

  lessonNumber: 15,

  title: "Ngữ pháp N5 - Bài 15",

  previousLesson: {
    href: "../lesson14/lesson14.html",
    label: "Bài 14"
  },

  nextLesson: {
    href: "../lesson16/lesson16.html",
    label: "Bài 16"
  },

  patterns: [
    {
      number: 1,
      pattern: "Vても　いいです。",
      detail: {
        meaning: "Làm V cũng được./Được phép làm V.",
        usages: [
          "✦ Sử dụng để chỉ sự cho phép làm gì đó.",
          "✦ Câu hỏi được sử dụng như một câu xin phép làm gì đó.",
        ],

        examples: [
        {
            sentence: "❶　写真[しゃしん]を　撮[と]っても　いいですか。",
            meaning: "Tôi chụp ảnh có được không ?",
            audio: "lesson15_001",
            answer: 
                {
                    sentence: "ええ、いいですよ。",
                    meaning: "Uhm, được thôi.",
                    audio: "lesson15_002"
                }
        },
        {
            sentence: "❷　この　辞書[じしょ]を　借[か]りても　いいですか。",
            meaning: "Tôi mượn cuốn từ điền này được không ?",
            audio: "lesson15_003",
            answer: 
                {
                    sentence: "....すみません、ちょっと....。今[いま]　使[つか]っています。",
                    meaning: "Xin lỗi..., nhưng mà.... bây giờ tôi đang dùng.",
                    audio: "lesson15_004"
                }
        },
        ]
    }
},
    
    {
        number: 2,
        pattern: "Vては　いけません。",
        detail: {
            meaning: "Không được làm V.",
            usages: [
                "✦ Dùng để diễn tả sự cấm đoán không được làm gì đó.",
            ],

           examples: [
            {
            sentence: "❶　ここで　タバコを　吸[す]っては　いけません。",
            meaning: "Không được hút thuốc ở đây",
            audio: "lesson15_005",
            },
            {
            sentence: "❷　ここで　遊[あそ]んでは　いけません。",
            meaning: "Không được chơi ở đây.",
            audio: "lesson15_006",
             answer: 
                {
                    sentence: "はい、....",
                    meaning: "Vâng,....",
                    audio: "lesson15_007"
                }          
        },
         
        ]
    },  
},

{
      number: 3,
      pattern: "Vて　います。",
      detail: {
        meaning: "Đã và đang làm V",
        usages: [
          "✦ Diễn tả 1 hành động xảy ra trong quá khứ kéo dài đến hiện tại, tương lai",
        ],

        examples: [
        {
            sentence: "❶　会社[かいしゃ]の　電話番号[でんわばんごう]を　知[し]っていますか。",
            meaning: "Bạn có biết số điện thoại của công ty không?",
            audio: "lesson15_008",
            answer: 
                {
                    sentence: "いいえ、知[し]りません。",
                    meaning: "Không, tôi không biết.",
                    audio: "lesson15_009"
                }     
        },
        {
            sentence: "❷　マリアさんは　どこに　住[す]んでいますか。",
            meaning: "Bạn Maria sống ở đâu vậy?",
            audio: "lesson15_010",
            answer: 
                {
                    sentence: "大阪[おおさか]に　住[す]んでいます。",
                    meaning: "Tôi sống ở Osaka",
                    audio: "lesson15_011"
                }    
        },
        {
            sentence: "➌　お仕事[しごと]は　何[なん]ですか。",
            meaning: "Công việc của bạn là gì.",
            audio: "lesson15_012",
            answer: 
                {
                    sentence: "教師[きょうし]です。高校[こうこう]で　教[おし]えています。",
                    meaning: "Tôi là giáo viên, đang dạy ở trường cấp 3.",
                    audio: "lesson15_013"
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
                content: [
                "パソコンを　使います　→　<strong>パソコンを　使っても　いいですか。</strong>",   
                ]
            },

            questions: [
                {
                    prompt: "➊　帰[かえ]ります　→",
                    answers: [
                        "帰ってもいいですか。",
                        "かえってもいいですか。"
                    ]
                },
                {
                    prompt: "➋　テレビを　消[け]します　→",
                    answers: [
                        "テレビを消してもいいですか。",
                        "テレビをけしてもいいですか。"
                    ]
                },
                {
                    prompt: "➌　辞書[じしょ]を　借[か]ります　→",
                    answers: [
                        "辞書を借りてもいいですか。",
                        "じしょをかりてもいいですか。"
                    ]
                },
                {
                    prompt: "➍　窓[まど]を　開[あ]けます　→",
                    answers: [
                        "窓を開けてもいいですか。",
                        "まどをあけてもいいですか。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 2",
            example: {
                image: "/assets/images/grammar_n5_lesson15/practice2.jpg",
                content: [
                        "れい１：この傘[かさ]を　借[か]りても　いいですか。　→　<strong>....ええ、いいですよ。どうぞ。</strong>",
                        "れい２：写真[しゃしん]を　撮[と]っても　いいですか。　→　<strong>....すみません。ちょっと....。</strong>",
                        ]     
                    },

            questions: [
                {
                    prompt: "➊　ここに　座[すわ]っても　いいですか。→",
                    answers: [
                        "ええ、いいですよ。どうぞ。"
                    ]
                },
                {
                    prompt: "➋　荷物[にもつ]を　置[お]いても　いいですか。→",
                    answers: [
                        "すみません。ちょっと。"
                    ]
                },
                {
                    prompt: "➌　資料[しりょう]を　見[み]ても　いいですか。→",
                    answers: [
                        "すみません。ちょっと。"
                    ]
                },
                {
                    prompt: "➍　ボールペンを　使[つか]っても　いいですか。→",
                    answers: [
                        "ええ、いいですよ。どうぞ。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                image: "/assets/images/grammar_n5_lesson15/practice3.jpg",
                content: [
                "れい: ここで　→　ここで　タバコを　吸[す]っては　いけません。",   
                ]
                    },

            questions: [
               {
                    prompt: "➊　ここで　→",
                    answers: [
                        "ここで写真を撮ってはいけません。",
                        "ここでしゃしんをとってはいけません。"
                    ]
                },
                {
                    prompt: "➋　ここで　→",
                    answers: [
                        "ここでサッカーをしてはいけません。"
                    ]
                },
                {
                    prompt: "➌　ここに　→",
                    answers: [
                        "ここに車を止めてはいけません。",
                        "ここにくるまをとめてはいけません。",
                        "ここに車を停めてはいけません。"
                    ]
                },
                {
                    prompt: "➍　ここに　→",
                    answers: [
                        "ここに入ってはいけません。",
                        "ここにはいってはいけません。"
                    ]
                }
            ]

        },

        {
            title: "Luyện tập 4",
            example: {
                content: [
                 "例[れい]1：カリナさんを　知[し]っていますか。（はい）→　<strong>はい、知[し]っています。</strong>",
                "例[れい]2：車[くるま]を　持[も]っていますか。（いいえ）→　<strong>いいえ、持[も]っていません。</strong>"  
                ]
            },

            questions: [
                 {
                    prompt: "➊　結婚[けっこん]していますか。（いいえ）→",
                    answers: [
                        "いいえ、結婚していません。",
                        "いいえ、けっこんしていません。"
                    ]
                },
                {
                    prompt: "➋　寮[りょう]に　住[す]んでいますか。（はい）→",
                    answers: [
                        "はい、住んでいます。",
                        "はい、すんでいます。"
                    ]
                },
                {
                    prompt: "➌　自転車[じてんしゃ]を　持[も]っていますか。（はい）→",
                    answers: [
                        "はい、持っています。",
                        "はい、もっています。"
                    ]
                },
                {
                    prompt: "➍　木村[きむら]さんの　住所[じゅうしょ]を　知[し]っていますか。（いいえ）→",
                    answers: [
                        "いいえ、知りません。",
                        "いいえ、しりません。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                "どこで　安[やす]い　電気製品[でんきせいひん]を　売[う]っていますか。（大阪[おおさか]の　日本橋[にっぽんばし]）→　<strong>大阪[おおさか]の　日本橋[にっぽんばし]で　売[う]っています。</strong>",    
                ] 
            },
            questions: [
                {
                    prompt: "➊　IMCは　何[なに]を　作[つく]っていますか。（コンピューターソフト）→",
                    answers: [
                        "コンピューターソフトを作っています。",
                        "コンピューターソフトをつくっています。"
                    ]
                },
                {
                    prompt: "➋　あの　店[みせ]で　何[なに]を　売[う]っていますか。（古[ふる]い　服[ふく]）→",
                    answers: [
                        "古い服を売っています。",
                        "ふるいふくをうっています。"
                    ]
                },
                {
                    prompt: "➌　さくら大学[だいがく]は　どこの　コンピューターを　使[つか]っていますか。（パワー電気[でんき]）→",
                    answers: [
                        "パワー電気のコンピューターを使っています。",
                        "パワーでんきのコンピューターをつかっています。"
                    ]
                },
                {
                    prompt: "➍　どこで　この　お酒[さけ]を　造[つく]っていますか。（沖縄[おきなわ]）→",
                    answers: [
                        "沖縄で造っています。",
                        "おきなわでつくっています。",
                        "沖縄で作っています。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: 
                    "シュミットさんは　どこで　働[はたら]いていますか。（パワー電気[でんき]）→　<strong>パワー電気[でんき]で　働[はたら]いています。</strong>",
            },

            questions: [
                    {
                        prompt: "➊　イーさんは　何[なに]を　研究[けんきゅう]していますか。（経済[けいざい]）→",
                        answers: [
                            "経済を研究しています。",
                            "けいざいをけんきゅうしています。"
                        ]
                    },
                    {
                        prompt: "➋　山田友子[やまだともこ]さんは　どこで　働[はたら]いていますか。（アップル銀行[ぎんこう]）→",
                        answers: [
                            "アップル銀行で働いています。",
                            "アップルぎんこうではたらいています。"
                        ]
                    },
                    {
                        prompt: "➌　カリナさんは　何[なに]を　勉強[べんきょう]していますか。（美術[びじゅつ]）→",
                        answers: [
                            "美術を勉強しています。",
                            "びじゅつをべんきょうしています。"
                        ]
                    },
                    {
                        prompt: "➍　ワットさんは　どこで　教[おし]えていますか。（さくら大学[だいがく]）→",
                        answers: [
                            "さくら大学で教えています。",
                            "さくらだいがくでおしえています。"
                        ]
                    }
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                image: "/assets/images/grammar_n5_lesson15/practice7.jpg",
                content: [
                    "れい：もう　帰[かえ]っても　いいですか。\n......すみません、ちょっと　（<strong>待[ま]って</strong>）　ください。",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　あの　部屋[へや]を　使[つか]っても　いいですか。\n……すみません、今[いま]　会議[かいぎ]を　（　　　）　いますから。→",
                    answers: [
                        "して"
                    ]
                },
                {
                    prompt: "➋　ここで　食事[しょくじ]しても　いいですか。\n……すみません、外[そと]で　（　　　）　ください。→",
                    answers: [
                        "食べて",
                        "たべて"
                    ]
                },
                {
                    prompt: "➌　このパンチ、借[か]りても　いいですか。\n……すみません、今[いま]　（　　　）　いますから。→",
                    answers: [
                        "使って",
                        "つかって"
                    ]
                }
            ]
        },
        {
            title: "Luyện tập 8",
            example: {
                content: [
                   "エレベーターで　遊[あそ]んでいます。→　<strong>エレベーターで　遊[あそ]んでは　いけません。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　図書館[としょかん]で　食[た]べ物[もの]を　食[た]べています。→",
                    answers: [
                        "図書館で食べ物を食べてはいけません。",
                        "としょかんでたべものをたべてはいけません。"
                    ]
                },
                {
                    prompt: "➋　試験[しけん]です。隣[となり]の　人[ひと]と　話[はな]しています。→",
                    answers: [
                        "試験です。隣の人と話してはいけません。",
                        "しけんです。となりのひととはなしてはいけません。",
                        "隣の人と話してはいけません。",
                        "となりのひととはなしてはいけません。"
                    ]
                },
                {
                    prompt: "➌　公園[こうえん]で　野球[やきゅう]を　しています。→",
                    answers: [
                        "公園で野球をしてはいけません。",
                        "こうえんでやきゅうをしてはいけません。"
                    ]
                }
            ]
        },
        {
            title: "Luyện tập 9",
            example: {
                image: "/assets/images/grammar_n5_lesson15/practice9.jpg",
                content: [
                    "ミラーさんは IMCで（<strong>働いて</strong>）います。",
                ]
            },
            questions: [
                
                {
                prompt: "➊　ミラーさんは　大阪[おおさか]に（　　）います。",
                answers: ["住んで", "すんで"]
                },
                {
                prompt: "➋　IMCは　コンピューターソフトを（　　）います。",
                answers: ["作って", "つくって"]
                },
                {
                prompt: "➌　ミラーさんは（　　）いません。独身[どくしん]です。",
                answers: ["結婚して", "けっこんして"]
                },
                {
                prompt: "➍　ミラーさんは　パソコンを（　　）います。",
                answers: ["持って", "もって"]
                }
            ]
        },
    ]
};