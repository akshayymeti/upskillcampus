"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: string
    stock: number
    unit: string
    category: string
  }
}

export function ProductCard({ product }: ProductProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="group rounded-lg border p-4 space-y-4">
      <div className="aspect-square relative overflow-hidden rounded-md">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {product.stock < 1 && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <p className="text-muted-foreground font-medium">Out of Stock</p>
          </div>
        )}
        {product.stock <= 10 && product.stock > 0 && (
          <Badge className="absolute top-2 right-2 bg-orange-500">Low Stock</Badge>
        )}
      </div>

      <div>
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="text-sm text-muted-foreground">Per {product.unit}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-semibold">{formatPrice(product.price)}</p>
        <Button onClick={handleAddToCart} disabled={product.stock < 1} size="sm">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

