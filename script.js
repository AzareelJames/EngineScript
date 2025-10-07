import * as EGS from "./EGS.builtin.d.js";
EGS.EGS_ExecFile("EngineScript.egs");


const does = document.getElementById("does");
const __does__ = ["An Easy language", "Simple way", "Understandable code", "No hard ways"];

let i = 0;

does.innerText = __does__[i];

setInterval(() => {
    i++;
    i %= __does__.length
    does.innerText = __does__[i];
}, 3000);

console.log