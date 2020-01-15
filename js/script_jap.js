
/**
 * ACTUELLEMENT EN STAND-BYE
 * JE NE CONNAIS PAS LE JAPONAIS MAIS C'EST UN PROJET QUI ME TENTE BIEN :P
 */



/** HIRAGANA */
car = car.replace(/ô/g, "oう");
car = car.replace(/û/g, "uう");
car = car.replace(/â/g, "aあ");
car = car.replace(/î/g, "iい");
car = car.replace(/ê/g, "eい");

car = car.replace(/n/g, "ん");
car = car.replace(/q/g, "っ");
car = car.replace(/tsu/g, "つ");
car = car.replace(/dzu/g, "づ");
car = car.replace(/dju/g, "づ");
car = car.replace(/dji/g, "ぢ");
car = car.replace(/kya/g, "きゃ");
car = car.replace(/kyu/g, "きゅ");
car = car.replace(/kyo/g, "きょ");
car = car.replace(/んya/g, "にゃ");
car = car.replace(/んyu/g, "にゅ");
car = car.replace(/んyo/g, "にょ");
car = car.replace(/sha/g, "しゃ");
car = car.replace(/shi/g, "し");
car = car.replace(/shu/g, "しゅ");
car = car.replace(/sho/g, "しょ");
car = car.replace(/chi/g, "ち");
car = car.replace(/cha/g, "ちゃ");
car = car.replace(/chu/g, "ちゅ");
car = car.replace(/cho/g, "ちょ");
car = car.replace(/hya/g, "ひゃ");
car = car.replace(/hyu/g, "ひゅ");
car = car.replace(/hyo/g, "ひょ");
car = car.replace(/mya/g, "みゃ");
car = car.replace(/myu/g, "みゅ");
car = car.replace(/myo/g, "みょ");
car = car.replace(/rya/g, "りゃ");
car = car.replace(/ryu/g, "りゅ");
car = car.replace(/ryo/g, "りょ");
car = car.replace(/gya/g, "ぎゃ");
car = car.replace(/gyu/g, "ぎゅ");
car = car.replace(/gyo/g, "ぎょ");
car = car.replace(/bya/g, "びゃ");
car = car.replace(/byu/g, "びゅ");
car = car.replace(/byo/g, "びょ");
car = car.replace(/pya/g, "ぴゃ");
car = car.replace(/pyu/g, "ぴゅ");
car = car.replace(/pyo/g, "ぴょ");
car = car.replace(/ja/g, "じゃ");
car = car.replace(/ju/g, "じゅ");
car = car.replace(/jo/g, "じょ");
car = car.replace(/ba/g, "ば");
car = car.replace(/da/g, "だ");
car = car.replace(/ga/g, "が");
car = car.replace(/ha/g, "は");
car = car.replace(/ka/g, "か");
car = car.replace(/ma/g, "ま");
car = car.replace(/んa/g, "な");
car = car.replace(/pa/g, "ぱ");
car = car.replace(/ra/g, "ら");
car = car.replace(/sa/g, "さ");
car = car.replace(/ta/g, "た");
car = car.replace(/wa/g, "わ");
car = car.replace(/ya/g, "や");
car = car.replace(/za/g, "ざ");
car = car.replace(/a/g, "あ");
car = car.replace(/be/g, "べ");
car = car.replace(/de/g, "で");
car = car.replace(/ge/g, "げ");
car = car.replace(/he/g, "へ");
car = car.replace(/ke/g, "け");
car = car.replace(/me/g, "め");
car = car.replace(/んe/g, "ね");
car = car.replace(/pe/g, "ぺ");
car = car.replace(/re/g, "れ");
car = car.replace(/we/g, "ゑ");
car = car.replace(/se/g, "せ");
car = car.replace(/te/g, "て");
car = car.replace(/ze/g, "ぜ");
car = car.replace(/[eé]/g, "え");
car = car.replace(/bi/g, "び");
car = car.replace(/gi/g, "ぎ");
car = car.replace(/hi/g, "ひ");
car = car.replace(/ki/g, "き");
car = car.replace(/si/g, "し");
car = car.replace(/ti/g, "ち");
car = car.replace(/mi/g, "み");
car = car.replace(/んi/g, "に");
car = car.replace(/pi/g, "ぴ");
car = car.replace(/ri/g, "り");
car = car.replace(/wi/g, "ゐ");
car = car.replace(/ji/g, "じ");
car = car.replace(/zi/g, "じ");
car = car.replace(/bo/g, "ぼ");
car = car.replace(/do/g, "ど");
car = car.replace(/go/g, "ご");
car = car.replace(/ho/g, "ほ");
car = car.replace(/ko/g, "こ");
car = car.replace(/mo/g, "も");
car = car.replace(/んo/g, "の");
car = car.replace(/po/g, "ぽ");
car = car.replace(/ro/g, "ろ");
car = car.replace(/so/g, "そ");
car = car.replace(/to/g, "と");
car = car.replace(/wo/g, "を");
car = car.replace(/yo/g, "よ");
car = car.replace(/zo/g, "ぞ");
car = car.replace(/o/g, "お");
car = car.replace(/bu/g, "ぶ");
car = car.replace(/gu/g, "ぐ");
car = car.replace(/fu/g, "ふ");
car = car.replace(/ku/g, "く");
car = car.replace(/mu/g, "む");
// car = car.replace(/んu/g, "ぬ");
car = car.replace(/pu/g, "ぷ");
car = car.replace(/ru/g, "る");
car = car.replace(/su/g, "す");
car = car.replace(/tu/g, "つ"); // dd
car = car.replace(/yu/g, "ゆ");
car = car.replace(/zu/g, "ず");

