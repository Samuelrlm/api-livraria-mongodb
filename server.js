import dotenv from "dotenv/config.js"
import app from "./src/app.js";
const port = process.env.PORT || 8080;

app.listen( port,()=>{
    if( port === 8080){
        console.log(`Aplicação rodando em http:localhost:${port}`);    
    } else{
        console.log('A aplicação está rodando');    
    }
});