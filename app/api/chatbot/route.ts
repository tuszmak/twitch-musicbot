const data : String[] = []

export async function GET() {    
    return Response.json(data)
}

export async function POST(request: Request) {
    const songLink = await request.text()
    data.push(songLink)
    console.log("stuff acquired", data);
    return Response.json("asd")

}