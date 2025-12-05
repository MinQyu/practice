export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
}

export const mockUsers: User[] = [
  { id: 1, name: '김철수', email: 'kim@example.com', department: '개발팀' },
  { id: 2, name: '이영희', email: 'lee@example.com', department: '디자인팀' },
  { id: 3, name: '박민수', email: 'park@example.com', department: '개발팀' },
  { id: 4, name: '최지영', email: 'choi@example.com', department: '마케팅팀' },
  { id: 5, name: '정수진', email: 'jung@example.com', department: '개발팀' },
  { id: 6, name: '강동원', email: 'kang@example.com', department: '디자인팀' },
  { id: 7, name: '윤서연', email: 'yoon@example.com', department: '마케팅팀' },
  { id: 8, name: '임태현', email: 'lim@example.com', department: '개발팀' },
  { id: 9, name: '한소희', email: 'han@example.com', department: '디자인팀' },
  { id: 10, name: '오준호', email: 'oh@example.com', department: '개발팀' },
  { id: 11, name: '신유진', email: 'shin@example.com', department: '마케팅팀' },
  { id: 12, name: '류성민', email: 'ryu@example.com', department: '개발팀' },
  { id: 13, name: '조은지', email: 'cho@example.com', department: '디자인팀' },
  { id: 14, name: '홍길동', email: 'hong@example.com', department: '개발팀' },
  { id: 15, name: '송미영', email: 'song@example.com', department: '마케팅팀' },
];
