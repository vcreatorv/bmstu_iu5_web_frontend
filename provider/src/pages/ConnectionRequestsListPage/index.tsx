import { Container } from "react-bootstrap";
import { RequestFilters } from "../../components/ConnectionRequestsListFilters";
import { ConnectionRequestsTable } from "../../components/ConnectionRequestsListTable";
import { useConnectionRequestsListPage } from "./useConnectionRequestsListPage";
import { Navbar } from "../../components/Navbar";

export const ConnectionRequestsListPage = () => {
    const {tableProps, filterProps} = useConnectionRequestsListPage()
    
    return (
        <>
            <Navbar/>
            <Container>
            
            <h1 className="m-3">Заявки</h1>
            <RequestFilters {...filterProps}></RequestFilters>
            <div className="m-3">
                <ConnectionRequestsTable {...tableProps}></ConnectionRequestsTable>
            </div>
            </Container>
        </> 
    );
};