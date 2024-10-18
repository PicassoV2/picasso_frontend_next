import React, { useEffect, useState } from 'react'
import  PainterDashboardComponent  from '@/components/Painter-dashboard';
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from '../components/Loader';

function Dashboard() {
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsLoading(false)
      router.push('/login')
      return
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://paintingauctionbackend-production.up.railway.app/api/profile/', {
          headers: { Authorization: `Bearer ${token}` }
        })
        console.log("the user data is >>>>" + JSON.stringify(response.data))
        
        setUserData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setTimeout(() => {
          setIsLoading(false)
          if (!userData) {
            console.log('Loading without user data after timeout')
          }else{
            console.log(userData());
            
          }
        }, 15000)
      }
    }

    fetchUserData()
  }, [router])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <PainterDashboardComponent userData={userData} />
    </>
  )
}

export default Dashboard