import { RequestConfig } from 'umi';
export const request: RequestConfig = {
  prefix: '/api',
  errorHandler: error => {
    console.log(error);
  },
};
