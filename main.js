const _0x51fd09 = _0x1405;
(function(_0x37842c, _0x40f790) {
  const _0x3c0367 = _0x1405,
    _0x4a66d4 = _0x37842c();
  while (!![]) {
    try {
      const _0x4d0521 = parseInt(_0x3c0367(0x182)) / 0x1 + -parseInt(_0x3c0367(0x16e)) / 0x2 * (-parseInt(_0x3c0367(0x176)) / 0x3) + parseInt(_0x3c0367(0x1c9)) / 0x4 * (parseInt(_0x3c0367(0x168)) / 0x5) + -parseInt(_0x3c0367(0x1a8)) / 0x6 * (parseInt(_0x3c0367(0x1b9)) / 0x7) + parseInt(_0x3c0367(0x1da)) / 0x8 + -parseInt(_0x3c0367(0x196)) / 0x9 * (parseInt(_0x3c0367(0x171)) / 0xa) + -parseInt(_0x3c0367(0x195)) / 0xb;
      if (_0x4d0521 === _0x40f790) break;
      else _0x4a66d4['push'](_0x4a66d4['shift']());
    } catch (_0x69aec3) {
      _0x4a66d4['push'](_0x4a66d4['shift']());
    }
  }
}(_0x2898, 0x59ab9), require(_0x51fd09(0x169)));
const {
  useSingleFileAuthState,
  makeInMemoryStore,
  makeWALegacySocket,
  DisconnectReason
} = require('@adiwajshing/baileys'), WebSocket = require('ws'), path = require(_0x51fd09(0x194)), pino = require(_0x51fd09(0x1cd)), fs = require('fs'), yargs = require('yargs/yargs'), cp = require(_0x51fd09(0x1c0)), _ = require(_0x51fd09(0x1c5)), syntaxerror = require('syntax-error'), os = require('os'), moment = require('moment-timezone'), time = moment['tz'](_0x51fd09(0x1d2))[_0x51fd09(0x18b)](_0x51fd09(0x189)), {
  color
} = require('./lib/color');
let simple = require(_0x51fd09(0x1a4));

