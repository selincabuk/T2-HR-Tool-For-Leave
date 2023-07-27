import FilterComponent from "./AdminRequestComponents/FilterComponent";
import RequestsTable from "./AdminRequestComponents/RequestsTable";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StickyFooter from "../StickyFooter";
import SideBar from "./AdminNavigation/SideBar";




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
      <div className="page__holder">
        <SideBar />
        <Container component="main"  >
          <Box
            sx={{
              marginTop: "4vh",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              ml: 13

            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#9f5cbe' }}>
              <StickyNote2Icon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 3 }} >
              Kullanıcı İzin İstek Listesi
            </Typography>
            <FilterComponent filterHandler={filterHandler} />
            <RequestsTable requests={filteredRequests} />
            {error && !isLoading && <Alert severity="error" sx={{ mt: 3 }} >Bir şeyler ters gitti. Lütfen sonra tekrar deneyin.</Alert>}
            {!isLoading && !error && filteredRequests && filteredRequests.length <= 0 && <Alert severity="info" sx={{ mt: 3 }}>Gösterilecek istek bulunmamaktadır.</Alert>}
          </Box>
        </Container>

        <StickyFooter />
      </div>
    </ThemeProvider>
  );
}

export default AdminRequestsPage;