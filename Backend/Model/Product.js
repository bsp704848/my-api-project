import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    productsType: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },    
    discountedPrice: { type: Number, default: 0 }, 
    image: { type: String, required: true }, 
    rating: { type: Number, default: 0, min: 0, max: 5 },  
  });

productSchema.pre("save", function (next) {
  this.discountedPrice = this.price - (this.price * this.discount) / 100;
  next();
});

export default mongoose.model("Product", productSchema);
