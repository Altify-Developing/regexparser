console.log("Start doing sh*t by using the command line \"node index.js -h\""+`\nof course after you fork it...\nit would be idiodic of me to have published this in the hopes you would be able to use it without shell...\nso uh... like the repl\nvisit my github and site, just search altify developing using any search engine`);
const yargs = require('yargs');
const fs = require('fs');
function randomString(length, chars) {
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}
const freeze = ms => new Promise(res => setTimeout(res, ms));

const argv = yargs
	.option('clear', {
		description: 'Deletes decode & encode.js using \"node index.js -c\"',
		alias: 'c',
		type: 'string'
	})
	.option('ec', {
		description: 'View the exit codes via \"node index.js -C\"',
		alias: 'C',
		type: 'string'
	})
	.option('security', {
		description: 'level of security, 1-3',
		alias: ['s', 'sec', 'lv'],
		type: 'number'
	})
	.option('language', {
		description: 'default, ahk',
		alias: ['l', 'lang'],
		choices: ['default', 'ahk']
	})
	.option('script', {
		description: 'example for python, \"-S main.py\"',
		alias: ['S', 'src', 'in'],
		type: 'string'
	})
	.option('type', {
		description: 'sets the language of the encoder/decoder, choices are default, ahk, python, java, cpp, chinese, arabic, and russian',
		alias: ['t'],
		choices: ['default', 'ahk', 'python', 'java', 'cpp', 'chinese', 'arabic', 'russian', 'default_advanced']
	})
	.help()
	.alias('help', 'h').argv;
