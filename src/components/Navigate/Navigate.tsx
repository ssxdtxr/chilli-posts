import {useRouter} from 'next/navigation'
import {useEffect} from 'react'

type NavigateProps = {to: string; replace?: boolean}

export const Navigate = ({to, replace = false}: NavigateProps): null =>  {
  const router = useRouter()

  useEffect(() => {
    if (replace) {
      router.replace(to)
    } else {
      router.push(to)
    }
  }, [replace, router, to])

  return null
}