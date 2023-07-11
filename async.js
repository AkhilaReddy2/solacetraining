constant async =require("async");
function square (x){
return new promise((reslove))=>
{
setTimeout {()=>{
         resolve(Math.pow(x,2));
		 });
		 }
		 async function  output(x){
		 const ans =square(x);
		 console.log(ans);
		 }
		 output(10);
		 
