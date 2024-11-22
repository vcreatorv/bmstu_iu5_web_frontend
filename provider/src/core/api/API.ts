/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Модель пользователя */
export interface UserDTO {
  /**
   * Логин пользователя
   * @example "user123"
   */
  login?: string;
  /**
   * Пароль пользователя
   * @example "password123"
   */
  password?: string;
  /**
   * Роль пользователя
   * @example "BUYER"
   */
  role?: string;
}

/** Модель для обновления услуги провайдера */
export interface UpdateProviderDutyDTO {
  /**
   * Идентификатор услуги
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Название услуги
   * @example "Интернет 100 Мбит/с"
   */
  title?: string;
  /**
   * Описание услуги
   * @example "Высокоскоростной интернет для дома"
   */
  description?: string;
  /**
   * Цена услуги
   * @format int32
   * @example 500
   */
  price?: number;
  /**
   * Флаг ежемесячной оплаты
   * @example true
   */
  monthlyPayment?: boolean;
  /**
   * Единица измерения
   * @example "Мбит/с"
   */
  unit?: string;
  /**
   * Описание количества
   * @example "100 Мбит/с"
   */
  amountDescription?: string;
  /**
   * URL изображения услуги
   * @example "http://example.com/image.jpg"
   */
  imgUrl?: string;
}

/** Модель запроса на подключение */
export interface ConnectionRequestDTO {
  /**
   * Идентификатор запроса
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Статус запроса
   * @example "DRAFT"
   */
  status?: string;
  /**
   * Имя потребителя
   * @example "Иван Иванов"
   */
  consumer?: string;
  /**
   * Номер телефона
   * @example "+7 (999) 123-45-67"
   */
  phoneNumber?: string;
  /**
   * Дата и время создания
   * @format date-time
   */
  creationDatetime?: string;
  /**
   * Дата и время формирования
   * @format date-time
   */
  formationDatetime?: string;
  /**
   * Дата и время завершения
   * @format date-time
   */
  completionDatetime?: string;
  /**
   * Общая стоимость
   * @format int32
   * @example 1000
   */
  totalPrice?: number;
  /**
   * Менеджер
   * @example "manager1"
   */
  manager?: string;
  /**
   * Клиент
   * @example "client1"
   */
  client?: string;
  /** Список услуг в запросе */
  providerServiceList?: ProviderDutyInRequestDTO[];
}

/** Модель позиции в запросе на подключение */
export interface ConnectionRequestPositionDTO {
  /**
   * Идентификатор позиции
   * @format int32
   * @example 1
   */
  id?: number;
  /** Модель услуги провайдера в запросе */
  providerDuty?: ProviderDutyInRequestDTO;
  /** Модель запроса на подключение */
  connectionRequest?: ConnectionRequestDTO;
}

/** Модель услуги провайдера в запросе */
export interface ProviderDutyInRequestDTO {
  /**
   * Идентификатор услуги
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Название услуги
   * @example "Интернет 100 Мбит/с"
   */
  title?: string;
  /**
   * Цена услуги
   * @format int32
   * @example 500
   */
  price?: number;
  /**
   * Флаг ежемесячной оплаты
   * @example true
   */
  monthlyPayment?: boolean;
  /**
   * Единица измерения
   * @example "Мбит/с"
   */
  unit?: string;
  /**
   * Описание количества
   * @example "100 Мбит/с"
   */
  amountDescription?: string;
  /**
   * URL изображения услуги
   * @example "http://example.com/image.jpg"
   */
  imgUrl?: string;
  /**
   * Количество
   * @format int32
   * @example 1
   */
  amount?: number;
}

/** Модель для обновления запроса на подключение */
export interface UpdateConnectionRequestDTO {
  /**
   * Имя потребителя
   * @example "Иван Иванов"
   */
  consumer: string;
  /**
   * Номер телефона
   * @example "+7 (999) 123-45-67"
   */
  phoneNumber: string;
}

/** Модель запроса аутентификации */
export interface AuthRequestDTO {
  /**
   * Логин пользователя
   * @example "user123"
   */
  login?: string;
  /**
   * Пароль пользователя
   * @example "password123"
   */
  password?: string;
}

/** Модель ответа с JWT токеном */
export interface JwtResponseDTO {
  /**
   * JWT токен доступа
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   */
  accessToken?: string;
  /**
   * Время истечения токена в секундах
   * @format int64
   * @example 3600
   */
  expiresIn?: number;
}

/** Модель для создания новой услуги провайдера */
export interface CreateProviderDutyDTO {
  /**
   * Идентификатор услуги
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Название услуги
   * @example "Интернет 100 Мбит/с"
   */
  title?: string;
  /**
   * Описание услуги
   * @example "Высокоскоростной интернет для дома"
   */
  description?: string;
  /**
   * Цена услуги
   * @format int32
   * @example 500
   */
  price?: number;
  /**
   * Флаг ежемесячной оплаты
   * @example true
   */
  monthlyPayment?: boolean;
  /**
   * Единица измерения
   * @example "Мбит/с"
   */
  unit?: string;
  /**
   * Описание количества
   * @example "100 Мбит/с"
   */
  amountDescription?: string;
  /**
   * URL изображения услуги
   * @example "http://example.com/image.jpg"
   */
  imgUrl?: string;
}