//default\\ var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
//ahk\\var characters = ['abs', 'autotrim', 'asc', 'asin', 'acos', 'atan', 'blockinput', 'break', 'catch', 'ceil', 'chr', 'click', 'clipwait', 'comobjactive', 'comobjarray', 'comobjconnect', 'comobjcreate', 'comobject', 'comobjenwrap', 'comobjunwrap', 'comobjerror', 'comobjflags', 'comobjget', 'comobjmissing', 'comobjparameter', 'comobjquery', 'comobjtype', 'comobjvalue', 'continue', 'controlclick', 'controlfocus', 'controlgetfocus', 'controlgetpos', 'controlgettext', 'controlget', 'controlmove', 'controlsendraw', 'controlsend', 'controlsettext', 'coordmode', 'control', 'cos', 'critical', 'detecthiddentext', 'detecthiddenwindows', 'dllcall', 'driveget', 'drivespacefree', 'edit', 'else', 'envadd', 'envdiv', 'envget', 'envmult', 'envset', 'envsub', 'envupdate', 'exception', 'exitapp', 'exit', 'exp', 'fileappend', 'filecopydir', 'filecopy', 'filecreatedir', 'filecreateshortcut', 'filedelete', 'fileencoding', 'fileexist', 'fileinstall', 'filegetattrib', 'filegetshortcut', 'filegetsize', 'filegettime', 'filegetversion', 'filemovedir', 'filemove', 'fileopen', 'filereadline', 'fileread', 'filerecycleempty', 'filerecycle', 'fileremovedir', 'fileselectfile', 'fileselectfolder', 'filesetattrib', 'filesettime', 'finally', 'floor', 'for', 'formattime', 'format', 'func', 'getkeyname', 'getkeyvk', 'getkeysc', 'getkeystate', 'gosub', 'goto', 'groupactivate', 'groupadd', 'groupclose', 'groupdeactivate', 'guicontrolget', 'guicontrol', 'gui', 'hotkey', 'hotstring', 'ifwinexist', 'ifwinnotexist', 'ifwinnotactive', 'ifwinactive', 'ifmsgbox', 'iflessorequal', 'ifless', 'ifnotinstring', 'ifinstring', 'ifgreaterorequal', 'ifgreater', 'ifnotexist', 'ifexist', 'ifnotequal', 'ifequal', 'if', 'in', 'not', 'contains', 'il_create', 'il_add', 'il_destroy', 'imagesearch', 'inidelete', 'iniread', 'iniwrite', 'inputhook', 'inputbox', 'input', 'instr', 'isbyref', 'isfunc', 'islabel', 'isobject', 'keyhistory', 'keywait', 'listhotkeys', 'listlines', 'listvars', 'loadpicture', 'log', 'ln', 'loop', 'lv_add', 'lv_delete', 'lv_deletecol', 'lv_getcount', 'lv_getnext', 'lv_gettext', 'lv_insert', 'lv_insertcol', 'lv_modify', 'lv_modifycol', 'lv_setimagelist', 'menugetname', 'menugethandle', 'menu', 'mod', 'mouseclickdrag', 'mouseclick', 'mousegetpos', 'mousemove', 'msgbox', 'numget', 'numput', 'objaddref', 'objrelease', 'objbindmethod', 'objclone', 'objcount', 'objdelete', 'objgetaddress', 'objgetcapacity', 'objhaskey', 'objinsertat', 'objinsert', 'objlength', 'objmaxindex', 'objminindex', 'min', 'max', 'objnewenum', 'objpop', 'objpush', 'objremoveat', 'objremove', 'objsetcapacity', 'objgetbase', 'objgetbase', 'objrawset', 'objsetbase', 'onclipboardchange', 'onerror', 'onexit', 'onexit', 'onmessage', 'ord', 'outputdebug', 'pause', 'pixelgetcolor', 'pixelsearch', 'postmessage', 'process', 'progress', 'random', 'regexmatch', 'regexreplace', 'regdelete', 'regread', 'regwrite', 'registercallback', 'reload', 'return', 'round', 'runwait', 'runas', 'run', 'sb_settext', 'sb_setparts', 'sb_seticon', 'sendevent', 'sendplay', 'sendinput', 'sendraw', 'sendlevel', 'sendmessage', 'sendmode', 'send', 'setbatchlines', 'setcapslockstate', 'setcontroldelay', 'setdefaultmousespeed', 'setenv', 'setformat', 'setkeydelay', 'setmousedelay', 'setnumlockstate', 'setscrolllockstate', 'setregview', 'setstorecapslockmode', 'settimer', 'settitlematchmode', 'setwindelay', 'setworkingdir', 'shutdown', 'sin', 'sleep', 'sort', 'soundbeep', 'soundgetwavevolume', 'soundget', 'soundplay', 'soundsetwavevolume', 'soundset', 'splashimage', 'splashtexton', 'splashtextoff', 'splitpath', 'sqrt', 'statusbargettext', 'statusbarwait', 'stringgetpos', 'strget', 'stringcasesense', 'stringleft', 'stringlen', 'stringlower', 'stringmid', 'stringreplace', 'stringright', 'stringsplit', 'stringtrimleft', 'stringtrimright', 'stringupper', 'strlen', 'strput', 'strreplace', 'strsplit', 'substr', 'suspend', 'switch', 'sysget', 'tan', 'thread', 'throw', 'tooltip', 'transform', 'traytip', 'trim', 'try', 'tv_add', 'tv_delete', 'tv_get', 'tv_getchild', 'tv_getcount', 'tv_getnext', 'tv_getparent', 'tv_getprev', 'tv_getselection', 'tv_gettext', 'tv_modify', 'tv_setimagelist', 'until', 'urldownloadtofile', 'varsetcapacity', 'while-loop', 'winactivatebottom', 'winactivate', 'winclose', 'winexist', 'wingetactivestats', 'wingetactivetitle', 'wingetclass', 'wingettext', 'wingetpos', 'wingettitle', 'winget', 'winhide', 'winkill', 'winmaximize', 'winmenuselectitem', 'winminimizeallundo', 'winminimizeall', 'winminimize', 'winmove', 'winrestore', 'winset', 'winsettitle', 'winshow', 'winwaitactive', 'winwaitnotactive', 'winwaitclose', 'winwait', 'clipboardtimeout', 'clipboardtimeout', 'commentflag', 'delimiter', 'derefchar', 'errorstdout', 'escapechar', 'hotkeyinterval', 'hotkeymodifiertimeout', 'hotstring', 'if', 'iftimeout', 'ifwinactive', 'ifwinnotactive', 'ifwinexist', 'ifwinnotexist', 'include', 'includeagain', 'inputlevel', 'installkeybdhook', 'installmousehook', 'keyhistory', 'ltrim', 'maxhotkeysperinterval', 'maxmem', 'maxthreads', 'maxthreadsbuffer', 'maxthreadsperhotkey', 'menumaskkey', 'noenv', 'notrayicon', 'persistent', 'requires', 'singleinstance', 'usehook', 'warn', 'winactivateforce', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':'];
//py\\ var characters = ['abs', 'apply', 'callable', 'chr', 'cmp', 'coerce', 'compile', 'dir', 'divmod', 'eval', 'filter', 'float', 'getattr', 'globals', 'hasattr', 'hash', 'hex', 'id', 'input', 'int', 'len', 'local', 'long', 'map', 'max', 'min', 'oct', 'open', 'ord', 'pow', 'range', 'raw_input', 'reduce', 'reload', 'repr', 'round', 'setattr', 'str', 'tuple', 'type', 'vars', 'xrange', 'argv', 'builtin_module_names', 'check_interval', 'exc_type', 'exc_value', 'exc_traceback', 'exitfunc', 'last_type', 'last_value', 'last_traceback', 'modules', 'path', 'platform', 'ps1', 'ps2', 'stdin', 'stdout', 'stderr', 'tracebacklimit', 'exit', 'settrace', 'setprofile', 'name', 'path', 'curdir', 'pardir', 'sep', 'environ', 'error', 'chdir', 'close', '_exit', 'execv', 'fork', 'kill', 'listdir', 'open', 'pipe', 'popen', 'read', 'stat', 'system', 'unlink', 'wait', 'waitpid', 'write', 'exists', 'expanduser', 'isabs', 'isfile', 'isdir', 'islink', 'isfile', 'ismount', 'split', 'splitext', 'walk', 'pi', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'cosh', 'exp', 'fabs', 'floor', 'fmod', 'frexp', 'ldexp', 'log', 'log10', 'modf', 'pow', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'getopt', 'digits', 'uppercase', 'lowercase', 'whitespace', 'index_error', 'index', 'lower', 'splitfields', 'joinfields', 'strip', 'upper', 'match', 'search', 'set_syntax', 'symcomp', 'RE_NO_BK_PARENS', 'RE_NO_BK_VBAR', 'RE_BK_PLUS_QM', 'RE_TIGHT_VBAR', 'RE_NEWLINE_OR', 'RE_CONTEXT_INDEP_OPS', 'RE_SYNTAX_AWK', 'RE_SYNTAX_EGREP', 'RE_SYNTAX_GREP', 'RE_SYNTAX_EMACS', 'gsub', 'sub', 'sys', '__built-in__', '__main__', 'array', 'math', 'time', 'regex', 'marshal', 'struct', 'getopt', 'os', 'rand', 'regsub', 'string', 'whrandom', 'dbm', 'grp', 'posixpath', 'posix', 'pwd', 'select', 'socket', 'thread', 'tkinter', 'audioop', 'imageop', 'jpeg', 'rgbimg', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '$', '%', '^', '&', '*', "(", ")", '-', '_', '=', '+', ',', '<', '.', '>', '/', '?', ';', ':', "'", '\"', "[", "]", "{", "}", "|"];
if (argv.clear == '') {
	fs.unlink('./decode.js', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encode.js', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./temp.txt', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encoded.txt', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./decoded.txt', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encode.txt', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encode.ahk', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./decode.ahk', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encode.py', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./decode.py', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encode.java', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./decode.java', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encode.cpp', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./decode.cpp', (err) => {
		if (err) console.log('not found');
	});
	throw new Error(`Complete, Exiting Script\nExit Code: 200\nFor References to error codes: \"node index.js -C\"`);
}
if (argv.ec == '') {
	console.log(`Exit Codes:\n200: OK/Working/Completed\n400: Bad Request \( Wrong Syntax \)\n404: Couldn\'t find object\n423: Locked Location \( Could either be blocked or simply was unfunctional and blocked from use because of it not working \)\n429: Too many requests \( Server Error / Internet Connection Failed \)\n498: Invalid Token/Criteria\n503: Couldn\'t load object`);
}
if (argv.script == 'undefined') {
	console.log(`Error Code: 400\n` + ' Python example of correct command line usage: \"-S main.py\"');
}
if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'default') {
	console.log(argv.security + 2);
	let txt1 = `const fs = require(\'fs\');\nconst yargs = require(\'yargs\');\nconst argv = yargs\n	.option(\'clear\', {\n		description: \'Deletes decoded.txt & encoded.txt using \\\"node encoder.js -c\\\"\',\n		alias: \'c\',\n		type: \'string\'\n	})\n	.option(\'type\', {\n		description: \'choose between encoder/decoder\',\n		alias: [\'t\'],\n		choices: [\'encoder\', \'decoder\']\n	})\n	.option(\'script\', {\n		description: \'name of script/file \\( only for encoding, decoder defaults to encoded.txt\\)\',\n		alias: [\'s\'],\n		type: \'string\'\n	})\n	.help()\n	.alias(\'help\', \'h\').argv;\nif (argv.type == \'encoder\') {\n	let txt1 = fs.readFileSync(argv.script+\'.txt\', \'utf-8\')`
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	setTimeout(generation, 500);
	function generation() {
		for (let e = 0; e < 52; e++) {
			var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
			let txt = ".replace(/" + `${characters[e]}` + "/gi, \"" + `¢${rand}¢` + "\")"
			let fp3 = "./encode.js"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = ".replace(/" + `¢${rand}¢` + "/gi, \"" + `${characters[e]}` + "\")"
			let fp4 = "./decode.js"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(finish, 1000);
	function finish() {
		let txt1 = `;\n	fs.appendFile(\'encoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}\nif (argv.type == \'decoder\') {\n	`
		let txt2 = `let txt1 = fs.readFileSync(\'encoded.txt\', \'utf-8\')`
		let txt3 = fs.readFileSync('decode.js', 'utf-8');
		let txt4 = `\n	fs.appendFile(\'decoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}`
		let fp77 = "./encode.js"
		fs.appendFile(fp77, txt1+txt2+txt3+';'+txt4, function(error) {
			if (error) return log.error(error);
		})
		setTimeout(unlinker, 500);
		function unlinker() {
			fs.unlink('./decode.js', (err) => {
				if (err) console.log('not found');
			});
		}
	}
}
if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'default_advanced') {
	console.log(argv.security);
	let txt1 = `const fs = require(\'fs\');\nconst yargs = require(\'yargs\');\nconst argv = yargs\n	.option(\'clear\', {\n		description: \'Deletes decoded.txt & encoded.txt using \\\"node encoder.js -c\\\"\',\n		alias: \'c\',\n		type: \'string\'\n	})\n	.option(\'type\', {\n		description: \'choose between encoder/decoder\',\n		alias: [\'t\'],\n		choices: [\'encoder\', \'decoder\']\n	})\n	.option(\'script\', {\n		description: \'name of script/file \\( only for encoding, decoder defaults to encoded.txt\\)\',\n		alias: [\'s\'],\n		type: \'string\'\n	})\n	.help()\n	.alias(\'help\', \'h\').argv;\nif (argv.type == \'encoder\') {\n	let txt1 = fs.readFileSync(argv.script, \'utf-8\')`
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	setTimeout(generation, 500);
	function generation() {
		for (let e = 0; e < 106; e++) {
			var rand = randomString(argv.s, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			// , 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"
			var characters = ['#SingleInstance, Force', 'Welcome To', 'Checking For Updates', 'Accessing Github', 'Installation Process', 'Checking Installation', 'Has Not Been Installed Yet. Do You Want To Begin The Process?', 'Installer', 'Advertisment You Wish To Place In Your', 'Amount of Accounts You Would Like To Generate', 'Do You Wish To Be Inlcuded in Growing List of beta Testers?', 'Enter Text Here', 'Gui, Add, Edit,', 'NO AD PROVIDED', 'length', 'Recommended for performance and compatibility with future AutoHotkey releases', 'Enable warnings to assist with detecting common errors', 'Recommended for new scripts due to its superior speed and reliability', 'Ensures a consistent starting directory', 'Starting', 'SetBatchLines, -1', 'MsgBox', 'IfExist', 'FileRecycle', 'URLDownloadToFile', 'IfNotExist', 'Gui, Add, Text', 'Gui, Add, Button', 'Please Enter Your', 'Probability', 'settings', 'IP', 'Sleep', 'NAMES', 'Account Targeted Account Generator By', 'Gui, Show', 'return', 'GuiClose', 'ButtonCancel', 'ExitApp', 'ButtonInstall', 'Gui, Submit', 'FileCreateDir', 'Please Enter The', 'Capture', 'CheckBox', 'Targeting Account Generator By Altify', 'ButtonOK', 'Blank', 'IfEqual', 'GenerateRandomString', 'characters', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 'StringSplit', 'chars', 'Random', 'Loop', 'password', 'Token', 'pak', 'state', 'FileReadLine', 'Country', 'FileReadNumber', 'FirstName', 'LastName', 'Mail', 'Generated', 'Altify', '4476', 'Thanks For Boosting.txt', 'Subscription', 'Subscribed', 'False', 'True', 'RemainingYears', 'RemainingMonths', 'RemainingDays', 'RemainingHours', 'RemainingMinutes', 'RemainingSeconds', 'RemainingMiliseconds', 'Time Remaining', 'pin', 'FileAppend', 'Computer Information', 'Username', 'Computer Name', 'Personal Identification Number', 'Micosoft Account Linked', 'Product Activation Key', 'discord', 'ccsec', 'Credit Card', 'Expiration Date', 'Card Network', 'MasterCard\\/Access\\/Eurocard', 'Credits', 'Account Creator By', 'Language: AutoHotKey\`nDiscLink: %DiscLink%\`nYTLink: %YT%\`nTwitchLink: %TwitchLink%', '#NoEnv', '#Warn', 'SendMode Input', 'SetWorkingDir %A_ScriptDir%', 'info'];
			let txt = ".replace(/" + `${characters[e]}` + "/gi, \"" + `¢${rand}¢` + "\")"
			let fp3 = "./encode.js"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = ".replace(/" + `¢${rand}¢` + "/gi, \"" + `${characters[e]}` + "\")"
			let fp4 = "./decode.js"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(finish, 1000);
	function finish() {
		let txt1 = `;\n	fs.appendFile(\'encoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}\nif (argv.type == \'decoder\') {\n	`
		let txt2 = `let txt1 = fs.readFileSync(\'encoded.txt\', \'utf-8\')`
		let txt3 = fs.readFileSync('decode.js', 'utf-8');
		let txt4 = `\n	fs.appendFile(\'decoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}`
		let fp77 = "./encode.js"
		fs.appendFile(fp77, txt1+txt2+txt3+';'+txt4, function(error) {
			if (error) return log.error(error);
		})
		setTimeout(unlinker, 500);
		function unlinker() {
			fs.unlink('./decode.js', (err) => {
				if (err) console.log('not found');
			});
		}
	}
}
if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'chinese') {
	console.log(argv.security + 2);
	let txt1 = `const fs = require(\'fs\');\nconst yargs = require(\'yargs\');\nconst argv = yargs\n	.option(\'clear\', {\n		description: \'Deletes decoded.txt & encoded.txt using \\\"node encoder.js -c\\\"\',\n		alias: \'c\',\n		type: \'string\'\n	})\n	.option(\'type\', {\n		description: \'choose between encoder/decoder\',\n		alias: [\'t\'],\n		choices: [\'encoder\', \'decoder\']\n	})\n	.option(\'script\', {\n		description: \'name of script/file \\( only for encoding, decoder defaults to encoded.txt\\)\',\n		alias: [\'s\'],\n		type: \'string\'\n	})\n	.help()\n	.alias(\'help\', \'h\').argv;\nif (argv.type == \'encoder\') {\n	let txt1 = fs.readFileSync(argv.script+\'.txt\', \'utf-8\')`
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	setTimeout(generation, 500);
	function generation() {
		for (let e = 0; e < 52; e++) {
			var rand = randomString(argv.s + 2, '诶比西迪伊艾弗吉尺杰开勒马娜哦屁吾一个电子一世升米秒吨你是');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
			let txt = ".replace(/" + `${characters[e]}` + "/gi, \"" + `${rand}` + "\")"
			let fp3 = "./encode.js"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = ".replace(/" + `${rand}` + "/gi, \"" + `${characters[e]}` + "\")"
			let fp4 = "./decode.js"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(finish, 1000);
	function finish() {
		let txt1 = `;\n	fs.appendFile(\'encoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}\nif (argv.type == \'decoder\') {\n	`
		let txt2 = `let txt1 = fs.readFileSync(\'encoded.txt\', \'utf-8\')`
		let txt3 = fs.readFileSync('decode.js', 'utf-8');
		let txt4 = `\n	fs.appendFile(\'decoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}`
		let fp77 = "./encode.js"
		fs.appendFile(fp77, txt1+txt2+txt3+';'+txt4, function(error) {
			if (error) return log.error(error);
		})
		setTimeout(unlinker, 500);
		function unlinker() {
			fs.unlink('./decode.js', (err) => {
				if (err) console.log('not found');
			});
		}
	}
}
if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'arabic') {
	console.log(argv.security + 2);
	let txt1 = `const fs = require(\'fs\');\nconst yargs = require(\'yargs\');\nconst argv = yargs\n	.option(\'clear\', {\n		description: \'Deletes decoded.txt & encoded.txt using \\\"node encoder.js -c\\\"\',\n		alias: \'c\',\n		type: \'string\'\n	})\n	.option(\'type\', {\n		description: \'choose between encoder/decoder\',\n		alias: [\'t\'],\n		choices: [\'encoder\', \'decoder\']\n	})\n	.option(\'script\', {\n		description: \'name of script/file \\( only for encoding, decoder defaults to encoded.txt\\)\',\n		alias: [\'s\'],\n		type: \'string\'\n	})\n	.help()\n	.alias(\'help\', \'h\').argv;\nif (argv.type == \'encoder\') {\n	let txt1 = fs.readFileSync(argv.script+\'.txt\', \'utf-8\')`
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	setTimeout(generation, 500);
	function generation() {
		for (let e = 0; e < 52; e++) {
			var rand = randomString(argv.s + 2, 'ابتثجحخدذرزسشصضطظعغفقكلمنهويءًٌٍَُِّْٰٖٗآٱأإةؤئىـ.،؛!؟٪٫٬٩٨٧٦٥٤٣٢١٠');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
			let txt = ".replace(/" + `${characters[e]}` + "/gi, \"" + `${rand}` + "\")"
			let fp3 = "./encode.js"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = ".replace(/" + `${rand}` + "/gi, \"" + `${characters[e]}` + "\")"
			let fp4 = "./decode.js"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(finish, 1000);
	function finish() {
		let txt1 = `;\n	fs.appendFile(\'encoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}\nif (argv.type == \'decoder\') {\n	`
		let txt2 = `let txt1 = fs.readFileSync(\'encoded.txt\', \'utf-8\')`
		let txt3 = fs.readFileSync('decode.js', 'utf-8');
		let txt4 = `\n	fs.appendFile(\'decoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}`
		let fp77 = "./encode.js"
		fs.appendFile(fp77, txt1+txt2+txt3+';'+txt4, function(error) {
			if (error) return log.error(error);
		})
		setTimeout(unlinker, 500);
		function unlinker() {
			fs.unlink('./decode.js', (err) => {
				if (err) console.log('not found');
			});
		}
	}
}
if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'russian') {
	console.log(argv.security + 2);
	let txt1 = `const fs = require(\'fs\');\nconst yargs = require(\'yargs\');\nconst argv = yargs\n	.option(\'clear\', {\n		description: \'Deletes decoded.txt & encoded.txt using \\\"node encoder.js -c\\\"\',\n		alias: \'c\',\n		type: \'string\'\n	})\n	.option(\'type\', {\n		description: \'choose between encoder/decoder\',\n		alias: [\'t\'],\n		choices: [\'encoder\', \'decoder\']\n	})\n	.option(\'script\', {\n		description: \'name of script/file \\( only for encoding, decoder defaults to encoded.txt\\)\',\n		alias: [\'s\'],\n		type: \'string\'\n	})\n	.help()\n	.alias(\'help\', \'h\').argv;\nif (argv.type == \'encoder\') {\n	let txt1 = fs.readFileSync(argv.script+\'.txt\', \'utf-8\')`
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	setTimeout(generation, 500);
	function generation() {
		for (let e = 0; e < 52; e++) {
			var rand = randomString(argv.s + 2, 'аэыуояеёюибвгджзклмнпрстфхцчшщ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
			let txt = ".replace(/" + `${characters[e]}` + "/gi, \"" + `${rand}` + "\")"
			let fp3 = "./encode.js"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = ".replace(/" + `${rand}` + "/gi, \"" + `${characters[e]}` + "\")"
			let fp4 = "./decode.js"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(finish, 1000);
	function finish() {
		let txt1 = `;\n	fs.appendFile(\'encoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}\nif (argv.type == \'decoder\') {\n	`
		let txt2 = `let txt1 = fs.readFileSync(\'encoded.txt\', \'utf-8\')`
		let txt3 = fs.readFileSync('decode.js', 'utf-8');
		let txt4 = `\n	fs.appendFile(\'decoded.txt\', txt1, function(error) {\n			if (error) return log.error(error);\n	})\n}`
		let fp77 = "./encode.js"
		fs.appendFile(fp77, txt1+txt2+txt3+';'+txt4, function(error) {
			if (error) return log.error(error);
		})
		setTimeout(unlinker, 500);
		function unlinker() {
			fs.unlink('./decode.js', (err) => {
				if (err) console.log('not found');
			});
		}
	}
}
if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'python') {
	console.log(argv.security + 2);
	let txt1 = `from pathlib import Path\ntxt = Path('`+argv.script+"').read_text()"+`\n`
	let txt2 = `from pathlib import Path\ntxt = Path('encoded.txt').read_text()\n`
	let fp3 = "./encode.py"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.py"
	fs.appendFile(fp4, txt2, function(error) {
		if (error) return log.error(error);
	})
	setTimeout(generation, 500);
	function generation() {
		for (let e = 0; e < 52; e++) {
			var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
			let txt = "txt = txt.replace('" + `${characters[e]}` + "', '"+ `¢${rand}¢` + "')"+`\n`
			let fp3 = "./encode.py"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = "txt = txt.replace('"+ `¢${rand}¢` + "', '" + `${characters[e]}` + "')"+`\n`
			let fp4 = "./decode.py"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(finish, 1000);
	function finish() {
		let txt1 = `print(txt)`
		let txt2 = `print(txt)`
		let fp77 = "./encode.py"
		fs.appendFile(fp77, txt1, function(error) {
			if (error) return log.error(error);
		})
		let fp66 = "./decode.py"
		fs.appendFile(fp66, txt2, function(error) {
			if (error) return log.error(error);
		})
	}
}
if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'java') {
	console.log(argv.security + 2);
	let txt1 = `// run me with the following command lines \n// sh -c javac -classpath .:target/dependency/* -d . $(find . -type f -name '*.java')\n// java -classpath .:target/dependency/* encode\nimport java.io.*;\nimport java.util.*;\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.io.FileWriter;\n\npublic class encode {\n	public static void main(String[] args)\n		throws IOException\n	{\n		Path fileName\n			= Path.of(\"`+argv.script+`\");\n		String str1 = Files.readString(fileName);\n		System.out.println(str1);\n`
	let txt2 = `// run me with the following command lines \n// sh -c javac -classpath .:target/dependency/* -d . $(find . -type f -name '*.java')\n// java -classpath .:target/dependency/* decode\nimport java.io.*;\nimport java.util.*;\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.io.FileWriter;\n\npublic class decode {\n	public static void main(String[] args)\n		throws IOException\n	{\n		Path fileName\n			= Path.of(\"encoded.txt\");\n		String str1 = Files.readString(fileName);\n		System.out.println(str1);\n`
	let fp3 = "./encode.java"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.java"
	fs.appendFile(fp4, txt2, function(error) {
		if (error) return log.error(error);
	})
	var r = 1;
	setTimeout(generation, 500);
	async function generation() {
		for (let e = 0; e < 52; e++) {
			var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
			let txt = `		String str${r + 1} = str${r}.replace(\"${characters[e]}\", \"¢${rand}¢\");\n`
			let fp3 = "./encode.java"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = `		String str${r + 1} = str${r}.replace(\"¢${rand}¢\", \"${characters[e]}\");\n`
			let fp4 = "./decode.java"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
			r++
			await freeze(10);
		}
	}
	setTimeout(finish, 1500);
	function finish() {
		let txt1 = `		System.out.println(str${r});\n		try {\n            FileWriter fw\n                = new FileWriter("encoded.txt", false);\n            for (int i = 0; i < str${r}.length(); i++)\n                fw.write(str${r}.charAt(i));\n            System.out.println("Successfully written");\n            fw.close();\n        }\n        catch (Exception e) {\n            e.getStackTrace();\n        }\n	}\n}`
		let txt2 = `		System.out.println(str${r});\n		try {\n            FileWriter fw\n                = new FileWriter("decoded.txt", false);\n            for (int i = 0; i < str${r}.length(); i++)\n                fw.write(str${r}.charAt(i));\n            System.out.println("Successfully written");\n            fw.close();\n        }\n        catch (Exception e) {\n            e.getStackTrace();\n        }\n	}\n}`
		let fp77 = "./encode.java"
		fs.appendFile(fp77, txt1, function(error) {
			if (error) return log.error(error);
		})
		let fp66 = "./decode.java"
		fs.appendFile(fp66, txt2, function(error) {
			if (error) return log.error(error);
		})
	}
}

if (argv.language == 'default' && argv.script !== 'undefined' && argv.type == 'cpp') {
	console.log(argv.security + 2);
	let txt1 = `#include <iostream>\n#include <fstream>\n#include <iterator>\n#include <regex>\n#include <string>\n#include <algorithm>\n#include <cstdlib>\n#include <unistd.h>\nusing namespace std;\n// install and run using the following command line arguments:\n// $ sh -c make -s\n// $ ./encode\nint main () {\n  string myText;\n  ifstream MyReadFile(\"${argv.script}\");\n	ofstream myfile;\n	myfile.open ("output.txt");\n  while (getline (MyReadFile, myText)) {\n`
	let fp3 = "./encode.cpp"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.cpp"
	fs.appendFile(fp4, txt1, function(error) {
		if (error) return log.error(error);
	})
	var r = 1;
	setTimeout(generation, 500);
	async function generation() {
		for (let e = 0; e < 52; e++) {
			var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			let num = randomString(3, 'abcdefghijklmnopqrstuvwxyz');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
			let txt = `  	std::regex ${num}(\"${characters[e]}\");\n  	sleep(0.5);\n  	std::regex_replace(std::ostreambuf_iterator<char>(std::cout), myText.begin(), myText.end(), ${num}, \"¢${rand}¢\");\n`
			let fp3 = "./encode.cpp"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = `  	std::regex ${num}(\"¢${rand}¢\");\n  	sleep(0.5);\n  	std::regex_replace(std::ostreambuf_iterator<char>(std::cout), myText.begin(), myText.end(), ${num}, \"${characters[e]}\");\n`
			let fp4 = "./decode.cpp"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
			r++
			await freeze(1);
		}
	}
	setTimeout(finish, 1500);
	function finish() {
		let txt1 = `    cout << myText+"\\n";\n	  myfile << myText+"\\n";\n		}\n	  myfile.close();\n  MyReadFile.close();\n}`
		let txt2 = `    cout << myText+"\\n";\n	  myfile << myText+"\\n";\n		}\n	  myfile.close();\n  MyReadFile.close();\n}`
		let fp77 = "./encode.cpp"
		fs.appendFile(fp77, txt1, function(error) {
			if (error) return log.error(error);
		})
		let fp66 = "./decode.cpp"
		fs.appendFile(fp66, txt2, function(error) {
			if (error) return log.error(error);
		})
	}
}
if (argv.language == 'ahk' && argv.script !== 'undefined' && argv.type == 'default') {
	console.log(argv.security + 2);
	let txt1 = `const fs = require('fs');\n` + "let txt1 = fs.readFileSync('" + argv.script + "', 'utf-8')"
	let txt2 = `const fs = require('fs');\n` + "let txt1 = fs.readFileSync('encoded.txt', 'utf-8')"
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.js"
	fs.appendFile(fp4, txt2, function(error) {
		if (error) return log.error(error);
	})
	setTimeout(generation, 500);
	function generation() {
		for (let e = 0; e < 533; e++) {
			var rand = randomString(argv.s + 1, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = [';@Ahk2Exe-Set CompanyName, Altify LLC\\n;@Ahk2Exe-Set Copyright, Altify 2022\\n;@Ahk2Exe-Set Description, Altify Decoder\\n;@Ahk2Exe-Set FileVersion, 0.1.3\\n;@Ahk2Exe-Set InternalName, decode.exe\\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\\n;@Ahk2Exe-Set Name, Altify Decoder\\n;@Ahk2Exe-Set OrigFilename, decode.exe\\n;@Ahk2Exe-Set ProductName, Altify Decoder\\n;@Ahk2Exe-Set ProductVersion, 0.1.3\\n;@Ahk2Exe-Set Version, 0.1.3\\n#SingleInstance, Force\\nStringCaseSense, On\\nSetBatchLines, -1\\nProcess, Priority,, Realtime\\nCritical On\\nIfExist,settings\\/def.ini\\n{\\n	IniRead,ttype,settings\\/def.ini,Section1,Option1\\n	IniRead,ttype2,settings\\/def.ini,Section2,Option1\\n}\\nIfNotExist,settings\\/def.ini\\n{\\n	ttype := \"1\"\\n	ttype2 := \"input.txt\"\\n	URLDownloadToFile,https:\\/\\/www.altifydeveloping.com\\/img\\/config.png\\/,config.png\\n	FileCreateDir,settings\\n}\\nGui, Add, Button, Default, Help\\nGui, Add, Button, Default, Discord\\nGui, Add, Button, Default, Github\\nGui, Add, Button, Default, Website\\nGui, Add, Button, Default, SaveOptions\\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\\nGui, Add, Text,, filename:\\nGui, Add, Edit, vtype ym ym, %ttype%\\nGui, Add, Edit, vtype2, %ttype2%\\nGui, Add, Button, default, Submit\\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\\nGui, Show,, Decoder By Altify#0016\\nreturn\\nButtonHelp:\\nRun,Helper.exe\\nExitApp\\nButtonDiscord:\\nRun,https:\\/\\/discord.altifydeveloping.com\\/\\nExitApp\\nButtonGithub:\\nRun,https:\\/\\/github.com\\/Altify-Developing\\/Altify-Developing-Main\\nExitApp\\nButtonWebsite:\\nRun,https:\\/\\/www.altifydeveloping.com\\/\\nExitApp\\nButtonSaveOptions:\\nGui, Submit\\nFileDelete,settings\\/def.ini\\nFileRemoveDir,settings\\nFileCreateDir,settings\\nIniWrite,%type%,settings\\/def.ini,Section1,Option1\\nIniWrite,%type2%,settings\\/def.ini,Section2,Option1\\nExitApp\\nButtonSubmit:\\nGui, Submit\\nif type = 2\\n{\\n	TrayTip, Starting\`,Welcome To Altify\`\'s Decoder, Created By Altify#0016\`nDiscord: https:\\/\\/discord.altifydeveloping.com\\/,,17\\n	Sleep, 2000\\n	TrayTip\\n	FileCreateDir,output\\n	FileCreateDir,temp\\n	FileAppend,\`n\`r,%type2%\\n	Loop, Read, %type2%\\n	{\\n		total_lines = %A_Index%\\n		scrinst = %A_Index%\\n	}\\n	Loop, %total_lines%\\n	{\\n		scrinst -= 1\\n		FileReadLine,towrite,%type2%,%scrinst%\\n		FileAppend,%towrite%\`n,temp\\/script.txt\\n	}\\n	FileRead,alsotowrite,temp\\/script.txt\\n	FileRead,string1,%type2%\\n', ';@Ahk2Exe-Set CompanyName, Altify LLC\\n;@Ahk2Exe-Set Copyright, Altify 2022\\n;@Ahk2Exe-Set Description, Altify Encoder\\n;@Ahk2Exe-Set FileVersion, 0.1.3\\n;@Ahk2Exe-Set InternalName, encode.exe\\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\\n;@Ahk2Exe-Set Name, Altify Encoder\\n;@Ahk2Exe-Set OrigFilename, encode.exe\\n;@Ahk2Exe-Set ProductName, Altify Encoder\\n;@Ahk2Exe-Set ProductVersion, 0.1.3\\n;@Ahk2Exe-Set Version, 0.1.3\\n#SingleInstance, Force\\nStringCaseSense, On\\nSetBatchLines, -1\\nProcess, Priority,, Realtime\\nCritical On\\nIfExist,settings\\/def.ini\\n{\\n	IniRead,ttype,settings\\/def.ini,Section1,Option1\\n	IniRead,ttype2,settings\\/def.ini,Section2,Option1\\n}\\nIfNotExist,settings\\/def.ini\\n{\\n	ttype := \"1\"\\n	ttype2 := \"input.txt\"\\n	URLDownloadToFile,https:\\/\\/www.altifydeveloping.com\\/img\\/config.png\\/,config.png\\n	FileCreateDir,settings\\n}\\nGui, Add, Button, Default, Help\\nGui, Add, Button, Default, Discord\\nGui, Add, Button, Default, Github\\nGui, Add, Button, Default, Website\\nGui, Add, Button, Default, SaveOptions\\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\\nGui, Add, Text,, filename:\\nGui, Add, Edit, vtype ym ym, %ttype%\\nGui, Add, Edit, vtype2, %ttype2%\\nGui, Add, Button, default, Submit\\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\\nGui, Show,, Encoder By Altify#0016\\nreturn\\nButtonHelp:\\nRun,Helper.exe\\nExitApp\\nButtonDiscord:\\nRun,https:\\/\\/discord.altifydeveloping.com\\/\\nExitApp\\nButtonGithub:\\nRun,https:\\/\\/github.com\\/Altify-Developing\\/Altify-Developing-Main\\nExitApp\\nButtonWebsite:\\nRun,https:\\/\\/www.altifydeveloping.com\\/\\nExitApp\\nButtonSaveOptions:\\nGui, Submit\\nFileDelete,settings\\/def.ini\\nFileRemoveDir,settings\\nFileCreateDir,settings\\nIniWrite,%type%,settings\\/def.ini,Section1,Option1\\nIniWrite,%type2%,settings\\/def.ini,Section2,Option1\\nExitApp\\nButtonSubmit:\\nGui, Submit\\nif type = 1\\n{\\n	TrayTip, Starting\`,Welcome To Altify\`\'s Encoder, Created By Altify#0016\`nDiscord: https:\\/\\/discord.altifydeveloping.com\\/,,17\\n	Sleep, 2000\\n	TrayTip\\n	FileCreateDir,output\\n	FileCreateDir,temp\\n	FileAppend,\`n\`r,%type2%\\n	Loop, Read, %type2%\\n	{\\n		total_lines = %A_Index%\\n		scrinst = %A_Index%\\n	}\\n	Loop, %total_lines%\\n	{\\n		scrinst -= 1\\n		FileReadLine,towrite,%type2%,%scrinst%\\n		FileAppend,%towrite%\`n,temp\\/script.txt\\n	}\\n	FileRead,alsotowrite,temp\\/script.txt\\n	FileRead,string1,%type2%\\n', '	', '\\\[', '\{', 'abs', 'autotrim', 'asc', 'asin', 'acos', 'atan', 'blockinput', 'break', 'catch', 'ceil', 'chr', 'click', 'clipwait', 'comobjactive', 'comobjarray', 'comobjconnect', 'comobjcreate', 'comobject', 'comobjenwrap', 'comobjunwrap', 'comobjerror', 'comobjflags', 'comobjget', 'comobjmissing', 'comobjparameter', 'comobjquery', 'comobjtype', 'comobjvalue', 'continue', 'controlclick', 'controlfocus', 'controlgetfocus', 'controlgetpos', 'controlgettext', 'controlget', 'controlmove', 'controlsendraw', 'controlsend', 'controlsettext', 'coordmode', 'control', 'cos', 'critical', 'detecthiddentext', 'detecthiddenwindows', 'dllcall', 'driveget', 'drivespacefree', 'edit', 'else', 'envadd', 'envdiv', 'envget', 'envmult', 'envset', 'envsub', 'envupdate', 'exception', 'exitapp', 'exit', 'exp', 'fileappend', 'filecopydir', 'filecopy', 'filecreatedir', 'filecreateshortcut', 'filedelete', 'fileencoding', 'fileexist', 'fileinstall', 'filegetattrib', 'filegetshortcut', 'filegetsize', 'filegettime', 'filegetversion', 'filemovedir', 'filemove', 'fileopen', 'filereadline', 'fileread', 'filerecycleempty', 'filerecycle', 'fileremovedir', 'fileselectfile', 'fileselectfolder', 'filesetattrib', 'filesettime', 'finally', 'floor', 'for', 'formattime', 'format', 'func', 'getkeyname', 'getkeyvk', 'getkeysc', 'getkeystate', 'gosub', 'goto', 'groupactivate', 'groupadd', 'groupclose', 'groupdeactivate', 'guicontrolget', 'guicontrol', 'gui', 'hotkey', 'hotstring', 'ifwinexist', 'ifwinnotexist', 'ifwinnotactive', 'ifwinactive', 'ifmsgbox', 'iflessorequal', 'ifless', 'ifnotinstring', 'ifinstring', 'ifgreaterorequal', 'ifgreater', 'ifnotexist', 'ifexist', 'ifnotequal', 'ifequal', 'if', 'in', 'not', 'contains', 'il_create', 'il_add', 'il_destroy', 'imagesearch', 'inidelete', 'iniread', 'iniwrite', 'inputhook', 'inputbox', 'input', 'instr', 'isbyref', 'isfunc', 'islabel', 'isobject', 'keyhistory', 'keywait', 'listhotkeys', 'listlines', 'listvars', 'loadpicture', 'log', 'ln', 'loop', 'lv_add', 'lv_delete', 'lv_deletecol', 'lv_getcount', 'lv_getnext', 'lv_gettext', 'lv_insert', 'lv_insertcol', 'lv_modify', 'lv_modifycol', 'lv_setimagelist', 'menugetname', 'menugethandle', 'menu', 'mod', 'mouseclickdrag', 'mouseclick', 'mousegetpos', 'mousemove', 'msgbox', 'numget', 'numput', 'objaddref', 'objrelease', 'objbindmethod', 'objclone', 'objcount', 'objdelete', 'objgetaddress', 'objgetcapacity', 'objhaskey', 'objinsertat', 'objinsert', 'objlength', 'objmaxindex', 'objminindex', 'min', 'max', 'objnewenum', 'objpop', 'objpush', 'objremoveat', 'objremove', 'objsetcapacity', 'objgetbase', 'objgetbase', 'objrawset', 'objsetbase', 'onclipboardchange', 'onerror', 'onexit', 'onexit', 'onmessage', 'ord', 'outputdebug', 'pause', 'pixelgetcolor', 'pixelsearch', 'postmessage', 'process', 'progress', 'random', 'regexmatch', 'regexreplace', 'regdelete', 'regread', 'regwrite', 'registercallback', 'reload', 'return', 'round', 'runwait', 'runas', 'run', 'sb_settext', 'sb_setparts', 'sb_seticon', 'sendevent', 'sendplay', 'sendinput', 'sendraw', 'sendlevel', 'sendmessage', 'sendmode', 'send', 'setbatchlines', 'setcapslockstate', 'setcontroldelay', 'setdefaultmousespeed', 'setenv', 'setformat', 'setkeydelay', 'setmousedelay', 'setnumlockstate', 'setscrolllockstate', 'setregview', 'setstorecapslockmode', 'settimer', 'settitlematchmode', 'setwindelay', 'setworkingdir', 'shutdown', 'sin', 'sleep', 'sort', 'soundbeep', 'soundgetwavevolume', 'soundget', 'soundplay', 'soundsetwavevolume', 'soundset', 'splashimage', 'splashtexton', 'splashtextoff', 'splitpath', 'sqrt', 'statusbargettext', 'statusbarwait', 'stringgetpos', 'strget', 'stringcasesense', 'stringleft', 'stringlen', 'stringlower', 'stringmid', 'stringreplace', 'stringright', 'stringsplit', 'stringtrimleft', 'stringtrimright', 'stringupper', 'strlen', 'strput', 'strreplace', 'strsplit', 'substr', 'suspend', 'switch', 'sysget', 'tan', 'thread', 'throw', 'tooltip', 'transform', 'traytip', 'trim', 'try', 'tv_add', 'tv_delete', 'tv_get', 'tv_getchild', 'tv_getcount', 'tv_getnext', 'tv_getparent', 'tv_getprev', 'tv_getselection', 'tv_gettext', 'tv_modify', 'tv_setimagelist', 'until', 'urldownloadtofile', 'varsetcapacity', 'while-loop', 'winactivatebottom', 'winactivate', 'winclose', 'winexist', 'wingetactivestats', 'wingetactivetitle', 'wingetclass', 'wingettext', 'wingetpos', 'wingettitle', 'winget', 'winhide', 'winkill', 'winmaximize', 'winmenuselectitem', 'winminimizeallundo', 'winminimizeall', 'winminimize', 'winmove', 'winrestore', 'winset', 'winsettitle', 'winshow', 'winwaitactive', 'winwaitnotactive', 'winwaitclose', 'winwait', 'clipboardtimeout', 'clipboardtimeout', 'commentflag', 'delimiter', 'derefchar', 'errorstdout', 'escapechar', 'hotkeyinterval', 'hotkeymodifiertimeout', 'hotstring', 'if', 'iftimeout', 'ifwinactive', 'ifwinnotactive', 'ifwinexist', 'ifwinnotexist', 'include', 'includeagain', 'inputlevel', 'installkeybdhook', 'installmousehook', 'keyhistory', 'ltrim', 'maxhotkeysperinterval', 'maxmem', 'maxthreads', 'maxthreadsbuffer', 'maxthreadsperhotkey', 'menumaskkey', 'noenv', 'notrayicon', 'persistent', 'requires', 'singleinstance', 'usehook', 'warn', 'winactivateforce', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
			let txt = ".replace(/" + `${characters[e]}` + "/gi, \"" + `¢${rand}¢` + "\")"
			let fp3 = "./encode.js"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = ".replace(/" + `¢${rand}¢` + "/gi, \"" + `${characters[e]}` + "\")"
			let fp4 = "./decode.js"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(generation2, 500);
	function generation2() {
		for (let e = 534; e < 559; e++) {
			var rand = randomString(argv.s + 1, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = [`;@Ahk2Exe-Set CompanyName, Altify LLC\n;@Ahk2Exe-Set Copyright, Altify 2022\n;@Ahk2Exe-Set Description, Altify Decoder\n;@Ahk2Exe-Set FileVersion, 0.1.3\n;@Ahk2Exe-Set InternalName, decode.exe\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\n;@Ahk2Exe-Set Name, Altify Decoder\n;@Ahk2Exe-Set OrigFilename, decode.exe\n;@Ahk2Exe-Set ProductName, Altify Decoder\n;@Ahk2Exe-Set ProductVersion, 0.1.3\n;@Ahk2Exe-Set Version, 0.1.3\n#SingleInstance, Force\nStringCaseSense, On\nSetBatchLines, -1\nProcess, Priority,, Realtime\nCritical On\nIfExist,settings/def.ini\n{\n	IniRead,ttype,settings/def.ini,Section1,Option1\n	IniRead,ttype2,settings/def.ini,Section2,Option1\n}\nIfNotExist,settings/def.ini\n{\n	ttype := \"1\"\n	ttype2 := \"input.txt\"\n	URLDownloadToFile,https://www.altifydeveloping.com/img/config.png/,config.png\n	FileCreateDir,settings\n}\nGui, Add, Button, Default, Help\nGui, Add, Button, Default, Discord\nGui, Add, Button, Default, Github\nGui, Add, Button, Default, Website\nGui, Add, Button, Default, SaveOptions\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\nGui, Add, Text,, filename:\nGui, Add, Edit, vtype ym ym, %ttype%\nGui, Add, Edit, vtype2, %ttype2%\nGui, Add, Button, default, Submit\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\nGui, Show,, Decoder By Altify#0016\nreturn\nButtonHelp:\nRun,Helper.exe\nExitApp\nButtonDiscord:\nRun,https://discord.altifydeveloping.com/\nExitApp\nButtonGithub:\nRun,https://github.com/Altify-Developing/Altify-Developing-Main\nExitApp\nButtonWebsite:\nRun,https://www.altifydeveloping.com/\nExitApp\nButtonSaveOptions:\nGui, Submit\nFileDelete,settings/def.ini\nFileRemoveDir,settings\nFileCreateDir,settings\nIniWrite,%type%,settings/def.ini,Section1,Option1\nIniWrite,%type2%,settings/def.ini,Section2,Option1\nExitApp\nButtonSubmit:\nGui, Submit\nif type = 2\n{\n	TrayTip, Starting\`,Welcome To Altify\`'s Decoder, Created By Altify#0016\`nDiscord: https://discord.altifydeveloping.com/,,17\n	Sleep, 2000\n	TrayTip\n	FileCreateDir,output\n	FileCreateDir,temp\n	FileAppend,\`n\`r,%type2%\n	Loop, Read, %type2%\n	{\n		total_lines = %A_Index%\n		scrinst = %A_Index%\n	}\n	Loop, %total_lines%\n	{\n		scrinst -= 1\n		FileReadLine,towrite,%type2%,%scrinst%\n		FileAppend,%towrite%\`n,temp/script.txt\n	}\n	FileRead,alsotowrite,temp/script.txt\n	FileRead,string1,%type2%\n`, `;@Ahk2Exe-Set CompanyName, Altify LLC\n;@Ahk2Exe-Set Copyright, Altify 2022\n;@Ahk2Exe-Set Description, Altify Encoder\n;@Ahk2Exe-Set FileVersion, 0.1.3\n;@Ahk2Exe-Set InternalName, encode.exe\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\n;@Ahk2Exe-Set Name, Altify Encoder\n;@Ahk2Exe-Set OrigFilename, encode.exe\n;@Ahk2Exe-Set ProductName, Altify Encoder\n;@Ahk2Exe-Set ProductVersion, 0.1.3\n;@Ahk2Exe-Set Version, 0.1.3\n#SingleInstance, Force\nStringCaseSense, On\nSetBatchLines, -1\nProcess, Priority,, Realtime\nCritical On\nIfExist,settings/def.ini\n{\n	IniRead,ttype,settings/def.ini,Section1,Option1\n	IniRead,ttype2,settings/def.ini,Section2,Option1\n}\nIfNotExist,settings/def.ini\n{\n	ttype := \"1\"\n	ttype2 := \"input.txt\"\n	URLDownloadToFile,https://www.altifydeveloping.com/img/config.png/,config.png\n	FileCreateDir,settings\n}\nGui, Add, Button, Default, Help\nGui, Add, Button, Default, Discord\nGui, Add, Button, Default, Github\nGui, Add, Button, Default, Website\nGui, Add, Button, Default, SaveOptions\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\nGui, Add, Text,, filename:\nGui, Add, Edit, vtype ym ym, %ttype%\nGui, Add, Edit, vtype2, %ttype2%\nGui, Add, Button, default, Submit\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\nGui, Show,, Encoder By Altify#0016\nreturn\nButtonHelp:\nRun,Helper.exe\nExitApp\nButtonDiscord:\nRun,https://discord.altifydeveloping.com/\nExitApp\nButtonGithub:\nRun,https://github.com/Altify-Developing/Altify-Developing-Main\nExitApp\nButtonWebsite:\nRun,https://www.altifydeveloping.com/\nExitApp\nButtonSaveOptions:\nGui, Submit\nFileDelete,settings/def.ini\nFileRemoveDir,settings\nFileCreateDir,settings\nIniWrite,%type%,settings/def.ini,Section1,Option1\nIniWrite,%type2%,settings/def.ini,Section2,Option1\nExitApp\nButtonSubmit:\nGui, Submit\nif type = 1\n{\n	TrayTip, Starting\`,Welcome To Altify\`'s Encoder, Created By Altify#0016\`nDiscord: https://discord.altifydeveloping.com/,,17\n	Sleep, 2000\n	TrayTip\n	FileCreateDir,output\n	FileCreateDir,temp\n	FileAppend,\`n\`r,%type2%\n	Loop, Read, %type2%\n	{\n		total_lines = %A_Index%\n		scrinst = %A_Index%\n	}\n	Loop, %total_lines%\n	{\n		scrinst -= 1\n		FileReadLine,towrite,%type2%,%scrinst%\n		FileAppend,%towrite%\`n,temp/script.txt\n	}\n	FileRead,alsotowrite,temp/script.txt\n	FileRead,string1,%type2%\n`, '	', '\\\[', '\{', 'abs', 'autotrim', 'asc', 'asin', 'acos', 'atan', 'blockinput', 'break', 'catch', 'ceil', 'chr', 'click', 'clipwait', 'comobjactive', 'comobjarray', 'comobjconnect', 'comobjcreate', 'comobject', 'comobjenwrap', 'comobjunwrap', 'comobjerror', 'comobjflags', 'comobjget', 'comobjmissing', 'comobjparameter', 'comobjquery', 'comobjtype', 'comobjvalue', 'continue', 'controlclick', 'controlfocus', 'controlgetfocus', 'controlgetpos', 'controlgettext', 'controlget', 'controlmove', 'controlsendraw', 'controlsend', 'controlsettext', 'coordmode', 'control', 'cos', 'critical', 'detecthiddentext', 'detecthiddenwindows', 'dllcall', 'driveget', 'drivespacefree', 'edit', 'else', 'envadd', 'envdiv', 'envget', 'envmult', 'envset', 'envsub', 'envupdate', 'exception', 'exitapp', 'exit', 'exp', 'fileappend', 'filecopydir', 'filecopy', 'filecreatedir', 'filecreateshortcut', 'filedelete', 'fileencoding', 'fileexist', 'fileinstall', 'filegetattrib', 'filegetshortcut', 'filegetsize', 'filegettime', 'filegetversion', 'filemovedir', 'filemove', 'fileopen', 'filereadline', 'fileread', 'filerecycleempty', 'filerecycle', 'fileremovedir', 'fileselectfile', 'fileselectfolder', 'filesetattrib', 'filesettime', 'finally', 'floor', 'for', 'formattime', 'format', 'func', 'getkeyname', 'getkeyvk', 'getkeysc', 'getkeystate', 'gosub', 'goto', 'groupactivate', 'groupadd', 'groupclose', 'groupdeactivate', 'guicontrolget', 'guicontrol', 'gui', 'hotkey', 'hotstring', 'ifwinexist', 'ifwinnotexist', 'ifwinnotactive', 'ifwinactive', 'ifmsgbox', 'iflessorequal', 'ifless', 'ifnotinstring', 'ifinstring', 'ifgreaterorequal', 'ifgreater', 'ifnotexist', 'ifexist', 'ifnotequal', 'ifequal', 'if', 'in', 'not', 'contains', 'il_create', 'il_add', 'il_destroy', 'imagesearch', 'inidelete', 'iniread', 'iniwrite', 'inputhook', 'inputbox', 'input', 'instr', 'isbyref', 'isfunc', 'islabel', 'isobject', 'keyhistory', 'keywait', 'listhotkeys', 'listlines', 'listvars', 'loadpicture', 'log', 'ln', 'loop', 'lv_add', 'lv_delete', 'lv_deletecol', 'lv_getcount', 'lv_getnext', 'lv_gettext', 'lv_insert', 'lv_insertcol', 'lv_modify', 'lv_modifycol', 'lv_setimagelist', 'menugetname', 'menugethandle', 'menu', 'mod', 'mouseclickdrag', 'mouseclick', 'mousegetpos', 'mousemove', 'msgbox', 'numget', 'numput', 'objaddref', 'objrelease', 'objbindmethod', 'objclone', 'objcount', 'objdelete', 'objgetaddress', 'objgetcapacity', 'objhaskey', 'objinsertat', 'objinsert', 'objlength', 'objmaxindex', 'objminindex', 'min', 'max', 'objnewenum', 'objpop', 'objpush', 'objremoveat', 'objremove', 'objsetcapacity', 'objgetbase', 'objgetbase', 'objrawset', 'objsetbase', 'onclipboardchange', 'onerror', 'onexit', 'onexit', 'onmessage', 'ord', 'outputdebug', 'pause', 'pixelgetcolor', 'pixelsearch', 'postmessage', 'process', 'progress', 'random', 'regexmatch', 'regexreplace', 'regdelete', 'regread', 'regwrite', 'registercallback', 'reload', 'return', 'round', 'runwait', 'runas', 'run', 'sb_settext', 'sb_setparts', 'sb_seticon', 'sendevent', 'sendplay', 'sendinput', 'sendraw', 'sendlevel', 'sendmessage', 'sendmode', 'send', 'setbatchlines', 'setcapslockstate', 'setcontroldelay', 'setdefaultmousespeed', 'setenv', 'setformat', 'setkeydelay', 'setmousedelay', 'setnumlockstate', 'setscrolllockstate', 'setregview', 'setstorecapslockmode', 'settimer', 'settitlematchmode', 'setwindelay', 'setworkingdir', 'shutdown', 'sin', 'sleep', 'sort', 'soundbeep', 'soundgetwavevolume', 'soundget', 'soundplay', 'soundsetwavevolume', 'soundset', 'splashimage', 'splashtexton', 'splashtextoff', 'splitpath', 'sqrt', 'statusbargettext', 'statusbarwait', 'stringgetpos', 'strget', 'stringcasesense', 'stringleft', 'stringlen', 'stringlower', 'stringmid', 'stringreplace', 'stringright', 'stringsplit', 'stringtrimleft', 'stringtrimright', 'stringupper', 'strlen', 'strput', 'strreplace', 'strsplit', 'substr', 'suspend', 'switch', 'sysget', 'tan', 'thread', 'throw', 'tooltip', 'transform', 'traytip', 'trim', 'try', 'tv_add', 'tv_delete', 'tv_get', 'tv_getchild', 'tv_getcount', 'tv_getnext', 'tv_getparent', 'tv_getprev', 'tv_getselection', 'tv_gettext', 'tv_modify', 'tv_setimagelist', 'until', 'urldownloadtofile', 'varsetcapacity', 'while-loop', 'winactivatebottom', 'winactivate', 'winclose', 'winexist', 'wingetactivestats', 'wingetactivetitle', 'wingetclass', 'wingettext', 'wingetpos', 'wingettitle', 'winget', 'winhide', 'winkill', 'winmaximize', 'winmenuselectitem', 'winminimizeallundo', 'winminimizeall', 'winminimize', 'winmove', 'winrestore', 'winset', 'winsettitle', 'winshow', 'winwaitactive', 'winwaitnotactive', 'winwaitclose', 'winwait', 'clipboardtimeout', 'clipboardtimeout', 'commentflag', 'delimiter', 'derefchar', 'errorstdout', 'escapechar', 'hotkeyinterval', 'hotkeymodifiertimeout', 'hotstring', 'if', 'iftimeout', 'ifwinactive', 'ifwinnotactive', 'ifwinexist', 'ifwinnotexist', 'include', 'includeagain', 'inputlevel', 'installkeybdhook', 'installmousehook', 'keyhistory', 'ltrim', 'maxhotkeysperinterval', 'maxmem', 'maxthreads', 'maxthreadsbuffer', 'maxthreadsperhotkey', 'menumaskkey', 'noenv', 'notrayicon', 'persistent', 'requires', 'singleinstance', 'usehook', 'warn', 'winactivateforce', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
			let txt = ".replace(/" + `${characters[e]}` + "/g, \"" + `¢${rand}¢` + "\")"
			let fp3 = "./encode.js"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = ".replace(/" + `¢${rand}¢` + "/g, \"" + `${characters[e]}` + "\")"
			let fp4 = "./decode.js"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
		}
	}
	setTimeout(finish, 1000);
	function finish() {
		let txt1 = `;\nfs.appendFile('encoded.txt', txt1, function(error) {\n		if (error) return log.error(error);\n})`
		let txt2 = `;\nfs.appendFile('decoded.txt', txt1, function(error) {\n		if (error) return log.error(error);\n})`
		let fp77 = "./encode.js"
		fs.appendFile(fp77, txt1, function(error) {
			if (error) return log.error(error);
		})
		let fp66 = "./decode.js"
		fs.appendFile(fp66, txt2, function(error) {
			if (error) return log.error(error);
		})
	}
}
if (argv.language == 'ahk' && argv.type == 'ahk') {
	console.log(argv.security + 2);
	let txt1 = `;@Ahk2Exe-Set CompanyName, Altify LLC\n;@Ahk2Exe-Set Copyright, Altify 2022\n;@Ahk2Exe-Set Description, Altify Encoder\n;@Ahk2Exe-Set FileVersion, 0.1.3\n;@Ahk2Exe-Set InternalName, encode.exe\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\n;@Ahk2Exe-Set Name, Altify Encoder\n;@Ahk2Exe-Set OrigFilename, encode.exe\n;@Ahk2Exe-Set ProductName, Altify Encoder\n;@Ahk2Exe-Set ProductVersion, 0.1.3\n;@Ahk2Exe-Set Version, 0.1.3\n#SingleInstance, Force\nStringCaseSense, On\nSetBatchLines, -1\nProcess, Priority,, Realtime\nCritical On\nIfExist,settings/def.ini\n{\n	IniRead,ttype,settings/def.ini,Section1,Option1\n	IniRead,ttype2,settings/def.ini,Section2,Option1\n}\nIfNotExist,settings/def.ini\n{\n	ttype := \"1\"\n	ttype2 := \"input.txt\"\n	URLDownloadToFile,https://www.altifydeveloping.com/img/config.png/,config.png\n	FileCreateDir,settings\n}\nGui, Add, Button, Default, Help\nGui, Add, Button, Default, Discord\nGui, Add, Button, Default, Github\nGui, Add, Button, Default, Website\nGui, Add, Button, Default, SaveOptions\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\nGui, Add, Text,, filename:\nGui, Add, Edit, vtype ym ym, %ttype%\nGui, Add, Edit, vtype2, %ttype2%\nGui, Add, Button, default, Submit\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\nGui, Show,, Encoder By Altify#0016\nreturn\nButtonHelp:\nRun,Helper.exe\nExitApp\nButtonDiscord:\nRun,https://discord.altifydeveloping.com/\nExitApp\nButtonGithub:\nRun,https://github.com/Altify-Developing/Altify-Developing-Main\nExitApp\nButtonWebsite:\nRun,https://www.altifydeveloping.com/\nExitApp\nButtonSaveOptions:\nGui, Submit\nFileDelete,settings/def.ini\nFileRemoveDir,settings\nFileCreateDir,settings\nIniWrite,%type%,settings/def.ini,Section1,Option1\nIniWrite,%type2%,settings/def.ini,Section2,Option1\nExitApp\nButtonSubmit:\nGui, Submit\nif type = 1\n{\n	TrayTip, Starting\`,Welcome To Altify\`'s Encoder, Created By Altify#0016\`nDiscord: https://discord.altifydeveloping.com/,,17\n	Sleep, 2000\n	TrayTip\n	FileCreateDir,output\n	FileCreateDir,temp\n	FileAppend,\`n\`r,%type2%\n	Loop, Read, %type2%\n	{\n		total_lines = %A_Index%\n		scrinst = %A_Index%\n	}\n	Loop, %total_lines%\n	{\n		scrinst -= 1\n		FileReadLine,towrite,%type2%,%scrinst%\n		FileAppend,%towrite%\`n,temp/script.txt\n	}\n	FileRead,alsotowrite,temp/script.txt\n	FileRead,string1,%type2%\n`
	let txt2 = `;@Ahk2Exe-Set CompanyName, Altify LLC\n;@Ahk2Exe-Set Copyright, Altify 2022\n;@Ahk2Exe-Set Description, Altify Decoder\n;@Ahk2Exe-Set FileVersion, 0.1.3\n;@Ahk2Exe-Set InternalName, decode.exe\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\n;@Ahk2Exe-Set Name, Altify Decoder\n;@Ahk2Exe-Set OrigFilename, decode.exe\n;@Ahk2Exe-Set ProductName, Altify Decoder\n;@Ahk2Exe-Set ProductVersion, 0.1.3\n;@Ahk2Exe-Set Version, 0.1.3\n#SingleInstance, Force\nStringCaseSense, On\nSetBatchLines, -1\nProcess, Priority,, Realtime\nCritical On\nIfExist,settings/def.ini\n{\n	IniRead,ttype,settings/def.ini,Section1,Option1\n	IniRead,ttype2,settings/def.ini,Section2,Option1\n}\nIfNotExist,settings/def.ini\n{\n	ttype := \"1\"\n	ttype2 := \"input.txt\"\n	URLDownloadToFile,https://www.altifydeveloping.com/img/config.png/,config.png\n	FileCreateDir,settings\n}\nGui, Add, Button, Default, Help\nGui, Add, Button, Default, Discord\nGui, Add, Button, Default, Github\nGui, Add, Button, Default, Website\nGui, Add, Button, Default, SaveOptions\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\nGui, Add, Text,, filename:\nGui, Add, Edit, vtype ym ym, %ttype%\nGui, Add, Edit, vtype2, %ttype2%\nGui, Add, Button, default, Submit\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\nGui, Show,, Decoder By Altify#0016\nreturn\nButtonHelp:\nRun,Helper.exe\nExitApp\nButtonDiscord:\nRun,https://discord.altifydeveloping.com/\nExitApp\nButtonGithub:\nRun,https://github.com/Altify-Developing/Altify-Developing-Main\nExitApp\nButtonWebsite:\nRun,https://www.altifydeveloping.com/\nExitApp\nButtonSaveOptions:\nGui, Submit\nFileDelete,settings/def.ini\nFileRemoveDir,settings\nFileCreateDir,settings\nIniWrite,%type%,settings/def.ini,Section1,Option1\nIniWrite,%type2%,settings/def.ini,Section2,Option1\nExitApp\nButtonSubmit:\nGui, Submit\nif type = 2\n{\n	TrayTip, Starting\`,Welcome To Altify\`'s Decoder, Created By Altify#0016\`nDiscord: https://discord.altifydeveloping.com/,,17\n	Sleep, 2000\n	TrayTip\n	FileCreateDir,output\n	FileCreateDir,temp\n	FileAppend,\`n\`r,%type2%\n	Loop, Read, %type2%\n	{\n		total_lines = %A_Index%\n		scrinst = %A_Index%\n	}\n	Loop, %total_lines%\n	{\n		scrinst -= 1\n		FileReadLine,towrite,%type2%,%scrinst%\n		FileAppend,%towrite%\`n,temp/script.txt\n	}\n	FileRead,alsotowrite,temp/script.txt\n	FileRead,string1,%type2%\n`
	let fp3 = "./encode.ahk"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.ahk"
	fs.appendFile(fp4, txt2, function(error) {
		if (error) return log.error(error);
	})
	var r = 1;
	setTimeout(generation, 500);
	async function generation() {
		for (let e = 0; e < 559; e++) {
			var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵ͶͷͺͻͼͽͿ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈ');
			// ¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪™š›œžŸʘ¶€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ
			var characters = [`;@Ahk2Exe-Set CompanyName, Altify LLC\n;@Ahk2Exe-Set Copyright, Altify 2022\n;@Ahk2Exe-Set Description, Altify Decoder\n;@Ahk2Exe-Set FileVersion, 0.1.3\n;@Ahk2Exe-Set InternalName, decode.exe\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\n;@Ahk2Exe-Set Name, Altify Decoder\n;@Ahk2Exe-Set OrigFilename, decode.exe\n;@Ahk2Exe-Set ProductName, Altify Decoder\n;@Ahk2Exe-Set ProductVersion, 0.1.3\n;@Ahk2Exe-Set Version, 0.1.3\n#SingleInstance, Force\nStringCaseSense, On\nSetBatchLines, -1\nProcess, Priority,, Realtime\nCritical On\nIfExist,settings/def.ini\n{\n	IniRead,ttype,settings/def.ini,Section1,Option1\n	IniRead,ttype2,settings/def.ini,Section2,Option1\n}\nIfNotExist,settings/def.ini\n{\n	ttype := \"1\"\n	ttype2 := \"input.txt\"\n	URLDownloadToFile,https://www.altifydeveloping.com/img/config.png/,config.png\n	FileCreateDir,settings\n}\nGui, Add, Button, Default, Help\nGui, Add, Button, Default, Discord\nGui, Add, Button, Default, Github\nGui, Add, Button, Default, Website\nGui, Add, Button, Default, SaveOptions\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\nGui, Add, Text,, filename:\nGui, Add, Edit, vtype ym ym, %ttype%\nGui, Add, Edit, vtype2, %ttype2%\nGui, Add, Button, default, Submit\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\nGui, Show,, Decoder By Altify#0016\nreturn\nButtonHelp:\nRun,Helper.exe\nExitApp\nButtonDiscord:\nRun,https://discord.altifydeveloping.com/\nExitApp\nButtonGithub:\nRun,https://github.com/Altify-Developing/Altify-Developing-Main\nExitApp\nButtonWebsite:\nRun,https://www.altifydeveloping.com/\nExitApp\nButtonSaveOptions:\nGui, Submit\nFileDelete,settings/def.ini\nFileRemoveDir,settings\nFileCreateDir,settings\nIniWrite,%type%,settings/def.ini,Section1,Option1\nIniWrite,%type2%,settings/def.ini,Section2,Option1\nExitApp\nButtonSubmit:\nGui, Submit\nif type = 2\n{\n	TrayTip, Starting\`,Welcome To Altify\`'s Decoder, Created By Altify#0016\`nDiscord: https://discord.altifydeveloping.com/,,17\n	Sleep, 2000\n	TrayTip\n	FileCreateDir,output\n	FileCreateDir,temp\n	FileAppend,\`n\`r,%type2%\n	Loop, Read, %type2%\n	{\n		total_lines = %A_Index%\n		scrinst = %A_Index%\n	}\n	Loop, %total_lines%\n	{\n		scrinst -= 1\n		FileReadLine,towrite,%type2%,%scrinst%\n		FileAppend,%towrite%\`n,temp/script.txt\n	}\n	FileRead,alsotowrite,temp/script.txt\n	FileRead,string1,%type2%\n`, `;@Ahk2Exe-Set CompanyName, Altify LLC\n;@Ahk2Exe-Set Copyright, Altify 2022\n;@Ahk2Exe-Set Description, Altify Encoder\n;@Ahk2Exe-Set FileVersion, 0.1.3\n;@Ahk2Exe-Set InternalName, encode.exe\n;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022\n;@Ahk2Exe-Set Name, Altify Encoder\n;@Ahk2Exe-Set OrigFilename, encode.exe\n;@Ahk2Exe-Set ProductName, Altify Encoder\n;@Ahk2Exe-Set ProductVersion, 0.1.3\n;@Ahk2Exe-Set Version, 0.1.3\n#SingleInstance, Force\nStringCaseSense, On\nSetBatchLines, -1\nProcess, Priority,, Realtime\nCritical On\nIfExist,settings/def.ini\n{\n	IniRead,ttype,settings/def.ini,Section1,Option1\n	IniRead,ttype2,settings/def.ini,Section2,Option1\n}\nIfNotExist,settings/def.ini\n{\n	ttype := \"1\"\n	ttype2 := \"input.txt\"\n	URLDownloadToFile,https://www.altifydeveloping.com/img/config.png/,config.png\n	FileCreateDir,settings\n}\nGui, Add, Button, Default, Help\nGui, Add, Button, Default, Discord\nGui, Add, Button, Default, Github\nGui, Add, Button, Default, Website\nGui, Add, Button, Default, SaveOptions\nGui, Add, Text,ym, Encode \`(1\`) or Decode \`(2\`):\nGui, Add, Text,, filename:\nGui, Add, Edit, vtype ym ym, %ttype%\nGui, Add, Edit, vtype2, %ttype2%\nGui, Add, Button, default, Submit\nGui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png\nGui, Show,, Encoder By Altify#0016\nreturn\nButtonHelp:\nRun,Helper.exe\nExitApp\nButtonDiscord:\nRun,https://discord.altifydeveloping.com/\nExitApp\nButtonGithub:\nRun,https://github.com/Altify-Developing/Altify-Developing-Main\nExitApp\nButtonWebsite:\nRun,https://www.altifydeveloping.com/\nExitApp\nButtonSaveOptions:\nGui, Submit\nFileDelete,settings/def.ini\nFileRemoveDir,settings\nFileCreateDir,settings\nIniWrite,%type%,settings/def.ini,Section1,Option1\nIniWrite,%type2%,settings/def.ini,Section2,Option1\nExitApp\nButtonSubmit:\nGui, Submit\nif type = 1\n{\n	TrayTip, Starting\`,Welcome To Altify\`'s Encoder, Created By Altify#0016\`nDiscord: https://discord.altifydeveloping.com/,,17\n	Sleep, 2000\n	TrayTip\n	FileCreateDir,output\n	FileCreateDir,temp\n	FileAppend,\`n\`r,%type2%\n	Loop, Read, %type2%\n	{\n		total_lines = %A_Index%\n		scrinst = %A_Index%\n	}\n	Loop, %total_lines%\n	{\n		scrinst -= 1\n		FileReadLine,towrite,%type2%,%scrinst%\n		FileAppend,%towrite%\`n,temp/script.txt\n	}\n	FileRead,alsotowrite,temp/script.txt\n	FileRead,string1,%type2%\n`, '	', '\\\[', '\{', 'abs', 'autotrim', 'asc', 'asin', 'acos', 'atan', 'blockinput', 'break', 'catch', 'ceil', 'chr', 'click', 'clipwait', 'comobjactive', 'comobjarray', 'comobjconnect', 'comobjcreate', 'comobject', 'comobjenwrap', 'comobjunwrap', 'comobjerror', 'comobjflags', 'comobjget', 'comobjmissing', 'comobjparameter', 'comobjquery', 'comobjtype', 'comobjvalue', 'continue', 'controlclick', 'controlfocus', 'controlgetfocus', 'controlgetpos', 'controlgettext', 'controlget', 'controlmove', 'controlsendraw', 'controlsend', 'controlsettext', 'coordmode', 'control', 'cos', 'critical', 'detecthiddentext', 'detecthiddenwindows', 'dllcall', 'driveget', 'drivespacefree', 'edit', 'else', 'envadd', 'envdiv', 'envget', 'envmult', 'envset', 'envsub', 'envupdate', 'exception', 'exitapp', 'exit', 'exp', 'fileappend', 'filecopydir', 'filecopy', 'filecreatedir', 'filecreateshortcut', 'filedelete', 'fileencoding', 'fileexist', 'fileinstall', 'filegetattrib', 'filegetshortcut', 'filegetsize', 'filegettime', 'filegetversion', 'filemovedir', 'filemove', 'fileopen', 'filereadline', 'fileread', 'filerecycleempty', 'filerecycle', 'fileremovedir', 'fileselectfile', 'fileselectfolder', 'filesetattrib', 'filesettime', 'finally', 'floor', 'for', 'formattime', 'format', 'func', 'getkeyname', 'getkeyvk', 'getkeysc', 'getkeystate', 'gosub', 'goto', 'groupactivate', 'groupadd', 'groupclose', 'groupdeactivate', 'guicontrolget', 'guicontrol', 'gui', 'hotkey', 'hotstring', 'ifwinexist', 'ifwinnotexist', 'ifwinnotactive', 'ifwinactive', 'ifmsgbox', 'iflessorequal', 'ifless', 'ifnotinstring', 'ifinstring', 'ifgreaterorequal', 'ifgreater', 'ifnotexist', 'ifexist', 'ifnotequal', 'ifequal', 'if', 'in', 'not', 'contains', 'il_create', 'il_add', 'il_destroy', 'imagesearch', 'inidelete', 'iniread', 'iniwrite', 'inputhook', 'inputbox', 'input', 'instr', 'isbyref', 'isfunc', 'islabel', 'isobject', 'keyhistory', 'keywait', 'listhotkeys', 'listlines', 'listvars', 'loadpicture', 'log', 'ln', 'loop', 'lv_add', 'lv_delete', 'lv_deletecol', 'lv_getcount', 'lv_getnext', 'lv_gettext', 'lv_insert', 'lv_insertcol', 'lv_modify', 'lv_modifycol', 'lv_setimagelist', 'menugetname', 'menugethandle', 'menu', 'mod', 'mouseclickdrag', 'mouseclick', 'mousegetpos', 'mousemove', 'msgbox', 'numget', 'numput', 'objaddref', 'objrelease', 'objbindmethod', 'objclone', 'objcount', 'objdelete', 'objgetaddress', 'objgetcapacity', 'objhaskey', 'objinsertat', 'objinsert', 'objlength', 'objmaxindex', 'objminindex', 'min', 'max', 'objnewenum', 'objpop', 'objpush', 'objremoveat', 'objremove', 'objsetcapacity', 'objgetbase', 'objgetbase', 'objrawset', 'objsetbase', 'onclipboardchange', 'onerror', 'onexit', 'onexit', 'onmessage', 'ord', 'outputdebug', 'pause', 'pixelgetcolor', 'pixelsearch', 'postmessage', 'process', 'progress', 'random', 'regexmatch', 'regexreplace', 'regdelete', 'regread', 'regwrite', 'registercallback', 'reload', 'return', 'round', 'runwait', 'runas', 'run', 'sb_settext', 'sb_setparts', 'sb_seticon', 'sendevent', 'sendplay', 'sendinput', 'sendraw', 'sendlevel', 'sendmessage', 'sendmode', 'send', 'setbatchlines', 'setcapslockstate', 'setcontroldelay', 'setdefaultmousespeed', 'setenv', 'setformat', 'setkeydelay', 'setmousedelay', 'setnumlockstate', 'setscrolllockstate', 'setregview', 'setstorecapslockmode', 'settimer', 'settitlematchmode', 'setwindelay', 'setworkingdir', 'shutdown', 'sin', 'sleep', 'sort', 'soundbeep', 'soundgetwavevolume', 'soundget', 'soundplay', 'soundsetwavevolume', 'soundset', 'splashimage', 'splashtexton', 'splashtextoff', 'splitpath', 'sqrt', 'statusbargettext', 'statusbarwait', 'stringgetpos', 'strget', 'stringcasesense', 'stringleft', 'stringlen', 'stringlower', 'stringmid', 'stringreplace', 'stringright', 'stringsplit', 'stringtrimleft', 'stringtrimright', 'stringupper', 'strlen', 'strput', 'strreplace', 'strsplit', 'substr', 'suspend', 'switch', 'sysget', 'tan', 'thread', 'throw', 'tooltip', 'transform', 'traytip', 'trim', 'try', 'tv_add', 'tv_delete', 'tv_get', 'tv_getchild', 'tv_getcount', 'tv_getnext', 'tv_getparent', 'tv_getprev', 'tv_getselection', 'tv_gettext', 'tv_modify', 'tv_setimagelist', 'until', 'urldownloadtofile', 'varsetcapacity', 'while-loop', 'winactivatebottom', 'winactivate', 'winclose', 'winexist', 'wingetactivestats', 'wingetactivetitle', 'wingetclass', 'wingettext', 'wingetpos', 'wingettitle', 'winget', 'winhide', 'winkill', 'winmaximize', 'winmenuselectitem', 'winminimizeallundo', 'winminimizeall', 'winminimize', 'winmove', 'winrestore', 'winset', 'winsettitle', 'winshow', 'winwaitactive', 'winwaitnotactive', 'winwaitclose', 'winwait', 'clipboardtimeout', 'clipboardtimeout', 'commentflag', 'delimiter', 'derefchar', 'errorstdout', 'escapechar', 'hotkeyinterval', 'hotkeymodifiertimeout', 'hotstring', 'if', 'iftimeout', 'ifwinactive', 'ifwinnotactive', 'ifwinexist', 'ifwinnotexist', 'include', 'includeagain', 'inputlevel', 'installkeybdhook', 'installmousehook', 'keyhistory', 'ltrim', 'maxhotkeysperinterval', 'maxmem', 'maxthreads', 'maxthreadsbuffer', 'maxthreadsperhotkey', 'menumaskkey', 'noenv', 'notrayicon', 'persistent', 'requires', 'singleinstance', 'usehook', 'warn', 'winactivateforce', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
			let txt = `	string${r + 1} := StrReplace(string${r}, \"${characters[e]}\", \"¢${rand}¢\")\n`
			let fp3 = "./encode.ahk"
			fs.appendFile(fp3, txt, function(error) {
				if (error) return log.error(error);
			})
			let txt2 = `	string${r + 1} := StrReplace(string${r}, \"¢${rand}¢\", \"${characters[e]}\")\n`
			let fp4 = "./decode.ahk"
			fs.appendFile(fp4, txt2, function(error) {
				if (error) return log.error(error);
			})
			r++
			await freeze(10);
		}
	}
	setTimeout(finish1, 8355);
	function finish1() {
		let txt1 = `	FileDelete,%type2%\n	FileAppend,%string${r}%,output/output.txt\n	FileDelete,temp/script.txt\n	FileRemoveDir,temp\n}\nExitApp`
		let fp77 = "./encode.ahk"
		fs.appendFile(fp77, txt1, function(error) {
			if (error) return log.error(error);
		})
		let fp88 = "./decode.ahk"
		fs.appendFile(fp88, txt1, function(error) {
			if (error) return log.error(error);
		})
	}
}