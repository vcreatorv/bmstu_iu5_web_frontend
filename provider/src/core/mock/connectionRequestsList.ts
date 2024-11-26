import { ConnectionRequestDTO } from "../api/API";

export const connectionRequestsList: ConnectionRequestDTO[] = [
    {
        id: 1,
        consumer: "Физическое лицо",
        phoneNumber: "+7 (999) 555 35 35",
        creationDatetime: "2024-10-20T15:07:21.219Z",
        formationDatetime: "2024-10-25T15:07:21.219Z",
        completionDatetime: "",
        client: "1",
        manager: undefined,
        totalPrice: 3290,
        status: "FORMED",
        providerServiceList: []
    },
    {
        id: 1,
        consumer: "Физическое лицо",
        phoneNumber: "+7 (999) 555 35 35",
        creationDatetime: "2024-10-18T15:07:21.219Z",
        formationDatetime: "2024-10-27T15:07:21.219Z",
        completionDatetime: "2024-10-28T15:07:21.219Z",
        client: "1",
        manager: "1",
        totalPrice: 28100,
        status: "COMPLETED",
        providerServiceList: []
    },
    {
        id: 1,
        consumer: "Физическое лицо",
        phoneNumber: "+7 (999) 555 35 35",
        creationDatetime: "2024-10-10T15:07:21.219Z",
        formationDatetime: "2024-10-13T15:07:21.219Z",
        completionDatetime: "",
        client: "1",
        manager: undefined,
        totalPrice: 1690,
        status: "FORMED",
        providerServiceList: []
    },
]