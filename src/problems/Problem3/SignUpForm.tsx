import { useState } from 'react';
import './SignUpForm.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function SignUpForm() {
  // TODO: 폼 데이터 상태 관리
  // - formData: FormData 타입의 상태
  
  // TODO: 에러 상태 관리
  // - errors: FormErrors 타입의 상태

  // TODO: 유효성 검사 함수들 구현
  // - validateName: 이름 검증 (2자 이상, 한글/영문만)
  // - validateEmail: 이메일 검증 (유효한 이메일 형식)
  // - validatePassword: 비밀번호 검증 (8자 이상, 영문/숫자/특수문자 포함)
  // - validateConfirmPassword: 비밀번호 확인 검증 (비밀번호와 일치)

  // TODO: 실시간 유효성 검사
  // - 입력 필드 변경 시 즉시 검증
  // - 에러 메시지 업데이트

  // TODO: 폼 제출 핸들러
  // - 모든 필드가 유효할 때만 제출 가능
  // - 제출 시 콘솔에 폼 데이터 출력
  // - 제출 후 폼 초기화

  // TODO: 폼 전체 유효성 확인
  // - 모든 필드가 유효한지 확인하는 함수

  return (
    <div className="signup-form-container">
      <h1>회원가입</h1>
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        {/* TODO: 이름 입력 필드 */}
        <div className="form-group">
          <label htmlFor="name">이름 *</label>
          <input
            type="text"
            id="name"
            name="name"
            // value와 onChange 연결
            // placeholder 추가
          />
          {/* 에러 메시지 표시 */}
        </div>

        {/* TODO: 이메일 입력 필드 */}
        <div className="form-group">
          <label htmlFor="email">이메일 *</label>
          <input
            type="email"
            id="email"
            name="email"
            // value와 onChange 연결
            // placeholder 추가
          />
          {/* 에러 메시지 표시 */}
        </div>

        {/* TODO: 비밀번호 입력 필드 */}
        <div className="form-group">
          <label htmlFor="password">비밀번호 *</label>
          <input
            type="password"
            id="password"
            name="password"
            // value와 onChange 연결
            // placeholder 추가
          />
          {/* 에러 메시지 표시 */}
        </div>

        {/* TODO: 비밀번호 확인 입력 필드 */}
        <div className="form-group">
          <label htmlFor="confirmPassword">비밀번호 확인 *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            // value와 onChange 연결
            // placeholder 추가
          />
          {/* 에러 메시지 표시 */}
        </div>

        {/* TODO: 제출 버튼 */}
        <button
          type="submit"
          className="submit-button"
          // disabled 속성: 모든 필드가 유효할 때만 활성화
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
