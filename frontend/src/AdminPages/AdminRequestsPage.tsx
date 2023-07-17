import FilterComponent from "./AdminRequestComponents/FilterComponent";
import RequestsTable from "./AdminRequestComponents/RequestsTable";
import NavigationBar from "./AdminToolComponents/NavigationBar";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




function AdminRequestsPage() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#1392c2', 
          },
        },
      });
    type Input = {
        id: number,
        fname: string,
        lname: string,
        email: string,
        startDate: string,
        endDate: string,
        reason: string,
        status: string
    }
    

    type requestArray = Input[];

    // state to fetch requests:
    const [requests, setRequests] = useState<requestArray>([]);
    // state if fetching fails:
    const [error, setError] = useState<boolean>(false);
    // to show loading animation:
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // state for filtered requests:
    const [filteredRequests, setFilteredRequests] = useState<requestArray>(requests);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('http://localhost:3001/admin/get-requests');
                if (!response.ok) {
                    console.log("hataaaaaa")
                }
                const data = await response.json();
                setRequests(data);
                console.log(data);
                setIsLoading(false)
                setError(false)
            } catch (error) {
                setError(true)
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);

    useEffect(
        () => {
            setFilteredRequests(requests.filter((request) => request.status === "pending"));
        }, [requests]
    )


    // function for filtering requests:
    const filterRequests = (filter: string) => {
        if (filter === "pending") {
            const filteredRequestsVar = requests.filter((request) => request.status === "pending");
            setFilteredRequests(filteredRequestsVar);
        } else if (filter === "approved") {
            const filteredRequestsVar = requests.filter((request) => request.status === "approved");
            setFilteredRequests(filteredRequestsVar);
        } else if (filter === "rejected") {
            const filteredRequestsVar = requests.filter((request) => request.status === "rejected");
            setFilteredRequests(filteredRequestsVar);
        } else if (filter === "all") {
            setFilteredRequests(requests);
        }
        console.log(filter);
        console.log(filteredRequests);
    }

    const [filter, setFilter] = useState<string>("pending");

    const filterHandler = (value: string) => {
        setFilter(value);
        filterRequests(value)
        console.log(value);
    }


    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavigationBar />
          <Container component="main" >
            <Box
              sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
               
              }}
            >
              <FilterComponent filterHandler={filterHandler} />
              <RequestsTable requests={filteredRequests} />
             {error && !isLoading && <Alert severity="error">Something went wrong. Please try again.</Alert>}
              {!isLoading && !error && filteredRequests && filteredRequests.length <= 0 && <Alert severity="info">No requests available</Alert>}
            </Box>
          </Container>
        </ThemeProvider>
      );
    }
    
    export default AdminRequestsPage;