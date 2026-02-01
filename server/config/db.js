import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () =>
            console.log("Database connected"),
        );
        await mongoose.connect(`${process.env.MONGODB_URI}/CineTicket-Live`);
    } catch (error) {
        console.log(error.mongoose);
    }
};

export default connectDB;