function _0x1405(_0x321d2a, _0x247fe9) {
  const _0x289841 = _0x2898();
  return _0x1405 = function(_0x1405fa, _0x53ae07) {
    _0x1405fa = _0x1405fa - 0x162;
    let _0x4c7352 = _0x289841[_0x1405fa];
    return _0x4c7352;
  }, _0x1405(_0x321d2a, _0x247fe9);
}
var low;
try {
  low = require(_0x51fd09(0x197));
} catch (_0x4c5e5c) {
  low = require(_0x51fd09(0x1bf));
}
const {
  Low,
  JSONFile
} = low, mongoDB = require(_0x51fd09(0x1ab));
global[_0x51fd09(0x1a7)] = (_0x14f135, _0x73e06a = '/', _0x3054de = {}, _0x423a13) => (_0x14f135 in global[_0x51fd09(0x163)] ? global[_0x51fd09(0x163)][_0x14f135] : _0x14f135) + _0x73e06a + (_0x3054de || _0x423a13 ? '?' + new URLSearchParams(Object[_0x51fd09(0x18e)]({
  ..._0x3054de,
  ..._0x423a13 ? {
    [_0x423a13]: global[_0x51fd09(0x175)][_0x14f135 in global[_0x51fd09(0x163)] ? global[_0x51fd09(0x163)][_0x14f135] : _0x14f135]
  } : {}
})) : ''), global[_0x51fd09(0x19c)] = {
  'start': new Date()
};
const PORT = process[_0x51fd09(0x1e8)]['PORT'] || 0xbb8;
global[0x51fd09(0x1ac)] = new Object(yargs(process[_0x51fd09(0x199)][_0x51fd09(0x1c6)](0x2))['exitProcess'](![])[_0x51fd09(0x18a)]()), global[_0x51fd09(0x180)] = new RegExp('^[' + (opts['prefix'] || _0x51fd09(0x165))[_0x51fd09(0x162)](/[|\\{}()[\]^$+*?.\-\^]/g, '\x5c$&') + ']'), global['db'] = new Low(/https?:\/\// [_0x51fd09(0x1c4)](opts['db'] || '') ? new cloudDBAdapter(opts['db']) : /mongodb/i ['test'](opts['db']) ? new mongoDB(opts['db']) : new JSONFile((opts[''][0x0] ? opts[''][0x0] + '' : '') + 'database.json')), global[_0x51fd09(0x1bc)] = global['db'], global[_0x51fd09(0x173)] = async function loadDatabase() {
  const _0x59048e = _0x51fd09;
  if (global['db']['READ']) return new Promise(_0x54cbe0 => setInterval(function() {
    const _0x2b8700 = _0x1405;
    !global['db'][_0x2b8700(0x186)] ? (clearInterval(this), _0x54cbe0(global['db'][_0x2b8700(0x1cc)] == null ? global[_0x2b8700(0x173)]() : global['db'][_0x2b8700(0x1cc)])) : null;
  }, 0x1 * 0x3e8));
  if (global['db'][_0x59048e(0x1cc)] !== null) return;
  global['db'][_0x59048e(0x186)] = !![], await global['db'][_0x59048e(0x19e)](), global['db'][_0x59048e(0x186)] = ![], global['db'][_0x59048e(0x1cc)] = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...global['db'][_0x59048e(0x1cc)] || {}
  }, global['db'][_0x59048e(0x1e5)] = _[_0x59048e(0x1e5)](global['db'][_0x59048e(0x1cc)]);
}, loadDatabase(), global[0x51fd09(0x1b2)] = (opts[''][0x0] || _0x51fd09(0x18f)) + _0x51fd09(0x1b0);
const {
  state,
  saveState
} = useSingleFileAuthState(global[_0x51fd09(0x1b2)]), logger = pino({
  'transport': {
    'target': _0x51fd09(0x1a5),
    'options': {
      'colorize': !![],
      'levelFirst': !![],
      'ignore': _0x51fd09(0x19b),
      'translateTime': !![]
    }
  }
})[_0x51fd09(0x1e7)]({
  'class': _0x51fd09(0x1d7)
}), connectionOptions = {
  'version': [0x2, 0x8aa, 0x8],
  'printQRInTerminal': !![],
  'auth': state,
  'logger': pino({
    'level': 'silent'
  })
};
global[_0x51fd09(0x166)] = simple[_0x51fd09(0x16c)](connectionOptions), conn[_0x51fd09(0x16b)] = ![];
!opts['test'] && setInterval(async () => {
  const _0x138b1c = _0x51fd09;
  if (global['db'][_0x138b1c(0x1cc)]) await global['db'][_0x138b1c(0x178)]();
  try {
    clearTmp();
  } catch (_0x54a30f) {
    console[_0x138b1c(0x1ad)](_0x54a30f);
  }
}, 0x3c * 0x3e8);
if (opts[_0x51fd09(0x1c2)]) require('./server')(global['conn'], PORT);

