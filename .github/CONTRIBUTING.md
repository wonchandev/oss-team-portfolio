# 기여 및 협업 가이드

## 브랜치 규칙

- `main`: 최종 배포 브랜치
- `develop`: 통합 개발 브랜치
- `feat/<name>`: 신규 기능 개발
- `refactor/<name>`: 코드 개선 및 리팩토링
- `fix/<name>`: 버그 수정

브랜치는 `develop`에서 생성하고, 브랜치 이름은 작업 내용을 알아볼 수 있게 작성해주세요.

예시:
- `feat/member-profile`
- `refactor/shared-navigation`
- `fix/mobile-menu`

## 작업 흐름

1. 작업할 내용을 GitHub Issue에 등록하거나 관련 Issue를 확인합니다.
2. 최신 `develop`에서 작업 브랜치를 생성합니다.
3. 의미 있는 단위로 커밋하고 원격 저장소에 푸시합니다.
4. `develop`을 대상으로 Pull Request를 생성합니다.
5. 팀원의 리뷰와 확인을 거쳐 `develop`에 병합합니다.

## `main` 병합 규칙

`develop`에서 `main`으로 병합할 때는 반드시 PM의 코드 리뷰 및 승인을 받아야 합니다.

- `main`에 직접 푸시하지 않습니다.
- PM 승인 전에 `main` 대상 PR을 병합하지 않습니다.
- PM의 리뷰 및 승인이 완료된 후 병합합니다.
- `main` 병합은 최종 배포에 영향을 줄 수 있으므로 테스트 결과를 PR에 남깁니다.

## 커밋 메시지 예시

- `feat: 팀원 프로필 카드 추가`
- `fix: 모바일 메뉴 링크 오류 수정`
- `style: 프로필 카드 간격 조정`
- `refactor: 공통 내비게이션 정리`
- `docs: README 실행 방법 작성`

## 모든 팀원 규칙

- 본인이 맡은 코드를 직접 작성하고 설명할 수 있어야 합니다.
- PR에는 변경 내용, 테스트 결과, 관련 Issue를 포함합니다.
