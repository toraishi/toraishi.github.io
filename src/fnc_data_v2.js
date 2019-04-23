// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'aidoru/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 5;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
   "CG Voiced",
   "CG Unvoiced"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 0, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
   [0, "Nana Abe",	"CV. Marie Miyake",	[1,0], "http://imas.gamedbs.jp/cg/image_sp/card/l/8569f522a0287b4b1f4032225795aaf7.jpg"],
   [0, "Karin Domyoji",	"CV. Hiyori Nitta",	[1,0], "x"],
   [0, "Rina Fujimoto",	"CV. Mayumi Kaneko",	[1,0], "x"],
   [0, "Anzu Futaba",	"CV. Hiromi Igarashi",	[1,0], "x"],
   [0, "Mirei Hayasaka",	"CV. Ayaka Asai",	[1,0], "x"],
   [0, "Shiki Ichinose",	"CV. Kotomi Aihara",	[1,0], "x"],
   [0, "Kyoko Igarashi",	"CV. Atsumi Tanezaki",	[1,0], "x"],
   [0, "Sae Kobayakawa",	"CV. Ricca Tachibana",	[1,0], "x"],
   [0, "Miho Kohinata",	"CV. Minami Tsuda",	[1,0], "x"],
   [0, "Sachiko Koshimizu",	"CV. Ayana Taketatsu",	[1,0], "x"],
   [0, "Chitose Kurosaki",	"CV. Kaoru Sakura",	[1,0], "x"],
   [0, "Miku Maekawa",	"CV. Natsumi Takamori",	[1,0], "x"],
   [0, "Kanako Mimura",	"CV. Yuka Ohtsubo",	[1,0], "x"],
   [0, "Frederica Miyamoto",	"CV. Asami Takano",	[1,0], "x"],
   [0, "Yukari Mizumoto",	"CV. Akane Fujita",	[1,0], "x"],
   [0, "Atsumi Munakata",	"CV. Ayaka Fujimoto",	[1,0], "x"],
   [0, "Yuka Nakano",	"CV. Shino Shimoji",	[1,0], "x"],
   [0, "Chieri Ogata",	"CV. Naomi Oozora",	[1,0], "x"],
   [0, "Yuuki Otokura",	"CV. Yuki Nakashima",	[1,0], "x"],
   [0, "Mayu Sakuma",	"CV. Yui Makino",	[1,0], "x"],
   [0, "Momoka Sakurai",	"CV. Haruka Terui",	[1,0], "x"],
   [0, "Hiromi Seki",	"CV. Saya Aizawa",	[1,0], "x"],
   [0, "Noriko Shiina",	"CV. Chiyo Tomaru",	[1,0], "x"],
   [0, "Uzuki Shimamura",	"CV. Ayaka Ohashi",	[1,0], "x"],
   [0, "Hotaru Shiragiku",	"CV. Satomi Amano",	[1,0], "x"],
   [0, "Chiyo Shirayuki",	"CV. Risa Sekiguchi",	[1,0], "x"],
   
   [0, "Yukino Aihara",	"",	[0,1], "x"],
   [0, "Erika Akanishi",	"",	[0,1], "x"],
   [0, "Miyako Anzai",	"",	[0,1], "x"],
   [0, "Kanna Ariura",	"",	[0,1], "x"],
   [0, "Fuka Asano",	"",	[0,1], "x"],
   [0, "Clarice",	"",	[0,1], "x"],
   [0, "Tsubaki Egami",	"",	[0,1], "x"],
   [0, "Yao Fueifuei",	"",	[0,1], "x"],
   [0, "Mai Fukuyama",	"",	[0,1], "x"],
   [0, "Miyo Harada",	"",	[0,1], "x"],
   [0, "Rena Hyodo",	"",	[0,1], "x"],
   [0, "Akiha Ikebukuro",	"",	[0,1], "x"],
   [0, "Kana Imai",	"",	[0,1], "x"],
   [0, "Setsuna Imura",	"",	[0,1], "x"],
   [0, "Koharu Koga",	"",	[0,1], "x"],
   [0, "Shinobu Kudo",	"",	[0,1], "x"],
   [0, "Nene Kurihara",	"",	[0,1], "x"],
   [0, "Wakaba Kusakabe",	"",	[0,1], "x"],
   [0, "Misato Manaka",	"",	[0,1], "x"],
   [0, "Saya Matsubara",	"",	[0,1], "x"],
   [0, "Arisa Mochida",	"",	[0,1], "x"],
   [0, "Azuki Momoi",	"",	[0,1], "x"],
   [0, "Sakura Muramatsu",	"",	[0,1], "x"],
   [0, "Hasumi Nagatomi",	"",	[0,1], "x"],
   [0, "Hitomi Niwa",	"",	[0,1], "x"],
   [0, "Michiru Ohara",	"",	[0,1], "x"],
   [0, "Yuriko Ohnishi",	"",	[0,1], "x"],
   [0, "Yuu Ohta",	"",	[0,1], "x"],
   [0, "Kurumi Ohnuma",	"",	[0,1], "x"],
   [0, "Saori Okuyama",	"",	[0,1], "x"],
   [0, "Kotoka Saionji",	"",	[0,1], "x"],
   [0, "Satomi Sakakibara",	"",	[0,1], "x"],
   [0, "Seika Suzumiya",	"",	[0,1], "x"],
   [0, "Akari Tsujino",	"",	[0,1], "x"],
   [0, "Miyabi Tsukimiya",	"",	[0,1], "x"],
   [0, "Kiyora Yanagi",	"",	[0,1], "x"],
   [0, "Miyuki Yanase",	"",	[0,1], "x"],
   [0, "Chika Yokoyama",	"",	[0,1], "x"],
   [0, "Kozue Yusa",	"",	[0,1], "x"],
   [0, "x",	"",	[0,1], "x"],
];