function _0x2898() {
  const _0x27e817 = ['API', '2562BOtCQD', 'reloadHandler', 'length', './lib/mongoDB', 'opts', 'error', 'handler', 'onParticipantsUpdate', '.data.json', 'cache', 'authFile', '-frames:v', 'Hai,\x20kak\x20@user\x20👋\x0aSelamat\x20datang\x20di\x20grup\x20@subject\x20😅\x0aJangan\x20lupa\x20intro\x20kak\x20😅\x0a\x0a*Nama:\x0a*Umur:\x0a*Askot:\x0a\x0a*Deskripsi\x20Grup:\x0a\x0a@desc\x0a\x0aMade\x20by\x20❤️', 'message.delete', 'statusCode', 'push', 'green', '693Dygbaf', 'catch', 'join', 'DATABASE', 'requiring\x20new\x20plugin\x20\x27', 'connect', './lib/lowdb', 'child_process', 'credsUpdate', 'server', 'syntax\x20error\x20while\x20loading\x20\x27', 'test', 'lodash', 'slice', 'localeCompare', 'welcome', '4cASsoZ', '6285869074622@s.whatsapp.net', 'messages.upsert', 'data', 'pino', 'output', 'watch', 'warn', 'plugins', 'Asia/Jakarta', 'logger', 'participantsUpdate', 'ffmpegWebp', 'statSync', 'baileys', 'Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)', 'connection.update', '1867824mSGjnl', 'Connecting...', 'off', './tmp', 'webp', '[STATUS]', 'find', 'sort', 'log', 'then', 're\x20-\x20require\x20plugin\x20\x27', 'chain', 'onDelete', 'child', 'env', 'bind', 'replace', 'APIs', 'ffprobe', 'â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\x5c-', 'conn', 'bye', '2991995OIBYni', './config', 'magick', 'isInit', 'makeWASocket', 'deleted\x20plugin\x20\x27', '10fbpRHf', 'keys', 'mtimeMs', '190fnwZZA', 'Quick\x20Test\x20Done', 'loadDatabase', './handler', 'APIKeys', '164133uNBwql', 'delete', 'write', 'Selamat\x20tinggal\x20@user\x20👋', 'unlinkSync', '-filter_complex', 'group-participants.update', '-hide_banner', 'Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)', 'info', 'prefix', 'stringify', '588993AwqUDj', '--version', 'white', 'readdirSync', 'READ', '@user\x20sekarang\x20bukan\x20admin!', 'readyState', 'HH:mm:ss', 'parse', 'format', 'race', 'reload', 'entries', 'session', 'support', 'aqua', 'map', 'spawn', 'path', '13040214zOORdc', '47079iRxMcq', 'lowdb', 'readFileSync', 'argv', 'tmpdir', 'hostname', 'timestamp', 'now', 'read', 'color', 'connectionUpdate', 'filter', 'existsSync', 'ffmpeg', './lib/simple', 'pino-pretty', 'Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)'];
  _0x2898 = function() {
    return _0x27e817;
  };
  return _0x2898();
}

function clearTmp() {
  const _0x120527 = _0x51fd09,
    0x55b0c5 = [os[_0x120527(0x19a)](), path[_0x120527(0x1bb)](_dirname, _0x120527(0x1dd))],
    _0x209167 = [];
  _0x55b0c5['forEach'](_0x521263 => fs['readdirSync'](_0x521263)['forEach'](_0x1f7ea2 => _0x209167[_0x120527(0x1b7)](path[_0x120527(0x1bb)](_0x521263, _0x1f7ea2)))), _0x209167['map'](_0x2124dc => (stats = fs[_0x120527(0x1d6)](_0x2124dc), stats['isFile']() && Date[_0x120527(0x19d)]() - stats[_0x120527(0x170)] >= 0x3e8 * 0x3c * 0x3 ? fs[_0x120527(0x17a)](_0x2124dc) : null));
}
async function connectionUpdate(_0x26978a) {
  const _0x13d1f3 = _0x51fd09,
    {
      connection: _0x2e3e60,
      lastDisconnect: _0x45cb6c,
      isNewLogin: _0x5733cc
    } = _0x26978a;
  if (_0x5733cc) conn[_0x13d1f3(0x16b)] = !![];
  _0x45cb6c && _0x45cb6c[_0x13d1f3(0x1ad)] && _0x45cb6c[_0x13d1f3(0x1ad)][_0x13d1f3(0x1ce)] && _0x45cb6c['error'][_0x13d1f3(0x1ce)][_0x13d1f3(0x1b6)] !== DisconnectReason['loggedOut'] && conn['ws'][_0x13d1f3(0x188)] !== WebSocket['CONNECTING'] && (console[_0x13d1f3(0x1e2)](global['reloadHandler'](!![])), global['timestamp'][_0x13d1f3(0x1be)] = new Date());
  if (global['db']['data'] == null) await loadDatabase();
  console[_0x13d1f3(0x1e2)](JSON[_0x13d1f3(0x181)](_0x26978a, null, 0x4));
  if (_0x26978a['receivedPendingNotifications']) conn['sendMessage'](_0x13d1f3(0x1ca), {
    'text': 'Successfully\x20connected\x20by\x20Aine'
  });
}
process['on']('uncaughtException', console[_0x51fd09(0x1ad)]);
let isInit = !![],
  handler = require('./handler');
