import { AdminRoutersProps } from '@/types/common';
import { useRouter } from 'next/router';

const useRouters = (data: AdminRoutersProps) => {
  const router = useRouter();
  const path = data[router.pathname.split('/')[2]];

  return path;
};
export default useRouters;
