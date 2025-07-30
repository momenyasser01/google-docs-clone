import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click&nbsp;
      <Link className="text-blue-500 underline" href="/documents/123">
        Here
      </Link>
      &nbsp;to go to document id
    </div>
  )
}

export default Home
