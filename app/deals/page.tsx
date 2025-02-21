import { DealGrid } from "@/components/deal/deal-grid"

export default function DealsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Special Deals</h1>
        <p className="text-muted-foreground">Save big on our featured products and bundles</p>
      </section>

      <DealGrid />
    </div>
  )
}

