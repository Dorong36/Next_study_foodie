import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  /**
   * Image component of Next
   * - Lazy loading
   * - 너비 높이 자동 추론
   * - srcset
   *  - 뷰포트와 사이트를 방문하는 기기에 따라 크기가 조정된 이미지가 로딩되도록 보장
   *  - 브라우저에 최적화된 형식으로 이미지 서브
   */

  /**
   * NavLink 컴포넌트
   * - 현재 경로와 링크 경로가 일치하면 active 클래스 추가
   * - usePathname 훅을 사용하여 현재 경로를 가져옴
   * - 그런데 usePathname 훅은 client 모드에서만 사용 가능
   * - 가능하면 클라이언트 사이드 렌더링을 최대한 트리 아래 컴포넌트에서 사용하도록 설계하는 게 좋음
   * - 그래서 해당 컴포넌트를 따로 빼서 use client를 선언해주고 import 해서 사용!!
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
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
