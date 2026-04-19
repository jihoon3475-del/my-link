# GEMINI.md

이 파일은 **MyLink** 프로젝트의 구조, 기술 스택, 개발 규칙 및 주요 지침을 포함합니다. 앞으로의 모든 작업은 이 문서의 지침을 최우선으로 해야 합니다.

## 1. 프로젝트 개요
- **프로젝트명:** MyLink
- **목적:** 사용자가 포트폴리오, 블로그, 비즈니스 웹사이트 등을 단일 링크로 통합하고 공유할 수 있게 해주는 프로필 링크 멀티플렉싱 서비스입니다.
- **주요 기능:**
    - **인증(Authentication):** Firebase Auth를 통한 Google 전용 로그인, 닉네임 기반의 고유 URL 생성 (`domain.com/displayName`).
    - **관리자 대시보드 (CMS):** 별도의 모달 없이 즉각적인 수정이 가능한 **인라인 편집(Inline Edit)**을 활용한 프로필 및 링크 관리.
    - **공개 프로필 페이지:** 외부 공유를 위한 모바일 최적화 페이지 (PC에서도 모바일 고정 너비 레이아웃 유지).
    - **자동화 로직:** Google Favicon API를 이용한 자동 링크 아이콘 추출, URL 프로토콜 자동 보정 (`https://`).

## 2. 기술 스택
- **프레임워크:** Next.js 16 (App Router)
- **라이브러리:** React 19, shadcn/ui
- **스타일링:** Tailwind CSS 4, Lucide React (Icons), HugeIcons
- **백엔드/인증:** Firebase (Authentication, Firestore)
- **언어:** TypeScript
- **패키지 매니저:** npm

## 3. 빌드 및 실행
프로젝트를 로컬에서 실행하거나 빌드하기 위한 주요 명령어입니다.
- **개발 서버 실행:** `npm run dev` (Turbopack 사용)
- **프로젝트 빌드:** `npm run build`
- **프로덕션 실행:** `npm run start`
- **Lint 검사:** `npm run lint`
- **코드 포맷팅:** `npm run format`
- **타입 체크:** `npm run typecheck`

## 4. 개발 규칙

### 4.1 UI/UX 원칙
- **인라인 편집:** 관리자 대시보드의 모든 텍스트(이름, 소개글, 링크 제목, URL)는 클릭 시 편집 가능한 인라인 모드로 전환되어야 합니다.
- **모바일 우선 최적화:** 퍼블릭 뷰는 모바일 사용자를 위해 엄격하게 설계되었으며, PC에서도 모바일 고정 너비(예: `max-w-md`)와 중앙 정렬을 유지합니다.
- **시각적 피드백:** 저장 성공 시 Toast 알림이나 체크 아이콘(`✓`)을 통해 즉각적인 피드백을 제공합니다.

### 4.2 아키텍처 및 데이터
- **Firebase 연동:** `firebase` 패키지를 설치하고 `@lib/firebase.ts`에서 초기화를 완료합니다.
- **데이터 구조 (Firestore):**
    - `Users` 컬렉션: `displayName`, `photoURL`, `bio`, `createdAt`
    - `Links` 하위 컬렉션: `title`, `url`, `faviconUrl`, `clickCount`, `createdAt`
- **중복 방지:** 가입 시 고유한 슬러그를 생성하기 위해 `displayName` 중복을 확인하는 로직을 포함합니다.

### 4.3 코드 스타일 및 소통 규칙
- **TypeScript:** 컴포넌트와 유틸리티의 타입을 엄격하게 정의하여 타입 안전성을 보장합니다.
- **컴포넌트:** shadcn/ui 컴포넌트는 `@components/ui`에, 서비스 로직 컴포넌트는 `@components/`에 위치시킵니다.
- **유틸리티:** 반복되는 로직(URL 보정, 날짜 포맷팅 등)은 `@lib/` 내의 유틸리티 함수로 분리합니다.
- **파일 참조:** 채팅이나 문서에서 파일을 언급할 때는 `@filename` 형식(예: `@package.json`, `@app/page.tsx`)을 사용합니다.
- **한국어 전용 통신 (Language):** 진행되는 모든 대화, 코드 내 주석, 아티팩트 파일(계획, 태스크, 워크스루 등) 작성 시 예외 없이 **한국어**만 사용하여 작성합니다.

## 5. 중요 사항 (TODO/Issues)
- [ ] **Firebase 설치:** `npm install firebase`를 사용하여 필요한 패키지를 추가합니다.
- [ ] **환경 변수:** Firebase API 키와 구성은 `@.env.local`에서 안전하게 관리합니다.
- [ ] **Google Favicon API:** 링크 저장 시 `https://s2.googleusercontent.com/s2/favicons?domain=DOMAIN` 형식으로 아이콘 URL을 생성합니다.
