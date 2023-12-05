import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
      const req = await fetch('http://localhost:3000/api/data_pull');
      
      if (!req.ok) {
        throw new Error(`HTTP error! Status: ${req.status}`);
      }
  
      const contentType = req.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const res = await req.json();
        
        return {
          props: {
            sheetdata: res.data
          }
        };
      } else {
        throw new Error('Invalid content type. Expected JSON.');
      }
    } catch (error) {
      console.error('Error fetching data:', error instanceof Error ? error.message : 'Unknown error');
      
      return {
        props: {
          sheetdata: null  // or handle the error case accordingly
        }
      };
    }
  };