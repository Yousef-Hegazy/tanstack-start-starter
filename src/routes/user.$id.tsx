import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    if (Number.isNaN(Number(params.id)) || Number(params.id) > 10)
      throw new Error(`Can't fetch user with id ${params.id}!`)

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`,
    )

    if (!res.ok) throw new Error(`Error fetching user ${params.id}`)

    return res.json()
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <ul className="list-decimal">
      <li>{data.name}</li>
    </ul>
  )
}
