import { sleep } from "bun";
import figlet from "figlet";

console.log("Hello via Bun!");
const body = figlet.textSync('Bun');
await sleep(2000);
console.log(body)