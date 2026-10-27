WidgetMetadata = {
  id: "https://t.me/Nzmgs?rev=20260726b",
  title: "聚合实时榜单",
  description: "聚合各平台实时榜单数据",
  author: "TG@ZenMoFiShi",
  site: "https://t.me/Nzmgs",
  version: "1.4.4",
  requiredVersion: "0.0.1",
  modules: [
    { title: "Netflix新片榜", description: "实时获取 Netflix 新片榜真实内容", requiresWebView: false, functionName: "getNetflixNew", cacheDuration: 120, params: [] },
    { title: "Disney+新片榜", description: "实时获取 Disney+ 新片榜真实内容", requiresWebView: false, functionName: "getDisneyNew", cacheDuration: 120, params: [] },
    { title: "Apple TV+新片榜", description: "实时获取 Apple TV+ 新片榜真实内容", requiresWebView: false, functionName: "getAppleTvNew", cacheDuration: 120, params: [] },
    { title: "HBOmax新片榜", description: "实时获取 HBOmax 新片榜真实内容", requiresWebView: false, functionName: "getHboNew", cacheDuration: 120, params: [] },
    { title: "prime video新片榜", description: "实时获取 prime video 新片榜真实内容", requiresWebView: false, functionName: "getPrimeVideoNew", cacheDuration: 120, params: [] },
    { title: "本周国剧排行榜", description: "实时获取本周国剧排行榜真实内容", requiresWebView: false, functionName: "getWeeklyDomesticDrama", cacheDuration: 120, params: [] },
    { title: "本周美剧排行榜", description: "实时获取本周美剧排行榜真实内容", requiresWebView: false, functionName: "getWeeklyUSDrama", cacheDuration: 120, params: [] },
    { title: "本周动漫排行榜", description: "实时获取本周动漫排行榜真实内容", requiresWebView: false, functionName: "getWeeklyAnime", cacheDuration: 120, params: [] },
    { title: "本周电影排行榜", description: "实时获取本周电影排行榜真实内容", requiresWebView: false, functionName: "getWeeklyMovie", cacheDuration: 120, params: [] },
    { title: "本周韩剧排行榜", description: "实时获取本周韩剧排行榜真实内容", requiresWebView: false, functionName: "getWeeklyKDrama", cacheDuration: 120, params: [] },
    { title: "本周英剧排行榜", description: "实时获取本周英剧排行榜真实内容", requiresWebView: false, functionName: "getWeeklyUKDrama", cacheDuration: 120, params: [] },
    { title: "本周日剧排行榜", description: "实时获取本周日剧排行榜真实内容", requiresWebView: false, functionName: "getWeeklyJDrama", cacheDuration: 120, params: [] },
    { title: "本周泰剧排行榜", description: "实时获取本周泰剧排行榜真实内容", requiresWebView: false, functionName: "getWeeklyThaiDrama", cacheDuration: 120, params: [] },
    { title: "本周综艺排行榜", description: "实时获取本周综艺排行榜真实内容", requiresWebView: false, functionName: "getWeeklyVariety", cacheDuration: 120, params: [] },
    { title: "本周纪录片排行榜", description: "实时获取本周纪录片排行榜真实内容", requiresWebView: false, functionName: "getWeeklyDocumentary", cacheDuration: 120, params: [] },
    { id: "loadResource", title: "瓜子影视播放源", description: "返回瓜子影视播放源", functionName: "loadResource", type: "stream", cacheDuration: 0, params: [] }
  ]
};

const USER_AGENT = "Phenomara/1 CFNetwork/3896.200.61 Darwin/27.2.0";
const PLAY_USER_AGENT = "AppleCoreMedia/1.0.0.24A5390f (iPhone; U; CPU OS 27_0 like Mac OS X; zh_cn)";

const APP_CONFIG = {
  baseURL: "",
  baseURLs: [
    "https://api.sef5w7.com",
    "https://api.mxtxqe.com",
    "https://sdapi.u4gdp3.com",
    "https://sdapi.4zu76s.com",
    "https://sdapi.re3k7n.com",
    "https://api.8b42w67.com",
    "https://api.4pmyvfz.com",
    "https://sdapi.s3432pr.com",
    "https://sdapi.q5sn3gk.com",
    "https://apinew.qwepe.com"
  ],
  thirdPartyDomainURL: "https://raw.githubusercontent.com/tdopops/jiafeimao/main/0103/jfm-ios-prod.json",
  thirdPartyAes: { key: "m4nQCskrndxTCULX", iv: "92ilxgNlcweTTfvG" },
  versionCode: "2026033001",
  apiVersion: "3.0.6.3",
  productnumber: "1",
  platform: "2",
  packageName: "com.jfm202203",
  code: "GZ0520",
  requestAes: { key: "aaaabbbbccccdddd", iv: "1111222233334444" },
  requestPublicKey: "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCWJafJAdhTPWMrNpbmlk672o06smRwxe1LoHjy2XbLRaKIXfQJWgJTBhLH4qUIPMmpnIKQYqjMLTrJhwG5Bwsd3/15YHdL7eWad7lpomF5doOQmmexK2+gSBHmCOhXeumhrOD63vx8ERepxR6UCxTi5b5fZmqMdbLk45IW39mn6wIDAQAB-----END PUBLIC KEY-----",
  responsePrivateKey: "-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQCM+iJdCeYFydG3DiFG0Ajr6IS0NENW1Bb2MSwrUdvLiI7nXHG+zZZuyqewVUPUPQRdEvhSMCyTKjjX9QajRJ1Uv+xVnsOmxEQQIhAIUa1dsXsN30nLGA+VuNHF7J1SE+Vh/46duR/0Q+Iq+3esSYlb3/PdN4wgK5ab+jKeR0JA2wIDAQABAoGAbst/CkPnRZFRgl5WhMKm4FDDSqTwb2MMELygjAMvjIxsUyRyOJR2r+gRViIMxtaVgViRVHaL8bTzK7ZkWxhn1LEM7RpWB1zjKFvXxE+dzxPrYY/Qw7dobzAAMyQhZ2+7PTO/plUYOxNgZPUzsvcoI44M3HRy1yFxGbF9z9LiMDECQQDTs5eXJnjEN1JmqbBotFw0III0/se/r0oDv4AvJdbxl64t64dZI2tS3BO7NL3OAOzf+WL14Pf2uADFDZz9kzHPAkEAqnn7TBlZXc6L70TnCaggMAN9C+2Iuik2Q2dePfTBI9IyJiC54k4G66iT+kQ5F6T4MGWf6jb7xUuUTk6AHck/NQJBALk+5oAh7v0rt5QUGkSUxjXq2GUNKLbn6Ok8sisPfnVrF8Qg3A+4+ZnI8A8ZSJkxoBUgwWKMWA5w1mOX1O7i1WsCQHV0qgHajUomnx9x18U9gz/Rh3yKYmPxNSPnunTxh4kIr+i5L5mOrRH9CkeqbbOuxBmES1PyIjHjSwFQ8NCU8ekCQQCwb4PirUbcqeHbjN0Nv6vm5pqsgJ29GhA9qiy2l+1Wb637STe9L2mEt7ImUd9FGy7k3Nnsn5eou/t2SV3OkGaU-----END RSA PRIVATE KEY-----",
  iosRequestSalt: "&ffddffujhjhgvdvdvdz4Y!s!2br",
  token: "",
  tokenId: "",
  deviceId: "",
  ip: "",
  lang: "zh_cn"
};

let __authPromise = null;
let __domainPromise = null;
let __domainsReady = false;
let __activeDomainIndex = 0;
const AUTH_STORAGE_KEY = "gxf.auth.v2";
const DOMAIN_STORAGE_KEY = "gxf.domains.v2";
const MEDIA_BINDING_PREFIX = "gxf.media.v3.";
const __tmdbMovieDetailCache = {};

