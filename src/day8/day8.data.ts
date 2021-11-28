import { parseInput } from '../utils/input';

const input = `"BACKxa8brBACKx8bjrBACK""
"nq"
"zjrfcpbktjmrzgszBACKxcaqscBACKx03nBACK"huqab"
"dazBACKSzyyxddpwk"
"draesBACKxa2nBACKSgBACKx27ekBACK"ljBACK"BACKSviqych"
"nnxBACKSkrnrfomdntBACKx2flblBACKxd2xpoBACK"cpBACK"k"
"kwdaapalq"
"uBACK"ptk"
"ckhorczuiudfjmmccBACKSuBACK"wozqxibsfjma"
"ydctdrxatBACK"pdBACK"lwiBACK"bjesevfwBACKxe8"
"vBACK"BACKxa8rrzepBACK"BACK"r"
"nbydghkfvmqBACKSBACKxe0BACK"lfsrsvlsjBACK"iBACKx61liif"
"jsasBACK"u"
"odipikxlo"
"BACK"rnubsgwltqkbsuBACK"pcpcs"
"eitkBACKSfBACKSmhcqqoymBACKSji"
"vnedc"
"BACK"lhcaurdqzyjyu"
"haxzsaBACK"zcnBACK"yBACK"foclgtjfcnvBACK"mBACKx68krc"
"BACK"eoegggBACK"tmiydvcayBACK"vfavc"
"snqvyqoncwxcvwbdktoywch"
"rnfgjsyrBACKxd5wacy"
"ikBACK"hebrpvsts"
"txw"
"BACKx15pxtdkogdBACK"urbmBACK"gevhhBACK"nxrBACKx3erxtk"
"cetqtcy"
"inleepBACKSmgl"
"uflwbxvwwBACKx2cxzezqnaplyBACK"yhBACK"qlllzk"
"eepakBACK"xqtedzt"
"naBACKx61qzfieafvyrsnwkssznohjmc"
"yceaonylzBACKxc1BACKSjrlbbkzwsidfi"
"ybqafngkcqpbp"
"BACKxaft"
"yidjpaobqydso"
"juBACKSldxigBACKSlrdrhjcmmBACKx77rc"
"tylacqeslnwjBACKx48dsBACK"tjxa"
"efbfm"
"BACKSfxkgoprgdcjgyajykgBACKSdtbrz"
"eujvva"
"hBACKx7acwfpikmeBACKSvwthyvrqdnxBACK""
"rbpbrxmBACKSBACK"BACK"BACK"voxx"
"ykiwBACK"tkbBACKSlforuBACK"rsfBACKStfBACK"xBACK"rqti"
"eBACKSwhBACKx77aqeugiqBACKSihhfqfuaij"
"gBACK"tBACKSo"
"nxzoBACK"hfBACKSxp"
"dxiaqfoBACKxea"
"kaliBACKSzczhiqkqzybjjBACK"fgdjnik"
"zdkgrqmdv"
"bimximBACKxb6lrwsajBACK"uiBACK"a"
"BACK"rrznitibgxBACKSolpsjmjqzctxaubdifsq"
"zbBACK"khzixaacmhuzmlymoformipdzml"
"qfwi"
"hjwsxfpphttjyBACK"BACK"zixaisBACKxbblgnqfto"
"pujBACKSqmyuBACK"nqgaqfthbwjokbmrpbhpi"
"cyxdpkhBACKSBACK""
"q"
"m"
"tbxdzzllarlo"
"gbtys"
"gytilkBACKSvlqxvcuutjunrqc"
"uugkvcuzanBACKSeyhb"
"yaxrBACK"genlbgwBACK"BACKSuc"
"nrgecjeipBACKSsjdvgqaqxwsqactopu"
"puBACK"rBACK"txpyrkfnyBACKSzmwfneyvwmnkkdipv"
"jmBACKxa3bhwvq"
"qxojmnmlBACK"wBACKx9airr"
"xbzsuihsBACKx4dcedyBACKxaclrhgiiBACKSBACK""
"drgjirusrekrwmvxllwdm"
"BACKx28hfxnfpycmpnkkuBACK"csufBACKxaarxlqygBACK"x"
"BACK"zvzBACKSrmgBACK"BACKSsxxoifffyqfynBACK"iqBACK"ps"
"BACK"z"
"zbwkmkBACK"sgzosBACKx93gtcBACK""
"bvmBACKx28aaBACKSBACKSBACK"pywuhanioxBACKSzBACKShbpBACKxd7mold"
"aszgvsyna"
"qfBACK"vdwuss"
"lnohniBACK"qwiacjsjegstlbfqBACKSkyjhyd"
"cBACKSnaawulxlqplnacvytspryBACKxf5ytxxqq"
"razwqmsqgbaaxcdBACKSf"
"radggyrjrgBACK"zx"
"BACK"puBACKx11tBACKSajcjuieinlkvya"
"veggiskh"
"eglfhjxietBACK"kouqfskwsyBACK"hpthsldel"
"mvBACKxc1bBACK"fBACKSshrssnjwcpmurepdxdlcj"
"dlayjdBACK"suvzotgdtc"
"BACKxa9pvxeopn"
"lpplsaxyBACK"oiwaq"
"hqwhBACKSlusv"
"hykykwlxBACK"BACKxa5atkghBACKSdBACKx63dff"
"vfktanpjyBACK"xxetc"
"dnhwkgjnsmsswfuelvihvjlBACK"jtf"
"xBACK"dwvzraBACK"nbbsewftehczgbvfzdBACK"rau"
"csfiBACK"mzejnjqkqupwadrgtiBACK"von"
"xckfBACKxf7xsmBACKSpgvlpetjndpyblaisBACKSz"
"yecyBACKx6fujBACKx58bwpgeuiwBACK"mdu"
"fgb"
"cBACKSlxBACKx3efthetBACKxfdelgvwvpem"
"kgyrmarvfwjinlowt"
"yzte"
"vcBACK"z"
"sxevqfzmmdwsuuBACK""
"fxbaercmcyBACKxb6md"
"f"
"mBACKx44gqbcpphoBACKSb"
"gtafrBACKx57mBACKx11jyBACK"BACK"erwmmpiwjkbckuw"
"ufdjtBACK"kssprzxqixzxmqBACKx58q"
"yzbyoBACK"lfdbyaxexyfbnyvBACKSBACKxe8xmre"
"uBACKx43ntrBACKSBACKSbyyfjrBACK"iveujvnwsqbnpuvrta"
"usBACKxf6bai"
"cBACKSedh"
"tzckolphexfqBACKSBACKx23BACKxfbdqvBACKSBACK"m"
"yjafhbvhhjBACKx1bBACK"bplb"
"BACK"o"
"rubahvmpBACK""
"qmkukrnrmqumh"
"wdpxyvyidhwjfBACKSnabbijwhrBACKxc5bksvyBACK"p"
"uBACK"prlpgBACK""
"nsvcquyxbwilsxxemfBACKxd9leq"
"yBACKxcetxuafl"
"it"
"kwdlysfBACKSxjpelae"
"viwhBACKx58wpjjlnvryutiBACKx2chngrxBACKSnhtkui"
"vhnBACKx9ehreBACKxc3ncsqbozmsBACK"nl"
"ytcBACKxa3mgeeogjcqavmmmd"
"xzlexlitseozoxtpzzutfq"
"cishBACKx07lmovj"
"ekbflwqzaiivdrBACK"pqBACKSazrfbntqwkn"
"ucBACK"xdbegmlmhksofzohavtrnxf"
"xfdnrdqdrcjzbe"
"ndgBACK"ckgrpisibBACK"rgBACK"pBACKSlmpfzlssnvk"
"witfjwpbyyzlop"
"zonlwwBACK"emrbcsgdtrgBACK"rjzyBACKx64zqntlw"
"dvgbBACK"znBACKSvrbzemaBACK"ckmd"
"BACKSvdlmxhlvldkBACK"pmzazeip"
"BACK"BACK"r"
"rsntinv"
"iy"
"lrBACKx20efh"
"csgexlbBACK"zqdavlxxhtdbhBACK"BACK"BACKx0fkpvhiphm"
"ouwhpBACK"ogbft"
"cmBACKSckltngBACK"dwBACKx8brfBACKxf0eppgckd"
"zmnlsgalhpkejsizfsbtnfliuBACK"nhc"
"pnrkaayqvwpdjbhcrbbBACK"yfeqBACK"aq"
"ozhBACKShoxowBACKx2csrtrBACKSrBACK""
"bqxabjBACK"uBACKSs"
"cpsjtiBACK"gy"
"aaBACK"pBACKSnkiBACKSajijkqev"
"qBACK"BACK"lfdentjgdBACKS"
"bmokvpoebutfki"
"pielvcbneBACKxf6efvzxn"
"kx"
"zlgmqagcrbhrwtwtmmg"
"aiyhmntcqjbpvBACKxb5hhswxbryoedvos"
"tdpaxrb"
"fuBACK"BACKx7dttkyvhrlwko"
"oircBACKSBACK"cqlnqffjqtBACKSk"
"edxliaBACKStcyby"
"jpeybgwfayerfrfbvfogBACK"ol"
"ysr"
"bzwzilgwfugjk"
"tlccBACKx75nukvwjgftetjcsBACKxaecwc"
"dsqssaBACK"vzrfBACK"sewbpBACKSahhlmhbeihlh"
"qtgmjckBACK"nBACK"gukiBACK"gmdivwqxismqj"
"BACK"f"
"wuorvlovucngbzdszqpikyk"
"dfrdsacoukmgvhbqBACK"BACK"iwto"
"BACK"eyBACK"chBACKSwcgioeBACKSBACK"ouvligmsw"
"ciqlszzgs"
"BACKStzyrkaoiBACK"sopjaq"
"lmtnv"
"arBACK"fqoroigiertjjlmBACK"ymgiBACKSkkjewsxd"
"wehcimlvudpxtamdnBACK"rwy"
"hrBACK"zvrwthrBACK"vruzqfrldnBACK"b"
"sggekodkiwvymBACK"mhsco"
"ltlkfbrrdvkBACKS"
"uutBACK"sfjnzBACK"BACKSef"
"hxilgBACKS"
"zsredsiwlzrpedibn"
"vtfi"
"BACKSh"
"qekfrcBACKxf6wduodbwrguqcngBACKSn"
"BACK"lljlfdrxftwidnBACKSpkvBACKxd9ij"
"mrvgqynpehkliuijlpp"
"gikjph"
"yoxcdrdtBACK"wbaurnyhoyxoihu"
"onmomwuxuammbzxe"
"rnrrBACKStwvizBACKx61gqaljrBACKx0dmtw"
"rBACK"vupaoi"
"l"
"sei"
"jwxtdtbkdBACKSkxd"
"BACKx22vBACKS"
"ahd"
"jBACK"bjqxs"
"BACKSiBACKx24gglxubBACKSnzsajokt"
"lviwpuBACK"uxdlhBACKSzuyBACK"xqyBACK"ytdzlxBACK"r"
"kptfmys"
"fwxzikfhczkjwyjszqdbkepaeellc"
"nlqpsvbrbdBACKSns"
"qryuwkjiodwBACK"BACK"vaqyqBACK"dmyifm"
"twBACKx15kdmaudjlBACKSzorhpBACK"alwh"
"aatrvczesykekkjfybBACK"kb"
"usqcutbqbxxhucwxoBACKxc1ltbBACK"jBACK"bghjcvws"
"ilhsrnzxkz"
"bianqfdfdhvw"
"hqibqsBACKx7axBACK"qoxqoaqtcsz"
"htxtoojbbauztwxuiqBACKSngyfyBACKSobzc"
"rxnBACKSmoxlj"
"mtusBACKx84erhBACK"dbe"
"asxBACKx50huvsitcxadt"
"BACK"bugggtnrcBACK"BACK"klBACK"hmpuBACKx83hqrvhpo"
"ewisbpBACK"BACK"vuzfBACKSwBACKx5fvalszdhl"
"scusplpwxfnxuBACKx57BACK"zynpnBACKx99xercBACKSri"
"mBACKSkinmkkeBACKx0cl"
"xhuzitBACKx7fd"
"kfboBACKx04BACKx50ruqirn"
"tBACK"BACK"xpbdscmdoug"
"punvpsgnbgyxeBACK"sptmpz"
"bxukkazijr"
"nxyrcdaooBACK"rjkkBACK"wntehcvcipBACK"vrd"
"rdpvqskmihqaw"
"pBACKSgwdhtqnpgthod"
"nwnufBACK"BACK"yebycearomBACK"nqymBACK"BACKxd4siiBACKxccle"
"aldaBACK"ptspoBACK"wkkvBACK"zoiBACK"hkbBACK"vnntyd"
"ixpgpfzbqv"
"znuiBACK"BACKSfznBACKx03qozabhBACK"rvaBACK"pvBACKx67"
"eBACK"zswmwuk"
"hcccygwfa"
"ngmaceBACKSrtyllolrBACK"BACKx68bw"
"BACKScBACK"jyufbryBACK"ryoBACK"xpoBACKx26ecninfeckhBACKSs"
"hdnpngtucBACK"dzbvvosnBACKx31fwtpzbrt"
"hesbpdBACKxd4"
"dsdbstuzrdfmrnyntufsBACK"dmv"
"dBACKxeeibcwhcvkt"
"fvzwrsfjdqdmyBACK"BACK"v"
"nsBACK"dqafzBACKSlkyoflnazvBACK"mnBACKx37BACK"oBACK"yjBACK"e"
"dypilgbwzccayxaBACK"bnmuernx"
"qBACKxa9ztqrhrebBACK"BACK"kxfeyodqb"
"izBACKxa5qjxqulaawuwzBACK"rqmpcjBACKSyel"
"zBACK"BACKSpqBACK"BACK"yBACKx67zpjtn"
"ifxqvivpBACK"kiiftdoe"
"jxzebjBACK"BACKx35BACK"qrBACK"ecglcutuoyywqumcsBACK"kk"
"q"
"yobBACKx85qmpuwexptczbkrl"
"cjiavvBACK"uudpozvibyycnmxhxpxmpjoz"
"xroBACKSuiqyrcid"
"nodBACKSk"
"dBACK"neiec"
"tqyrqvwyvmzBACKSpzgzzcqsqsrgbqbtapoz"
"rBACK"xvocpeuxfxslguebBACKx05kzyyieBACK"aoec"
"BACK"duBACKSuirlhcbgvBACKScjqhfreqnvn"
"zpBACKx04BACKx15BACK"pbjwhrjtmiba"
"BACKScvBACK""
"kBACK"rwnbBACKShiuBACK"rqdBACK"rcBACKSnyakrhly"
"klrmafjzandiddodgz"
"xipzhqzhvlpykzcuppx"
"zdvrvnBACKxd0mtfvpylbnBACKSBACKSsxcznrzugwznl"
"odyBACKSpvmBACK"kpjiudzhxazirgxzvumeatBACK"o"
"kllvhdpBACK"prjikzrrcBACK"adgpegcBACKSBACK"gk"
"sqtpugBACKxbcaauxaamw"
"wegxxrrxdvpivrqievfeokmnojsk"
"BACKSbo"
"gijhz"
"ylowluvabwrigssdgtxdwsiorxevBACKxdd"
"BACK""
"ghnsrnsqtxpygikahkrl"
"BACK"rcfqkbjfBACK"sgxgBACK"vndBACKSrotn"
"apBACK"smgsuexjrbuqsBACK"mpbstogjBACK"x"
"koaunzBACKSsgtBACK"opv"
"yialiuzwix"
"ypBACK"ndxgwzmlBACK"bt"
"lpcjxmggfsyBACKSszbxccarjkqzasqkbBACKxcfdBACKx0c"
"x"
"mgakc"
"vjieunohBACKx73fjwx"
"erbvvBACK"qulsd"
"mimycrbfhqkarmz"
"tihfbgcszuejBACK"cBACKxfbvoqskkhbgpaddioo"
"mziavkwrmekriqghw"
"izkBACKStnjdBACKSedBACKSemokvjoc"
"cBACK"nhbqzndroBACKSg"
"usfngdo"
"aypljdftvptt"
"ymBACK"afvqBACKxbcc"
"zabiBACK"wjpvugwhl"
"ebvptcjqjhcBACK"nBACK"pBACK"dxrphegrBACKS"
"mzlqqxokhyeBACKxd9BACKSrffhnzs"
"hnipqknwpsjakanuewe"
"rqgbfcjdrmizBACK"h"
"kzzpBACKSzBACKStxmkwaouxictybwx"
"yzmspjkqrteiydswlvb"
"gjpxklgpzvBACK"txriBACKShotpuiukzzzd"
"pBACK"rxergtbsxmjmkeeqwvoagnkiBACK""
"santipvuiq"
"BACK"ihjqlhtwbuyBACK"hdkivBACK"mtiqacnfBACKS"
"oliaggtqyyx"
"fwwnpmbb"
"yrtdrieazfxyyneo"
"nywbvBACKS"
"twcBACKSehfqxhgomgrgwpxyzmnkioj"
"qludrkkvljljdBACKSxvdeumBACKx4e"`;

export const data = parseInput(input) as string[];