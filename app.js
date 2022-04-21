const express= require("express");
const mongoose=require("mongoose");
const PORT= process.env.PORT || 5000
const app = express();


////midlewares
app.use(express.json());
app.use("/api/auth", require("./routes/auth"))
app.use("/api/product", require("./routes/product"))
// app.use("/api/customer", require("./routes/customer"))
// app.use("/api/buyer", require("./routes/buyer"))
// app.use("/api/seller", require("./routes/seller"))
// app.use("/api/order", require("./routes/order"))



mongoose.connect("mongodb+srv://Finalproject1:KvgDnLWgz9wc5VM2@cluster0.d4i0h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
    console.log("your server is connected to the database")
}).catch(err=>{
    console.log("connection is fails")
})

app.listen(PORT,()=>{
    console.log("your server is running at port"+PORT)
})
