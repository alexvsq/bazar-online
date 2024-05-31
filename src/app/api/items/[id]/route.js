import data from '../../../../data/data.json'

export async function GET(request, { params }) {
    const id = params.id

    const products = data.products
    const filter = products.filter(item =>
        item.id == id
    )

    return Response.json(filter)
}