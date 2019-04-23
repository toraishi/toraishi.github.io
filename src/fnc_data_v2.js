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
   [0, "Nana Abe",	"CV. Marie Miyake",	[1,0], "http://user-images.githubusercontent.com/33990875/56612031-a914aa80-65e9-11e9-8906-71bcb852bf5c.png"],
   [0, "Karin Domyoji",	"CV. Hiyori Nitta",	[1,0], "https://user-images.githubusercontent.com/33990875/56613999-47a30a80-65ee-11e9-998d-5838adc574f2.png"],
   [0, "Rina Fujimoto",	"CV. Mayumi Kaneko",	[1,0], "https://user-images.githubusercontent.com/33990875/56614233-f7787800-65ee-11e9-974f-1d6187cd8044.png"],
   [0, "Anzu Futaba",	"CV. Hiromi Igarashi",	[1,0], "https://user-images.githubusercontent.com/33990875/56614852-5a1e4380-65f0-11e9-9e4c-9f7a44556d8b.png"],
   [0, "Mirei Hayasaka",	"CV. Ayaka Asai",	[1,0], "https://user-images.githubusercontent.com/33990875/56614444-6e157580-65ef-11e9-9e66-785cf2d33bae.png"],
   [0, "Shiki Ichinose",	"CV. Kotomi Aihara",	[1,0], "https://user-images.githubusercontent.com/33990875/56614914-73bf8b00-65f0-11e9-9a41-8b39d8074c0c.png"],
   [0, "Kyoko Igarashi",	"CV. Atsumi Tanezaki",	[1,0], "https://user-images.githubusercontent.com/33990875/56614179-cd26ba80-65ee-11e9-8e0f-5e89919a66b3.png"],
   [0, "Sae Kobayakawa",	"CV. Ricca Tachibana",	[1,0], "https://user-images.githubusercontent.com/33990875/56614359-3e666d80-65ef-11e9-8a79-bde3e75e2694.png"],
   [0, "Miho Kohinata",	"CV. Minami Tsuda",	[1,0], "https://user-images.githubusercontent.com/33990875/56614171-c7c97000-65ee-11e9-81c8-a764073cda4f.png"],
   [0, "Sachiko Koshimizu",	"CV. Ayana Taketatsu",	[1,0], "https://user-images.githubusercontent.com/33990875/56614467-7a013780-65ef-11e9-965d-a8c168f1c48e.png"],
   [0, "Chitose Kurosaki",	"CV. Kaoru Sakura",	[1,0], "https://user-images.githubusercontent.com/33990875/56612322-75865000-65ea-11e9-99af-a5b87a4cd9ff.png"],
   [0, "Miku Maekawa",	"CV. Natsumi Takamori",	[1,0], "https://user-images.githubusercontent.com/33990875/56614380-4a522f80-65ef-11e9-800d-183404df5fdf.png"],
   [0, "Kanako Mimura",	"CV. Yuka Ohtsubo",	[1,0], "https://user-images.githubusercontent.com/33990875/56614280-137c1980-65ef-11e9-8f29-7b464ca4f097.png"],
   [0, "Frederica Miyamoto",	"CV. Asami Takano",	[1,0], "https://user-images.githubusercontent.com/33990875/56614544-a6b54f00-65ef-11e9-998e-23be1b4c20bb.png"],
   [0, "Yukari Mizumoto",	"CV. Akane Fujita",	[1,0], "https://user-images.githubusercontent.com/33990875/56614055-70c39b00-65ee-11e9-8d5a-ec64bdd1de47.png"],
   [0, "Atsumi Munakata",	"CV. Ayaka Fujimoto",	[1,0], "https://user-images.githubusercontent.com/33990875/56613547-3dccd780-65ed-11e9-8f8f-99df94d17952.png"],
   [0, "Yuka Nakano",	"CV. Shino Shimoji",	[1,0], "https://user-images.githubusercontent.com/33990875/56614119-9cdf1c00-65ee-11e9-8724-1eafe619e062.png"],
   [0, "Chieri Ogata",	"CV. Naomi Oozora",	[1,0], "https://user-images.githubusercontent.com/33990875/56614290-1840cd80-65ef-11e9-8081-7bb68c463f68.png"],
   [0, "Yuuki Otokura",	"CV. Yuki Nakashima",	[1,0], "https://user-images.githubusercontent.com/33990875/56614113-9781d180-65ee-11e9-9561-003644df9cb3.png"],
   [0, "Mayu Sakuma",	"CV. Yui Makino",	[1,0], "https://user-images.githubusercontent.com/33990875/56614519-98ffc980-65ef-11e9-852a-5fac62bf8021.png"],
   [0, "Momoka Sakurai",	"CV. Haruka Terui",	[1,0], "https://user-images.githubusercontent.com/33990875/56614232-f34c5a80-65ee-11e9-99a7-e7356b6708ce.png"],
   [0, "Hiromi Seki",	"CV. Saya Aizawa",	[1,0], "https://user-images.githubusercontent.com/33990875/56613723-9bf9ba80-65ed-11e9-9c7e-dc4e097612ce.png"],
   [0, "Noriko Shiina",	"CV. Chiyo Tomaru",	[1,0], "https://user-images.githubusercontent.com/33990875/56614068-77521280-65ee-11e9-8645-084df470bfb3.png"],
   [0, "Uzuki Shimamura",	"CV. Ayaka Ohashi",	[1,0], "https://user-images.githubusercontent.com/33990875/56614821-5094db80-65f0-11e9-9242-6dce4fdb5b3b.png"],
   [0, "Hotaru Shiragiku",	"CV. Satomi Amano",	[1,0], "https://user-images.githubusercontent.com/33990875/56614007-4c67be80-65ee-11e9-9837-b4aa6f6177f5.png"],
   [0, "Chiyo Shirayuki",	"CV. Risa Sekiguchi",	[1,0], "https://user-images.githubusercontent.com/33990875/56612314-6e5f4200-65ea-11e9-93a9-3c19daba4d7b.png"],
   
   [0, "Yukino Aihara",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612384-a2d2fe00-65ea-11e9-9f6c-63734428d49d.png"],
   [0, "Erika Akanishi",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612678-589e4c80-65eb-11e9-8c0a-03e08b5eb338.png"],
   [0, "Miyako Anzai",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613313-c6974380-65ec-11e9-90dd-b070625676a7.png"],
   [0, "Kanna Ariura",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613391-ec244d00-65ec-11e9-9c94-f78918e3c819.png"],
   [0, "Fuka Asano",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613115-62747f80-65ec-11e9-9f15-375546a5a352.png"],
   [0, "Clarice",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613726-a1570500-65ed-11e9-8380-db90e1911c5f.png"],
   [0, "Tsubaki Egami",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612202-17596d00-65ea-11e9-93c4-be66006eecca.png"],
   [0, "Yao Fueifuei",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612727-6f44a380-65eb-11e9-8c0c-7ac1582f79e5.png"],
   [0, "Mai Fukuyama",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612797-9c915180-65eb-11e9-9cff-e70abd3ce226.png"],
   [0, "Miyo Harada",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613259-a6678480-65ec-11e9-9b12-324357a0aa0a.png"],
   [0, "Rena Hyodo",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613254-a2d3fd80-65ec-11e9-80f3-8b50acaf7ac5.png"],
   [0, "Akiha Ikebukuro",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612363-9189f180-65ea-11e9-8924-6a6f8bdd38d6.png"],
   [0, "Kana Imai",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613533-36a5c980-65ed-11e9-808e-79d05286fb50.png"],
   [0, "Setsuna Imura",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612485-e299e580-65ea-11e9-80ac-e3d55ece91f1.png"],
   [0, "Koharu Koga",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613464-0f4efc80-65ed-11e9-94b4-970141f6592c.png"],
   [0, "Shinobu Kudo",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613028-26411f00-65ec-11e9-997d-0fdb106ec55e.png"],
   [0, "Nene Kurihara",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612963-fbef6180-65eb-11e9-8592-17cb13f0f814.png"],
   [0, "Wakaba Kusakabe",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612660-50461180-65eb-11e9-8032-00112d4816bc.png"],
   [0, "Misato Manaka",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612407-b9795500-65ea-11e9-9ff3-f89925597110.png"],
   [0, "Saya Matsubara",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612474-ddd53180-65ea-11e9-92c1-ed4a27ebf442.png"],
   [0, "Arisa Mochida",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613319-cbf48e00-65ec-11e9-96f4-f542205fe7fc.png"],
   [0, "Azuki Momoi",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612792-98fdca80-65eb-11e9-9b1c-c6684407debd.png"],
   [0, "Sakura Muramatsu",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613109-5c7e9e80-65ec-11e9-9156-22a7d2245dc2.png"],
   [0, "Hasumi Nagatomi",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612978-01e54280-65ec-11e9-9f57-f40f39bc0d41.png"],
   [0, "Hitomi Niwa",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612717-69e75900-65eb-11e9-8ed8-9f178710fd89.png"],
   [0, "Michiru Ohara",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613401-f21a2e00-65ec-11e9-9999-b7384ad2dbc8.png"],
   [0, "Yuriko Ohnishi",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612903-e11ced00-65eb-11e9-9f7d-4e0b37ce89d8.png"],
   [0, "Yuu Ohta",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612849-ba5eb680-65eb-11e9-9e79-9a14bcb46ff1.png"],
   [0, "Kurumi Ohnuma",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612250-3c4de000-65ea-11e9-8578-e24a69372536.png"],
   [0, "Saori Okuyama",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613485-183fce00-65ed-11e9-870b-7651a0d51c2f.png"],
   [0, "Kotoka Saionji",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613812-d5322a80-65ed-11e9-9bbf-56fdeeb434cd.png"],
   [0, "Satomi Sakakibara",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613021-204b3e00-65ec-11e9-99c8-f39890c0208c.png"],
   [0, "Seika Suzumiya",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612565-11b05700-65eb-11e9-8c2d-d8535393897f.png"],
   [0, "Akari Tsujino",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612414-bda57280-65ea-11e9-8564-f5c6a1fa7fa0.png"],
   [0, "Miyabi Tsukimiya",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612857-bf236a80-65eb-11e9-9f86-fc296b29a35f.png"],
   [0, "Kiyora Yanagi",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612894-dc583900-65eb-11e9-8f65-154bfa06a5c1.png"],
   [0, "Miyuki Yanase",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56612542-03fad180-65eb-11e9-9a30-a7c29f208f3a.png"],
   [0, "Chika Yokoyama",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613683-871d2700-65ed-11e9-9b52-af1906de96c3.png"],
   [0, "Kozue Yusa",	"",	[0,1], "https://user-images.githubusercontent.com/33990875/56613800-cf3c4980-65ed-11e9-9933-09738cc92ab2.png"],
   [0, "x",	"",	[0,1], "x"],
];