// cas des doublons
car = car.replace(/di/g, "ぢ");
car = car.replace(/じ=/g, "ぢ");
car = car.replace(/du/g, "づ");
car = car.replace(/ず=/g, "づ");

car = car.replace(/i/g, "い");
car = car.replace(/u/g, "う");
car = car.replace(/v/g, "ゔ");

car = car.replace(/つ=/g, "っ");
car = car.replace(/あ=/g, "ぁ");
car = car.replace(/い=/g, "ぃ");
car = car.replace(/う=/g, "ぅ");
car = car.replace(/え=/g, "ぇ");
car = car.replace(/お=/g, "ぉ");
car = car.replace(/や=/g, "ゃ");
car = car.replace(/ゆ=/g, "ゅ");
car = car.replace(/よ=/g, "ょ");

car = car.replace(/\./g, "。");
car = car.replace(/\,/g, "、");
car = car.replace(/\!/g, "！");
car = car.replace(/\?/g, "？");
car = car.replace(/\:/g, "：");
car = car.replace(/\(/g, "（");
car = car.replace(/\)/g, "）");
car = car.replace(/\[/g, "［");
car = car.replace(/\]/g, "］");
car = car.replace(/\«/g, "「");
car = car.replace(/\»/g, "」");









/** KATAKANA */
car = car.replace(/[ôō]/g, "oー");
car = car.replace(/[ūû]/g, "uー");
car = car.replace(/[âā]/g, "aー");
car = car.replace(/[îī]/g, "iー");
car = car.replace(/[êē]/g, "eー");
car = car.replace(/_/g, "ー");

car = car.replace(/n/g, "ン");
car = car.replace(/v/g, "ヴ");
car = car.replace(/q/g, "ッ");
car = car.replace(/kya/g, "キャ");
car = car.replace(/kyu/g, "キュ");
car = car.replace(/kyo/g, "キョ");
car = car.replace(/ンya/g, "ニャ");
car = car.replace(/ンyu/g, "ニュ");
car = car.replace(/ンyo/g, "ニョ");
car = car.replace(/sha/g, "シャ");
car = car.replace(/shu/g, "シュ");
car = car.replace(/sho/g, "ショ");
car = car.replace(/cha/g, "チャ");
car = car.replace(/chu/g, "チュ");
car = car.replace(/cho/g, "チョ");
car = car.replace(/hya/g, "ヒャ");
car = car.replace(/hyu/g, "ヒュ");
car = car.replace(/hyo/g, "ヒョ");
car = car.replace(/mya/g, "ミャ");
car = car.replace(/myu/g, "ミュ");
car = car.replace(/myo/g, "ミョ");
car = car.replace(/rya/g, "リャ");
car = car.replace(/ryu/g, "リュ");
car = car.replace(/ryo/g, "リョ");
car = car.replace(/gya/g, "ギャ");
car = car.replace(/gyu/g, "ギュ");
car = car.replace(/gyo/g, "ギョ");
car = car.replace(/bya/g, "ビャ");
car = car.replace(/byu/g, "ビュ");
car = car.replace(/byo/g, "ビョ");
car = car.replace(/pya/g, "ピャ");
car = car.replace(/pyu/g, "ピュ");
car = car.replace(/pyo/g, "ピョ");
car = car.replace(/ja/g, "ジャ");
car = car.replace(/ju/g, "ジュ");
car = car.replace(/jo/g, "ジョ");

