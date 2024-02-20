import { Schema,model } from "mongoose";
//Schema: Crear el esquema de los objetos y model es para el modelo.
const productSchema=new Schema({
    barcode: 
    {
        type:String,
        unique:true,
        required: true
    },
    description: String,
    brand:String,
    price: Number,
    cost: Number,
    stock: Number,
    expiredDate: String,
    status: Number
},{
    versionKey: false, //Para que no se inserte en los documentos el caracter de _versionV
    timestamps:true
}
);
export default model('product',productSchema);

//Definimos la estructura que tenda nuestro documento y lo guardamos .
