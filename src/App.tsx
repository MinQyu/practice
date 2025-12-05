import { useState } from "react";
import TodoApp from "./problems/Problem1/TodoApp";
import SearchApp from "./problems/Problem2/SearchApp";
import SignUpForm from "./problems/Problem3/SignUpForm";
import PostList from "./problems/Problem4/PostList";

type Problem = "menu" | "problem1" | "problem2" | "problem3" | "problem4";

function App() {
  const [currentProblem, setCurrentProblem] = useState<Problem>("menu");

  const renderProblem = () => {
    switch (currentProblem) {
      case "problem1":
        return <TodoApp />;
      case "problem2":
        return <SearchApp />;
      case "problem3":
        return <SignUpForm />;
      case "problem4":
        return <PostList />;
      default:
        return (
          <div className="menu">
            <h1>React 코딩테스트 준비 과제</h1>
            <div className="problem-list">
              <div className="problem-card" onClick={() => setCurrentProblem("problem1")}>
                <h2>문제 1: Todo 리스트 앱</h2>
                <p>기본 CRUD 기능 구현</p>
                <span className="difficulty">난이도: ⭐⭐</span>
              </div>
              <div className="problem-card" onClick={() => setCurrentProblem("problem2")}>
                <h2>문제 2: 검색 및 필터링</h2>
                <p>실시간 검색과 debounce 구현</p>
                <span className="difficulty">난이도: ⭐⭐⭐</span>
              </div>
              <div className="problem-card" onClick={() => setCurrentProblem("problem3")}>
                <h2>문제 3: 폼 검증</h2>
                <p>회원가입 폼과 실시간 유효성 검사</p>
                <span className="difficulty">난이도: ⭐⭐⭐</span>
              </div>
              <div className="problem-card" onClick={() => setCurrentProblem("problem4")}>
                <h2>문제 4: API 호출 및 데이터 처리</h2>
                <p>비동기 데이터 처리와 그룹화</p>
                <span className="difficulty">난이도: ⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app">
      {currentProblem !== "menu" && (
        <button className="back-button" onClick={() => setCurrentProblem("menu")}>
          ← 메뉴로 돌아가기
        </button>
      )}
      {renderProblem()}
    </div>
  );
}

export default App;
