# D팀 최종 제출 - 팀 공통 제출물

팀장(이원찬)이 일괄 제출하는 팀 공통 제출물 정리 문서입니다. 기준일: 2026-11-24

## 1. GitHub 저장소 URL

https://github.com/wonchandev/oss-team-portfolio

## 2. GitHub Pages 웹사이트 URL

https://wonchandev.github.io/oss-team-portfolio/

## 3. 프로젝트 설명이 포함된 README.md

`README.md`: 프로젝트 소개, 콘셉트(D = Dev Log), 기술 스택, 프로젝트 구조, 브랜치 전략, 협업 방법, 역할 분담표를 담고 있습니다.

## 4. 팀원 6명의 역할 분담표

| 팀원 | GitHub | 담당 기능 |
| --- | --- | --- |
| 이원찬 (팀장·PM) | [wonchandev](https://github.com/wonchandev) | 메인 페이지, 공통 헤더·푸터·내비게이션·디자인, 반응형 웹 디자인, 저장소 관리, 배포, 발표 |
| 배하엘 | [AAA-bae](https://github.com/AAA-bae) | 팀 소개 페이지, 연락처 및 문의 기능 |
| 최요한 | [yohan070312](https://github.com/yohan070312) | 팀원 프로필, 이미지 및 아이콘 관리 |
| 이성민 | [csckcsj](https://github.com/csckcsj) | 프로젝트 갤러리, 프로젝트 검색·필터 |
| 이세루 | [SSe-a11y-spec](https://github.com/SSe-a11y-spec) | 활동 기록 페이지, FAQ 페이지 |
| 이동우 | [lily0012331-sketch](https://github.com/lily0012331-sketch) | 프로젝트 상세 페이지, 웹 접근성 개선 및 사용성·화면 테스트 |

같은 표가 `README.md`의 "역할 분담" 항목에도 있습니다.

## 5. 필수 페이지 6개 항목 구현

| 필수 항목 | 파일 | 담당 | 배포 주소 |
| --- | --- | --- | --- |
| 메인 페이지 | `index.html` | 이원찬 | [열기](https://wonchandev.github.io/oss-team-portfolio/) |
| 팀 소개 | `about.html` | 배하엘 | [열기](https://wonchandev.github.io/oss-team-portfolio/about.html) |
| 팀원 프로필 | `members.html` | 최요한 | [열기](https://wonchandev.github.io/oss-team-portfolio/members.html) |
| 프로젝트 갤러리 | `projects.html` | 이성민 | [열기](https://wonchandev.github.io/oss-team-portfolio/projects.html) |
| 활동 기록 | `activities.html` | 이세루 (구현), 이원찬 (내용 입력) | [열기](https://wonchandev.github.io/oss-team-portfolio/activities.html) |
| 공통 UI (헤더·푸터·내비게이션) | `css/style.css`, `js/common.js` | 이원찬 | 모든 페이지 |

추가 구현: 프로젝트 상세(`project-detail.html`), FAQ(`faq.html`), 문의(`contact.html`), 404 페이지(`404.html`), 프로젝트 검색·필터, 반응형 레이아웃, 접근성 개선.

활동 기록 페이지는 이세루 님이 구현했고, 비어 있던 12개 항목의 내용은 저장소 기록을 보고 PM이 입력했습니다. ([PR #43](https://github.com/wonchandev/oss-team-portfolio/pull/43))

## 6. Issues 및 Pull Request 기록

기준일(2026-11-24) 현재:

| 구분 | 개수 | 링크 |
| --- | --- | --- |
| Issues | 16개 (전부 완료) | [Issues](https://github.com/wonchandev/oss-team-portfolio/issues?q=is%3Aissue) |
| Pull Requests | 35개 (병합 34개, 닫음 1개) | [Pull Requests](https://github.com/wonchandev/oss-team-portfolio/pulls?q=is%3Apr) |

- 작업은 Issue로 나누고 담당자를 지정했습니다. (#1 ~ #18)
- 기능 PR은 모두 `develop`으로 올리고, `main`은 PM 승인 후 배포용으로만 병합했습니다.
- `main`에는 브랜치 보호 규칙(PR 필수, 승인 1명)을 적용했습니다.
- PR #49는 `main`이 대상이라 닫고, 같은 내용을 `develop` 대상 PR #50에서 반영했습니다.

## 7. 코드 리뷰 기록

PR에 남긴 리뷰입니다. 팀원 6명 모두 다른 팀원의 PR에 리뷰를 남겼습니다.

| 리뷰어 | 리뷰한 PR | 비고 |
| --- | --- | --- |
| 배하엘 | [#28](https://github.com/wonchandev/oss-team-portfolio/pull/28) 프로젝트 검색·필터 | |
| 최요한 | [#37](https://github.com/wonchandev/oss-team-portfolio/pull/37) FAQ 페이지 | |
| 이성민 | [#36](https://github.com/wonchandev/oss-team-portfolio/pull/36) 프로젝트 상세 페이지 | |
| 이세루 | [#39](https://github.com/wonchandev/oss-team-portfolio/pull/39) 팀원 프로필 | |
| 이동우 | [#40](https://github.com/wonchandev/oss-team-portfolio/pull/40) 팀 소개 | |
| 이원찬 | #27, #28, #35, #36, #37, #38, #39, #40, #41, #42, #44, #46, #50 | PM으로서 병합 전 검토. 수정 요청 2건(#37, #39) 포함 |

이원찬의 리뷰 내용은 `wonchan.md`에 정리했습니다.

## 8. 병합 충돌 해결 기록

`docs/conflict-resolution.md`

개발 중 실제 충돌이 없어서, 안내서에서 허용한 방식대로 같은 줄을 서로 다르게 수정하는 두 PR([#30](https://github.com/wonchandev/oss-team-portfolio/pull/30), [#31](https://github.com/wonchandev/oss-team-portfolio/pull/31))로 충돌을 **연습용으로 일으켜 해결**했습니다. 충돌 발생 상황, 원인, 해결 방법, 결과가 문서에 있습니다.

## 9. 최종 발표 자료

- 발표 자료 파일: `D팀_최종발표.pptx` (제출 시 별도 첨부)
- 발표 준비 문서: `docs/presentation-outline.md`
