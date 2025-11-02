import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$id')({
  component: RouteComponent,
  loader: (ctx) => {
    if (Number.isNaN(Number(ctx.params.id)) || Number(ctx.params.id) > 10)
      throw new Error(`Error ${ctx.params.id}!`)

    return `User ${ctx.params.id}`
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return <div>{data}</div>
}
