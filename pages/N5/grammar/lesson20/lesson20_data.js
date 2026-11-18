const grammarLessonData = {
  level: "N5",

  lessonNumber: 20,

  title: "Ngữ pháp N5 - Bài 20",

  previousLesson: {
    href: "../lesson19/lesson19.html",
    label: "Bài 19"
  },

  nextLesson: {
    href: "../lesson21/lesson21.html",
    label: "Bài 21"
  },

  patterns: [
    {
      number: 1,
      pattern: "Thể lịch sự và thể thông thường",
      detail: {
    explanation: `
<strong>✦ Thể lịch sự:</strong> Là kết thúc câu luôn có <strong>です、ます、ました、ません、でした、ませんでした. </strong>
    Được dùng khi nói chuyện với: 
        + Người lớn tuổi
        + Người mới gặp lần đầu
        + Cấp trên
        + Các tình huống trang trọng như: Thuyết trình, hội nghị, ...

<strong>✦ Thể thông thường:</strong> Là kết thúc câu không có <strong>です、ます、ました、ません、でした、ませんでした. </strong>
    Sử dụng các dạng ngắn như <strong>Vた、Vる、Vない、...</strong>
    Được dùng khi nói chuyện với: 
        + Bạn bè thân thiết
        + Người trong gia đình
        + Người có thể trò chuyện thân mật, suồng sả
    `,
                
        examples: [
        {
            sentence: "Xem trình bày thể lịch sự và thông thường ở các phần sau.",
        },
        
        ]
    }
},
{
    number: 2,
    pattern: "Thể lịch sự và thể thông thường của động từ",
    detail: {
    explanation: `
    `,
    extraTable: [
            {
                headers: [
                    { text: "Thể lịch sự ", width: "40%" },
                    { text: "Thể thông thường", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],
                rows: [
                    {
                        number: "行[い]きます",
                        numberReading: "行[い]く",
                        age: "Đi",
                    },
                    {
                        number: "行[い]きません",
                        numberReading: "行[い]かない",
                        age: "Không đi, chưa đi",
                    },
                    {
                        number: "行[い]きました",
                        numberReading: "行[い]った",
                        age: "Đã đi",
                    },
                    {
                        number: "行[い]きませんでした",
                        numberReading: "行[い]かなかった",
                        age: "Đã không đi",
                    },
                ]
                },
            ],
        
           examples: [
            {
            sentence: "①　毎日[まいにち]、本[ほん]を読[よ]みます。",
            meaning: "Tôi đọc sách mỗi ngày",
            audio: "lesson20_001",   
            answer: 
                {
                    sentence: "毎日[まいにち]、本[ほん]を読[よ]む。",
                    meaning: "Tôi đọc sách mỗi ngày",
                    audio: "lesson20_002"
                }     
                           
            },
            {
            sentence: "②　今日[きょう]は何[なに]もしません。",
            meaning: "Hôm nay tôi không làm gì cả",
            audio: "lesson20_003",   
            answer: 
                {
                    sentence: "今日[きょう]は何[なに]もしない。",
                    meaning: "Hôm nay tôi không làm gì cả",
                    audio: "lesson20_004",   
                }                    
            },
            
        ]
    },  
},

    {
    number: 3,
    pattern: "Thể lịch sự và thể thông thường của tính từ đuôi い",
    detail: {
    explanation: `
    `,
    extraTable: [
            {
                headers: [
                    { text: "Thể lịch sự ", width: "40%" },
                    { text: "Thể thông thường", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],
                rows: [
                    {
                        number: "忙[いそが]しいです",
                        numberReading: "忙[いそが]しい",
                        age: "Bận rộn",
                    },
                    {
                        number: "忙[いそが]しくないです",
                        numberReading: "忙[いそが]しくない",
                        age: "Không bận rộn",
                    },
                    {
                        number: "忙[いそが]しかったです",
                        numberReading: "忙[いそが]しかった",
                        age: "Đã bận rộn",
                    },
                    {
                        number: "忙[いそが]しくなかったです",
                        numberReading: "忙[いそが]しくなかった",
                        age: "Đã không bận rộn",
                    },
                ]
                },
            ],

           examples: [
            {
            sentence: "❶　日本語[にほんご]の勉強[べんきょう]は　面白[おもしろ]いです。",
            meaning: "Học tiếng Nhật thì thú vị",
            audio: "lesson20_005",
            answer: 
                {
                    sentence: "日本語[にほんご]の勉強[べんきょう]は　面白[おもしろ]い",
                    meaning: "Học tiếng Nhật thì thú vị",
                    audio: "lesson20_006"
                }    
            
            },
            {
            sentence: "❷　昨日[きのう]のパーティーは　楽[たの]しくなかったです。",
            meaning: "Bữa tiệc hôm qua đã không vui.",
            audio: "lesson20_007", 
            answer: 
                {
                    sentence: "昨日[きのう]のパーティーは　楽[たの]しくなかった",
                    meaning: "Bữa tiệc hôm qua đã không vui.",
                    audio: "lesson20_008"
                }        
        },
         
        ]
    },  
},

{
      number: 4,
    pattern: "Thể lịch sự và thể thông thường của tính từ đuôi な và danh từ",
    detail: {
    explanation: `
    `,
    extraTable: [
            {
                headers: [
                    { text: "Thể lịch sự ", width: "40%" },
                    { text: "Thể thông thường", width: "30%" },
                    { text: "Nghĩa", width: "30%" },
                ],
                rows: [
                    {
                        number: "便利[べんり]です",
                        numberReading: "便利[べんり]だ",
                        age: "Tiện lợi",
                    },
                    {
                        number: "便利[べんり]じゃありません",
                        numberReading: "便利[べんり]じゃない",
                        age: "Không tiện lợi",
                    },
                    {
                        number: "便利[べんり]でした",
                        numberReading: "便利[べんり]だった",
                        age: "Đã tiện lợi",
                    },
                    {
                        number: "便利[べんり]じゃありませんでした",
                        numberReading: "便利[べんり]じゃなかった",
                        age: "Đã không tiện lợi",
                    },
                    {
                        number: " ",
                        numberReading: " ",
                        age: " ",
                    },
                    {
                        number: "雨[あめ]です",
                        numberReading: "雨[あめ]だ",
                        age: "Mưa",
                    },
                    {
                        number: "雨[あめ]じゃありません",
                        numberReading: "雨[あめ]じゃない",
                        age: "Không mưa, chưa mưa",
                    },
                    {
                        number: "雨[あめ]でした",
                        numberReading: "雨[あめ]だった",
                        age: "Đã mưa",
                    },
                    {
                        number: "雨[あめ]じゃありませんでした",
                        numberReading: "雨[あめ]じゃなかった",
                        age: "Đã không mưa",
                    },
                ]
                },
            ],

        examples: [
        {
            sentence: "❶　先週[せんしゅう]の土曜日[どようび]は　暇[ひま]じゃありませんでした。",
            meaning: "Thứ 7 tuần trước đã không rảnh.",
            audio: "lesson20_009",
            answer: 
                {
                    sentence: "先週[せんしゅう]の土曜日[どようび]は　暇[ひま]じゃなかった。",
                    meaning: "Thứ 7 tuần trước đã không rảnh.",
                    audio: "lesson20_010"
                }   
              
        },
        
        {
            sentence: "❷　昨日[きのう]、雨[あめ]でした。",
            meaning: "Hôm qua trời mưa",
            audio: "lesson20_011",
            answer: 
                {
                    sentence: "昨日[きのう]、雨[あめ]だった。",
                    meaning: "Hôm qua trời mưa",
                    audio: "lesson20_012"
                }   
        },
        
        ]
    }
},
{
      number: 5,
    pattern: "Thể thông thường của các trường hợp khác",
    detail: {
    explanation: `
<strong>✦ Câu hỏi:</strong> Bỏ か và lên giọng ở cuối câu.
<strong>✦ はい　→　うん　；　いいえ　→　ううん</strong>
✦ Trong văn nói các trợ từ như は、へ、を、が thường được lược bỏ
✦ Trong văn nói "い" trong Vている thường được lược bỏ
✦ Trong văn nói "が (nhưng)" được thay bằng けど
✦ Trong văn nói "こちら、そちら、あちら、どちら" được thay bằng "こっち、そっち、あっち、どっち"
    `,

        examples: [
        {
            sentence: "❶　アイスクリーム［を］　食べる？↗",
            meaning: "Ăn kem không ?.",
            audio: "lesson20_013",
            answer: 
                {
                    sentence: ".....うん、たべる。",
                    meaning: "Ăn.",
                    audio: "lesson20_014"
                }                
        },
        
        {
            sentence: "❷　そこに　はさみ［が］　ある？↗",
            meaning: "Có cái kéo ở đó không ?",
            audio: "lesson20_015",
            answer: 
                {
                    sentence: ".....ううん、ない。",
                    meaning: "Không có.",
                    audio: "lesson20_016"
                }   
        },
        {
            sentence: "➌　そのカレー［は］　おいしい？↗",
            meaning: "Cơm cà ri đó có ngon không ?",
            audio: "lesson20_017",
            answer: 
                {
                    sentence: ".....うん、辛[から]いけど、おいしい。",
                    meaning: "Ừ, cay nhưng mà ngon.",
                    audio: "lesson20_018"
                }   
        },
         {
            sentence: "➌　辞書[じしょ]［を］持[も]って［い］る？↗",
            meaning: "Có mang theo từ điển không ?",
            audio: "lesson20_019",
            answer: 
                {
                    sentence: "......ううん、持って［い］ない。",
                    meaning: "Không, không mang.",
                    audio: "lesson20_020"
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
        content: "毎日[まいにち]　彼[かれ]に　電話[でんわ]します。　→ <strong>毎日[まいにち]　彼[かれ]に　電話[でんわ]する。</strong>",
         },
        questions: [
            {
                prompt: "➊　あした　また　来[き]ます。　→",
                answers: [
                    "あしたまた来る。",
                    "あしたまたくる。",
                     "明日また来る。"
                ]
            },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            {
                prompt: "➋　きょうは　何[なに]も　買[か]いません。　→",
                answers: [
                    "きょうは何も買わない。",
                    "きょうはなにもかわない。",
                    "今日は何も買わない。"
                ]
            },
            {
                prompt: "➌　少[すこ]し　疲[つか]れました。　→",
                answers: [
                    "少し疲れた。",
                    "すこしつかれた。"
                ]
            },
            {
                prompt: "➍　きのう　日記[にっき]を　書[か]きませんでした。　→",
                answers: [
                    "きのう日記を書かなかった。",
                    "きのうにっきをかかなかった。",
                    "昨日日記を書かなかった。"
                ]
            }
        ]
        },

        {
            title: "Luyện tập 2",
            example: {
                content: "着物[きもの]は　高[たか]いです。　→ <strong>着物[きもの]は　高[たか]い。</strong>",
                    },
            questions: [
                {
                    prompt: "➊　日本語[にほんご]の　勉強[べんきょう]は　おもしろいです。　→",
                    answers: [
                        "日本語の勉強はおもしろい。",
                        "にほんごのべんきょうはおもしろい。"
                    ]
                },
                {
                    prompt: "➋　この　辞書[じしょ]は　よくないです。　→",
                    answers: [
                        "この辞書はよくない。",
                        "このじしょはよくない。"
                    ]
                },
                {
                    prompt: "➌　けさは　頭[あたま]が　痛[いた]かったです。　→",
                    answers: [
                        "けさは頭が痛かった。",
                        "けさはあたまがいたかった。"
                    ]
                },
                {
                    prompt: "➍　きのうの　パーティーは　楽[たの]しくなかったです。　→",
                    answers: [
                        "きのうのパーティーは楽しくなかった。",
                        "きのうのパーティーはたのしくなかった。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 3",
            example: {
                content: [
                "コンビニは　便利[べんり]です。　→ <strong>コンビニは　便利[べんり]だ。</strong>",   
                ]
                    },

            questions: [
                {
                    prompt: "➊　カリナさんは　絵[え]が　上手[じょうず]です。　→",
                    answers: [
                        "カリナさんは絵が上手だ。",
                        "カリナさんはえがじょうずだ。"
                    ]
                },
                {
                    prompt: "➋　きょうは　休[やす]みじゃ　ありません。　→",
                    answers: [
                        "きょうは休みじゃない。",
                        "きょうはやすみじゃない。"
                    ]
                },
                {
                    prompt: "➌　きのうは　雨[あめ]でした。　→",
                    answers: [
                        "きのうは雨だった。",
                        "きのうはあめだった。"
                    ]
                },
                {
                    prompt: "➍　先週[せんしゅう]の　土曜日[どようび]は　暇[ひま]じゃ　ありませんでした。　→",
                    answers: [
                        "先週の土曜日は暇じゃなかった。",
                        "せんしゅうのどようびはひまじゃなかった。"
                    ]
                }
            ]

        },

        {
            title: "Luyện tập 4",
            example: {
                content: [
                 "そちらへ　行[い]っては　いけません。　→ <strong>そちらへ　行[い]っては　いけない。</strong>",
                ]
            },

            questions: [
                {
                    prompt: "➊　もう　一度[いちど]　歌舞伎[かぶき]を　見[み]たいです。　→",
                    answers: [
                        "もう一度歌舞伎を見たい。",
                        "もういちどかぶきをみたい。"
                    ]
                },
                {
                    prompt: "➋　電話番号[でんわばんごう]を　調[しら]べなければ　なりません。　→",
                    answers: [
                        "電話番号を調べなければならない。",
                        "でんわばんごうをしらべなければならない。"
                    ]
                },
                {
                    prompt: "➌　きのうは　映画[えいが]を　見[み]たり、音楽[おんがく]を　聞[き]いたり　しました。　→",
                    answers: [
                        "きのうは映画を見たり、音楽を聞いたりした。",
                        "きのうはえいがをみたり、おんがくをきいたりした。"
                    ]
                },
                {
                    prompt: "➍　この　電話[でんわ]を　使[つか]っても　いいです。　→",
                    answers: [
                        "この電話を使ってもいい。",
                        "このでんわをつかってもいい。"
                    ]
                },
                {
                    prompt: "➎　ワンさんは　神戸病院[こうべびょういん]で　働[はたら]いて　います。　→",
                    answers: [
                        "ワンさんは神戸病院で働いている。",
                        "ワンさんはこうべびょういんではたらいている。"
                    ]
                },
                {
                    prompt: "➏　漢字[かんじ]を　読[よ]む　ことが　できません。　→",
                    answers: [
                        "漢字を読むことができない。",
                        "かんじをよむことができない。"
                    ]
                },
                {
                    prompt: "➐　あしたまでに　レポートを　出[だ]さなくても　いいです。　→",
                    answers: [
                        "あしたまでにレポートを出さなくてもいい。",
                        "あしたまでにレポートをださなくてもいい。"
                    ]
                },
                {
                    prompt: "➑　富士山[ふじさん]を　見[み]た　ことが　ありません。　→",
                    answers: [
                        "富士山を見たことがない。",
                        "ふじさんをみたことがない。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 5",
            example: {
                content: [
                "あした　うちに　いる？（うん）　→ <strong>うん、いる。</strong>",    
                ] 
            },
            questions: [
                {
                    prompt: "➊　ビザが　要[い]る？（ううん）　→",
                    answers: [
                        "ううん、要らない。",
                        "ううん、いらない。"
                    ]
                },
                {
                    prompt: "➋　けさ　新聞[しんぶん]を　読[よ]んだ？（うん）　→",
                    answers: [
                        "うん、読んだ。",
                        "うん、よんだ。"
                    ]
                },
                {
                    prompt: "➌　日曜日[にちようび]　どこか　行[い]った？（ううん、どこも）　→",
                    answers: [
                        "ううん、どこも行かなかった。",
                        "ううん、どこもいかなかった。"
                    ]
                },
                {
                    prompt: "➍　いつ　木村[きむら]さんに　会[あ]う？（今月[こんげつ]の　終[お]わりごろ）　→",
                    answers: [
                        "今月の終わりごろ会う。",
                        "こんげつのおわりごろあう。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 6",
            example: {
                content: [
                    "ビールと　ワインと　どっちが　いい？（ワイン）　→ <strong>ワインの　ほうが　いい。</strong>",
                ]
                },

            questions: [
                {
                    prompt: "➊　東京[とうきょう]は　大阪[おおさか]より　人[ひと]が　多[おお]い？（うん、ずっと）　→",
                    answers: [
                        "うん、ずっと多い。",
                        "うん、ずっとおおい。"
                    ]
                },
                {
                    prompt: "➋　あの　店[みせ]は　サービスが　いい？（ううん、あまり）　→",
                    answers: [
                        "ううん、あまりよくない。"
                    ]
                },
                {
                    prompt: "➌　映画[えいが]は　おもしろかった？（ううん、全然[ぜんぜん]）　→",
                    answers: [
                        "ううん、全然おもしろくなかった。",
                        "ううん、ぜんぜんおもしろくなかった。"
                    ]
                },
                {
                    prompt: "➍　旅行[りょこう]で　どこが　いちばん　楽[たの]しかった？（イタリア）　→",
                    answers: [
                        "イタリアがいちばん楽しかった。",
                        "イタリアがいちばんたのしかった。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 7",
            example: {
                content: [
                    "元気[げんき]？（うん）　→ <strong>うん、元気[げんき]。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　今[いま]　何時[なんじ]？（5時[じ]40分[ぷん]）　→",
                    answers: [
                        "5時40分。",
                        "ごじよんじゅっぷん。"
                    ]
                },
                {
                    prompt: "➋　きょう　デパートは　休[やす]み？（ううん）　→",
                    answers: [
                        "ううん、休みじゃない。",
                        "ううん、やすみじゃない。"
                    ]
                },
                {
                    prompt: "➌　犬[いぬ]と　猫[ねこ]と　どちらが　好[す]き？（猫[ねこ]）　→",
                    answers: [
                        "猫のほうが好き。",
                        "ねこのほうがすき。"
                    ]
                },
                {
                    prompt: "➍　富士山[ふじさん]は　どうだった？（きれい）　→",
                    answers: [
                        "きれいだった。"
                    ]
                }
            ]
        },

        {
            title: "Luyện tập 8",
            example: {
                content: [
                   "辞書[じしょ]を　持[も]っている？（ううん）　→ <strong>ううん、持[も]っていない。</strong>",
                ]
            },
            questions: [
                
                {
                    prompt: "➊　今[いま]　雨[あめ]が　降[ふ]っている？（うん）　→",
                    answers: [
                        "うん、降っている。",
                        "うん、ふっている。",
                        "うん、降ってる。",
                        "うん、ふってる。"
                    ]
                },
                {
                    prompt: "➋　佐藤[さとう]さんの　住所[じゅうしょ]を　知[し]っている？（ううん）　→",
                    answers: [
                        "ううん、知らない。",
                        "ううん、しらない。"
                    ]
                },
                {
                    prompt: "➌　九州[きゅうしゅう]へ　行[い]ったことが　ある？（ううん）　→",
                    answers: [
                        "ううん、行ったことがない。",
                        "ううん、いったことがない。"
                    ]
                },
                {
                    prompt: "➍　自転車[じてんしゃ]を　修理[しゅうり]することが　できる？（うん）　→",
                    answers: [
                        "うん、できる。",
                        "うん、修理することができる。",
                        "うん、しゅうりすることができる。"
                    ]
                },
                {
                    prompt: "➎　あしたも　来[こ]なければ　ならない？（ううん）　→",
                    answers: [
                        "ううん、来なくてもいい。",
                        "ううん、こなくてもいい。"
                    ]
                },
                {
                    prompt: "➏　何[なに]を　食[た]べに　行[い]った？（タイ料理[りょうり]）　→",
                    answers: [
                        "タイ料理を食べに行った。",
                        "タイりょうりをたべにいった。"
                    ]
                },
                {
                    prompt: "➐　どこに　住[す]んでいる？（京都[きょうと]）　→",
                    answers: [
                        "京都に住んでいる。",
                        "きょうとにすんでいる。"
                    ]
                },
                {
                    prompt: "➑　いつまでに　本[ほん]を　返[かえ]さなければ　ならない？（来週[らいしゅう]の　木曜日[もくようび]）　→",
                    answers: [
                        "来週の木曜日までに返さなければならない。",
                        "らいしゅうのもくようびまでにかえさなければならない。"
                    ]
                }
            ]
        },
        
    ]
};



