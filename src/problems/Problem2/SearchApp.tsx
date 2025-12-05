import { useState, useMemo } from 'react';
import { mockUsers } from './mockData';
import './SearchApp.css';

function SearchApp() {
  // TODO: 검색어 상태 관리
  // - searchTerm: 검색어 상태
  
  // TODO: Debounce 구현
  // - 검색어 입력 시 debounce 적용 (300ms)
  // - useMemo나 useEffect, setTimeout을 활용
  
  // TODO: 검색 필터링 로직
  // - 이름 또는 이메일로 검색
  // - 대소문자 구분 없이 검색
  // - 검색어가 없으면 전체 목록 표시

  // TODO: 검색 결과 개수 계산

  return (
    <div className="search-app">
      <h1>사용자 검색</h1>
      
      {/* TODO: 검색 입력 필드 구현 */}
      <div className="search-input-section">
        {/* 검색 입력 필드 */}
        {/* 검색 결과 개수 표시 */}
      </div>

      {/* TODO: 검색 결과 목록 렌더링 */}
      <div className="user-list">
        {/* 필터링된 사용자 목록을 map으로 렌더링 */}
        {/* 사용자 카드 형태로 표시 (이름, 이메일) */}
      </div>

      {/* TODO: 검색 결과가 없을 때 메시지 표시 */}
      {/* 검색 결과가 없으면 "검색 결과가 없습니다" 메시지 표시 */}
    </div>
  );
}

export default SearchApp;
