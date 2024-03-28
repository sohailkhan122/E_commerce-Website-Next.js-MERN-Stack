const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
const { default: mongoose } = require('mongoose');
const userRoutes = require('./Routes/userRoutes')
const productRoute = require('./Routes/productRoute')
const cartRoute = require('./Routes/cartRoute')
const orderRoute = require('./Routes/orderRoute')
const adminRoutes = require('./Routes/adminRoute')


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://sohail:iamdeveloper@cluster0.xmzwts5.mongodb.net/?retryWrites=true&w=majority');
        console.log("Server Is Connected To Database");
    } catch (error) {
        console.log("Server Is Not Connected To Database", error.message);
    }
}
connectDb()

app.get("/", (req, res) => {
    res.send("api running")
});

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)
app.use('/product', productRoute)
app.use('/cart', cartRoute)
app.use('/order', orderRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("Server Is Running..."))