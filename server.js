const x=require("express");
const f=require("fs");
const y=x();

const port=process.env.PORT || 3000;

y.use(x.static('public'));

y.get('/',(a,b)=>b.send(f.readFileSync("./public/index.html").toString()));

y.get("*",(a,b)=>b.send(`<html><body><h1>Not found. Only index page exists.</h1></body></html>`));

y.listen(port,()=>console.log(`port ${port}`));


