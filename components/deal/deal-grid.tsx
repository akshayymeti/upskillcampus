"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"

interface Deal {
  id: string
  title: string
  description: string
  image: string
  originalPrice: number
  discountedPrice: number
  discount: number
  validUntil: string
}

export function DealGrid() {
  const [deals, setDeals] = useState<Deal[]>([])
  const { addToCart } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setDeals([
        {
          id: "1",
          title: "Organic Fruit Bundle",
          description: "Get a selection of fresh organic fruits at 20% off",
          image: "/placeholder.svg?height=400&width=400",
          originalPrice: 49.99,
          discountedPrice: 39.99,
          discount: 20,
          validUntil: "2024-03-01",
        },
        {
          id: "2",
          title: "Healthy Breakfast Pack",
          description: "Start your day right with our breakfast essentials",
          image: "/placeholder.svg?height=400&width=400",
          originalPrice: 34.99,
          discountedPrice: 24.99,
          discount: 30,
          validUntil: "2024-03-01",
        },
        {
          id: "3",
          title: "Pantry Staples Box",
          description: "Stock up on organic pantry essentials",
          image: "/placeholder.svg?height=400&width=400",
          originalPrice: 79.99,
          discountedPrice: 59.99,
          discount: 25,
          validUntil: "2024-03-01",
        },
        // Add more deals...
      ])
    }, 1000)
  }, [])

  const handleAddToCart = (deal: Deal) => {
    addToCart({
      id: deal.id,
      name: deal.title,
      price: deal.discountedPrice,
      image: deal.image,
    })
    toast({
      title: "Added to cart",
      description: `${deal.title} has been added to your cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <div key={deal.id} className="group rounded-lg border overflow-hidden">
          <div className="relative">
            <Image
              src={deal.image || "/placeholder.svg"}
              alt={deal.title}
              width={400}
              height={300}
              className="w-full object-cover aspect-[4/3]"
            />
            <Badge className="absolute top-4 right-4 bg-primary">{deal.discount}% OFF</Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{deal.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{deal.description}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">${deal.discountedPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${deal.originalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={() => handleAddToCart(deal)}>
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

