import { useEffect, useState } from "react"

interface Rating {
    rate: number
    count: number
}

interface Products {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

export const GetProduct = () => {
    const [products, setProducts] = useState<Products[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Erro ao buscar produtos:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return <p>Carregando produtos...</p>
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
            {products.map((product) => (
                <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100px", height: "100px", objectFit: "contain" }}
                    />
                    <h3>{product.title}</h3>
                    <p>Preço: R$ {product.price}</p>
                    <p>Categoria: {product.category}</p>
                    <p>⭐ {product.rating.rate} ({product.rating.count} avaliações)</p>
                </div>
            ))}
        </div>
    )
}
