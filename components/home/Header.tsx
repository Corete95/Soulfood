import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import copy from 'copy-to-clipboard';
import useMap from '../../hooks/useMap';
import styles from '../../styles/header.module.scss';
import Header from '../common/Header';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import { RiAdminLine } from 'react-icons/ri';
import useToast from '../../hooks/useToast';

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMap();
  const { showToast } = useToast();
  const router = useRouter();

  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    copy(location.origin + query);

    showToast('위치를 복사했습니다.', 'success');
  }, [router, getMapOptions]);

  return (
    <Header
      onClickLogo={resetMapOptions}
      rightElements={[
        <Link
          href="/admin"
          key="link"
          className={styles.box}
          style={{ marginRight: 8 }}
        >
          <RiAdminLine size={20} />
        </Link>,
        <button
          onClick={replaceAndCopyUrl}
          className={styles.box}
          style={{ marginRight: 8 }}
          key="button"
          aria-label="현재 위치 복사"
        >
          <AiOutlineShareAlt size={20} />
        </button>,

        <Link
          href="/feedback"
          className={styles.box}
          key="link"
          aria-label="피드백 페이지 이동"
        >
          <VscFeedback size={20} />
        </Link>,
      ]}
    />
  );
};
export default HomeHeader;
