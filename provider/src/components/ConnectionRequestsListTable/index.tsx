import { FC } from "react";
import { IConnectionRequestsTableProps } from "./typing";
import { Table } from "react-bootstrap";

export const ConnectionRequestsTable: FC<IConnectionRequestsTableProps> = (props: IConnectionRequestsTableProps) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Статус</th>
                    <th>Дата создания</th>
                    <th>Дата оформления</th>
                    <th>Дата завершения</th>
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row) => (
                    <tr key={row.number}>
                        <td>{row.number}</td>
                        <td>{row.status}</td>
                        <td>{row.creationDate}</td>
                        <td>{row.formationDate}</td>
                        <td>{row.completionDate}</td>
                    </tr>
                ))}
            </tbody>
      </Table>
    );
};