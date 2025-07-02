export interface RawLoginDetailsInterface {
    customer_number: string;
    identity_id: string;
    username: string;
    first_name: string;
    last_name: string;
    is_telenet_login?: boolean;
    is_sub_login?: boolean;
    scopes?: string[];
    explicit_login: boolean;
    narrowed_scope?: boolean;
    auth_age: number;
    is_pid?: boolean;
    bss_system?: string;
    role: string;
    impersonated?: boolean;
    login_alias: string;
    status: string;
    identity_request_id?: string;
    pega_service_case_id?: string;
    contact_number?: string;
    advisorId?: string;
}
export declare const rawLoginDetailsInterfaceFactory: import("factory.ts").Factory<RawLoginDetailsInterface, keyof RawLoginDetailsInterface>;
export declare const rawFormerLoginDetailsInterfaceFactory: import("factory.ts").Factory<RawLoginDetailsInterface, keyof RawLoginDetailsInterface>;
//# sourceMappingURL=raw-login-details.interface.testfactory.d.ts.map