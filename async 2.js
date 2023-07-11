const async =require("async");
function Square (x){
return new Promise((reslove))=>
{
setTimeout {()=>{
         resolve(Math.pow(x,2));
		 });
		 }
		 async function  output(x){
		 const ans = await square(x);
		 console.log(ans);
		 }
		 output(10);
		 
