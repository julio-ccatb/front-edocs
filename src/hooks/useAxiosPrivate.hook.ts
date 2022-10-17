import { AxiosRequestConfig } from 'axios';
import { useContext, useEffect } from 'react';
import axiosPrivate from '../api/CustomAxios';
import { AuthContext } from '../context/auth.context';

export const useAxiosPrivate = () => {
  const { credentials, setTokens } = useContext(AuthContext);

  useEffect(() => {
    // console.log('Inside');
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (!config.headers!.Authorization) {
          config.headers = {
            Authorization: `Bearer ${credentials.accessToken}`,
            'x-refresh': `${credentials.refreshToken}`,
          };
          // console.log('Headers Set');
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
          // console.log('resend request');
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
