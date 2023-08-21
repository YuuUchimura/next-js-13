import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  console.log("Get!");
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  console.log("Post!");
  const req = await request.json();
  await prisma.post.create({ data: req });

  return NextResponse.json(req);
}
