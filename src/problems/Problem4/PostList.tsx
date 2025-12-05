import { useState, useEffect } from 'react';
import './PostList.css';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function PostList() {
  // TODO: 상태 관리
  // - posts: Post 배열 상태
  // - loading: 로딩 상태
  // - error: 에러 상태

  // TODO: API 호출 함수
  // - fetchPosts: JSONPlaceholder API에서 데이터 가져오기
  // - 또는 mock API 함수 사용
  // - 에러 처리 포함

  // TODO: useEffect로 컴포넌트 마운트 시 데이터 가져오기

  // TODO: 데이터 그룹화
  // - userId별로 그룹화하여 표시
  // - 또는 다른 방식으로 그룹화 (선택사항)

  // TODO: 로딩 상태 UI
  if (false) { // loading 상태일 때
    return (
      <div className="post-list-container">
        <h1>게시글 목록</h1>
        <div className="loading">로딩 중...</div>
      </div>
    );
  }

  // TODO: 에러 상태 UI
  if (false) { // error 상태일 때
    return (
      <div className="post-list-container">
        <h1>게시글 목록</h1>
        <div className="error">에러가 발생했습니다: {/* 에러 메시지 */}</div>
      </div>
    );
  }

  return (
    <div className="post-list-container">
      <h1>게시글 목록</h1>
      
      {/* TODO: 게시글 목록 렌더링 */}
      <div className="posts-section">
        {/* 그룹화된 게시글들을 렌더링 */}
        {/* 각 게시글 카드 표시 */}
      </div>

      {/* TODO: 페이지네이션 또는 무한 스크롤 (선택사항) */}
    </div>
  );
}

// TODO: Mock API 함수 (선택사항)
// 실제 API 대신 사용할 수 있는 mock 함수
async function mockFetchPosts(): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: 1, title: '첫 번째 게시글', body: '이것은 첫 번째 게시글의 내용입니다.' },
        { id: 2, userId: 1, title: '두 번째 게시글', body: '이것은 두 번째 게시글의 내용입니다.' },
        { id: 3, userId: 2, title: '세 번째 게시글', body: '이것은 세 번째 게시글의 내용입니다.' },
      ]);
    }, 1000);
  });
}

export default PostList;
