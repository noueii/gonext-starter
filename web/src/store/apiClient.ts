import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authCreateUser: build.mutation<
      AuthCreateUserApiResponse,
      AuthCreateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/auth/email/create`,
        method: "POST",
        body: queryArg.pbCreateUserRequest,
      }),
    }),
    authLoginUser: build.mutation<
      AuthLoginUserApiResponse,
      AuthLoginUserApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/auth/email/login`,
        method: "POST",
        body: queryArg.pbLoginUserRequest,
      }),
    }),
    authGoogleLogin: build.query<
      AuthGoogleLoginApiResponse,
      AuthGoogleLoginApiArg
    >({
      query: () => ({ url: `/v1/auth/google` }),
    }),
    authGoogleCallback: build.query<
      AuthGoogleCallbackApiResponse,
      AuthGoogleCallbackApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/auth/google/callback`,
        params: {
          code: queryArg.code,
          state: queryArg.state,
        },
      }),
    }),
    authLogout: build.query<AuthLogoutApiResponse, AuthLogoutApiArg>({
      query: () => ({ url: `/v1/auth/logout` }),
    }),
    goNuxtRefreshToken: build.query<
      GoNuxtRefreshTokenApiResponse,
      GoNuxtRefreshTokenApiArg
    >({
      query: () => ({ url: `/v1/token/refresh` }),
    }),
    goNuxtVerifyToken: build.query<
      GoNuxtVerifyTokenApiResponse,
      GoNuxtVerifyTokenApiArg
    >({
      query: () => ({ url: `/v1/token/verify` }),
    }),
    goNuxtUpdateUser: build.mutation<
      GoNuxtUpdateUserApiResponse,
      GoNuxtUpdateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/user`,
        method: "PATCH",
        body: queryArg.pbUpdateUserRequest,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as apiClient };
export type AuthCreateUserApiResponse =
  /** status 200 A successful response. */ PbCreateUserResponse;
export type AuthCreateUserApiArg = {
  pbCreateUserRequest: PbCreateUserRequest;
};
export type AuthLoginUserApiResponse =
  /** status 200 A successful response. */ PbLoginUserResponse;
export type AuthLoginUserApiArg = {
  pbLoginUserRequest: PbLoginUserRequest;
};
export type AuthGoogleLoginApiResponse =
  /** status 200 A successful response. */ PbGoogleLoginResponse;
export type AuthGoogleLoginApiArg = void;
export type AuthGoogleCallbackApiResponse =
  /** status 200 A successful response. */ PbGoogleCallbackResponse;
export type AuthGoogleCallbackApiArg = {
  code?: string;
  state?: string;
};
export type AuthLogoutApiResponse =
  /** status 200 A successful response. */ PbLogoutResponse;
export type AuthLogoutApiArg = void;
export type GoNuxtRefreshTokenApiResponse =
  /** status 200 A successful response. */ PbRefreshTokenResponse;
export type GoNuxtRefreshTokenApiArg = void;
export type GoNuxtVerifyTokenApiResponse =
  /** status 200 A successful response. */ PbVerifyTokenResponse;
export type GoNuxtVerifyTokenApiArg = void;
export type GoNuxtUpdateUserApiResponse =
  /** status 200 A successful response. */ PbUpdateUserResponse;
export type GoNuxtUpdateUserApiArg = {
  pbUpdateUserRequest: PbUpdateUserRequest;
};
export type PbUser = {
  id?: string;
  email?: string;
  username?: string;
  created_at?: string;
  role?: string;
};
export type PbCreateUserResponse = {
  user?: PbUser;
};
export type ProtobufAny = {
  "@type"?: string;
  [key: string]: any;
};
export type RpcStatus = {
  code?: number;
  message?: string;
  details?: ProtobufAny[];
};
export type PbCreateUserRequest = {
  email?: string;
  password?: string;
};
export type PbLoginUserResponse = {
  user?: PbUser;
  session_id?: string;
  access_token?: string;
  access_token_expires_at?: string;
  refresh_token?: string;
  refresh_token_expires_at?: string;
};
export type PbLoginUserRequest = {
  email?: string;
  password?: string;
};
export type PbGoogleLoginResponse = {
  redirect_url?: string;
};
export type PbGoogleCallbackResponse = {
  jwt_token?: string;
};
export type PbLogoutResponse = object;
export type PbSession = {
  id?: string;
  expires_at?: string;
};
export type PbRefreshTokenResponse = {
  access_token?: string;
  access_token_expires_at?: string;
  user?: PbUser;
  session?: PbSession;
};
export type PbVerifyTokenResponse = {
  user_id?: string;
  role?: string;
};
export type PbUpdateUserResponse = {
  user?: PbUser;
};
export type PbUpdateUserRequest = {
  id?: string;
  username?: string;
  password?: string;
  balance?: number;
  role?: string;
};
export const {
  useAuthCreateUserMutation,
  useAuthLoginUserMutation,
  useAuthGoogleLoginQuery,
  useAuthGoogleCallbackQuery,
  useAuthLogoutQuery,
  useGoNuxtRefreshTokenQuery,
  useGoNuxtVerifyTokenQuery,
  useGoNuxtUpdateUserMutation,
} = injectedRtkApi;