car = car.replace(/tsu/g, "ツ");
car = car.replace(/dzu/g, "ヅ");
car = car.replace(/dju/g, "ヅ");
car = car.replace(/dji/g, "ヂ");
car = car.replace(/shi/g, "シ");
car = car.replace(/chi/g, "チ");

car = car.replace(/ba/g, "バ");
car = car.replace(/da/g, "ダ");
car = car.replace(/ga/g, "ガ");
car = car.replace(/ha/g, "ハ");
car = car.replace(/ka/g, "カ");
car = car.replace(/ma/g, "マ");
car = car.replace(/ンa/g, "ナ");
car = car.replace(/pa/g, "パ");
car = car.replace(/ra/g, "ラ");
car = car.replace(/sa/g, "サ");
car = car.replace(/ta/g, "タ");
car = car.replace(/wa/g, "ワ");
car = car.replace(/ya/g, "ヤ");
car = car.replace(/za/g, "ザ");
car = car.replace(/a/g, "ア");
car = car.replace(/be/g, "ベ");
car = car.replace(/de/g, "デ");
car = car.replace(/ge/g, "ゲ");
car = car.replace(/he/g, "ヘ");
car = car.replace(/ke/g, "ケ");
car = car.replace(/me/g, "メ");
car = car.replace(/ンe/g, "ネ");
car = car.replace(/pe/g, "ペ");
car = car.replace(/re/g, "レ");
car = car.replace(/se/g, "セ");
car = car.replace(/te/g, "テ");
car = car.replace(/we/g, "ヱ");
car = car.replace(/ze/g, "ゼ");
car = car.replace(/[eé]/g, "エ");
car = car.replace(/bi/g, "ビ");
car = car.replace(/gi/g, "ギ");
car = car.replace(/hi/g, "ヒ");
car = car.replace(/ki/g, "キ");
car = car.replace(/si/g, "シ");
car = car.replace(/ti/g, "チ");
car = car.replace(/mi/g, "ミ");
car = car.replace(/ンi/g, "ニ");
car = car.replace(/pi/g, "ピ");
car = car.replace(/ri/g, "リ");
car = car.replace(/wi/g, "ヰ");
car = car.replace(/ji/g, "ジ");
car = car.replace(/zi/g, "ジ");
car = car.replace(/bo/g, "ボ");
car = car.replace(/do/g, "ド");
car = car.replace(/go/g, "ゴ");
car = car.replace(/ho/g, "ホ");
car = car.replace(/ko/g, "コ");
car = car.replace(/mo/g, "モ");
car = car.replace(/ンo/g, "ノ");
car = car.replace(/po/g, "ポ");
car = car.replace(/ro/g, "ロ");
car = car.replace(/so/g, "ソ");
car = car.replace(/to/g, "ト");
car = car.replace(/wo/g, "ヲ");
car = car.replace(/yo/g, "ヨ");
car = car.replace(/zo/g, "ゾ");
car = car.replace(/o/g, "オ");
car = car.replace(/bu/g, "ブ");
car = car.replace(/gu/g, "グ");
car = car.replace(/fu/g, "フ");
car = car.replace(/tu/g, "ツ");
car = car.replace(/ku/g, "ク");
car = car.replace(/mu/g, "ム");
car = car.replace(/ンu/g, "ヌ");
car = car.replace(/pu/g, "プ");
car = car.replace(/ru/g, "ル");
car = car.replace(/su/g, "ス");
car = car.replace(/yu/g, "ユ");
car = car.replace(/zu/g, "ズ");

// cas des doublons
car = car.replace(/di/g, "ヂ");
car = car.replace(/ジ=/g, "ヂ");
car = car.replace(/du/g, "ヅ");
car = car.replace(/ズ=/g, "ヅ");

car = car.replace(/i/g, "イ");
car = car.replace(/u/g, "ウ");

car = car.replace(/ア=/g, "ァ");
car = car.replace(/イ=/g, "ィ");
car = car.replace(/ウ=/g, "ゥ");
car = car.replace(/エ=/g, "ェ");
car = car.replace(/オ=/g, "ォ");
car = car.replace(/ツ=/g, "ッ");
car = car.replace(/ヤ=/g, "ャ");
car = car.replace(/ユ=/g, "ュ");
car = car.replace(/ヨ=/g, "ョ");

car = car.replace(/\./g, "。");
car = car.replace(/\,/g, "、");
car = car.replace(/\!/g, "！");
car = car.replace(/\?/g, "？");
car = car.replace(/\:/g, "：");
car = car.replace(/\(/g, "（");
car = car.replace(/\)/g, "）");
car = car.replace(/\[/g, "［");
car = car.replace(/\]/g, "］");
car = car.replace(/\«/g, "「");
car = car.replace(/\»/g, "」");