import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import dbConnect from "../../../../../lib/dbConnect";

export const GET = async (req, { params }) => {
    const p = await params;
    const productsCollection = dbConnect("products");
    const data = await productsCollection.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(data);
};