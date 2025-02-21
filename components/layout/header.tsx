"use client"

import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { MobileNav } from "./mobile-nav"

export default function Header() {
  const { cartItems } = useCart()
  const { user } = useAuth()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Organic Foods
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/categories" className="text-sm font-medium">
              Categories
            </Link>
            <Link href="/deals" className="text-sm font-medium">
              Deals
            </Link>
            <Link href="/recipes" className="text-sm font-medium">
              Recipes
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <Link href="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button>Sign In</Button>
              </Link>
            )}

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

