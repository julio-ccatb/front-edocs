import { AxiosRequestConfig } from 'axios';
import { useContext, useEffect } from 'react';
import axiosPrivate from '../api/CustomAxios';
import { AuthContext } from '../context/auth.context';

export const useAxiosPrivate = () => {
  const { credentials, setTokens } = useContext(AuthContext);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (config.headers === undefined) {
          config.headers = {};
          config.headers.Authorization = `Bearer ${credentials.accessToken}`;
          config.headers['x-refresh'] = `${credentials.refreshToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          prevRequest.headers[
            'Authorization'
          ] = `Bearer ${credentials.refreshToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [credentials]);

  return axiosPrivate;
};
