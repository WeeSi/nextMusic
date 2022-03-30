export function encode(s, k) {
  let enc = "";
  for (let i = 0; i < s.length; i++) {
    let e = s.charCodeAt(i);
    let fe = e ^ k;

    enc += String.fromCharCode(fe);
  }
  return enc;
}
