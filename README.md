# LShift 회사 소개 웹사이트

![LShift Logo](https://img.shields.io/badge/LShift-%3C%3C-00d9ff?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-bd00ff?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-00ff88?style=for-the-badge)

**작지만 빠른 혁신** | **Left Shift, Right Future**

LShift는 앱, 게임, 소프트웨어 개발 전문 스타트업의 공식 웹사이트입니다.

## ✨ 주요 기능

### 🎨 디자인 & UI
- ✅ **다크모드 기본** (라이트/다크 토글 가능)
- ✅ **완전한 반응형 디자인** (모바일, 태블릿, 데스크톱 최적화)
- ✅ **부드러운 애니메이션** (스크롤, 호버, 전환 효과)
- ✅ **네온 & 그라디언트 효과**
- ✅ **미니멀하면서 임팩트 있는 디자인**

### 🌐 다국어 지원
- ✅ **한국어/영어 실시간 전환**
- ✅ **모든 콘텐츠 완전 번역**
- ✅ **부드러운 페이드 애니메이션**

### 📱 섹션 구성
1. **히어로 섹션** - 타이핑 애니메이션, CTA 버튼, 파티클 효과
2. **회사 소개** - Left Shift 연산자 시각화, 핵심 가치
3. **기술 스택** - 8개 주요 기술 카드 (Flutter, Unity, Firebase 등)
4. **프로젝트** - 카테고리별 필터링 (앱/게임/소프트웨어)
5. **아이디어 & 협업** - 제안 폼, 협업 정보
6. **연락처** - 이메일, SNS 링크

### 🎮 특별 기능
- ✅ **로딩 화면** - 코드 타이핑 효과와 진행 바
- ✅ **이스터에그** - 제작자 때리기 캐릭터 (6개 섹션에 배치)
- ✅ **파티클 애니메이션** - 히어로 섹션 배경
- ✅ **스크롤 애니메이션** - AOS 라이브러리 사용
- ✅ **콘솔 이스터에그** - 개발자 도구에서 확인

## 🚀 빠른 시작

### 실행 방법
웹사이트를 실행하는 것은 매우 간단합니다:

1. **다운로드 또는 클론**
   ```bash
   git clone <repository-url>
   cd LShift_web
   ```

2. **브라우저에서 열기**
   - `index.html` 파일을 더블클릭하거나
   - 브라우저에서 직접 열기

3. **로컬 서버 사용 (권장)**
   ```bash
   # Python이 설치되어 있다면
   python -m http.server 8000
   # 또는
   python3 -m http.server 8000

   # Node.js가 설치되어 있다면
   npx serve
   ```

   그 후 브라우저에서 `http://localhost:8000` 접속

## 📝 커스터마이징 가이드

### 1️⃣ 이메일 & SNS 링크 변경

`script.js` 파일 상단에서 수정:

```javascript
// Social Media Links (쉽게 수정 가능)
const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/your_account',  // 여기 수정
    github: 'https://github.com/your_account',
    linkedin: 'https://www.linkedin.com/company/your_company',
    twitter: 'https://twitter.com/your_account'
};

// Business Email (쉽게 수정 가능)
const BUSINESS_EMAIL = 'your_email@lshift.io';  // 여기 수정
```

### 2️⃣ 프로젝트 추가/수정

`script.js`의 `PROJECTS` 배열에서 수정:

```javascript
const PROJECTS = [
    {
        title: {
            ko: '프로젝트 이름',
            en: 'Project Name'
        },
        description: {
            ko: '한국어 설명',
            en: 'English description'
        },
        category: 'app',  // 'app', 'game', 'software' 중 선택
        status: 'development',  // 'development', 'q1-2025', 'q2-2025', 'coming-soon'
        statusText: {
            ko: '개발 중',
            en: 'In Development'
        }
    },
    // 새 프로젝트를 여기에 추가...
];
```

### 3️⃣ 색상 테마 변경

`style.css`의 `:root` 섹션에서 수정:

```css
:root {
    /* 원하는 색상으로 변경 */
    --brand-primary: #00d9ff;      /* 메인 브랜드 색상 */
    --brand-secondary: #bd00ff;    /* 보조 브랜드 색상 */
    --brand-accent: #00ff88;       /* 액센트 색상 */
}
```

### 4️⃣ 회사 정보 수정

`index.html`에서 직접 텍스트를 수정하거나, `script.js`의 `TRANSLATIONS` 객체에서 수정:

```javascript
const TRANSLATIONS = {
    ko: {
        aboutDesc1: '여기에 회사 소개 텍스트를 입력하세요.',
        // ...
    },
    en: {
        aboutDesc1: 'Enter your company description here.',
        // ...
    }
};
```

## 📂 파일 구조

```
LShift_web/
├── index.html          # 메인 HTML 파일
├── style.css           # 모든 스타일링
├── script.js           # 모든 JavaScript 로직
└── README.md           # 이 파일
```

## 🛠️ 사용된 기술

- **HTML5** - 시맨틱 마크업
- **CSS3** - 변수, 그리드, 플렉스박스, 애니메이션
- **JavaScript (ES6+)** - 바닐라 JS, 모듈 패턴
- **외부 라이브러리:**
  - [AOS](https://michalsnik.github.io/aos/) - 스크롤 애니메이션
  - [Font Awesome](https://fontawesome.com/) - 아이콘
  - [Google Fonts](https://fonts.google.com/) - Poppins, Fira Code 폰트

## 🎯 주요 특징

### 반응형 브레이크포인트
- **Desktop**: 1024px 이상
- **Tablet**: 768px - 1023px
- **Mobile**: 767px 이하

### 브라우저 호환성
- ✅ Chrome (권장)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE는 지원하지 않음

## 🎮 이스터에그 발견하기

1. **캐릭터 때리기**
   - 각 섹션에 숨겨진 캐릭터 아이콘을 찾아 클릭하세요
   - 20번 클릭하면 특별한 메시지가 나타납니다!

2. **콘솔 메시지**
   - 개발자 도구(F12)를 열어 콘솔을 확인하세요
   - 숨겨진 메시지를 발견할 수 있습니다

## 📊 성능 최적화

- ✅ CSS/JS 최소화 준비 완료
- ✅ 이미지 레이지 로딩
- ✅ AOS 애니메이션 최적화
- ✅ 60fps 부드러운 애니메이션
- ✅ 모바일 최적화

## 🔧 추가 개발 아이디어

### 단기
- [ ] 실제 로고 이미지 추가
- [ ] 파비콘 추가
- [ ] OG 이미지 추가
- [ ] 프로젝트 상세 모달
- [ ] 이메일 폼 백엔드 연결

### 장기
- [ ] 블로그 섹션
- [ ] 팀 소개 페이지
- [ ] 채용 공고
- [ ] 다크/라이트 모드 자동 감지
- [ ] 더 많은 언어 지원

## 🐛 문제 해결

### 애니메이션이 작동하지 않는 경우
- AOS 라이브러리가 제대로 로드되었는지 확인
- 콘솔에서 JavaScript 에러 확인

### 모바일에서 레이아웃이 깨지는 경우
- 브라우저 캐시 삭제
- 뷰포트 메타 태그 확인

### 폰트가 제대로 표시되지 않는 경우
- 인터넷 연결 확인 (Google Fonts CDN 사용)
- 로컬 폰트 파일 추가 고려

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 👨‍💻 제작

**LShift Team**
- 웹사이트: [준비 중]
- 이메일: contact@lshift.io
- Instagram: @lshift_official

---

### 💡 팁

1. **개발자 도구 활용**: 크롬 개발자 도구에서 실시간으로 스타일을 테스트해보세요
2. **Git 버전 관리**: 변경 전 항상 커밋하세요
3. **테스트**: 여러 기기와 브라우저에서 테스트하세요
4. **성능**: Lighthouse로 성능 점수를 확인하세요

---

**Made with ❤️ by LShift**

**<< Left Shift, Right Future >>**
