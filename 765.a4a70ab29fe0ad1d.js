(self.webpackChunkngapp=self.webpackChunkngapp||[]).push([[765],{5876:(I,i,a)=>{const t=a(532),e=a(7554),n=a(179),o=a(1036);function s(u,l,d,A,M){const E=[].slice.call(arguments,1),p=E.length,m="function"==typeof E[p-1];if(!m&&!t())throw new Error("Callback required as last argument");if(!m){if(p<1)throw new Error("Too few arguments provided");return 1===p?(d=l,l=A=void 0):2===p&&!l.getContext&&(A=d,d=l,l=void 0),new Promise(function(R,g){try{const c=e.create(d,A);R(u(c,l,A))}catch(c){g(c)}})}if(p<2)throw new Error("Too few arguments provided");2===p?(M=d,d=l,l=A=void 0):3===p&&(l.getContext&&void 0===M?(M=A,A=void 0):(M=A,A=d,d=l,l=void 0));try{const R=e.create(d,A);M(null,u(R,l,A))}catch(R){M(R)}}i.rT=s.bind(null,n.render),i.hz=s.bind(null,n.renderToDataURL),i.toString=s.bind(null,function(u,l,d){return o.render(u,d)})},532:I=>{I.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},3012:(I,i,a)=>{const r=a(4860).getSymbolSize;i.getRowColCoords=function(e){if(1===e)return[];const n=Math.floor(e/7)+2,o=r(e),s=145===o?26:2*Math.ceil((o-13)/(2*n-2)),u=[o-7];for(let l=1;l<n-1;l++)u[l]=u[l-1]-s;return u.push(6),u.reverse()},i.getPositions=function(e){const n=[],o=i.getRowColCoords(e),s=o.length;for(let u=0;u<s;u++)for(let l=0;l<s;l++)0===u&&0===l||0===u&&l===s-1||u===s-1&&0===l||n.push([o[u],o[l]]);return n}},812:(I,i,a)=>{const r=a(6906),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(n){this.mode=r.ALPHANUMERIC,this.data=n}e.getBitsLength=function(o){return 11*Math.floor(o/2)+o%2*6},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(o){let s;for(s=0;s+2<=this.data.length;s+=2){let u=45*t.indexOf(this.data[s]);u+=t.indexOf(this.data[s+1]),o.put(u,11)}this.data.length%2&&o.put(t.indexOf(this.data[s]),6)},I.exports=e},3044:I=>{function i(){this.buffer=[],this.length=0}i.prototype={get:function(a){const r=Math.floor(a/8);return 1==(this.buffer[r]>>>7-a%8&1)},put:function(a,r){for(let t=0;t<r;t++)this.putBit(1==(a>>>r-t-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){const r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),a&&(this.buffer[r]|=128>>>this.length%8),this.length++}},I.exports=i},1973:I=>{function i(a){if(!a||a<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=a,this.data=new Uint8Array(a*a),this.reservedBit=new Uint8Array(a*a)}i.prototype.set=function(a,r,t,e){const n=a*this.size+r;this.data[n]=t,e&&(this.reservedBit[n]=!0)},i.prototype.get=function(a,r){return this.data[a*this.size+r]},i.prototype.xor=function(a,r,t){this.data[a*this.size+r]^=t},i.prototype.isReserved=function(a,r){return this.reservedBit[a*this.size+r]},I.exports=i},1824:(I,i,a)=>{const r=a(8419),t=a(6906);function e(n){this.mode=t.BYTE,this.data=new Uint8Array(r(n))}e.getBitsLength=function(o){return 8*o},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){for(let o=0,s=this.data.length;o<s;o++)n.put(this.data[o],8)},I.exports=e},6194:(I,i,a)=>{const r=a(9020),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];i.getBlocksCount=function(o,s){switch(s){case r.L:return t[4*(o-1)+0];case r.M:return t[4*(o-1)+1];case r.Q:return t[4*(o-1)+2];case r.H:return t[4*(o-1)+3];default:return}},i.getTotalCodewordsCount=function(o,s){switch(s){case r.L:return e[4*(o-1)+0];case r.M:return e[4*(o-1)+1];case r.Q:return e[4*(o-1)+2];case r.H:return e[4*(o-1)+3];default:return}}},9020:(I,i)=>{i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2},i.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},i.from=function(t,e){if(i.isValid(t))return t;try{return function a(r){if("string"!=typeof r)throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+r)}}(t)}catch(n){return e}}},9172:(I,i,a)=>{const r=a(4860).getSymbolSize;i.getPositions=function(n){const o=r(n);return[[0,0],[o-7,0],[0,o-7]]}},611:(I,i,a)=>{const r=a(4860),n=r.getBCHDigit(1335);i.getEncodedBits=function(s,u){const l=s.bit<<3|u;let d=l<<10;for(;r.getBCHDigit(d)-n>=0;)d^=1335<<r.getBCHDigit(d)-n;return 21522^(l<<10|d)}},7794:(I,i)=>{const a=new Uint8Array(512),r=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)a[n]=e,r[e]=n,e<<=1,256&e&&(e^=285);for(let n=255;n<512;n++)a[n]=a[n-255]})(),i.log=function(e){if(e<1)throw new Error("log("+e+")");return r[e]},i.exp=function(e){return a[e]},i.mul=function(e,n){return 0===e||0===n?0:a[r[e]+r[n]]}},8043:(I,i,a)=>{const r=a(6906),t=a(4860);function e(n){this.mode=r.KANJI,this.data=n}e.getBitsLength=function(o){return 13*o},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let o;for(o=0;o<this.data.length;o++){let s=t.toSJIS(this.data[o]);if(s>=33088&&s<=40956)s-=33088;else{if(!(s>=57408&&s<=60351))throw new Error("Invalid SJIS character: "+this.data[o]+"\nMake sure your charset is UTF-8");s-=49472}s=192*(s>>>8&255)+(255&s),n.put(s,13)}},I.exports=e},7135:(I,i)=>{i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function r(t,e,n){switch(t){case i.Patterns.PATTERN000:return(e+n)%2==0;case i.Patterns.PATTERN001:return e%2==0;case i.Patterns.PATTERN010:return n%3==0;case i.Patterns.PATTERN011:return(e+n)%3==0;case i.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case i.Patterns.PATTERN101:return e*n%2+e*n%3==0;case i.Patterns.PATTERN110:return(e*n%2+e*n%3)%2==0;case i.Patterns.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}i.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},i.from=function(e){return i.isValid(e)?parseInt(e,10):void 0},i.getPenaltyN1=function(e){const n=e.size;let o=0,s=0,u=0,l=null,d=null;for(let A=0;A<n;A++){s=u=0,l=d=null;for(let M=0;M<n;M++){let E=e.get(A,M);E===l?s++:(s>=5&&(o+=s-5+3),l=E,s=1),E=e.get(M,A),E===d?u++:(u>=5&&(o+=u-5+3),d=E,u=1)}s>=5&&(o+=s-5+3),u>=5&&(o+=u-5+3)}return o},i.getPenaltyN2=function(e){const n=e.size;let o=0;for(let s=0;s<n-1;s++)for(let u=0;u<n-1;u++){const l=e.get(s,u)+e.get(s,u+1)+e.get(s+1,u)+e.get(s+1,u+1);(4===l||0===l)&&o++}return 3*o},i.getPenaltyN3=function(e){const n=e.size;let o=0,s=0,u=0;for(let l=0;l<n;l++){s=u=0;for(let d=0;d<n;d++)s=s<<1&2047|e.get(l,d),d>=10&&(1488===s||93===s)&&o++,u=u<<1&2047|e.get(d,l),d>=10&&(1488===u||93===u)&&o++}return 40*o},i.getPenaltyN4=function(e){let n=0;const o=e.data.length;for(let u=0;u<o;u++)n+=e.data[u];return 10*Math.abs(Math.ceil(100*n/o/5)-10)},i.applyMask=function(e,n){const o=n.size;for(let s=0;s<o;s++)for(let u=0;u<o;u++)n.isReserved(u,s)||n.xor(u,s,r(e,u,s))},i.getBestMask=function(e,n){const o=Object.keys(i.Patterns).length;let s=0,u=1/0;for(let l=0;l<o;l++){n(l),i.applyMask(l,e);const d=i.getPenaltyN1(e)+i.getPenaltyN2(e)+i.getPenaltyN3(e)+i.getPenaltyN4(e);i.applyMask(l,e),d<u&&(u=d,s=l)}return s}},6906:(I,i,a)=>{const r=a(2316),t=a(4677);i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!r.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},i.getBestModeForData=function(o){return t.testNumeric(o)?i.NUMERIC:t.testAlphanumeric(o)?i.ALPHANUMERIC:t.testKanji(o)?i.KANJI:i.BYTE},i.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},i.isValid=function(o){return o&&o.bit&&o.ccBits},i.from=function(o,s){if(i.isValid(o))return o;try{return function e(n){if("string"!=typeof n)throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+n)}}(o)}catch(u){return s}}},6002:(I,i,a)=>{const r=a(6906);function t(e){this.mode=r.NUMERIC,this.data=e.toString()}t.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let o,s,u;for(o=0;o+3<=this.data.length;o+=3)s=this.data.substr(o,3),u=parseInt(s,10),n.put(u,10);const l=this.data.length-o;l>0&&(s=this.data.substr(o),u=parseInt(s,10),n.put(u,3*l+1))},I.exports=t},7793:(I,i,a)=>{const r=a(7794);i.mul=function(e,n){const o=new Uint8Array(e.length+n.length-1);for(let s=0;s<e.length;s++)for(let u=0;u<n.length;u++)o[s+u]^=r.mul(e[s],n[u]);return o},i.mod=function(e,n){let o=new Uint8Array(e);for(;o.length-n.length>=0;){const s=o[0];for(let l=0;l<n.length;l++)o[l]^=r.mul(n[l],s);let u=0;for(;u<o.length&&0===o[u];)u++;o=o.slice(u)}return o},i.generateECPolynomial=function(e){let n=new Uint8Array([1]);for(let o=0;o<e;o++)n=i.mul(n,new Uint8Array([1,r.exp(o)]));return n}},7554:(I,i,a)=>{const r=a(4860),t=a(9020),e=a(3044),n=a(1973),o=a(3012),s=a(9172),u=a(7135),l=a(6194),d=a(8098),A=a(6602),M=a(611),E=a(6906),p=a(9465);function f(C,B,b){const y=C.size,S=M.getEncodedBits(B,b);let L,T;for(L=0;L<15;L++)T=1==(S>>L&1),C.set(L<6?L:L<8?L+1:y-15+L,8,T,!0),C.set(8,L<8?y-L-1:L<9?15-L-1+1:15-L-1,T,!0);C.set(y-8,8,1,!0)}function P(C,B,b,y){let S;if(Array.isArray(C))S=p.fromArray(C);else{if("string"!=typeof C)throw new Error("Invalid data");{let k=B;if(!k){const F=p.rawSplit(C);k=A.getBestVersionForData(F,b)}S=p.fromString(C,k||40)}}const L=A.getBestVersionForData(S,b);if(!L)throw new Error("The amount of data is too big to be stored in a QR Code");if(B){if(B<L)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+L+".\n")}else B=L;const T=function w(C,B,b){const y=new e;b.forEach(function(N){y.put(N.mode.bit,4),y.put(N.getLength(),E.getCharCountIndicator(N.mode,C)),N.write(y)});const T=8*(r.getSymbolTotalCodewords(C)-l.getTotalCodewordsCount(C,B));for(y.getLengthInBits()+4<=T&&y.put(0,4);y.getLengthInBits()%8!=0;)y.putBit(0);const U=(T-y.getLengthInBits())/8;for(let N=0;N<U;N++)y.put(N%2?17:236,8);return function v(C,B,b){const y=r.getSymbolTotalCodewords(B),L=y-l.getTotalCodewordsCount(B,b),T=l.getBlocksCount(B,b),N=T-y%T,k=Math.floor(y/T),F=Math.floor(L/T),Y=F+1,V=k-F,j=new d(V);let q=0;const Z=new Array(T),K=new Array(T);let J=0;const G=new Uint8Array(C.buffer);for(let Q=0;Q<T;Q++){const H=Q<N?F:Y;Z[Q]=G.slice(q,q+H),K[Q]=j.encode(Z[Q]),q+=H,J=Math.max(J,H)}const z=new Uint8Array(y);let _,D,O=0;for(_=0;_<J;_++)for(D=0;D<T;D++)_<Z[D].length&&(z[O++]=Z[D][_]);for(_=0;_<V;_++)for(D=0;D<T;D++)z[O++]=K[D][_];return z}(y,C,B)}(B,b,S),U=r.getSymbolSize(B),N=new n(U);return function m(C,B){const b=C.size,y=s.getPositions(B);for(let S=0;S<y.length;S++){const L=y[S][0],T=y[S][1];for(let U=-1;U<=7;U++)if(!(L+U<=-1||b<=L+U))for(let N=-1;N<=7;N++)T+N<=-1||b<=T+N||C.set(L+U,T+N,U>=0&&U<=6&&(0===N||6===N)||N>=0&&N<=6&&(0===U||6===U)||U>=2&&U<=4&&N>=2&&N<=4,!0)}}(N,B),function R(C){const B=C.size;for(let b=8;b<B-8;b++){const y=b%2==0;C.set(b,6,y,!0),C.set(6,b,y,!0)}}(N),function g(C,B){const b=o.getPositions(B);for(let y=0;y<b.length;y++){const S=b[y][0],L=b[y][1];for(let T=-2;T<=2;T++)for(let U=-2;U<=2;U++)C.set(S+T,L+U,-2===T||2===T||-2===U||2===U||0===T&&0===U,!0)}}(N,B),f(N,b,0),B>=7&&function c(C,B){const b=C.size,y=A.getEncodedBits(B);let S,L,T;for(let U=0;U<18;U++)S=Math.floor(U/3),L=U%3+b-8-3,T=1==(y>>U&1),C.set(S,L,T,!0),C.set(L,S,T,!0)}(N,B),function h(C,B){const b=C.size;let y=-1,S=b-1,L=7,T=0;for(let U=b-1;U>0;U-=2)for(6===U&&U--;;){for(let N=0;N<2;N++)if(!C.isReserved(S,U-N)){let k=!1;T<B.length&&(k=1==(B[T]>>>L&1)),C.set(S,U-N,k),L--,-1===L&&(T++,L=7)}if(S+=y,S<0||b<=S){S-=y,y=-y;break}}}(N,T),isNaN(y)&&(y=u.getBestMask(N,f.bind(null,N,b))),u.applyMask(y,N),f(N,b,y),{modules:N,version:B,errorCorrectionLevel:b,maskPattern:y,segments:S}}i.create=function(B,b){if(void 0===B||""===B)throw new Error("No input text");let S,L,y=t.M;return void 0!==b&&(y=t.from(b.errorCorrectionLevel,t.M),S=A.from(b.version),L=u.from(b.maskPattern),b.toSJISFunc&&r.setToSJISFunction(b.toSJISFunc)),P(B,S,y,L)}},8098:(I,i,a)=>{const r=a(7793);function t(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}t.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},t.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(n.length+this.degree);o.set(n);const s=r.mod(o,this.genPoly),u=this.degree-s.length;if(u>0){const l=new Uint8Array(this.degree);return l.set(s,u),l}return s},I.exports=t},4677:(I,i)=>{const a="[0-9]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+")(?:.|[\r\n]))+";i.KANJI=new RegExp(t,"g"),i.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),i.BYTE=new RegExp(e,"g"),i.NUMERIC=new RegExp(a,"g"),i.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const n=new RegExp("^"+t+"$"),o=new RegExp("^"+a+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");i.testKanji=function(l){return n.test(l)},i.testNumeric=function(l){return o.test(l)},i.testAlphanumeric=function(l){return s.test(l)}},9465:(I,i,a)=>{const r=a(6906),t=a(6002),e=a(812),n=a(1824),o=a(8043),s=a(4677),u=a(4860),l=a(4901);function d(c){return unescape(encodeURIComponent(c)).length}function A(c,f,h){const w=[];let v;for(;null!==(v=c.exec(h));)w.push({data:v[0],index:v.index,mode:f,length:v[0].length});return w}function M(c){const f=A(s.NUMERIC,r.NUMERIC,c),h=A(s.ALPHANUMERIC,r.ALPHANUMERIC,c);let w,v;return u.isKanjiModeEnabled()?(w=A(s.BYTE,r.BYTE,c),v=A(s.KANJI,r.KANJI,c)):(w=A(s.BYTE_KANJI,r.BYTE,c),v=[]),f.concat(h,w,v).sort(function(C,B){return C.index-B.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function E(c,f){switch(f){case r.NUMERIC:return t.getBitsLength(c);case r.ALPHANUMERIC:return e.getBitsLength(c);case r.KANJI:return o.getBitsLength(c);case r.BYTE:return n.getBitsLength(c)}}function g(c,f){let h;const w=r.getBestModeForData(c);if(h=r.from(f,w),h!==r.BYTE&&h.bit<w.bit)throw new Error('"'+c+'" cannot be encoded with mode '+r.toString(h)+".\n Suggested mode is: "+r.toString(w));switch(h===r.KANJI&&!u.isKanjiModeEnabled()&&(h=r.BYTE),h){case r.NUMERIC:return new t(c);case r.ALPHANUMERIC:return new e(c);case r.KANJI:return new o(c);case r.BYTE:return new n(c)}}i.fromArray=function(f){return f.reduce(function(h,w){return"string"==typeof w?h.push(g(w,null)):w.data&&h.push(g(w.data,w.mode)),h},[])},i.fromString=function(f,h){const v=function m(c){const f=[];for(let h=0;h<c.length;h++){const w=c[h];switch(w.mode){case r.NUMERIC:f.push([w,{data:w.data,mode:r.ALPHANUMERIC,length:w.length},{data:w.data,mode:r.BYTE,length:w.length}]);break;case r.ALPHANUMERIC:f.push([w,{data:w.data,mode:r.BYTE,length:w.length}]);break;case r.KANJI:f.push([w,{data:w.data,mode:r.BYTE,length:d(w.data)}]);break;case r.BYTE:f.push([{data:w.data,mode:r.BYTE,length:d(w.data)}])}}return f}(M(f,u.isKanjiModeEnabled())),P=function R(c,f){const h={},w={start:{}};let v=["start"];for(let P=0;P<c.length;P++){const C=c[P],B=[];for(let b=0;b<C.length;b++){const y=C[b],S=""+P+b;B.push(S),h[S]={node:y,lastCount:0},w[S]={};for(let L=0;L<v.length;L++){const T=v[L];h[T]&&h[T].node.mode===y.mode?(w[T][S]=E(h[T].lastCount+y.length,y.mode)-E(h[T].lastCount,y.mode),h[T].lastCount+=y.length):(h[T]&&(h[T].lastCount=y.length),w[T][S]=E(y.length,y.mode)+4+r.getCharCountIndicator(y.mode,f))}}v=B}for(let P=0;P<v.length;P++)w[v[P]].end=0;return{map:w,table:h}}(v,h),C=l.find_path(P.map,"start","end"),B=[];for(let b=1;b<C.length-1;b++)B.push(P.table[C[b]].node);return i.fromArray(function p(c){return c.reduce(function(f,h){const w=f.length-1>=0?f[f.length-1]:null;return w&&w.mode===h.mode?(f[f.length-1].data+=h.data,f):(f.push(h),f)},[])}(B))},i.rawSplit=function(f){return i.fromArray(M(f,u.isKanjiModeEnabled()))}},4860:(I,i)=>{let a;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];i.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},i.getSymbolTotalCodewords=function(e){return r[e]},i.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},i.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');a=e},i.isKanjiModeEnabled=function(){return void 0!==a},i.toSJIS=function(e){return a(e)}},2316:(I,i)=>{i.isValid=function(r){return!isNaN(r)&&r>=1&&r<=40}},6602:(I,i,a)=>{const r=a(4860),t=a(6194),e=a(9020),n=a(6906),o=a(2316),u=r.getBCHDigit(7973);function d(E,p){return n.getCharCountIndicator(E,p)+4}function A(E,p){let m=0;return E.forEach(function(R){m+=d(R.mode,p)+R.getBitsLength()}),m}i.from=function(p,m){return o.isValid(p)?parseInt(p,10):m},i.getCapacity=function(p,m,R){if(!o.isValid(p))throw new Error("Invalid QR Code version");void 0===R&&(R=n.BYTE);const f=8*(r.getSymbolTotalCodewords(p)-t.getTotalCodewordsCount(p,m));if(R===n.MIXED)return f;const h=f-d(R,p);switch(R){case n.NUMERIC:return Math.floor(h/10*3);case n.ALPHANUMERIC:return Math.floor(h/11*2);case n.KANJI:return Math.floor(h/13);default:return Math.floor(h/8)}},i.getBestVersionForData=function(p,m){let R;const g=e.from(m,e.M);if(Array.isArray(p)){if(p.length>1)return function M(E,p){for(let m=1;m<=40;m++)if(A(E,m)<=i.getCapacity(m,p,n.MIXED))return m}(p,g);if(0===p.length)return 1;R=p[0]}else R=p;return function l(E,p,m){for(let R=1;R<=40;R++)if(p<=i.getCapacity(R,m,E))return R}(R.mode,R.getLength(),g)},i.getEncodedBits=function(p){if(!o.isValid(p)||p<7)throw new Error("Invalid QR Code version");let m=p<<12;for(;r.getBCHDigit(m)-u>=0;)m^=7973<<r.getBCHDigit(m)-u;return p<<12|m}},179:(I,i,a)=>{const r=a(714);i.render=function(o,s,u){let l=u,d=s;void 0===l&&(!s||!s.getContext)&&(l=s,s=void 0),s||(d=function e(){try{return document.createElement("canvas")}catch(n){throw new Error("You need to specify a canvas element")}}()),l=r.getOptions(l);const A=r.getImageWidth(o.modules.size,l),M=d.getContext("2d"),E=M.createImageData(A,A);return r.qrToImageData(E.data,o,l),function t(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}(M,d,A),M.putImageData(E,0,0),d},i.renderToDataURL=function(o,s,u){let l=u;return void 0===l&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={}),i.render(o,s,l).toDataURL(l.type||"image/png",(l.rendererOpts||{}).quality)}},1036:(I,i,a)=>{const r=a(714);function t(o,s){const u=o.a/255,l=s+'="'+o.hex+'"';return u<1?l+" "+s+'-opacity="'+u.toFixed(2).slice(1)+'"':l}function e(o,s,u){let l=o+s;return void 0!==u&&(l+=" "+u),l}i.render=function(s,u,l){const d=r.getOptions(u),A=s.modules.size,M=s.modules.data,E=A+2*d.margin,p=d.color.light.a?"<path "+t(d.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",m="<path "+t(d.color.dark,"stroke")+' d="'+function n(o,s,u){let l="",d=0,A=!1,M=0;for(let E=0;E<o.length;E++){const p=Math.floor(E%s),m=Math.floor(E/s);!p&&!A&&(A=!0),o[E]?(M++,E>0&&p>0&&o[E-1]||(l+=A?e("M",p+u,.5+m+u):e("m",d,0),d=0,A=!1),p+1<s&&o[E+1]||(l+=e("h",M),M=0)):d++}return l}(M,A,d.margin)+'"/>',c='<svg xmlns="http://www.w3.org/2000/svg" '+(d.width?'width="'+d.width+'" height="'+d.width+'" ':"")+'viewBox="0 0 '+E+" "+E+'" shape-rendering="crispEdges">'+p+m+"</svg>\n";return"function"==typeof l&&l(null,c),c}},714:(I,i)=>{function a(r){if("number"==typeof r&&(r=r.toString()),"string"!=typeof r)throw new Error("Color should be defined as hex string");let t=r.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+r);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(n){return[n,n]}))),6===t.length&&t.push("F","F");const e=parseInt(t.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+t.slice(0,6).join("")}}i.getOptions=function(t){t||(t={}),t.color||(t.color={});const n=t.width&&t.width>=21?t.width:void 0;return{width:n,scale:n?4:t.scale||4,margin:null==t.margin||t.margin<0?4:t.margin,color:{dark:a(t.color.dark||"#000000ff"),light:a(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},i.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},i.getImageWidth=function(t,e){const n=i.getScale(t,e);return Math.floor((t+2*e.margin)*n)},i.qrToImageData=function(t,e,n){const o=e.modules.size,s=e.modules.data,u=i.getScale(o,n),l=Math.floor((o+2*n.margin)*u),d=n.margin*u,A=[n.color.light,n.color.dark];for(let M=0;M<l;M++)for(let E=0;E<l;E++){let p=4*(M*l+E),m=n.color.light;M>=d&&E>=d&&M<l-d&&E<l-d&&(m=A[s[Math.floor((M-d)/u)*o+Math.floor((E-d)/u)]?1:0]),t[p++]=m.r,t[p++]=m.g,t[p++]=m.b,t[p]=m.a}}},2765:(I,i,a)=>{"use strict";a.r(i),a.d(i,{QrcodeModule:()=>p});var r=a(9808),t=a(1223),e=a(655),n=a(5876),o=a(2313);const s=["qrcElement"];let u=(()=>{class m{constructor(g,c){this.renderer=g,this.sanitizer=c,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.qrCodeURL=new t.vpe,this.context=null}ngOnChanges(){return(0,e.mG)(this,void 0,void 0,function*(){yield this.createQRCode()})}isValidQrCodeText(g){return!1===this.allowEmptyString?!(void 0===g||""===g||"null"===g||null===g):void 0!==g}toDataURL(g){return new Promise((c,f)=>{n.hz(this.qrdata,g,(h,w)=>{h?f(h):c(w)})})}toCanvas(g,c){return new Promise((f,h)=>{n.rT(g,this.qrdata,c,w=>{w?h(w):f("success")})})}toSVG(g){return new Promise((c,f)=>{n.toString(this.qrdata,g,(h,w)=>{h?f(h):c(w)})})}renderElement(g){for(const c of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,c);this.renderer.appendChild(this.qrcElement.nativeElement,g)}createQRCode(){return(0,e.mG)(this,void 0,void 0,function*(){this.version&&this.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),this.version=40):this.version&&this.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),this.version=1):void 0!==this.version&&isNaN(this.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),this.version=void 0);try{if(!this.isValidQrCodeText(this.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");this.isValidQrCodeText(this.qrdata)&&""===this.qrdata&&(this.qrdata=" ");const g={color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,type:this.elementType,version:this.version,width:this.width},c=this.imageSrc,f=this.imageHeight||40,h=this.imageWidth||40;switch(this.elementType){case"canvas":const w=this.renderer.createElement("canvas");this.context=w.getContext("2d"),this.toCanvas(w,g).then(()=>{if(this.ariaLabel&&this.renderer.setAttribute(w,"aria-label",`${this.ariaLabel}`),this.title&&this.renderer.setAttribute(w,"title",`${this.title}`),c&&this.context){this.centerImage=new Image(h,f),c!==this.centerImage.src&&(this.centerImage.src=c),f!==this.centerImage.height&&(this.centerImage.height=f),h!==this.centerImage.width&&(this.centerImage.width=h);const C=this.centerImage;C&&(C.onload=()=>{var B;null===(B=this.context)||void 0===B||B.drawImage(C,w.width/2-h/2,w.height/2-f/2,h,f)})}this.renderElement(w),this.emitQRCodeURL(w)}).catch(C=>{console.error("[angularx-qrcode] canvas error:",C)});break;case"svg":const v=this.renderer.createElement("div");this.toSVG(g).then(C=>{this.renderer.setProperty(v,"innerHTML",C);const B=v.firstChild;this.renderer.setAttribute(B,"height",`${this.width}`),this.renderer.setAttribute(B,"width",`${this.width}`),this.renderElement(B),this.emitQRCodeURL(B)}).catch(C=>{console.error("[angularx-qrcode] svg error:",C)});break;default:const P=this.renderer.createElement("img");this.toDataURL(g).then(C=>{this.alt&&P.setAttribute("alt",this.alt),this.ariaLabel&&P.setAttribute("aria-label",this.ariaLabel),P.setAttribute("src",C),this.title&&P.setAttribute("title",this.title),this.renderElement(P),this.emitQRCodeURL(P)}).catch(C=>{console.error("[angularx-qrcode] img/url error:",C)})}}catch(g){console.error("[angularx-qrcode] Error generating QR Code:",g.message)}})}emitQRCodeURL(g){const c=g.constructor.name;if(c===SVGSVGElement.name){const w=new Blob([g.outerHTML],{type:"image/svg+xml"}),v=URL.createObjectURL(w),P=this.sanitizer.bypassSecurityTrustUrl(v);return void this.qrCodeURL.emit(P)}let f="";c===HTMLCanvasElement.name&&(f=g.toDataURL("image/png")),c===HTMLImageElement.name&&(f=g.src),fetch(f).then(h=>h.blob()).then(h=>URL.createObjectURL(h)).then(h=>this.sanitizer.bypassSecurityTrustUrl(h)).then(h=>{this.qrCodeURL.emit(h)}).catch(h=>{console.error("[angularx-qrcode] Error when fetching image/png URL: "+h)})}}return m.\u0275fac=function(g){return new(g||m)(t.Y36(t.Qsj),t.Y36(o.H7))},m.\u0275cmp=t.Xpm({type:m,selectors:[["qrcode"]],viewQuery:function(g,c){if(1&g&&t.Gf(s,7),2&g){let f;t.iGM(f=t.CRH())&&(c.qrcElement=f.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},features:[t.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(g,c){1&g&&t._UZ(0,"div",null,0),2&g&&t.Tol(c.cssClass)},encapsulation:2,changeDetection:0}),m})(),l=(()=>{class m{}return m.\u0275fac=function(g){return new(g||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({providers:[]}),m})();var d=a(2382);let A=(()=>{class m{constructor(){this.title="angular-qr-code-tutorial",this.qrCodeDownloadLink="",this.level="M",this.qrdata="Ramandeep Bhagat",this.width=64}ngOnInit(){}onChangeURL(g){this.qrCodeDownloadLink=g}changeLevel(g){this.level=g}changeQrdata(g){this.qrdata=g}changeWidth(g){this.width=g}}return m.\u0275fac=function(g){return new(g||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-qrcode"]],decls:54,vars:8,consts:[[1,"flexContainer"],[3,"qrdata","width","errorCorrectionLevel","qrCodeURL"],["download","qrcode",3,"href"],[3,"click"],["placeholder","name",3,"ngModel","ngModelChange"]],template:function(g,c){1&g&&(t.TgZ(0,"h2"),t._uU(1,"Generate QR-Code in Angular Application"),t.qZA(),t.TgZ(2,"div",0)(3,"div")(4,"div")(5,"div"),t._uU(6),t.qZA(),t.TgZ(7,"div"),t._uU(8),t.qZA(),t.TgZ(9,"div"),t._uU(10),t.qZA()(),t.TgZ(11,"div")(12,"qrcode",1),t.NdJ("qrCodeURL",function(h){return c.onChangeURL(h)}),t.qZA()(),t.TgZ(13,"div")(14,"a",2),t._uU(15,"Download"),t.qZA()()(),t.TgZ(16,"div")(17,"h3"),t._uU(18,"Change Values"),t.qZA(),t.TgZ(19,"h4"),t._uU(20,"QR-Code Data:"),t.qZA(),t.TgZ(21,"button",3),t.NdJ("click",function(){return c.changeQrdata("Ramandeep Bhagat")}),t._uU(22,' Set "Ramandeep Bhagat" '),t.qZA(),t.TgZ(23,"button",3),t.NdJ("click",function(){return c.changeQrdata("Saveen Dhiman")}),t._uU(24,'Set "Saveen Dhiman"'),t.qZA(),t.TgZ(25,"button",3),t.NdJ("click",function(){return c.changeQrdata("33")}),t._uU(26,'Set "33"'),t.qZA(),t._UZ(27,"br")(28,"br"),t.TgZ(29,"label"),t._uU(30," or type to change: "),t.TgZ(31,"input",4),t.NdJ("ngModelChange",function(h){return c.qrdata=h}),t.qZA()(),t.TgZ(32,"h4"),t._uU(33,"Change Level"),t.qZA(),t.TgZ(34,"button",3),t.NdJ("click",function(){return c.changeLevel("L")}),t._uU(35,"L"),t.qZA(),t.TgZ(36,"button",3),t.NdJ("click",function(){return c.changeLevel("M")}),t._uU(37,"M"),t.qZA(),t.TgZ(38,"button",3),t.NdJ("click",function(){return c.changeLevel("Q")}),t._uU(39,"Q"),t.qZA(),t.TgZ(40,"button",3),t.NdJ("click",function(){return c.changeLevel("H")}),t._uU(41,"H"),t.qZA(),t.TgZ(42,"h4"),t._uU(43,"Change Width"),t.qZA(),t.TgZ(44,"button",3),t.NdJ("click",function(){return c.changeWidth(512)}),t._uU(45,"512"),t.qZA(),t.TgZ(46,"button",3),t.NdJ("click",function(){return c.changeWidth(256)}),t._uU(47,"256"),t.qZA(),t.TgZ(48,"button",3),t.NdJ("click",function(){return c.changeWidth(128)}),t._uU(49,"128"),t.qZA(),t.TgZ(50,"button",3),t.NdJ("click",function(){return c.changeWidth(128)}),t._uU(51,"64"),t.qZA(),t.TgZ(52,"button",3),t.NdJ("click",function(){return c.changeWidth(10)}),t._uU(53,"10"),t.qZA()()()),2&g&&(t.xp6(6),t.hij("qrdata: ",c.qrdata,""),t.xp6(2),t.hij("level: ",c.level,""),t.xp6(2),t.hij("width: ",c.width,""),t.xp6(2),t.Q6J("qrdata",c.qrdata)("width",c.width)("errorCorrectionLevel",c.level),t.xp6(2),t.Q6J("href",c.qrCodeDownloadLink,t.LSH),t.xp6(17),t.Q6J("ngModel",c.qrdata))},directives:[u,d.Fj,d.JJ,d.On],styles:[""]}),m})();var M=a(5298);const E=[{path:"",component:A}];let p=(()=>{class m{}return m.\u0275fac=function(g){return new(g||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[[r.ez,d.u5,l,M.Bz.forChild(E)]]}),m})()},4901:I=>{"use strict";var i={single_source_shortest_paths:function(a,r,t){var e={},n={};n[r]=0;var s,u,l,d,A,E,o=i.PriorityQueue.make();for(o.push(r,0);!o.empty();)for(l in d=(s=o.pop()).cost,A=a[u=s.value]||{})A.hasOwnProperty(l)&&(E=d+A[l],(void 0===n[l]||n[l]>E)&&(n[l]=E,o.push(l,E),e[l]=u));if(void 0!==t&&void 0===n[t]){var R=["Could not find a path from ",r," to ",t,"."].join("");throw new Error(R)}return e},extract_shortest_path_from_predecessor_list:function(a,r){for(var t=[],e=r;e;)t.push(e),e=a[e];return t.reverse(),t},find_path:function(a,r,t){var e=i.single_source_shortest_paths(a,r,t);return i.extract_shortest_path_from_predecessor_list(e,t)},PriorityQueue:{make:function(a){var e,r=i.PriorityQueue,t={};for(e in a=a||{},r)r.hasOwnProperty(e)&&(t[e]=r[e]);return t.queue=[],t.sorter=a.sorter||r.default_sorter,t},default_sorter:function(a,r){return a.cost-r.cost},push:function(a,r){this.queue.push({value:a,cost:r}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};I.exports=i},8419:I=>{"use strict";I.exports=function(a){for(var r=[],t=a.length,e=0;e<t;e++){var n=a.charCodeAt(e);if(n>=55296&&n<=56319&&t>e+1){var o=a.charCodeAt(e+1);o>=56320&&o<=57343&&(n=1024*(n-55296)+o-56320+65536,e+=1)}n<128?r.push(n):n<2048?(r.push(n>>6|192),r.push(63&n|128)):n<55296||n>=57344&&n<65536?(r.push(n>>12|224),r.push(n>>6&63|128),r.push(63&n|128)):n>=65536&&n<=1114111?(r.push(n>>18|240),r.push(n>>12&63|128),r.push(n>>6&63|128),r.push(63&n|128)):r.push(239,191,189)}return new Uint8Array(r).buffer}}}]);