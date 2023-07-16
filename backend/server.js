import { express } from "express";
import { Router } from "express";
import { cors } from "cors"
import { getFirestore, collection, addDoc, updateDoc, doc, deleteDoc, setDoc, getDoc, getDocs } from "firebase/firestore/lite";


const app = express()
const router = Router()


app.listen(3000, ()=>{console.log("Servidor rodando na porta 3000")})

app.use(cors())
app.use(router)
app.use(express.json())

app.post("/fruit", async (req,res)=>{
    try{

    }catch(error){

    }
})

app.put("/fruit", async (req,res)=>{
    try{

    }catch(error){

    }
})

app.delete("/fruit", async (req,res)=>{
    try{

    }catch(error){

    }
})

app.get("/fruit", async (req,res)=>{
    try{

    }catch(error){
        
    }
})