const GxCrypto = (function () {
  const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  function utf8Encode(str) {
    const s = String(str == null ? "" : str);
    const out = [];
    for (let i = 0; i < s.length; i++) {
      let c = s.charCodeAt(i);
      if (c >= 0xd800 && c <= 0xdbff && i + 1 < s.length) {
        const d = s.charCodeAt(i + 1);
        if (d >= 0xdc00 && d <= 0xdfff) {
          c = 0x10000 + ((c - 0xd800) << 10) + (d - 0xdc00);
          i++;
        }
      }
      if (c < 0x80) out.push(c);
      else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
      else if (c < 0x10000) out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
      else out.push(0xf0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    }
    return out;
  }

  function utf8Decode(bytes) {
    let out = "";
    let i = 0;
    while (i < bytes.length) {
      const a = bytes[i++];
      let c;
      if (a < 0x80) c = a;
      else if (a >= 0xf0) c = ((a & 7) << 18) | ((bytes[i++] & 63) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
      else if (a >= 0xe0) c = ((a & 15) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
      else if (a >= 0xc0) c = ((a & 31) << 6) | (bytes[i++] & 63);
      else c = 0xfffd;
      if (c > 0xffff) {
        c -= 0x10000;
        out += String.fromCharCode(0xd800 + (c >> 10), 0xdc00 + (c & 1023));
      } else {
        out += String.fromCharCode(c);
      }
    }
    return out;
  }

  function hexToBytes(hex) {
    const h = String(hex || "").replace(/[^0-9a-f]/gi, "");
    const out = new Array(h.length >> 1);
    for (let i = 0; i < out.length; i++) out[i] = parseInt(h.substr(i * 2, 2), 16);
    return out;
  }

  function bytesToHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.length; i++) out += (bytes[i] < 16 ? "0" : "") + bytes[i].toString(16);
    return out;
  }

  function base64ToBytes(text) {
    const s = String(text || "").replace(/[^A-Za-z0-9+/]/g, "");
    const out = [];
    let buf = 0;
    let bits = 0;
    for (let i = 0; i < s.length; i++) {
      buf = (buf << 6) | B64.indexOf(s.charAt(i));
      bits += 6;
      if (bits >= 8) {
        bits -= 8;
        out.push((buf >> bits) & 255);
      }
    }
    return out;
  }

  function bytesToBase64(bytes) {
    let out = "";
    for (let i = 0; i < bytes.length; i += 3) {
      const a = bytes[i];
      const b = i + 1 < bytes.length ? bytes[i + 1] : 0;
      const c = i + 2 < bytes.length ? bytes[i + 2] : 0;
      const n = (a << 16) | (b << 8) | c;
      out += B64.charAt((n >> 18) & 63) + B64.charAt((n >> 12) & 63);
      out += i + 1 < bytes.length ? B64.charAt((n >> 6) & 63) : "=";
      out += i + 2 < bytes.length ? B64.charAt(n & 63) : "=";
    }
    return out;
  }

  const SBOX = new Array(256);
  const INV_SBOX = new Array(256);
  (function () {
    let p = 1;
    let q = 1;
    do {
      p = p ^ ((p << 1) & 255) ^ (p & 128 ? 0x1b : 0);
      q ^= q << 1;
      q ^= q << 2;
      q ^= q << 4;
      q &= 255;
      if (q & 128) q ^= 0x09;
      const x = q ^ ((q << 1 | q >> 7) & 255) ^ ((q << 2 | q >> 6) & 255) ^ ((q << 3 | q >> 5) & 255) ^ ((q << 4 | q >> 4) & 255) ^ 0x63;
      SBOX[p] = x;
      INV_SBOX[x] = p;
    } while (p !== 1);
    SBOX[0] = 0x63;
    INV_SBOX[0x63] = 0;
  })();

  function xtime(a) { return ((a << 1) ^ (a & 128 ? 0x1b : 0)) & 255; }
  function gmul(a, b) {
    let r = 0;
    while (b) {
      if (b & 1) r ^= a;
      a = xtime(a);
      b >>= 1;
    }
    return r;
  }

  function expandKey(key) {
    const nk = key.length >> 2;
    const nr = nk + 6;
    const w = key.slice();
    let rcon = 1;
    for (let i = nk; i < 4 * (nr + 1); i++) {
      let t = w.slice((i - 1) * 4, i * 4);
      if (i % nk === 0) {
        t = [SBOX[t[1]] ^ rcon, SBOX[t[2]], SBOX[t[3]], SBOX[t[0]]];
        rcon = xtime(rcon);
      } else if (nk > 6 && i % nk === 4) {
        t = t.map(v => SBOX[v]);
      }
      for (let j = 0; j < 4; j++) w.push(w[(i - nk) * 4 + j] ^ t[j]);
    }
    return { w, nr };
  }

  function encryptBlock(s, ks) {
    const { w, nr } = ks;
    for (let i = 0; i < 16; i++) s[i] ^= w[i];
    for (let r = 1; r <= nr; r++) {
      for (let i = 0; i < 16; i++) s[i] = SBOX[s[i]];
      let t = s[1]; s[1] = s[5]; s[5] = s[9]; s[9] = s[13]; s[13] = t;
      t = s[2]; s[2] = s[10]; s[10] = t; t = s[6]; s[6] = s[14]; s[14] = t;
      t = s[15]; s[15] = s[11]; s[11] = s[7]; s[7] = s[3]; s[3] = t;
      if (r < nr) {
        for (let c = 0; c < 16; c += 4) {
          const a0 = s[c], a1 = s[c + 1], a2 = s[c + 2], a3 = s[c + 3];
          const x = a0 ^ a1 ^ a2 ^ a3;
          s[c] ^= x ^ xtime(a0 ^ a1);
          s[c + 1] ^= x ^ xtime(a1 ^ a2);
          s[c + 2] ^= x ^ xtime(a2 ^ a3);
          s[c + 3] ^= x ^ xtime(a3 ^ a0);
        }
      }
      for (let i = 0; i < 16; i++) s[i] ^= w[r * 16 + i];
    }
    return s;
  }

  function decryptBlock(s, ks) {
    const { w, nr } = ks;
    for (let i = 0; i < 16; i++) s[i] ^= w[nr * 16 + i];
    for (let r = nr - 1; r >= 0; r--) {
      let t = s[13]; s[13] = s[9]; s[9] = s[5]; s[5] = s[1]; s[1] = t;
      t = s[2]; s[2] = s[10]; s[10] = t; t = s[6]; s[6] = s[14]; s[14] = t;
      t = s[3]; s[3] = s[7]; s[7] = s[11]; s[11] = s[15]; s[15] = t;
      for (let i = 0; i < 16; i++) s[i] = INV_SBOX[s[i]];
      for (let i = 0; i < 16; i++) s[i] ^= w[r * 16 + i];
      if (r > 0) {
        for (let c = 0; c < 16; c += 4) {
          const a0 = s[c], a1 = s[c + 1], a2 = s[c + 2], a3 = s[c + 3];
          s[c] = gmul(a0, 14) ^ gmul(a1, 11) ^ gmul(a2, 13) ^ gmul(a3, 9);
          s[c + 1] = gmul(a0, 9) ^ gmul(a1, 14) ^ gmul(a2, 11) ^ gmul(a3, 13);
          s[c + 2] = gmul(a0, 13) ^ gmul(a1, 9) ^ gmul(a2, 14) ^ gmul(a3, 11);
          s[c + 3] = gmul(a0, 11) ^ gmul(a1, 13) ^ gmul(a2, 9) ^ gmul(a3, 14);
        }
      }
    }
    return s;
  }

  function aesCbcEncrypt(data, key, iv) {
    const ks = expandKey(key);
    const pad = 16 - (data.length % 16);
    const src = data.concat(new Array(pad).fill(pad));
    const out = [];
    let prev = iv.slice();
    for (let i = 0; i < src.length; i += 16) {
      const block = src.slice(i, i + 16).map((v, j) => v ^ prev[j]);
      prev = encryptBlock(block, ks);
      for (let j = 0; j < 16; j++) out.push(prev[j]);
    }
    return out;
  }

  function aesCbcDecrypt(data, key, iv) {
    if (!data.length || data.length % 16) throw new Error("AES 密文长度错误");
    const ks = expandKey(key);
    const out = [];
    let prev = iv.slice();
    for (let i = 0; i < data.length; i += 16) {
      const block = data.slice(i, i + 16);
      const plain = decryptBlock(block.slice(), ks);
      for (let j = 0; j < 16; j++) out.push(plain[j] ^ prev[j]);
      prev = block;
    }
    const pad = out[out.length - 1];
    if (pad < 1 || pad > 16) throw new Error("AES 填充错误");
    return out.slice(0, out.length - pad);
  }

  function md5(bytes) {
    const K = [];
    for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) | 0;
    const S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
    const msg = bytes.slice();
    const bitLen = bytes.length * 8;
    msg.push(0x80);
    while (msg.length % 64 !== 56) msg.push(0);
    for (let i = 0; i < 8; i++) msg.push(i < 4 ? (bitLen >>> (8 * i)) & 255 : Math.floor(bitLen / 4294967296) >>> (8 * (i - 4)) & 255);
    let a0 = 0x67452301, b0 = 0xefcdab89 | 0, c0 = 0x98badcfe | 0, d0 = 0x10325476;
    for (let off = 0; off < msg.length; off += 64) {
      const M = [];
      for (let i = 0; i < 16; i++) M[i] = msg[off + i * 4] | (msg[off + i * 4 + 1] << 8) | (msg[off + i * 4 + 2] << 16) | (msg[off + i * 4 + 3] << 24);
      let A = a0, B = b0, C = c0, D = d0;
      for (let i = 0; i < 64; i++) {
        let F, g;
        if (i < 16) { F = (B & C) | (~B & D); g = i; }
        else if (i < 32) { F = (D & B) | (~D & C); g = (5 * i + 1) % 16; }
        else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) % 16; }
        else { F = C ^ (B | ~D); g = (7 * i) % 16; }
        const sh = S[(i >> 4) * 4 + (i & 3)];
        const x = (A + F + K[i] + M[g]) | 0;
        A = D; D = C; C = B;
        B = (B + ((x << sh) | (x >>> (32 - sh)))) | 0;
      }
      a0 = (a0 + A) | 0; b0 = (b0 + B) | 0; c0 = (c0 + C) | 0; d0 = (d0 + D) | 0;
    }
    const out = [];
    [a0, b0, c0, d0].forEach(v => { for (let i = 0; i < 4; i++) out.push((v >>> (8 * i)) & 255); });
    return bytesToHex(out);
  }

  let ZERO, ONE;
  function initBig() {
    if (ONE) return;
    if (typeof BigInt !== "function") throw new Error("当前运行环境不支持 BigInt");
    ZERO = BigInt(0);
    ONE = BigInt(1);
  }

  function bytesToBig(bytes) {
    initBig();
    const h = bytesToHex(bytes);
    return h ? BigInt("0x" + h) : ZERO;
  }

  function bigToBytes(n, len) {
    let h = n.toString(16);
    if (h.length % 2) h = "0" + h;
    const b = hexToBytes(h);
    while (b.length < len) b.unshift(0);
    return b;
  }

  function modPow(base, exp, mod) {
    let r = ONE;
    let b = base % mod;
    let e = exp;
    while (e > ZERO) {
      if (e & ONE) r = (r * b) % mod;
      e >>= ONE;
      b = (b * b) % mod;
    }
    return r;
  }

  function derIntegers(bytes) {
    const ints = [];
    (function walk(start, end) {
      let p = start;
      while (p < end) {
        const tag = bytes[p++];
        let len = bytes[p++];
        if (len & 128) {
          const n = len & 127;
          len = 0;
          for (let i = 0; i < n; i++) len = len * 256 + bytes[p++];
        }
        if (tag === 0x02) ints.push(bytesToBig(bytes.slice(p, p + len)));
        else if (tag === 0x30) walk(p, p + len);
        else if (tag === 0x03) walk(p + 1, p + len);
        else if (tag === 0x04) { try { walk(p, p + len); } catch (e) {} }
        p += len;
      }
    })(0, bytes.length);
    return ints;
  }

  const keyCache = {};
  function parseKey(pem) {
    if (keyCache[pem]) return keyCache[pem];
    const der = base64ToBytes(String(pem).replace(/-----[^-]+-----/g, ""));
    const ints = derIntegers(der);
    let i = 0;
    while (i < ints.length && ints[i] < BigInt(1) << BigInt(256)) i++;
    const n = ints[i];
    if (!n) throw new Error("RSA 密钥解析失败");
    const key = { n, e: ints[i + 1], d: ints[i + 2], p: ints[i + 3], q: ints[i + 4], dp: ints[i + 5], dq: ints[i + 6], qi: ints[i + 7] };
    key.size = bigToBytes(n, 0).length;
    keyCache[pem] = key;
    return key;
  }

  function rsaEncrypt(text, pem) {
    const key = parseKey(pem);
    const k = key.size;
    const msg = utf8Encode(text);
    if (msg.length > k - 11) throw new Error("RSA 明文过长");
    const em = [0, 2];
    for (let i = 0; i < k - 3 - msg.length; i++) em.push(1 + Math.floor(Math.random() * 255));
    em.push(0);
    const c = modPow(bytesToBig(em.concat(msg)), key.e, key.n);
    return bytesToBase64(bigToBytes(c, k));
  }

  function rsaPrivate(c, key) {
    if (key.p && key.q && key.dp && key.dq && key.qi) {
      const m1 = modPow(c % key.p, key.dp, key.p);
      const m2 = modPow(c % key.q, key.dq, key.q);
      let h = ((m1 - m2) * key.qi) % key.p;
      if (h < ZERO) h += key.p;
      return m2 + h * key.q;
    }
    return modPow(c, key.d, key.n);
  }

  function rsaDecrypt(b64, pem) {
    try {
      const key = parseKey(pem);
      const k = key.size;
      const raw = base64ToBytes(b64);
      let out = [];
      for (let off = 0; off < raw.length; off += k) {
        const em = bigToBytes(rsaPrivate(bytesToBig(raw.slice(off, off + k)), key), k);
        if (em[0] !== 0 || em[1] !== 2) return null;
        const sep = em.indexOf(0, 2);
        if (sep < 10) return null;
        out = out.concat(em.slice(sep + 1));
      }
      return utf8Decode(out);
    } catch (e) {
      return null;
    }
  }

  return {
    aesEncryptHex: (text, key, iv) => bytesToHex(aesCbcEncrypt(utf8Encode(text), utf8Encode(key), utf8Encode(iv))),
    aesDecryptHex: (hex, key, iv) => utf8Decode(aesCbcDecrypt(hexToBytes(hex), utf8Encode(key), utf8Encode(iv))),
    md5: text => md5(utf8Encode(text)),
    rsaEncrypt,
    rsaDecrypt,
    base64Decode: text => utf8Decode(base64ToBytes(text))
  };
})();

