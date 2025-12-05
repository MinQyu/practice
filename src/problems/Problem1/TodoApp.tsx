import { useState } from 'react';
import './TodoApp.css';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  // TODO: Todo 상태 관리 구현
  // - todos: Todo 배열 상태
  // - 새로운 Todo를 추가하는 함수
  // - Todo를 삭제하는 함수
  // - Todo 완료 상태를 토글하는 함수
  
  // TODO: 완료된 Todo와 미완료 Todo 개수 계산

  return (
    <div className="todo-app">
      <h1>Todo 리스트</h1>
      
      {/* TODO: Todo 입력 폼 구현 */}
      <div className="todo-input-section">
        {/* 입력 필드와 추가 버튼 */}
      </div>

      {/* TODO: Todo 목록 렌더링 */}
      <div className="todo-list">
        {/* Todo 항목들을 map으로 렌더링 */}
        {/* 각 항목에 삭제 버튼과 완료 토글 버튼 추가 */}
      </div>

      {/* TODO: 통계 정보 표시 */}
      <div className="todo-stats">
        {/* 완료된 Todo 개수와 미완료 Todo 개수 표시 */}
      </div>
    </div>
  );
}

export default TodoApp;
