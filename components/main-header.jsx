import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader = () => {
  /**
   * Image component of Next
   * - Lazy loading
   * - 너비 높이 자동 추론
   * - srcset
   *  - 뷰포트와 사이트를 방문하는 기기에 따라 크기가 조정된 이미지가 로딩되도록 보장
   *  - 브라우저에 최적화된 형식으로 이미지 서브
   */

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/* <img src={logoImg.src} alt="A plate with food on it" /> */}
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