function buildHeaders(extra = {}) {
  return Object.assign({
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*",
    "Version": APP_CONFIG.versionCode,
    "api-ver": APP_CONFIG.apiVersion,
    "packagename": APP_CONFIG.packageName,
    "code": APP_CONFIG.code,
    "ver": APP_CONFIG.apiVersion,
    "deviceid": APP_CONFIG.deviceId,
    "ip": APP_CONFIG.ip,
    "lang": APP_CONFIG.lang,
    "x-customer-client-ip": "",
    "User-Agent": USER_AGENT,
    "parent-code": ""
  }, extra);
}

function aesEncryptHex(text, keyStr, ivStr) {
  return GxCrypto.aesEncryptHex(text, keyStr, ivStr);
}

function aesDecryptHex(cipherHex, keyStr, ivStr) {
  return GxCrypto.aesDecryptHex(cipherHex, keyStr, ivStr);
}

function rsaEncryptBase64(text, publicKey) {
  return GxCrypto.rsaEncrypt(text, publicKey);
}

function rsaDecryptBase64(text, privateKey) {
  return GxCrypto.rsaDecrypt(text, privateKey);
}

function buildRequestBody(params = {}) {
  const ts = Math.floor(Date.now() / 1000);
  const requestKey = aesEncryptHex(JSON.stringify(params), APP_CONFIG.requestAes.key, APP_CONFIG.requestAes.iv);
  const keys = rsaEncryptBase64(JSON.stringify(APP_CONFIG.requestAes), APP_CONFIG.requestPublicKey);
  const signBase = "token_id=" + APP_CONFIG.tokenId + ",token=" + APP_CONFIG.token + ",phone_type=" + APP_CONFIG.platform + ",request_key=" + requestKey + ",app_id=" + APP_CONFIG.productnumber + ",time=" + String(ts) + ",keys=" + keys;
  const signature = GxCrypto.md5(signBase + "*" + APP_CONFIG.iosRequestSalt).toUpperCase();
  return { token: APP_CONFIG.token, token_id: APP_CONFIG.tokenId, time: ts, app_id: APP_CONFIG.productnumber, phone_type: APP_CONFIG.platform, keys, request_key: requestKey, signature, ad_version: 1 };
}

