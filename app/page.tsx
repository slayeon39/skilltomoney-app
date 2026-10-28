"use client";

import { useState } from "react";

interface Course {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  priceRaw: string;
  capacity: number;
  reserved: number;
  tag: string;
  icon: string;
  duration: string;
  description: string;
  highlights: string[];
}

const COURSES: Course[] = [
  {
    id: "ai-auto",
    name: "AI 자동화",
    price: 35000,
    priceFormatted: "35,000원",
    priceRaw: "35000원",
    capacity: 8,
    reserved: 8,
    tag: "베스트셀러",
    icon: "⚡",
    duration: "원데이 3시간",
    description: "반복적인 단순 업무는 AI에게 맡기고, 퇴근 시간을 획기적으로 앞당기는 실전 노코드 자동화 클래스입니다.",
    highlights: [
      "ChatGPT 업무 맞춤 프롬프트 템플릿",
      "Make & Zapier 노코드 자동화 파이프라인",
      "실무 데이터 자동 수집 및 정리 실습",
    ],
  },
  {
    id: "shortform",
    name: "숏폼 편집",
    price: 45000,
    priceFormatted: "45,000원",
    priceRaw: "45000원",
    capacity: 6,
    reserved: 2,
    tag: "인기 급상승",
    icon: "🎬",
    duration: "원데이 3.5시간",
    description: "조회수 100만을 이끄는 후킹 기획부터 캡컷(CapCut) 실전 컷편집, 자막, 사운드까지 당일 완성합니다.",
    highlights: [
      "시청 지속시간 80% 달성 후킹 공식",
      "모바일/PC 캡컷 초고속 편집 테크닉",
      "유튜브 쇼츠·인스타 릴스 수익화 로드맵",
    ],
  },
  {
    id: "excel",
    name: "엑셀 실무",
    price: 30000,
    priceFormatted: "30,000원",
    priceRaw: "30000원",
    capacity: 10,
    reserved: 7,
    tag: "입문자 추천",
    icon: "📊",
    duration: "원데이 2.5시간",
    description: "야근을 부르는 복잡한 수식은 그만! 실무에서 매일 쓰는 핵심 함수 10개와 자동 집계 대시보드를 완성합니다.",
    highlights: [
      "실무 필수 10대 핵심 함수 마스터",
      "원클릭 피벗테이블 & 시각화 대시보드",
      "실무 즉시 활용 가능한 만능 엑셀 템플릿",
    ],
  },
];

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const handleOpenModal = (course: Course) => {
    setSelectedCourse(course);
    setIsBooked(false);
    setNameInput("");
    setPhoneInput("");
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setIsBooked(false);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !phoneInput.trim()) {
      alert("성함과 연락처를 모두 입력해 주세요.");
      return;
    }
    setIsBooked(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#070d1e] text-slate-100 overflow-x-hidden flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      {/* 남색 & 금색 배경 은은한 오로라 글로우 효과 */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] lg:w-[900px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-blue-900/30 via-indigo-800/20 to-amber-500/15 blur-[100px] sm:blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-blue-600/10 blur-[110px] rounded-full" />
      <div className="pointer-events-none absolute bottom-20 -right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/15 blur-[120px] rounded-full" />

      {/* 상단 네비게이션 헤더 */}
      <header className="relative z-10 w-full border-b border-amber-500/15 backdrop-blur-md bg-[#070d1e]/85 sticky top-0">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-black text-lg shadow-md shadow-amber-500/30">
              S
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                스킬투머니
              </span>
              <span className="text-[10px] text-amber-400/90 font-medium tracking-wide">
                Skill to Money
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/25">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              강좌 목록
            </span>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-5 sm:px-8 py-10 sm:py-16 max-w-6xl mx-auto w-full">
        {/* 상단 헤더 배너 섹션 */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-sm">
            <span>✨</span>
            <span>배운 기술이 돈이 되는 원데이 클래스</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 sm:mb-5 leading-tight break-keep">
            스킬투머니{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
              강좌 목록
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed break-keep">
            내가 가진 컴퓨터 활용 스킬을 즉시 실전 수익으로 연결하는 3대 핵심 클래스를 만나보세요.
            실무 압축 커리큘럼으로 단 하루 만에 완성합니다.
          </p>
        </div>

        {/* 강좌 카드 목록 3개 그리드 */}
        <section aria-label="스킬투머니 강좌 목록" className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {COURSES.map((course) => {
            const remaining = course.capacity - course.reserved;
            const isSoldOut = remaining === 0;
            const isUrgent = remaining >= 1 && remaining <= 2;

            return (
              <div
                key={course.id}
                className={`group relative flex flex-col justify-between rounded-2xl bg-[#0c152e]/80 border p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                  isSoldOut
                    ? "border-white/10 opacity-80"
                    : "border-amber-500/20 hover:border-amber-400/70 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(245,158,11,0.15)]"
                }`}
              >
                {/* 상단 카드 장식 글로우 */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl transition-all duration-300 ${
                    isSoldOut ? "bg-slate-700/10" : "bg-amber-500/10 group-hover:bg-amber-400/20"
                  }`}
                />

                <div>
                  {/* 상단 태그 및 강좌 아이콘 */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20">
                      {course.icon}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isSoldOut ? (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40">
                          마감
                        </span>
                      ) : isUrgent ? (
                        <span
                          className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-500/20 text-red-500 border border-red-500/50"
                          style={{ color: "#ef4444" }}
                        >
                          마감 임박
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">
                          {course.tag}
                        </span>
                      )}
                      <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* 강좌 이름 */}
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl sm:text-[26px] font-black text-white group-hover:text-amber-200 transition-colors tracking-tight">
                      {course.name}
                    </h2>
                    {isSoldOut && (
                      <span className="text-xs font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">
                        마감
                      </span>
                    )}
                    {isUrgent && (
                      <span
                        className="text-xs font-bold text-red-500 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/40"
                        style={{ color: "#ef4444" }}
                      >
                        마감 임박
                      </span>
                    )}
                  </div>

                  {/* 강좌 소개 문구 */}
                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-4 break-keep min-h-[40px]">
                    {course.description}
                  </p>

                  {/* 남은 좌석 / 정원 표시 영역 */}
                  <div className="mb-4 p-3.5 rounded-xl bg-[#070e22] border border-amber-500/20">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-400 font-medium">좌석 현황</span>
                      {isSoldOut ? (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                          마감
                        </span>
                      ) : isUrgent ? (
                        <span
                          className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-500 border border-red-500/50"
                          style={{ color: "#ef4444" }}
                        >
                          마감 임박
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          예약 가능
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm sm:text-base font-bold text-amber-200">
                        {`남은 좌석 ${remaining}석 / 정원 ${course.capacity}명`}
                      </div>
                      {isSoldOut && (
                        <span className="text-xs font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/30">
                          마감
                        </span>
                      )}
                      {isUrgent && (
                        <span
                          className="text-xs font-bold text-red-500 bg-red-500/15 px-2 py-0.5 rounded border border-red-500/40"
                          style={{ color: "#ef4444" }}
                        >
                          마감 임박
                        </span>
                      )}
                    </div>
                    {/* 시각적 잔여 좌석 프로그레스 바 */}
                    <div className="mt-2.5 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isSoldOut
                            ? "bg-slate-600"
                            : isUrgent
                            ? "bg-red-500"
                            : "bg-gradient-to-r from-amber-400 to-yellow-400"
                        }`}
                        style={{
                          width: `${Math.min(100, (course.reserved / course.capacity) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* 수강료 표시 영역 */}
                  <div className="mb-6 p-4 rounded-xl bg-[#070e22] border border-amber-500/25 group-hover:border-amber-400/50 transition-colors">
                    <div className="flex items-center justify-between text-xs text-amber-300/80 font-medium mb-1">
                      <span>수강료</span>
                      <span className="text-xs text-amber-400 font-bold">{course.priceRaw}</span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                        {course.priceFormatted}
                      </span>
                      <span className="text-xs text-slate-400 font-normal">/ 1인</span>
                    </div>
                  </div>

                  {/* 핵심 커리큘럼 포인트 체크리스트 */}
                  <div className="space-y-2.5 mb-7">
                    <span className="text-xs font-semibold text-slate-300 block">커리큘럼 핵심 포인트</span>
                    {course.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300/90 leading-snug">
                        <span className="text-amber-400 font-bold shrink-0">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* [예약하기] / [예약 마감] 버튼 */}
                <div className="pt-2">
                  <button
                    type="button"
                    disabled={isSoldOut}
                    onClick={isSoldOut ? undefined : () => handleOpenModal(course)}
                    aria-label={isSoldOut ? `${course.name} 강좌 예약 마감` : `${course.name} 강좌 예약하기`}
                    className={`w-full py-3.5 px-5 rounded-xl font-extrabold text-base transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSoldOut
                        ? "bg-slate-800/80 text-slate-400 border border-white/10 cursor-not-allowed opacity-60 shadow-none"
                        : "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 active:scale-95 cursor-pointer group/btn"
                    }`}
                  >
                    <span>{isSoldOut ? "예약 마감" : "예약하기"}</span>
                    {!isSoldOut && (
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </section>

        {/* 하단 신뢰 및 혜택 안내 배너 */}
        <section aria-label="수강 혜택" className="mt-12 sm:mt-16 w-full p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center sm:items-start gap-3.5 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-300 flex items-center justify-center text-lg font-bold shrink-0">
              01
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">100% 실전 실습 중심</h3>
              <p className="text-xs text-slate-400">이론 나열이 아닌 실습 즉시 결과물을 만듭니다.</p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3.5 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-300 flex items-center justify-center text-lg font-bold shrink-0">
              02
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">실전 템플릿 즉시 증정</h3>
              <p className="text-xs text-slate-400">수업 직후 현업에서 바로 쓰는 파일 패키지 제공</p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3.5 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-300 flex items-center justify-center text-lg font-bold shrink-0">
              03
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">밀착 질의응답 코칭</h3>
              <p className="text-xs text-slate-400">소수 정예로 막히는 부분을 현장에서 바로 해결</p>
            </div>
          </div>
        </section>
      </main>

      {/* 예약하기 모달 레이어 */}
      {selectedCourse && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-[#0c152e] border border-amber-500/40 p-6 sm:p-7 shadow-2xl shadow-amber-500/10 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="모달 닫기"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmitBooking}>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/20">
                  <span>{selectedCourse.icon}</span>
                  <span>원데이 클래스 예약</span>
                </div>

                <h3 id="modal-title" className="text-2xl font-bold text-white mb-1">
                  {selectedCourse.name} 예약 신청
                </h3>
                <p className="text-xs text-slate-300/80 mb-5">
                  수강을 원하시는 분의 정보를 입력하시면 예약 확정 안내 문자를 보내드립니다.
                </p>

                {/* 선택 강좌 요약 카드 */}
                <div className="p-3.5 rounded-xl bg-[#070e22] border border-amber-500/20 mb-5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">선택한 강좌</span>
                    <span className="text-sm font-bold text-white">{selectedCourse.name}</span>
                    <span className="text-[11px] text-amber-300/80 block mt-0.5">
                      {`남은 좌석 ${selectedCourse.capacity - selectedCourse.reserved}석 / 정원 ${selectedCourse.capacity}명`}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-amber-300/80 block">수강료</span>
                    <span className="text-base font-extrabold text-amber-400">
                      {selectedCourse.priceFormatted}
                    </span>
                  </div>
                </div>

                {/* 입력 폼 */}
                <div className="space-y-3.5 mb-6">
                  <div>
                    <label htmlFor="applicant-name" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      예약자 성함
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      required
                      placeholder="홍길동"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="applicant-phone" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      연락처 (휴대폰 번호)
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      required
                      placeholder="010-1234-5678"
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>
                </div>

                {/* 하단 버튼 */}
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-semibold border border-white/10 transition-colors"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="flex-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-sm font-bold shadow-lg shadow-amber-500/25 transition-all active:scale-95"
                  >
                    예약 확정하기
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-4 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white mb-2">예약 신청이 접수되었습니다!</h3>
                <p className="text-xs text-slate-300/80 mb-5 leading-relaxed">
                  <span className="font-semibold text-amber-300">{nameInput}</span>님,{" "}
                  <span className="font-semibold text-white">{selectedCourse.name}</span> ({selectedCourse.priceFormatted})
                  <br />
                  예약 안내가 <span className="text-amber-200">{phoneInput}</span>(으)로 발송됩니다.
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-sm font-bold transition-all"
                >
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 하단 푸터 */}
      <footer className="relative z-10 w-full border-t border-amber-500/15 py-6 px-5 sm:px-8 text-center text-xs text-slate-400/80 bg-[#070d1e]/90">
        <p>© {new Date().getFullYear()} 스킬투머니 (Skill to Money). All rights reserved.</p>
        <p className="mt-1 text-[11px] text-amber-400/70">
          컴퓨터 활용 수업 실습 프로젝트 · 남색 & 금색 테마 강좌 목록
        </p>
      </footer>
    </div>
  );
}
