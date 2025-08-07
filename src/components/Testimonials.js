// components/Testimonials.js

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sophia Turner",
    title: "Food Enthusiast",
    review:
      "Little Lemon's dishes are absolutely delicious! The flavors are fresh and authentic. Highly recommend!",
  },
  {
    name: "James Wilson",
    title: "Regular Customer",
    review:
      "The atmosphere at Little Lemon is cozy and welcoming. Every visit feels like a special occasion.",
  },
  {
    name: "Emily Clark",
    title: "Travel Blogger",
    review:
      "A hidden gem in the city! The service is outstanding, and the Mediterranean cuisine is top-notch.",
  },
]

function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-yellow-400 inline-block"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.03 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="grid grid-cols-3 gap-2 mt-10 px-20 py-5">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="basis-1/3 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            <div className="mt-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{testimonial.review}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