function decryptResponse(responseData) {
  const keyText = rsaDecryptBase64(responseData.keys, APP_CONFIG.responsePrivateKey);
  if (!keyText) throw new Error("瓜子响应密钥解密失败");
  const aesInfo = JSON.parse(keyText);
  return JSON.parse(aesDecryptHex(responseData.response_key, aesInfo.key, aesInfo.iv));
}

function storageGet(key) {
  try { return Widget.storage && Widget.storage.get ? Widget.storage.get(key) : null; } catch (e) { return null; }
}

function storageSet(key, value) {
  try { if (Widget.storage && Widget.storage.set) Widget.storage.set(key, value); } catch (e) {}
}

function mediaBindingKey(mediaType, tmdbId) {
  const type = normalizeMediaType(mediaType);
  const id = String(tmdbId || "").trim();
  return type && id ? MEDIA_BINDING_PREFIX + type + "." + id : "";
}

function saveMediaBinding(mediaType, tmdbId, item) {
  const key = mediaBindingKey(mediaType, tmdbId);
  if (!key || !item || !item.vod_id) return;
  storageSet(key, JSON.stringify({
    vodId: String(item.vod_id),
    title: String(item.title || item.vod_name || ""),
    year: String(item.vod_year || "").slice(0, 4),
    area: String(item.vod_area || item.area || ""),
    category: mediaType === "movie" ? "movie" : "tv",
    updatedAt: Date.now()
  }));
}

function loadMediaBinding(mediaType, tmdbId) {
  const key = mediaBindingKey(mediaType, tmdbId);
  return key ? parseJSON(storageGet(key), null) : null;
}

async function getTmdbMovieContext(tmdbId) {
  const id = String(tmdbId || "").replace(/^movie\./i, "").trim();
  if (!/^\d+$/.test(id)) return null;
  if (!__tmdbMovieDetailCache[id]) {
    __tmdbMovieDetailCache[id] = Widget.tmdb.get("movie/" + id, { params: { language: "zh-CN", append_to_response: "credits" } }).catch(() => null);
  }
  const data = await __tmdbMovieDetailCache[id];
  if (!data || !data.id) return null;
  return {
    tmdbId: String(data.id),
    title: cleanText(data.title || data.original_title || ""),
    originalTitle: cleanText(data.original_title || ""),
    releaseDate: String(data.release_date || ""),
    year: String(data.release_date || "").slice(0, 4),
    actors: safeArray(data.credits && data.credits.cast).slice(0, 8).map(x => x && x.name).filter(Boolean).join("/")
  };
}

function parseJSON(value, fallback = null) {
  if (value == null) return fallback;
  if (typeof value === "object") return value;
  try { return JSON.parse(String(value)); } catch (e) { return fallback; }
}

function randomHex(size) {
  const chars = "0123456789ABCDEF";
  let out = "";
  for (let i = 0; i < size; i++) out += chars.charAt(Math.floor(Math.random() * 16));
  return out;
}

function createDeviceId() {
  return `${randomHex(8)}-${randomHex(4)}-4${randomHex(3)}-${"89AB".charAt(Math.floor(Math.random() * 4))}${randomHex(3)}-${randomHex(12)}`;
}

function normalizeBaseURL(value) {
  const url = String(value || "").trim().replace(/\/+$/, "");
  return /^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(url) ? url : "";
}

function uniqueBaseURLs(values) {
  const out = [];
  for (const value of values || []) {
    const url = normalizeBaseURL(value);
    if (url && out.indexOf(url) < 0) out.push(url);
  }
  return out;
}

async function getPublicIP() {
  try {
    const response = await Widget.http.get("https://api.ipify.org/?format=json", { headers: { "User-Agent": USER_AGENT } });
    const data = parseJSON(response && response.data, {});
    return String(data && data.ip || "");
  } catch (e) {
    return "";
  }
}

async function loadRemoteDomains() {
  try {
    const response = await Widget.http.get(APP_CONFIG.thirdPartyDomainURL, { headers: { "User-Agent": USER_AGENT } });
    const root = parseJSON(response && response.data, null);
    const encrypted = root && root.code === 200 && root.data && root.data.response_key;
    if (!encrypted) return [];
    const text = aesDecryptHex(encrypted, APP_CONFIG.thirdPartyAes.key, APP_CONFIG.thirdPartyAes.iv);
    return uniqueBaseURLs(parseJSON(text, {}).list || []);
  } catch (e) {
    return [];
  }
}

async function initializeDomains(force = false) {
  if (__domainsReady && !force && APP_CONFIG.baseURL) return APP_CONFIG.baseURL;
  if (__domainPromise) return __domainPromise;
  __domainPromise = (async () => {
    const cached = parseJSON(storageGet(DOMAIN_STORAGE_KEY), {});
    const cachedList = uniqueBaseURLs(cached && cached.list || []);
    const remote = await loadRemoteDomains();
    APP_CONFIG.baseURLs = uniqueBaseURLs([].concat(remote, cachedList, APP_CONFIG.baseURLs));
    if (remote.length) storageSet(DOMAIN_STORAGE_KEY, JSON.stringify({ list: remote, updatedAt: Date.now() }));
    const checks = APP_CONFIG.baseURLs.slice(0, 3).map(async (url, index) => {
      try {
        const response = await Widget.http.get(url + "/domain/check", { headers: { "User-Agent": USER_AGENT } });
        const text = String(response && response.data || "").trim().toLowerCase();
        if ((response && response.status && Number(response.status) >= 400) || (text && text !== "success")) throw new Error("domain check failed");
        return { url, index };
      } catch (e) {
        return null;
      }
    });
    const results = await Promise.all(checks);
    const hit = results.filter(Boolean)[0];
    APP_CONFIG.baseURL = hit ? hit.url : (APP_CONFIG.baseURLs[0] || "");
    __activeDomainIndex = Math.max(0, APP_CONFIG.baseURLs.indexOf(APP_CONFIG.baseURL));
    if (!APP_CONFIG.baseURL) throw new Error("瓜子 API 域名不可用");
    __domainsReady = true;
    return APP_CONFIG.baseURL;
  })();
  try { return await __domainPromise; } finally { __domainPromise = null; }
}

function loadStoredAuth() {
  const auth = parseJSON(storageGet(AUTH_STORAGE_KEY), {});
  if (!auth || !auth.deviceId || !auth.token) return false;
  APP_CONFIG.deviceId = String(auth.deviceId);
  APP_CONFIG.token = String(auth.token);
  APP_CONFIG.tokenId = String(auth.tokenId || "");
  APP_CONFIG.ip = String(auth.ip || "");
  return true;
}

function saveAuth() {
  storageSet(AUTH_STORAGE_KEY, JSON.stringify({
    deviceId: APP_CONFIG.deviceId,
    token: APP_CONFIG.token,
    tokenId: APP_CONFIG.tokenId,
    ip: APP_CONFIG.ip,
    updatedAt: Date.now()
  }));
}

async function rawPrivatePost(path, params = {}, baseURL = "") {
  const url = normalizeBaseURL(baseURL || APP_CONFIG.baseURL);
  if (!url) throw new Error("瓜子 API 域名为空");
  const response = await Widget.http.post(url + path, buildRequestBody(params), { headers: buildHeaders() });
  const root = parseJSON(response && response.data, null);
  if (!root) throw new Error("瓜子 API 响应格式异常");
  let data = root.data;
  if (data && data.response_key && data.keys) data = decryptResponse(data);
  return { root, data };
}

