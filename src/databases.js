import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_URL)
.then(db=> console.log('Dtabase connected'))
.catch(err=>console.error(err));
export default mongoose;