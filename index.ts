import { sleep } from "bun";
import figlet from "figlet";

console.log("Magic link implementation");
const body = figlet.textSync("Magic link bun server");

// Set timeout to 2s
await sleep(2000);
console.log(body);
