import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_URL)
.then(db=>console.log('Database connected'))
.catch(err=>console.log(err))
export default mongoose;