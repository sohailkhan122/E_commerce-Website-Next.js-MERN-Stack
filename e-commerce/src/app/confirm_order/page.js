'use client'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <img style={{ objectFit: 'cover' }} src='/Images/order-confirmed 1.png' alt='123' onClick={() => router.push('/')} />
    </div>
  )
}
export default Page