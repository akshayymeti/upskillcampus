"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItems } = useCart()
  const { user } = useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                  Organic Foods
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <nav className="p-4 flex flex-col gap-4">
              <Link href="/categories" className="text-sm font-medium">
                Categories
              </Link>
              <Link href="/deals" className="text-sm font-medium">
                Deals
              </Link>
              <Link href="/recipes" className="text-sm font-medium">
                Recipes
              </Link>
              <Link href="/cart" className="text-sm font-medium">
                Cart ({cartItems.length})
              </Link>
              {user ? (
                <Link href="/account" className="text-sm font-medium">
                  Account
                </Link>
              ) : (
                <Link href="/login" className="text-sm font-medium">
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

