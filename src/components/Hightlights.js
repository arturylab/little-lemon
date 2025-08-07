import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives our Chicago location.",
    image: "/greeksalad.png",
    alt: "Greek Salad",
  },
  {
    title: "Bruschetta",
    price: "$10.99",
    description:
      "Our Bruschetta is made from grilled bread that has been marred with garlic",
    image: "/bruschetta.png",
    alt: "Bruschetta",
  },
  {
    title: "Grilled Fish",
    price: "$15.99",
    description:
      "Grilled fish, tender and smoky, seasoned perfectly with herbs and lemon zest.",
    image: "/grilledfish.png",
    alt: "Grilled Fish",
  },
]

export default function SpecialsHeader() {
  return (
    <section className="grid grid-cols-1 gap-2 mt-10 px-20 py-5">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-black">Specials</h2>
        <Button>Online Menu</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {specials.map(({ title, price, description, image, alt }) => (
          <Card key={title} className="bg-light-gray shadow-md">
            <Image
              src={image}
              alt={alt}
              width={300}
              height={200}
              className="object-cover rounded-t-lg mx-auto"
            />
            <CardHeader>
              <CardTitle>
                <h2 className="text-2xl font-bold">{title}</h2>
              </CardTitle>
              <CardDescription>
                <h4 className="text-lg font-bold">{price}</h4>
                <p>{description}</p>
              </CardDescription>
              <CardAction>Add item</CardAction>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