/** Модель списка услуг */
export interface ProviderDutiesResponseDTO {
  /**
   * Номер заявки
   * @format int32
   */
  connectionRequestId?: number;
  /**
   * Количество услуг, добавленных в заявку на подключение
   * @format int32
   */
  itemsInCart?: number;
  /** Список услуг провайдера */
  providerServiceList?: ProviderDuty[];
}

/** Модель услуги провайдера */
export interface ProviderDuty {
  /**
   * Идентификатор услуги
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Название услуги
   * @example "Интернет 100 Мбит/с"
   */
  title?: string;
  /**
   * URL изображения услуги
   * @example "http://example.com/image.jpg"
   */
  imgUrl?: string;
  /**
   * Описание услуги
   * @example "Высокоскоростной интернет для дома"
   */
  description?: string;
  /**
   * Флаг активности услуги
   * @example true
   */
  active?: boolean;
  /**
   * Цена услуги
   * @format int32
   * @example 500
   */
  price?: number;
  /**
   * Флаг ежемесячной оплаты
   * @example true
   */
  monthlyPayment?: boolean;
  /**
   * Единица измерения
   * @example "Мбит/с"
   */
  unit?: string;
  /**
   * Описание количества
   * @example "100 Мбит/с"
   */
  amountDescription?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://192.168.1.25:8090" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title NET4Y API
 * @version 1.0.0
 * @baseUrl http://192.168.1.25:8090
 * @contact Валерий Нагапетян <valery.nagapetyan@yandex.ru> (https://vk.com/yep_idk)
 *
 * REST API провайдера для составления заявок на подключение и просмотра услуг.
 *
 *  Полезные ссылки:
 * <ul><li>https://github.com/vcreatorv/bmstu_iu5_web</li></ul>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Позволяет изменить данные ЛК пользователя
     *
     * @tags Пользователи
     * @name UpdateUser
     * @summary Изменение данных пользователя
     * @request PUT:/api/users/update
     * @secure
     */
    updateUser: (
      query: {
        /** Модель пользователя */
        userRequest: UserDTO;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserDTO, string>({
        path: `/api/users/update`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет модератору изменить информацию об услуге
     *
     * @tags Услуги провайдера
     * @name UpdateProviderDuty
     * @summary Изменение услуги
     * @request PUT:/api/provider-duties/{dutyID}/update
     * @secure
     */
    updateProviderDuty: (
      dutyId: number,
      query: {
        /** Модель для обновления услуги провайдера */
        providerDutyDTO: UpdateProviderDutyDTO;
      },
      params: RequestParams = {},
    ) =>
      this.request<UpdateProviderDutyDTO, string>({
        path: `/api/provider-duties/${dutyId}/update`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю изменить поле 'количество' в услуге в заявке
     *
     * @tags Услуги в заявке
     * @name UpdateAmountInDutyRequest
     * @summary Изменение параметров услуги
     * @request PUT:/api/duties-requests/{dutyID}/{requestID}/update
     * @secure
     */
    updateAmountInDutyRequest: (
      dutyId: number,
      requestId: number,
      query: {
        /** @format int32 */
        amount: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConnectionRequestPositionDTO, string>({
        path: `/api/duties-requests/${dutyId}/${requestId}/update`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю изменить поля 'Заказчик' и 'Номер для связи'
     *
     * @tags Заявки клиента провайдера
     * @name UpdateConnectionRequest
     * @summary Изменение заявки
     * @request PUT:/api/connection-requests/{requestID}/update
     * @secure
     */
    updateConnectionRequest: (
      requestId: number,
      query: {
        /** Модель для обновления запроса на подключение */
        requestDTO: UpdateConnectionRequestDTO;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConnectionRequestDTO, string | void>({
        path: `/api/connection-requests/${requestId}/update`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет модератору отклонить или завершить заявку
     *
     * @tags Заявки клиента провайдера
     * @name CloseConnectionRequest
     * @summary Завершение заявки
     * @request PUT:/api/connection-requests/{requestID}/resolve
     * @secure
     */
    closeConnectionRequest: (
      requestId: number,
      query: {
        status: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConnectionRequestDTO, string | void>({
        path: `/api/connection-requests/${requestId}/resolve`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю сформировать заявку
     *
     * @tags Заявки клиента провайдера
     * @name FormConnectionRequest
     * @summary Формирование заявки
     * @request PUT:/api/connection-requests/{requestID}/form
     * @secure
     */
    formConnectionRequest: (requestId: number, params: RequestParams = {}) =>
      this.request<ConnectionRequestDTO, string | void>({
        path: `/api/connection-requests/${requestId}/form`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю разлогиниться
     *
     * @tags Пользователи
     * @name LogoutUser
     * @summary Деавторизация пользователя
     * @request POST:/api/users/logout
     * @secure
     */
    logoutUser: (params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/api/users/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю залогиниться
     *
     * @tags Пользователи
     * @name LoginUser
     * @summary Аутентификация пользователя
     * @request POST:/api/users/login
     * @secure
     */
    loginUser: (
      query: {
        /** Модель запроса аутентификации */
        authRequestDTO: AuthRequestDTO;
      },
      params: RequestParams = {},
    ) =>
      this.request<JwtResponseDTO, string>({
        path: `/api/users/login`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет зарегистрировать нового пользователя
     *
     * @tags Пользователи
     * @name CreateUser
     * @summary Регистрация пользователя
     * @request POST:/api/users/create
     * @secure
     */
    createUser: (
      query: {
        /** Модель пользователя */
        userRequest: UserDTO;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserDTO, string>({
        path: `/api/users/create`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет модератору добавить изображение для услуги
     *
     * @tags Услуги провайдера
     * @name AddImageToProviderDuty
     * @summary Добавление изображения услуги
     * @request POST:/api/provider-duties/{dutyID}/image
     * @secure
     */
    addImageToProviderDuty: (
      dutyId: number,
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, string>({
        path: `/api/provider-duties/${dutyId}/image`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Позволяет пользователю добавить услугу в заявку
     *
     * @tags Услуги провайдера
     * @name AddProviderDutyToRequest
     * @summary Добавление в заявку
     * @request POST:/api/provider-duties/{dutyID}/add
     * @secure
     */
    addProviderDutyToRequest: (dutyId: number, params: RequestParams = {}) =>
      this.request<ConnectionRequestDTO, string>({
        path: `/api/provider-duties/${dutyId}/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет модератору добавить новую услугу провайдера
     *
     * @tags Услуги провайдера
     * @name CreateProviderDuty
     * @summary Добавление новой услуги
     * @request POST:/api/provider-duties/create
     * @secure
     */
    createProviderDuty: (
      query: {
        /** Модель для создания новой услуги провайдера */
        providerDutyDTO: CreateProviderDutyDTO;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateProviderDutyDTO, string>({
        path: `/api/provider-duties/create`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю посмотреть доступные услуги провайдера с фильтрацией по названию и способу оплаты
     *
     * @tags Услуги провайдера
     * @name GetAllProviderDuties
     * @summary Просмотр услуг провайдера
     * @request GET:/api/provider-duties
     * @secure
     */
    getAllProviderDuties: (
      query?: {
        title?: string;
        monthlyPayment?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProviderDutiesResponseDTO, string>({
        path: `/api/provider-duties`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю получить более подробную информацию об услуге провайдера
     *
     * @tags Услуги провайдера
     * @name GetProviderDutyById
     * @summary Подробнее об услуге
     * @request GET:/api/provider-duties/{dutyID}
     * @secure
     */
    getProviderDutyById: (dutyId: number, params: RequestParams = {}) =>
      this.request<ProviderDuty, string>({
        path: `/api/provider-duties/${dutyId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет получить пользователю информацию о его завках, модератору - информацию о всех заявках
     *
     * @tags Заявки клиента провайдера
     * @name GetAllConnectionRequests
     * @summary Просмотр заявок клиента
     * @request GET:/api/connection-requests
     * @secure
     */
    getAllConnectionRequests: (
      query?: {
        /** @format date-time */
        creationDatetime?: string;
        /** @format date-time */
        completionDatetime?: string;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConnectionRequestDTO, string>({
        path: `/api/connection-requests`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет получить пользователю информацию о его конкретной завке
     *
     * @tags Заявки клиента провайдера
     * @name GetConnectionRequestById
     * @summary Просмотр конкретной заявки
     * @request GET:/api/connection-requests/{requestID}
     * @secure
     */
    getConnectionRequestById: (requestId: number, params: RequestParams = {}) =>
      this.request<ConnectionRequestDTO, string | void>({
        path: `/api/connection-requests/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет модератору удалить услугу провайдера
     *
     * @tags Услуги провайдера
     * @name DeleteProviderDuty
     * @summary Удаление услуги
     * @request DELETE:/api/provider-duties/{dutyID}/delete
     * @secure
     */
    deleteProviderDuty: (dutyId: number, params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/api/provider-duties/${dutyId}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю удалить услугу из заявки
     *
     * @tags Услуги в заявке
     * @name DeleteProviderDutyFromConnectionRequest
     * @summary Удаление услуги из заявки
     * @request DELETE:/api/duties-requests/{dutyID}/{requestID}/delete
     * @secure
     */
    deleteProviderDutyFromConnectionRequest: (dutyId: number, requestId: number, params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/api/duties-requests/${dutyId}/${requestId}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Позволяет пользователю удалить его заявку
     *
     * @tags Заявки клиента провайдера
     * @name DeleteConnectionRequest
     * @summary Удаление заявки
     * @request DELETE:/api/connection-requests/{requestID}/delete
     * @secure
     */
    deleteConnectionRequest: (requestId: number, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/connection-requests/${requestId}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
