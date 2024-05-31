import data from '../../../data/data.json'


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('q')

    if (!search) return Response.json(data)

    const products = data.products
    const filter = products.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    )

    return Response.json(filter)
}