<p align="center">
  <img alt="logo" width='350px'src="public/logo.jpeg">
</p>

</br>

  <h1 align="center">인생맛집 추천 웹 서비스 </h2>
  <h3 align="center">개발 진행중...ing</h3>

</br>

<table>
<tr> 
  <td><img alt="reame01" src="public/images/readme01.png"/></td>
  <td><img alt="reame02" src="public/images/readme02.png"/></td>
  </tr>
</table>

<table>
<tr> 
  <td><img alt="reame03" src="public/images/readme03.png"/></td>
  <td><img alt="reame04" src="public/images/readme04.png"/></td>
  </tr>
</table>

## 프로젝트 소개

```
1) 프로젝트 설명
인생맛집의 찾아 등록하고 맛집 정보를 저장해서 공유를 할 수 있는 웹 사이트

2) 개발 개요 및 배경
Next.js + Naver Map +Firebase 를 프로젝트에 녹여서 써보고 싶은 마음에 시작
관리자 페이지에서 맛집을 등록 및 수정 -> 메인 페이지에서 맛집 리스트들 보이는 방식으로 구현
```

## 프로젝트 기능

<관리자 페이지>

- 맛집 정보 대시보드
- 맛집 등록 및 수정
- 피드백 수정 및 삭제

<메인 페이지>

- 맛집 정보 출력
- 피드백 등록
- 관리자 페이지 로그인

## 기술스택

<div>
<img src="https://img.shields.io/badge/React-7ddfff?style=flat-square&logo=React&logoColor=white"/>&nbsp 
<img src="https://img.shields.io/badge/Next-black?style=flat-square&logo=nextdotjs&logoColor=white"/>&nbsp 
<img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"/>&nbsp
<img src="https://img.shields.io/badge/swr-000000?style=flat-square&logo=swr&logoColor=white"/>&nbsp
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>&nbsp
<img src="https://img.shields.io/badge/naverMap-03C75A?style=flat-square&logo=naver&logoColor=white"/>&nbsp 
 </div>

## 서비스 실행

```
git clone https://github.com/Corete95/Soulfood.git

cd Soulfood
yarn install
yarn dev
```

## 폴더구조

<details>
<summary>폴더구조 펼쳐보기</summary>
<div markdown="1">

```
📦
├─ .babelrc
├─ .env
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.json
├─ .swcrc
├─ README.md
├─ components
│  ├─ common
│  │  ├─ Button.tsx
│  │  ├─ DashBordLayout.tsx
│  │  ├─ GlobalModal.tsx
│  │  ├─ Header.tsx
│  │  ├─ LabelInput.tsx
│  │  ├─ Portal.tsx
│  │  ├─ SideBar.tsx
│  │  ├─ SideBarLayout.tsx
│  │  ├─ Table.tsx
│  │  └─ TableBody.tsx
│  ├─ feedback
│  │  ├─ FeedbackList.tsx
│  │  ├─ FeedbackSection.tsx
│  │  ├─ FeedbackSubmitButton.tsx
│  │  └─ NewFeedInput.tsx
│  └─ home
│     ├─ DetailContent.tsx
│     ├─ DetailHeader.tsx
│     ├─ DetailSection.tsx
│     ├─ Header.tsx
│     ├─ Makers.tsx
│     ├─ Map.tsx
│     ├─ MapSection.tsx
│     └─ Marker.tsx
├─ firebase
│  ├─ feedback.ts
│  └─ index.ts
├─ hooks
│  ├─ useCheckboxes.tsx
│  ├─ useCurrentStore.tsx
│  ├─ useInput.ts
│  ├─ useInputs.ts
│  ├─ useMap.tsx
│  ├─ useModals.tsx
│  ├─ useRouters.tsx
│  ├─ useSearch.tsx
│  ├─ useStores.ts
│  └─ useToast.tsx
├─ lib
│  └─ registry.tsx
├─ next-sitemap.config.js
├─ next.config.js
├─ package.json
├─ pages
│  ├─ 404.tsx
│  ├─ Providers.tsx
│  ├─ [name].tsx
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ admin
│  │  ├─ dashboard
│  │  │  └─ index.tsx
│  │  ├─ index.tsx
│  │  ├─ management
│  │  │  └─ index.tsx
│  │  ├─ registration
│  │  │  └─ index.tsx
│  │  └─ review
│  │     ├─ ContentPage.tsx
│  │     ├─ FilterPage.tsx
│  │     ├─ SearchPage.tsx
│  │     └─ index.tsx
│  ├─ api
│  │  ├─ hello.ts
│  │  └─ stores.ts
│  ├─ feedback.tsx
│  └─ index.tsx
├─ public
│  ├─ favicon.png
│  ├─ images
│  │  ├─ markers-selected.png
│  │  ├─ markers.png
│  │  └─ naver.png
│  ├─ logo.jpeg
│  ├─ robots.txt
│  ├─ sitemap-0.xml
│  ├─ sitemap.xml
│  └─ stores.json
├─ recoil
│  └─ admin
│     └─ atom.ts
├─ seo.config.js
├─ styles
│  ├─ GlobalStyles.ts
│  ├─ admin
│  │  ├─ adminDashBord.tsx
│  │  └─ adminLogin.tsx
│  ├─ common.module.scss
│  ├─ detail.module.scss
│  ├─ feedback.module.scss
│  ├─ fonts.scss
│  ├─ globals.scss
│  ├─ header.module.scss
│  ├─ map.module.scss
│  └─ theme.ts
├─ tsconfig.json
├─ types
│  ├─ common.ts
│  ├─ feedback.ts
│  ├─ map.ts
│  ├─ store.ts
│  ├─ styled.d.ts
│  └─ toast.ts
├─ utils
│  ├─ common.ts
│  ├─ commonObject.ts
│  └─ feedbackColor.ts
└─ yarn.lock
```

</div>
</details>
