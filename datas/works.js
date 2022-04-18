const works = [
    {
        period   : {
            start: '2021/12',
            end  : '2022/01',
            days : 30,
        },
        icon: {
            path: '/images/gas_plain.png',
            width: 50,
            height: 50,
        },
        title      : 'YouTube Admin（仮称）',
        is_private : 'true',
        app_attributes: ['Webアプリケーション'],
        description: 'YouTube動画の再生時間指定を簡単に設定・記録できるアプリケーションです。旧来の、YouTubeのコメントで再生時間を指定する方法では、コメントを登録しなければリンクにならないため時間がズレた場合コメントを編集し、時間がズレてないかを確認し、再度コメントを編集し…と何度か調整しなければいけませんでした。このアプリでは時間入力とYouTube動画の再生をリアルタイムに連動させることで、簡単に再生時間を設定することができます。',
        links      : [
            {
                title: 'URL',
                datas: [
                    {
                        text : 'YouTube Admin（仮称、登録機能なしデモ版）',
                        url  : 'https://script.google.com/macros/s/AKfycbwJoI7iKgGx1SkSox1VdHk9anA8tF-gc1_ySIkYo-xYXoZQOB00tHu20Slg4weaaCFD/exec',
                    },
                ],
            },
        ],
        role: '',
        technologies: [
            'Bootstrap5',
            'CSS3',
            'Google Apps Script',
            'HTML5',
            'JavaScript',
            'Vue 3',
        ],
    },

    {
        period   : {
            start: '2020/04',
            end  : '2020/06',
            days : 60,
        },
        icon: {
            path: '/images/iot.png',
            width: 50,
            height: 50,
        },
        title      : 'Awareness',
        is_private : 'true',
        app_attributes: ['IoT', 'Webアプリケーション'],
        description: '北陸先端科学技術大学院大学の講義「I483 スマート組込みシステム開発演習」にて製作したアプリケーションです。アプリの概要としては、気象病(気圧や気温、湿度の変動により、頭痛や吐き気などの体調不良を引き起こすもの)が起きるタイミングを事前に気づくことができる、というものです。ESP32(マイコン)とBME280(気温・湿度・気圧センサ)より室内の気温・湿度・気圧を取得しFiware(クラウド)に送信、そのデータとOpen Weather Mapのデータを比較し、大きく異なる場合はSlackで通知しています。',
        technologies: [
            'Amazon Web Service',
            'BitBucket',
            'Bootstrap4',
            'C言語',
            'Chart.js',
            'CSS3',
            'Fiware',
            'Flask',
            'FreeRTOS',
            'Git',
            'HTML5',
            'JavaScript',
            'Jinja2',
            'jQuery3',
            'Open Weather Map',
            'Python3',
            'Slack',
            'SQLite3'
        ],
        contents: {
            id: 'awareness',
            title: 'デモ動画',
            datas: [
                {
                    type: 'video',
                    text: 'Awarenessデモ動画',
                    src : '/videos/awareness.mov',
                },
            ]
        },
    },

    {
        period   : {
            start: '2020/01',
            end  : '2020/01',
            days : 10,
        },
        icon: {
            path: '/images/iot.png',
            width: 50,
            height: 50,
        },
        scale      : 2,
        title      : 'DIYスマートロック',
        is_private : 'true',
        app_attributes: ['IoT'],
        description: '非常に簡易的なスマートロックです。スマートフォンやSlackbot、MESHを使用して鍵の開閉をすることができます。',
        links      : [
            {
                title: '参考資料',
                datas: [
                    {
                        text: 'ソースコード',
                        url : 'https://github.com/d-ebi/smartlock',
                    }, {
                        text: 'RaspberryPiでスマートロックをDIY - Qiita',
                        url : 'https://qiita.com/d-ebi/items/894fa3ad73af17a9dbbb',
                    }
                ],
            },
        ],
        technologies: [
            'Bottle',
            'CSS3',
            'Flask',
            'Git',
            'GitHub',
            'HTML5',
            'IFTTT',
            'JavaScript',
            'Raspberry Pi',
            'Slack',
        ],
        contents: {
            id: 'smartlock',
            title: '動作動画',
            datas: [
                {
                    type: 'video',
                    text: 'DIYスマートロック動作動画1',
                    src : '/videos/smartlock_1.mov',
                },
                {
                    type: 'video',
                    text: 'DIYスマートロック動作動画2',
                    src : '/videos/smartlock_2.mov',
                }
            ]
        },
    },

    {
        period   : {
            start: '2019/12',
            end  : '2020/01',
            days : 5,
        },
        icon: {
            path: '/images/iot.png',
            width: 50,
            height: 50,
        },
        title      : '流しの使用状況可視化',
        is_private : 'false',
        app_attributes: ['IoT'],
        description: '会社の流しの使用状況を可視化したものです。人感センサを利用して検知し、Slackに通知してくれるというシンプルなものです。',
        links      : [
            {
                title: '参考資料',
                datas: [
                    {
                        text : '会社で流しの使用状況を可視化しました - Qiita',
                        url  : 'https://qiita.com/d-ebi/items/ae5a6c7791d4a72ecae5',
                    },
                ],
            },
        ],
        technologies: [
            'Python3',
            'Raspberry Pi',
            'Slack',
        ],
    },
    {
        period   : {
            start: '2019/01',
            end  : '2019/02',
            days : 30,
        },
        icon: {
            path: '/images/ruprun_icon.png',
            width: 50,
            height: 50,
        },
        scale      : 2,
        title      : 'ruprun!',
        is_private : 'true',
        app_attributes: ['Webアプリケーション', 'オープンデータ'],
        description: '東京都オープンデータアプリコンテスト2018へ応募し、知事賞および来場者特別賞を受賞したWebアプリケーションです(現在は閉鎖)。「運動を日常に」をテーマとして、手軽に行なえる散歩やランニングのコースを、オープンデータを元に自動生成し提案してくれるアプリケーションです。',
        links      : [
            {
                title: '参考資料',
                datas: [
                    {
                        text : '東京都オープンデータアプリコンテスト2018作品発表会・表彰式',
                        url  : 'https://portal.data.metro.tokyo.lg.jp/report/20190509/',
                    }, {
                        text: '政府CIOポータル オープンデータ100',
                        url : 'https://cio.go.jp/opendata100',
                    }, {
                        text: '夏のプログラミング・シンポジウム2019',
                        url : 'https://prosym.org/sprosym2019/'
                    },
                ],
            },
        ],
        role: 'WBSの作成、工数管理、アーキテクチャ設計、ネットワーク設計・構築、データベース設計・構築、API設計・コーディング、フロントサイドのコーディング、オープンデータのクレンジング、発表資料作成、論文執筆など',
        technologies: [
            'Amazon Web Service',
            'BitBucket',
            'Bootstrap4',
            'CSS3',
            'Flask',
            'Git',
            'HTML5',
            'JavaScript',
            'jQuery3',
            'MySQL',
            'Python3',
        ],
    },
];