async function authenticate(force = false) {
  if (__authPromise) return __authPromise;
  __authPromise = (async () => {
    await initializeDomains(false);
    if (!force && !APP_CONFIG.token) loadStoredAuth();
    if (!APP_CONFIG.deviceId) APP_CONFIG.deviceId = createDeviceId();
    if (!APP_CONFIG.ip) APP_CONFIG.ip = await getPublicIP();
    const payload = { new_key: APP_CONFIG.deviceId, old_key: APP_CONFIG.deviceId };
    APP_CONFIG.token = "";
    APP_CONFIG.tokenId = "";
    let lastError = null;
    const total = Math.max(1, APP_CONFIG.baseURLs.length);
    for (let attempt = 0; attempt < total; attempt++) {
      const index = (__activeDomainIndex + attempt) % total;
      const baseURL = APP_CONFIG.baseURLs[index];
      APP_CONFIG.baseURL = baseURL;
      try {
        let result = await rawPrivatePost("/App/Authentication/Device/signIn", payload, baseURL);
        if (!result.root || result.root.code !== 200 || !result.data || !result.data.token) {
          result = await rawPrivatePost("/App/Authentication/Device/signUp", payload, baseURL);
        }
        if (!result.root || result.root.code !== 200 || !result.data || !result.data.token) {
          throw new Error((result.root && result.root.msg) || "瓜子设备鉴权失败");
        }
        APP_CONFIG.token = String(result.data.token);
        APP_CONFIG.tokenId = String(result.data.token_id || "");
        __activeDomainIndex = index;
        saveAuth();
        return true;
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError || new Error("瓜子设备鉴权失败");
  })();
  try { return await __authPromise; } finally { __authPromise = null; }
}

function shouldReauthenticate(root) {
  const code = Number(root && root.code || 0);
  const msg = String(root && root.msg || "");
  return code === 401 || code === 403 || code === 451 || /token|登录|鉴权|认证|设备.*不存在|过期/i.test(msg);
}

function shouldRotateDomain(error, root) {
  if (error) return true;
  const code = Number(root && root.code || 0);
  return code === 502 || code === 503 || code === 504 || code === 404;
}

async function privatePost(path, params = {}) {
  await initializeDomains(false);
  if (!APP_CONFIG.token) loadStoredAuth();
  if (!APP_CONFIG.token) await authenticate(false);
  let authRetried = false;
  let lastError = null;
  const total = Math.max(1, APP_CONFIG.baseURLs.length);
  for (let attempt = 0; attempt < total; attempt++) {
    const index = (__activeDomainIndex + attempt) % total;
    const baseURL = APP_CONFIG.baseURLs[index];
    APP_CONFIG.baseURL = baseURL;
    try {
      let result = await rawPrivatePost(path, params, baseURL);
      if (shouldReauthenticate(result.root) && !authRetried) {
        authRetried = true;
        await authenticate(true);
        result = await rawPrivatePost(path, params, APP_CONFIG.baseURL);
      }
      if (result.root && result.root.code === 200) {
        __activeDomainIndex = Math.max(0, APP_CONFIG.baseURLs.indexOf(APP_CONFIG.baseURL));
        return result.data != null ? result.data : result.root;
      }
      if (shouldReauthenticate(result.root) || !shouldRotateDomain(null, result.root)) {
        const error = new Error((result.root && result.root.msg) || "请求失败");
        error.noRotate = true;
        throw error;
      }
      lastError = new Error((result.root && result.root.msg) || "域名请求失败");
    } catch (e) {
      lastError = e;
      if (e && e.noRotate) break;
    }
  }
  throw lastError || new Error("瓜子 API 全部域名不可用");
}

function safeArray(v) { return Array.isArray(v) ? v : []; }

function normalizeTitle(text) {
  return String(text || "").toLowerCase().replace(/[\s·•・:：\-–—_!！?？.,，。、"'`~()（）\[\]【】]/g, "");
}

function extractCardSeason(text) {
  const t = String(text || "");
  const cnNums = ["零","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];
  let m = t.match(/第\s*([一二三四五六七八九十]+|\d+)\s*[季部]/);
  if (m) {
    const v = m[1];
    if (/^\d+$/.test(v)) return parseInt(v, 10);
    const idx = cnNums.indexOf(v);
    if (idx >= 0) return idx;
  }
  return null;
}

function stripCardSeason(text) {
  return String(text || "").replace(/第\s*[一二三四五六七八九十0-9]+\s*[季部]/g, "").trim();
}

const __tmdbSearchCache = {};

async function searchForwardEntity(item) {
  const isMovie = safeArray(item.tags).includes("电影");
  const mediaType = isMovie ? "movie" : "tv";
  const rawTitle = String(item.title || "").trim();
  const keyword = stripCardSeason(rawTitle) || rawTitle;
  const cacheKey = mediaType + "::" + keyword;
  if (!__tmdbSearchCache[cacheKey]) {
    __tmdbSearchCache[cacheKey] = Widget.tmdb.get("search/" + mediaType, { params: { query: keyword, language: "zh-CN", page: 1 } }).catch(() => ({ results: [] }));
  }
  const data = await __tmdbSearchCache[cacheKey];
  const results = safeArray(data && data.results);
  if (!results.length) return null;

  const rawNorm = normalizeTitle(stripQualityTag(rawTitle));
  const baseNorm = normalizeTitle(stripQualityTag(keyword));
  const seasonNum = extractCardSeason(rawTitle);
  const year = String(item.vod_year || "").slice(0, 4);
  let best = null;
  let bestScore = -1e9;
  for (const r of results) {
    const name = String(r.name || r.title || "");
    const nameNorm = normalizeTitle(name);
    const firstAirDate = String(r.first_air_date || r.release_date || "");
    const releaseYear = firstAirDate.slice(0, 4);
    if (isMovie && year && releaseYear && releaseYear !== year) continue;
    let score = 0;
    if (nameNorm === rawNorm) score += 100;
    if (nameNorm === baseNorm) score += 90;
    if (nameNorm.includes(baseNorm) || baseNorm.includes(nameNorm)) score += 35;
    if (year && releaseYear === year) score += 80;
    if (r.media_type === mediaType || !r.media_type) score += 8;
    if (score > bestScore) {
      bestScore = score;
      best = r;
    }
  }
  if (!best) return null;
  return {
    id: best.id,
    mediaType,
    seasonNum,
    info: {
      id: best.id,
      originalTitle: best.original_name || best.original_title || "",
      description: best.overview || "",
      releaseDate: best.first_air_date || best.release_date || "",
      backdropPath: best.backdrop_path || "",
      posterPath: best.poster_path || "",
      rating: best.vote_average || 0,
      mediaType,
      seasonInfo: seasonNum ? `第 ${seasonNum} 季` : ""
    }
  };
}

function stripQualityTag(text) {
  const s = String(text || "").trim();
  const out = s.replace(/(^|[\s._\-]|[\u4e00-\u9fff\d])TC$/, "$1").replace(/[\s._\-]+$/, "").trim();
  return out || s;
}

async function mapRankItems(data) {
  const out = [];
  for (const item of safeArray(data.list)) {
    if (item && item.title) item.title = stripQualityTag(item.title);
    const entity = await searchForwardEntity(item);
    const seasonNum = extractCardSeason(item.title || "");
    const tagsArr = safeArray(item.tags);
    const isAnime = tagsArr.some(t => /动漫|动画|漫画/.test(String(t)));
    const isVariety = tagsArr.some(t => /综艺|脱口秀|真人秀/.test(String(t)));
    const isDoc = tagsArr.some(t => /纪录/.test(String(t)));
    const isMovieTag = tagsArr.includes("电影");
    let cat = "tv";
    if (isMovieTag) cat = "movie";
    else if (isAnime) cat = "anime";
    else if (isVariety) cat = "variety";
    else if (isDoc) cat = "documentary";
    // genreTitle 中追加 [GXF cat=…|area=…] 标记，loadResource 端可解析回锁
    const gxfMarker = `[GXF cat=${cat}|area=${item.vod_area || item.area || ""}|t=${item.t_id || ""}|vid=${item.vod_id || ""}]`;
    const genreOut = (tagsArr.length ? tagsArr.join(" / ") + " " : "") + gxfMarker;
    if (entity && entity.id) {
      saveMediaBinding(entity.mediaType, entity.id, item);
      out.push({
        id: entity.id,
        type: "tmdb",
        title: item.title,
        originalTitle: entity.info.originalTitle || "",
        posterPath: item.pic || entity.info.posterPath || item.pre_video_pic || "",
        backdropPath: item.pre_video_pic || entity.info.backdropPath || item.pic || "",
        description: [
          entity.info.description || item.sub_title || "",
          item.vod_director ? `导演：${item.vod_director}` : "",
          item.vod_actor ? `演员：${item.vod_actor}` : "",
          tagsArr.length ? `标签：${tagsArr.join(" / ")}` : "",
          item.new_continue ? `更新：${item.new_continue}` : (item.vod_remarks ? `更新：${item.vod_remarks}` : "")
        ].filter(Boolean).join("\n"),
        releaseDate: entity.info.releaseDate || item.vod_year || "",
        rating: item.score || entity.info.rating || "",
        mediaType: entity.mediaType,
        genreTitle: genreOut,
        tmdbInfo: entity.info,
        tmdbId: entity.id,
        seasonInfo: seasonNum ? `第 ${seasonNum} 季` : ""
      });
    } else {
      out.push({
        id: item.vod_id,
        type: "url",
        title: item.title,
        posterPath: item.pic || item.pre_video_pic || "",
        backdropPath: item.pre_video_pic || item.pic || "",
        description: [
          item.sub_title || "",
          item.vod_director ? `导演：${item.vod_director}` : "",
          item.vod_actor ? `演员：${item.vod_actor}` : "",
          safeArray(item.tags).length ? `标签：${item.tags.join(" / ")}` : "",
          item.new_continue ? `更新：${item.new_continue}` : (item.vod_remarks ? `更新：${item.vod_remarks}` : "")
        ].filter(Boolean).join("\n"),
        releaseDate: item.vod_year || "",
        rating: item.score || "",
        mediaType: safeArray(item.tags).includes("电影") ? "movie" : "tv",
        genreTitle: safeArray(item.tags).join(" / "),
        videoUrl: item.pre_video || "",
        previewUrl: item.pre_video || "",
        playerType: "system"
      });
    }
  }
  return out;
}

async function getRankByCateId(cateId, expectedTitle) {
  const data = await privatePost("/App/NewDiscover/getList", { cateId, page: 1, pageSize: 10 });
  if (data.name !== expectedTitle) throw new Error(`标题与接口内容不一致：期望 ${expectedTitle}，实际 ${data.name}`);
  return await mapRankItems(data);
}

async function getNetflixNew() { return getRankByCateId(2, "Netflix新片榜"); }
async function getDisneyNew() { return getRankByCateId(3, "Disney+新片榜"); }
async function getAppleTvNew() { return getRankByCateId(5, "Apple TV+新片榜"); }
async function getHboNew() { return getRankByCateId(4, "HBOmax新片榜"); }
async function getPrimeVideoNew() { return getRankByCateId(6, "prime video新片榜"); }
async function getWeeklyDomesticDrama() { return getRankByCateId(15, "本周国剧排行榜"); }
async function getWeeklyUSDrama() { return getRankByCateId(8, "本周美剧排行榜"); }
async function getWeeklyAnime() { return getRankByCateId(12, "本周动漫排行榜"); }
async function getWeeklyMovie() { return getRankByCateId(148, "本周电影排行榜"); }
async function getWeeklyKDrama() { return getRankByCateId(10, "本周韩剧排行榜"); }
async function getWeeklyUKDrama() { return getRankByCateId(9, "本周英剧排行榜"); }
async function getWeeklyJDrama() { return getRankByCateId(11, "本周日剧排行榜"); }
async function getWeeklyThaiDrama() { return getRankByCateId(149, "本周泰剧排行榜"); }
async function getWeeklyVariety() { return getRankByCateId(171, "本周综艺排行榜"); }
async function getWeeklyDocumentary() { return getRankByCateId(172, "本周纪录片排行榜"); }

function cleanText(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF\u2060\u00AD]/g, "")
    .trim();
}

function toInt(v, defVal = 0) {
  const n = parseInt(String(v == null ? "" : v).trim(), 10);
  return Number.isFinite(n) ? n : defVal;
}

function chineseNumberToInt(value) {
  const t = cleanText(value);
  if (!t) return null;
  if (/^\d+$/.test(t)) return parseInt(t, 10);
  const digitMap = { "零": 0, "〇": 0, "一": 1, "二": 2, "两": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9 };
  if (Object.prototype.hasOwnProperty.call(digitMap, t)) return digitMap[t];
  if (t === "十") return 10;
  const m = t.match(/^([一二两三四五六七八九])?十([一二两三四五六七八九])?$/);
  if (!m) return null;
  return (m[1] ? digitMap[m[1]] : 1) * 10 + (m[2] ? digitMap[m[2]] : 0);
}

function extractSeasonNumber(text) {
  const t = cleanText(text);
  const patterns = [
    /第\s*([零〇一二两三四五六七八九十百\d]+)\s*[季部]/i,
    /(?:season|series)\s*[-_.:]?\s*(\d{1,3})/i,
    /\bS(?:eason)?\s*[-_.:]?\s*(\d{1,3})(?:\s*E\d+)?\b/i,
    /([零〇一二两三四五六七八九十]+)\s*[季部](?:\s|$|[（(【[])/
  ];
  for (const pattern of patterns) {
    const m = t.match(pattern);
    if (!m) continue;
    const n = chineseNumberToInt(m[1]);
    if (n != null && n > 0) return n;
  }
  return null;
}

function extractYear(text) {
  const m = cleanText(text).match(/\b(19|20)\d{2}\b/);
  return m ? m[0] : "";
}

function stripSeasonHints(text) {
  return cleanText(text)
    .replace(/第\s*[零〇一二两三四五六七八九十百0-9]+\s*[季部]/ig, "")
    .replace(/(?:season|series)\s*[-_.:]?\s*\d{1,3}/ig, "")
    .replace(/\bS(?:eason)?\s*[-_.:]?\s*\d{1,3}(?:\s*E\d{1,3})?\b/ig, "")
    .replace(/[零〇一二两三四五六七八九十]+\s*[季部](?=\s|$|[（(【[])/ig, "")
    .trim();
}

function normalizeName(text) {
  return cleanText(text)
    .toLowerCase()
    .replace(/[\s·•・:：\-–—_!！?？.,，。、"'`~()（）\[\]【】]/g, "");
}

function normalizeMediaType(value) {
  const t = cleanText(value).toLowerCase();
  if (t === "movie" || t === "film") return "movie";
  if (t === "tv" || t === "series" || t === "show" || t === "episode") return "tv";
  return "";
}

function firstPositiveInt(values) {
  for (const value of values) {
    const n = toInt(value, 0);
    if (n > 0) return n;
  }
  return 0;
}

function buildPlaybackContext(params = {}) {
  const mediaType = normalizeMediaType(params.type) || normalizeMediaType(params.mediaType);
  const title = cleanText(params.title || "");
  const seriesName = cleanText(params.seriesName || "");
  const episodeName = cleanText(params.episodeName || "");
  const season = firstPositiveInt([
    params.season,
    params.seasonNumber,
    extractSeasonNumber(seriesName),
    extractSeasonNumber(title),
    extractSeasonNumber(episodeName),
    extractSeasonNumber(params.seasonInfo || "")
  ]);
  const episode = firstPositiveInt([params.episode, params.episodeNumber, extractEpisodeNumber(episodeName)]);
  let showTitle = seriesName;
  if (!showTitle && mediaType === "movie") showTitle = title;
  if (!showTitle && title && !/^\s*(?:第\s*)?\d+\s*[集话期]?\s*$/i.test(title)) showTitle = title;
  if (!showTitle) showTitle = cleanText(params.originalTitle || (params.tmdbInfo && params.tmdbInfo.originalTitle) || "");
  return Object.assign({}, params, {
    type: mediaType || (season > 0 || episode > 0 ? "tv" : params.type),
    seriesName: showTitle,
    title,
    episodeName,
    season,
    episode
  });
}

function typeScoreByParams(item, params) {
  const tid = String(item.t_id || item.type_id || "");
  const cat = String(params.__gxfCategory || params.gxfCategory || "").toLowerCase();
  if (!tid) return 0;
  // 强类别约束（动漫/综艺/纪录片/电影/电视剧），错类别一票否决式扣分
  if (cat === "anime") {
    if (tid === "4") return 80;
    if (tid === "1") return -200;
    if (tid === "2") return -200;
    return -120;
  }
  if (cat === "variety") {
    if (tid === "3") return 80;
    return -200;
  }
  if (cat === "documentary") {
    if (tid === "5") return 80;
    return -200;
  }
  if (cat === "movie" || params.type === "movie") {
    if (tid === "1") return 60;
    // 动画电影（猫和老鼠/迪士尼动画等）源站常归类 t_id=4（动漫），电影场景不应一票否决
    if (tid === "4") return 30;
    return -200;
  }
  // 默认 tv
  if (tid === "1") return -120;
  if (tid === "2") return 40;
  if (tid === "4") return -150;
  if (tid === "3" || tid === "5") return -200;
  return 0;
}

function areaScore(item, params) {
  const want = String(params.__gxfArea || "").trim();
  if (!want) return 0;
  const got = String(item.vod_area || "").trim();
  if (!got) return 0;
  if (got === want) return 50;
  // 大陆/中国互通
  if (/大陆|中国|内地/.test(want) && /大陆|中国|内地/.test(got)) return 50;
  return -40;
}

function actorScore(item, params) {
  const wantActors = String(params.__gxfActor || "").toLowerCase();
  if (!wantActors) return 0;
  const got = String(item.vod_actor || "").toLowerCase();
  if (!got) return 0;
  const wantList = wantActors.split(/[,，、\/\s]+/).filter(Boolean);
  let hit = 0;
  for (const a of wantList) {
    if (a.length >= 2 && got.indexOf(a) >= 0) hit++;
  }
  if (hit >= 2) return 25;
  if (hit === 1) return 12;
  return 0;
}

function scoreCandidate(item, want, params) {
  const name = String(item.vod_name || item.title || "");
  const matchName = stripQualityTag(name);
  const normName = normalizeName(matchName);
  const baseName = normalizeName(stripSeasonHints(matchName));
  const year = String(item.vod_year || "").slice(0, 4);
  const seasonNum = extractSeasonNumber(matchName);
  const sameFranchise = !!want.baseNorm && baseName === want.baseNorm;
  const typeScore = typeScoreByParams(item, params);
  if (!sameFranchise || typeScore < 0) return -1e9;
  if (params.type === "movie" && want.year && year && year !== want.year) return -1e9;
  if (params.type === "movie" && seasonNum != null) return -1e9;
  if (params.type !== "movie" && want.season > 1 && seasonNum !== want.season) return -1e9;
  if (params.type !== "movie" && want.season === 1 && seasonNum != null && seasonNum !== 1) return -1e9;
  let score = 0;
  if (want.fullNorm && normName === want.fullNorm) score += 320;
  if (want.baseNorm && baseName === want.baseNorm) score += 220;
  if (want.baseNorm && (normName.includes(want.baseNorm) || want.baseNorm.includes(normName))) score += 45;
  score += typeScore;
  score += areaScore(item, params);
  score += actorScore(item, params);
  // —— 季匹配：对“按季拆分条目”的数据源（瓜子影视）这是决定性信号 ——
  // 仅当候选与目标同属一个系列（去季名后的基名一致）时才施加强季权重，
  // 避免无关剧集仅凭季号蒙分；裸标题（无季号）在季拆分源里通常即第一季。
  if (want.season > 0) {
    if (sameFranchise && seasonNum === want.season) {
      score += 300;
    } else if (sameFranchise && seasonNum != null) {
      score -= 420;
    } else if (sameFranchise && want.season === 1) {
      score += 100;
    } else if (sameFranchise) {
      score -= 320;
    } else if (seasonNum != null && seasonNum !== want.season) {
      score -= 120;
    }
  } else if (seasonNum != null && seasonNum > 1) {
    score -= 15;
  }
  if (want.year && year === want.year) score += 70;
  if (/解说|速看|合集|全系列|电影解说|预告|花絮|彩蛋/.test(name)) score -= 80;
  // 集数容量兜底：候选总集数若装不下 want.episode，强扣分（防止挑到只有 10 集的同名剧集）
  const wantEp = toInt(params.episode, 0);
  if (wantEp > 0) {
    const cap = toInt(item.vod_continu, 0) || toInt(item.d_total, 0) || toInt(item.vod_total, 0);
    if (cap > 0 && cap < wantEp) score -= 250;
  }
  // 名称过度扩展惩罚：用“去季名”后的基名比较，避免误伤合法分季条目（如“梦魇绝镇第四季”）
  if (want.baseNorm && baseName !== want.baseNorm && (!want.fullNorm || normName !== want.fullNorm)) {
    if (baseName.length > want.baseNorm.length + 2) score -= 30;
    if (!baseName.startsWith(want.baseNorm) && want.baseNorm.length >= 4) score -= 25;
  }
  return score;
}

function pickBestVod(list, params) {
  const rawSeries = cleanText(params.seriesName || params.title || "");
  const rawEpisodeName = cleanText(params.episodeName || "");
  const fullText = [rawSeries, rawEpisodeName].filter(Boolean).join(" ");
  const inferredSeason = toInt(params.season, 0) || extractSeasonNumber(fullText) || extractSeasonNumber(rawSeries) || extractSeasonNumber(rawEpisodeName) || 0;
  const inferredYear = params.type === "movie" ? (String(params.premiereDate || params.releaseDate || "").slice(0, 4) || extractYear(fullText) || "") : "";
  const matchSeries = params.type === "movie" ? stripQualityTag(rawSeries) : rawSeries;
  const baseTitle = stripSeasonHints(matchSeries || rawEpisodeName || fullText);
  const want = {
    season: inferredSeason,
    year: inferredYear,
    fullNorm: normalizeName(matchSeries || fullText),
    baseNorm: normalizeName(baseTitle || matchSeries || fullText)
  };
  // 0) 若 params 中带 GXF 锁定 vod_id，且候选里存在，直接命中
  const lockVid = String(params.__gxfVid || "").trim();
  if (lockVid && !(params.type !== "movie" && want.season > 1)) {
    const hit = safeArray(list).find(it => String(it.vod_id || "") === lockVid);
    if (hit) {
      const hitName = stripQualityTag(String(hit.vod_name || hit.title || ""));
      const hitBase = normalizeName(stripSeasonHints(hitName));
      const hitSeason = extractSeasonNumber(hitName);
      const hitYear = String(hit.vod_year || "").slice(0, 4);
      const yearMatches = params.type !== "movie" || !want.year || !hitYear || hitYear === want.year;
      if (yearMatches && hitBase === want.baseNorm && (!want.season || hitSeason === want.season || (want.season === 1 && hitSeason == null))) return hit;
    }
  }
  const ranked = safeArray(list)
    .map(item => ({ item, score: scoreCandidate(item, want, params) }))
    .filter(entry => entry.score > -1e8)
    .sort((a, b) => b.score - a.score);
  if (!ranked.length) return null;
  const top = ranked[0];
  const topName = stripQualityTag(String(top.item.vod_name || top.item.title || ""));
  const topBase = normalizeName(stripSeasonHints(topName));
  const topSeason = extractSeasonNumber(topName);
  const topYear = String(top.item.vod_year || "").slice(0, 4);
  const sameTitle = !!want.baseNorm && topBase === want.baseNorm;
  if (!sameTitle || top.score < 120) return null;
  if (params.type === "movie" && want.year && topYear && topYear !== want.year) return null;
  if (want.season > 1 && topSeason !== want.season) return null;
  if (want.season === 1 && topSeason != null && topSeason !== 1) return null;
  // 调试日志（仅在 console 可用时）
  try {
    if (typeof console !== "undefined" && console.log) {
      console.log("[forward_rank] candidates for", rawSeries, "want=", JSON.stringify(want), "cat=", params.__gxfCategory || "", "area=", params.__gxfArea || "");
      ranked.slice(0, 6).forEach(r => console.log("  ", r.score, r.item.vod_id, r.item.t_id, r.item.vod_area, r.item.vod_year, r.item.vod_name));
    }
  } catch (e) {}
  return top.item;
}

function extractEpisodeNumber(text) {
  const t = cleanText(text);
  if (!t) return 0;
  const patterns = [
    /(?:第\s*)?(\d{1,4})\s*[集话期]/i,
    /\bE(?:P(?:ISODE)?)?\s*[-_.:]?\s*(\d{1,4})\b/i,
    /\bS\d{1,3}\s*E(\d{1,4})\b/i,
    /^0*(\d{1,4})$/
  ];
  for (const pattern of patterns) {
    const m = t.match(pattern);
    if (m) return toInt(m[1], 0);
  }
  return 0;
}

function pickEpisode(list, params) {
  const eps = safeArray(list);
  if (!eps.length) return null;
  if (params.type === "movie") return eps[0];
  const wantEp = firstPositiveInt([params.episode, params.episodeNumber, extractEpisodeNumber(params.episodeName || "")]);
  if (wantEp <= 0) return null;
  for (const ep of eps) {
    if (extractEpisodeNumber(ep.title || "") === wantEp) return ep;
  }
  for (const ep of eps) {
    if (toInt(ep.sort, 0) === wantEp) return ep;
  }
  return null;
}

const GXF_FAKE_HOST_RE = /xn--55qx2ai23bz99b|xn--fiqs8s|wanglaoshi|(^|\.)(\u529e\u516c\u9694\u65ad)\.cn|(^|\.)(\u7f51\u8001\u5e08)/i;

function isFakePlayUrl(url) {
  const u = String(url || "");
  if (!u) return true;
  return GXF_FAKE_HOST_RE.test(u);
}

function decodePlaylistBody(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text || text.indexOf("#EXTM3U") >= 0) return text;
  if (!/^[A-Za-z0-9+/=\r\n]+$/.test(text)) return text;
  try {
    return GxCrypto.base64Decode(text);
  } catch (e) {}
  return text;
}

async function probePlayUrl(url) {
  try {
    const probe = await Widget.http.get(url, { headers: { "User-Agent": PLAY_USER_AGENT }, allow_redirects: true });
    const loc = probe && probe.headers && (probe.headers.location || probe.headers.Location);
    const finalUrl = loc || url;
    if (isFakePlayUrl(finalUrl)) return null;
    const body = decodePlaylistBody(probe && probe.data);
    if (!body) return finalUrl;
    if (GXF_FAKE_HOST_RE.test(body)) return null;
    if (/#EXT-X-STREAM-INF/i.test(body)) return finalUrl;
    if (/#EXTINF/i.test(body)) {
      let total = 0;
      let count = 0;
      const re = /#EXTINF:([\d.]+)/g;
      let m;
      while ((m = re.exec(body)) !== null) {
        total += parseFloat(m[1]) || 0;
        count++;
      }
      if (/#EXT-X-ENDLIST/i.test(body) && count > 0 && total < 200) return null;
    }
    return finalUrl;
  } catch (e) {
    return null;
  }
}

function compareResolution(a, b) {
  return toInt(b && b.resolution, 0) - toInt(a && a.resolution, 0);
}

async function resolvePlayUrls(ep, params = {}) {
  const s = toInt(params.season, 0);
  const e = toInt(params.episode, 0);
  const label = params.type !== "movie" && s > 0 && e > 0 ? ` S${s}E${e}` : " 正片";
  const details = safeArray(await privatePost("/App/Resource/Vod/vurlDetail", { vurl_id: ep.id }));
  const ordered = details.slice().sort(compareResolution);
  for (const item of ordered) {
    if (!item || !item.url || isFakePlayUrl(item.url)) continue;
    const real = await probePlayUrl(item.url);
    if (!real) continue;
    return [{
      name: `瓜子影视${label}`,
      description: "瓜子影视",
      url: real,
      customHeaders: { "User-Agent": PLAY_USER_AGENT },
      headers: { "User-Agent": PLAY_USER_AGENT }
    }];
  }
  return [];
}

function parseGxfMarker(text) {
  // 解析 [GXF cat=anime|area=大陆|t=4|vid=39]
  const m = String(text || "").match(/\[GXF\s+([^\]]+)\]/);
  if (!m) return {};
  const out = {};
  m[1].split("|").forEach(seg => {
    const idx = seg.indexOf("=");
    if (idx > 0) out[seg.slice(0, idx).trim()] = seg.slice(idx + 1).trim();
  });
  return out;
}

function inferCategoryFromParams(params) {
  // 优先使用 GXF marker
  const m = parseGxfMarker(params.genreTitle || "");
  if (m.cat) return { cat: m.cat, area: m.area || "", vid: m.vid || "", t: m.t || "" };
  const text = [
    params.genreTitle || "",
    params.tagsText || "",
    params.title || "",
    params.seriesName || "",
    params.originalTitle || "",
    params.tmdbInfo && params.tmdbInfo.originalTitle || ""
  ].join(" ");
  let cat = "";
  if (params.type === "movie") cat = "movie";
  else if (/动漫|动画|漫画|Animation|Anime/i.test(text)) cat = "anime";
  else if (/综艺|脱口秀|真人秀|Reality|Talk[- ]?Show/i.test(text)) cat = "variety";
  else if (/纪录|Documentary/i.test(text)) cat = "documentary";
  else cat = "tv";
  return { cat, area: "", vid: "", t: "" };
}

async function loadResource(rawParams = {}) {
  const seed = Object.assign({}, rawParams);
  const initialType = normalizeMediaType(seed.type) || normalizeMediaType(seed.mediaType);
  const rawTmdbId = seed.tmdbId || (initialType === "movie" && /^\d+$/.test(String(seed.id || "")) ? seed.id : "");
  const tmdbId = String(rawTmdbId || "").replace(/^movie\./i, "").trim();
  let movieContext = null;
  let binding = null;
  if (initialType === "movie") {
    binding = loadMediaBinding("movie", tmdbId);
    if (tmdbId) movieContext = await getTmdbMovieContext(tmdbId);
    if (movieContext) {
      seed.title = movieContext.title || seed.title;
      seed.seriesName = movieContext.title || seed.seriesName || seed.title;
      seed.originalTitle = movieContext.originalTitle || seed.originalTitle;
      seed.releaseDate = movieContext.releaseDate || seed.releaseDate;
      seed.premiereDate = movieContext.releaseDate || seed.premiereDate;
      if (binding && binding.year && movieContext.year && binding.year !== movieContext.year) binding = null;
    } else if (binding) {
      seed.seriesName = binding.title || seed.seriesName || seed.title;
      seed.releaseDate = binding.year || seed.releaseDate;
      seed.premiereDate = binding.year || seed.premiereDate;
    }
  }
  const params = buildPlaybackContext(seed);
  const rawSeries = String(params.seriesName || "").trim();
  const searchKeyword = stripSeasonHints(rawSeries) || rawSeries;
  if (!searchKeyword) return [];
  if (params.type !== "movie" && (toInt(params.season, 0) <= 0 || toInt(params.episode, 0) <= 0)) return [];
  const meta = inferCategoryFromParams(params);
  const enrichedParams = Object.assign({}, params, {
    __gxfCategory: binding && binding.category || meta.cat,
    __gxfArea: binding && binding.area || meta.area,
    __gxfVid: binding && binding.vodId || meta.vid,
    __gxfActor: movieContext && movieContext.actors || ""
  });
  const searchData = await privatePost("/App/Index/findMoreVod", { keywords: searchKeyword, order_val: "" });
  const candidates = safeArray(searchData && searchData.list);
  if (params.type === "movie" && !String(params.premiereDate || params.releaseDate || "").slice(0, 4)) {
    const wantedName = normalizeName(stripQualityTag(searchKeyword));
    const years = [];
    for (const item of candidates) {
      if (normalizeName(stripQualityTag(item.vod_name || item.title || "")) !== wantedName) continue;
      const y = String(item.vod_year || "").slice(0, 4);
      if (y && years.indexOf(y) < 0) years.push(y);
    }
    if (years.length > 1) return [];
  }
  let best = pickBestVod(candidates, enrichedParams);
  if (!best && params.type !== "movie" && toInt(params.season, 0) > 1) {
    const seasonKeyword = rawSeries + " 第" + params.season + "季";
    const seasonData = await privatePost("/App/Index/findMoreVod", { keywords: seasonKeyword, order_val: "" });
    const merged = candidates.concat(safeArray(seasonData && seasonData.list).filter(item => !candidates.some(old => String(old.vod_id || "") === String(item.vod_id || ""))));
    best = pickBestVod(merged, enrichedParams);
  }
  if (!best || !best.vod_id) return [];
  if (params.type === "movie" && tmdbId) saveMediaBinding("movie", tmdbId, best);
  const wantEp = toInt(params.episode, 0);
  if (params.type !== "movie" && wantEp > 0) {
    const updated = toInt(best.vod_continu, 0);
    if (updated > 0 && wantEp > updated) {
      try { console.log("[forward_rank] episode " + wantEp + " not yet released for vod_id=" + best.vod_id + " (updated to " + updated + ")"); } catch (e) {}
      return [];
    }
  }
  const vurlData = await privatePost("/App/Resource/Vurl/show", { vod_d_id: best.vod_id, vurl_cloud_id: "2" });
  const pickedEp = pickEpisode(vurlData && vurlData.list, params);
  if (!pickedEp) return [];
  return await resolvePlayUrls(pickedEp, params);
}