global[_0x51fd09(0x1a9)] = function(_0x5c09b2) {
  const _0x16e7d6 = _0x51fd09;
  let _0x1499e3 = require(_0x16e7d6(0x174));
  if (Object[_0x16e7d6(0x16f)](_0x1499e3 || {})[_0x16e7d6(0x1aa)]) handler = _0x1499e3;
  if (_0x5c09b2) {
    try {
      global['conn']['ws']['close']();
    } catch {}
    global[_0x16e7d6(0x166)] = {
      ...global[_0x16e7d6(0x166)],
      ...simple[_0x16e7d6(0x16c)](connectionOptions)
    };
  }
  return !isInit && (conn['ev'][_0x16e7d6(0x1dc)](_0x16e7d6(0x1cb), conn[_0x16e7d6(0x1ae)]), conn['ev']['off'](_0x16e7d6(0x17c), conn[_0x16e7d6(0x1af)]), conn['ev'][_0x16e7d6(0x1dc)](_0x16e7d6(0x1b5), conn[_0x16e7d6(0x1e6)]), conn['ev'][_0x16e7d6(0x1dc)](_0x16e7d6(0x1d9), conn['connectionUpdate']), conn['ev']['off']('creds.update', conn[_0x16e7d6(0x1c1)])), conn[_0x16e7d6(0x1c8)] = _0x16e7d6(0x1b4), conn[_0x16e7d6(0x167)] = _0x16e7d6(0x179), conn['spromote'] = '@user\x20sekarang\x20admin!', conn['sdemote'] = _0x16e7d6(0x187), conn[_0x16e7d6(0x1ae)] = handler[_0x16e7d6(0x1ae)][_0x16e7d6(0x1e9)](conn), conn[_0x16e7d6(0x1af)] = handler[_0x16e7d6(0x1d4)][_0x16e7d6(0x1e9)](conn), conn[_0x16e7d6(0x1e6)] = handler[_0x16e7d6(0x177)][_0x16e7d6(0x1e9)](conn), conn[_0x16e7d6(0x1a0)] = connectionUpdate[_0x16e7d6(0x1e9)](conn), conn[_0x16e7d6(0x1c1)] = saveState[_0x16e7d6(0x1e9)](conn), conn['ev']['on'](_0x16e7d6(0x1cb), conn['handler']), conn['ev']['on'](_0x16e7d6(0x17c), conn[_0x16e7d6(0x1af)]), conn['ev']['on']('message.delete', conn[_0x16e7d6(0x1e6)]), conn['ev']['on'](_0x16e7d6(0x1d9), conn['connectionUpdate']), conn['ev']['on']('creds.update', conn[_0x16e7d6(0x1c1)]), isInit = ![], !![];
};
let pluginFolder = path[0x51fd09(0x1bb)](_dirname, 'plugins'),
  pluginFilter = _0x5c4e04 => /\.js$/ ['test'](_0x5c4e04);
