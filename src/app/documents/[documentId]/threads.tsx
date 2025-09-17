import { ClientSideSuspense, useThreads } from '@liveblocks/react/suspense'
import {
  AnchoredThreads,
  FloatingComposer,
  FloatingThreads,
} from '@liveblocks/react-tiptap'
import { Editor } from '@tiptap/react'

export const Threads = ({ editor }: { editor: Editor | null }) => {
  return (
    <ClientSideSuspense fallback={null}>
      <ThreadsList editor={editor} />
    </ClientSideSuspense>
  )
}

export function ThreadsList({ editor }: { editor: Editor | null }) {
  const { threads } = useThreads({ query: { resolved: false } })

  return (
    <>
      <div className="anchored-threads z-10">
        <AnchoredThreads className="z-10" editor={editor} threads={threads} />
      </div>
      <FloatingThreads
        editor={editor}
        threads={threads}
        className="floating-threads z-10"
      />
      <FloatingComposer editor={editor} className="floating-composer" />
    </>
  )
}
