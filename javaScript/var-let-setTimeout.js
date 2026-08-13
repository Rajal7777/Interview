//Fix bug
for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


/*
//EXPLANATION:
//var is function-scoped, and if declared outside any function, it becomes globally scoped.
because this loop is in the global scope, i is global here”

//then harek loop ma var can be accessed and modified by all the iterations of the loop
//ok loop ko flow 1st loop ma hamro var 0 hunca ra setTimeout callback register huncha loop agade badxa
//then 2nd loop ma var 1 hunca ra setTimeout callback register huncha
//then 3rd loop ma var 2 hunca ra setTimeout callback register huncha
//then 4th loop ma var 3 hunca ra setTimeout callback register huncha
//then 5th loop ma var 4 hunca ra loop terminate huncha

/ani i < 4 false bhayepachi loop terminate huncha. Since setTimeout callbacks delayed chan, loop terminate huda samma i ko value 4 bhaisakeko huncha. 1 second pachi callbacks task queue ma jancha, Event Loop le callbacks lai Call Stack ma ek-ek gardai execute garcha. Callback le same i variable lai access garne bhayeko le sabai callbacks le current value 4 print garchan. Therefore output 4 4 4 4 huncha.

callback 1 → i = 4
callback 2 → i = 4
callback 3 → i = 4
callback 4 → i = 4

*/

/*

| Step | `i` ko value | Loop ko action        | `setTimeout` ma ke huncha? |
| ---- | -----------: | --------------------- | -------------------------- |
| 1    |          `0` | callback register     | callback #1 registered     |
| 2    |          `1` | callback register     | callback #2 registered     |
| 3    |          `2` | callback register     | callback #3 registered     |
| 4    |          `3` | callback register     | callback #4 registered     |
| 5    |          `4` | `i < 4` false         | loop समाप्त                |
| 6    |          `4` | 1 sec पछि callback #1 | `console.log(i)` → **4**   |
| 7    |          `4` | 1 sec पछि callback #2 | `console.log(i)` → **4**   |
| 8    |          `4` | 1 sec पछि callback #3 | `console.log(i)` → **4**   |
| 9    |          `4` | 1 sec पछि callback #4 | `console.log(i)` → **4**   |


*/
/* ==================================================================================== */

for(let a = 0; a < 4; a++) {
 setTimeout(() => {
    console.log(a);
  }, 1000);
}

/*
let is block-scoped, so each iteration of the loop gets its own binding of a. Each setTimeout callback closes over that iteration's a, so after one second they print 0, 1, 2, 3.

Roman Nepali ma:

let block-scoped bhayeko le harek loop iteration ko a separate huncha, ra callback le tyo iteration ko a lai remember garcha. Tei bhayera output 0, 1, 2, 3 aaucha.

*/



/* ==================================================================================== */



for (var i = 0; i < 4; i++) {
 (function catchthevalueof(i){
   setTimeout(() => {
    console.log(i);
  }, 1000);
 })(i);
}


!function(i) {
  console.log(i);
}(5);

/*
English:

IIFE creates a new function scope for each iteration and captures the current value of i, so each callback prints its own value.


🇳🇵 Roman Nepali Explanation

var function-scoped bhayeko le normal case ma sabai callbacks le same i variable share garchan. Tara IIFE use garepachi harek iteration ma new function scope create huncha. Current i ko value immediately function ko parameter ma pass huncha. Tyo parameter ko value lai setTimeout ko callback le closure through remember garcha. Tesaile first callback le 0, second le 1, third le 2, ra fourth le 3 print garcha.

🇯🇵 Japanese Interview Answer

var は関数スコープなので、通常はすべてのコールバックが同じ i を参照します。この例では IIFE を使って、ループの各繰り返しごとに新しいスコープを作っています。その時点の i の値を IIFE の引数として渡すことで、その値が関数内のパラメータとして保存されます。setTimeout のコールバックはその値をクロージャによって保持するため、結果として 0、1、2、3 が出力されます。

*/