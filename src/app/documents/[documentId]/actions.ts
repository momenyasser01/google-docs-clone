'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../../../../convex/_generated/api'
import { Id } from '../../../../convex/_generated/dataModel'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function getDocuments(ids: Id<'documents'>[]) {
  return await convex.query(api.documents.getByIds, { ids })
}

export async function getUsers() {
  const { sessionClaims } = await auth()
  const clerk = await clerkClient()

  type OrgClaims = {
    o?: {
      id: string
      rol: string
      slg: string
    }
  }

  const claims = sessionClaims as OrgClaims

  const response = await clerk.users.getUserList({
    organizationId: [claims.o?.id as string],
  })

  const getColor = (name: string): string => {
    const nameToNumber = name
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const hue = Math.abs(nameToNumber) % 360
    const color = `hsl(${hue}, 80%, 60%)`

    return color
  }

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous',
    avatar: user.imageUrl,
    color: getColor(
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous',
    ),
  }))

  return users
}
