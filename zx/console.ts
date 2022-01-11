import {$, argv} from "zx"

const {opt} = argv

console.log(`echo argv.opt`);
(async () => {
    await $`echo ${opt}`;
})()