global[_0x51fd09(0x1d1)] = {};
for (let filename of fs[_0x51fd09(0x185)](pluginFolder)[_0x51fd09(0x1a1)](pluginFilter)) {
  try {
    global[_0x51fd09(0x1d1)][filename] = require(path[_0x51fd09(0x1bb)](pluginFolder, filename));
  } catch (_0x2f7cf9) {
    conn[_0x51fd09(0x1d3)][_0x51fd09(0x1ad)](_0x2f7cf9), delete global['plugins'][filename];
  }
}
console['log'](Object[_0x51fd09(0x16f)](global[_0x51fd09(0x1d1)])), global[_0x51fd09(0x18d)] = (_0x583c63, _0x5239f8) => {
  const _0x474daa = _0x51fd09;
  if (pluginFilter(_0x5239f8)) {
    let _0x393120 = path[_0x474daa(0x1bb)](pluginFolder, _0x5239f8);
    if (_0x393120 in require['cache']) {
      delete require[_0x474daa(0x1b1)][_0x393120];
      if (fs[_0x474daa(0x1a2)](_0x393120)) conn[_0x474daa(0x1d3)][_0x474daa(0x17f)](_0x474daa(0x1e4) + _0x5239f8 + '\x27');
      else return conn[_0x474daa(0x1d3)][_0x474daa(0x1d0)](_0x474daa(0x16d) + _0x5239f8 + '\x27'), delete global[_0x474daa(0x1d1)][_0x5239f8];
    } else conn['logger'][_0x474daa(0x17f)](_0x474daa(0x1bd) + _0x5239f8 + '\x27');
    let _0x3c2972 = syntaxerror(fs[_0x474daa(0x198)](_0x393120), _0x5239f8);
    if (_0x3c2972) conn[_0x474daa(0x1d3)][_0x474daa(0x1ad)](_0x474daa(0x1c3) + _0x5239f8 + '\x27\x0a' + _0x3c2972);
    else try {
      global['plugins'][_0x5239f8] = require(_0x393120);
    } catch (_0x33893e) {
      conn['logger'][_0x474daa(0x1ad)]('error\x20require\x20plugin\x20\x27' + _0x5239f8 + '\x0a' + _0x33893e + '\x27');
    } finally {
      global[_0x474daa(0x1d1)] = Object['fromEntries'](Object['entries'](global['plugins'])[_0x474daa(0x1e1)](([_0x50cc7d], [_0x43b3bc]) => _0x50cc7d[_0x474daa(0x1c7)](_0x43b3bc)));
    }
  }
}, Object['freeze'](global[0x51fd09(0x18d)]), fs[_0x51fd09(0x1cf)](path[_0x51fd09(0x1bb)](_dirname, _0x51fd09(0x1d1)), global[_0x51fd09(0x18d)]), global[_0x51fd09(0x1a9)]();
async function _quickTest() {
  const _0x503546 = _0x51fd09;
  let _0x420cca = await Promise['all']([cp[_0x503546(0x193)](_0x503546(0x1a3)), cp[_0x503546(0x193)](_0x503546(0x164)), cp[_0x503546(0x193)]('ffmpeg', [_0x503546(0x17d), '-loglevel', 'error', _0x503546(0x17b), _0x503546(0x19f), _0x503546(0x1b3), '1', '-f', _0x503546(0x1de), '-']), cp[_0x503546(0x193)]('convert'), cp[_0x503546(0x193)](_0x503546(0x16a)), cp[_0x503546(0x193)]('gm'), cp[_0x503546(0x193)](_0x503546(0x1e0), [_0x503546(0x183)])][_0x503546(0x192)](_0x11f4b7 => {
      const _0x157052 = _0x503546;
      return Promise[_0x157052(0x18c)]([new Promise(_0x33cbed => {
        _0x11f4b7['on']('close', _0x33d039 => {
          _0x33cbed(_0x33d039 !== 0x7f);
        });
      }), new Promise(_0x49d200 => {
        const _0x1a5ad7 = _0x157052;
        _0x11f4b7['on'](_0x1a5ad7(0x1ad), _0x319e62 => _0x49d200(![]));
      })]);
    })),
    [_0x37328f, _0x1ee20a, _0x408383, _0x566af5, _0x20cd21, _0x3b2a25, _0x54ea0f] = _0x420cca;
  console[_0x503546(0x1e2)](_0x420cca);
  let _0x1455d7 = global[_0x503546(0x190)] = {
    'ffmpeg': _0x37328f,
    'ffprobe': _0x1ee20a,
    'ffmpegWebp': _0x408383,
    'convert': _0x566af5,
    'magick': _0x20cd21,
    'gm': _0x3b2a25,
    'find': _0x54ea0f
  };
  Object['freeze'](global[_0x503546(0x190)]);
  if (!_0x1455d7['ffmpeg']) conn[_0x503546(0x1d3)][_0x503546(0x1d0)](_0x503546(0x1d8));
  if (_0x1455d7[_0x503546(0x1a3)] && !_0x1455d7[_0x503546(0x1d5)]) conn[_0x503546(0x1d3)][_0x503546(0x1d0)](_0x503546(0x1a6));
  if (!_0x1455d7['convert'] && !_0x1455d7[_0x503546(0x16a)] && !_0x1455d7['gm']) conn[_0x503546(0x1d3)]['warn'](_0x503546(0x17e));
}
_quickTest()[_0x51fd09(0x1e3)](() => conn[_0x51fd09(0x1d3)][_0x51fd09(0x17f)](_0x51fd09(0x172)))[_0x51fd09(0x1ba)](console[_0x51fd09(0x1ad)]), console[_0x51fd09(0x1e2)](color(time, _0x51fd09(0x184)), color(_0x51fd09(0x1df), _0x51fd09(0x1b8)), color(_0x51fd09(0x1db), _0x51fd09(0x191)));