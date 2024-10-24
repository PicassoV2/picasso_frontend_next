import React, { useEffect, useState } from 'react'
// import PainterDashboardComponent from '@/components/PainterDashboardComponent'; // Adjust the import path here
import axios from 'axios';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

function PainterDashboard() { // Ensure the component name is PascalCase
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoading(false);
      router.push('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://paintingauctionbackend-production.up.railway.app/api/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("the user data is >>>>" + JSON.stringify(response.data));
        
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setTimeout(() => {
          setIsLoading(false);
        }, 15000);
      }
    };

    fetchUserData();
  }, [router]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2>hello {[userData]}</h2>
    </>
  );
}

export default PainterDashboard;
