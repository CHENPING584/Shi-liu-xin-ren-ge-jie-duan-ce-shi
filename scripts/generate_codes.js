
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

const COUNT = 10000;
const CODE_LENGTH = 8;
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // No I, O, 1, 0 to avoid confusion

function generateCode() {
    let result = '';
    for (let i = 0; i < CODE_LENGTH; i++) {
        result += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    return result;
}

const codes = new Set();
while (codes.size < COUNT) {
    codes.add(generateCode());
}

const codeList = Array.from(codes);
const hashList = codeList.map(code => {
    return crypto.createHash('sha256').update(code).digest('hex');
});

// Write raw codes to file for the user
fs.writeFileSync('auth_codes_export.txt', codeList.join('\n'));

// Write hashes to public directory for the app
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(
    path.join(publicDir, 'auth_hashes.json'), 
    JSON.stringify(hashList)
);

console.log(`Generated ${COUNT} codes.`);
console.log('Raw codes saved to: auth_codes_export.txt');
console.log('Hashes saved to: public/auth_hashes.json');
