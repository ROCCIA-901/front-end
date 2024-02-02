<template>
  <div class="signup-container">
    <!-- 이메일 입력 필드 및 버튼 -->
    <div class="input-group email-group">
      <label for="email">이메일</label>
      <input id="email" type="email" v-model="user.email" placeholder="이메일을 입력해주세요." required>
      <button class="btn" @click="checkEmail">인증번호 받기</button>
    </div>
    <!-- 인증번호 입력 필드 및 버튼 -->
    <div class="input-group certification-group">
      <input type="password" v-model="user.password" placeholder="인증번호를 입력해주세요." required>
      <button class="btn" @click="confirmEmail">인증번호 확인</button>
    </div>

    <!-- 비밀번호 입력 필드 및 버튼 -->
    <div class="input-group password-group">
      <label for="password">비밀번호</label>
      <input id="password" type="password" v-model="user.password" placeholder="인증번호를 입력해주세요." required>
    </div>
    
    <!-- 비밀번호 재입력 필드 -->
    <div class="input-group">
      <label for="password-confirm">비밀번호 확인</label>
      <input id="password-confirm" type="password" v-model="user.passwordConfirm" placeholder="비밀번호를 다시 한 번 입력해주세요." required>
    </div>
    
    <!-- 이름 입력 필드 -->
    <div class="input-group">
      <label for="name">이름</label>
      <input id="name" type="text" v-model="user.name" placeholder="본인 이름을 입력해주세요." required>
    </div>

  <!-- 기수 입력 필드 -->
  <div class="input-group">
    <label for="generation">기수</label>
    <select id="generation" v-model="user.generation">
      <option disabled value="">본인의 기수를 선택해주세요.</option>
      <option>OB</option>
      <option>10기</option>
      <option>11기</option>
    </select>
  </div>

  <!-- 역할 선택 필드 -->
  <div class="input-group">
    <label for="role">역할</label>
    <select id="role" v-model="user.role">
      <option disabled value="">본인의 역할을 선택해주세요.</option>
      <option>부원</option>
      <option>임원진</option>
    </select>
  </div>

  <!-- 운동 지점 선택 필드 -->
  <div class="input-group">
    <label for="branch">운동 지점</label>
    <select id="branch" v-model="user.branch">
      <option disabled value="">본인의 운동 지점을 선택해주세요.</option>
      <option>마곡</option>
      <option>양재</option>
      <option>연남</option>
      <option>일산</option>
      <option>신림</option>
    </select>
  </div>

  <!-- 운동 난이도 선택 필드 -->
  <div class="input-group">
    <label for="difficulty">운동 난이도</label>
    <select id="difficulty" v-model="user.difficulty">
      <option disabled value="">본인의 볼더링 난이도를 선택해주세요.(더클라임 기준)</option>
      <option>노랑(이하)</option>
      <option>초록</option>
      <option>파랑</option>
      <option>빨강</option>
      <option>보라(이상)</option>
    </select>
</div>

  <!-- 프로필 이미지 선택 -->
  <div class="profile-image-selector">
    <label for="profile-image">프로필 이미지</label>
    <div class="image-options">
      <img v-for="image in profileImages" :src="image.src" :alt="image.alt" :key="image.src" @click="selectProfileImage(image)">
    </div>
  </div>

  <!-- 소개 텍스트 영역 -->
  <div class="input-group bio-group">
    <label for="bio">본인 소개</label>
    <textarea id="bio" v-model="user.bio" placeholder="본인 소개를 작성해주세요. (300자 이하)" maxlength="300"></textarea>
  </div>
    
    <!-- 가입하기 버튼 -->
    <button class="btn submit-btn" @click="submitSignup">가입하기</button>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        user: {
          email: '',
          password: '',
          name: '',
          bio: '',
          profileImage: ''
        },
        profileImages: [
          { src: 'path/to/image1.png', alt: 'Description 1' },
          // ... 다른 이미지 경로와 설명
        ],
      };
    },
    methods: {
      checkEmail() {
        // 이메일 인증번호 발송 로직
      },
      confirmEmail() {
        // 이메일 인증번호 확인 로직
      },
      selectProfileImage(image) {
        this.user.profileImage = image.src;
      },
      submitSignup() {
        // 회원가입 요청 로직
        console.log('Submitted user:', this.user);
        // 여기서 axios를 사용하여 서버에 회원가입 요청을 보낼 수 있습니다.
      }
    }
  };
  </script>
  
  <style>
  .signup-container {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .input-group label {
    align-self: flex-start; /* 레이블을 컨테이너의 시작 부분에 정렬 */
    margin-bottom: 5px;
  }
  
  .input-group input,
  .input-group select,
  .input-group textarea {
    width: 100%; /* 너비를 100%로 설정하여 컨테이너를 꽉 채움 */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .input-group button {
    align-self: flex-start; /* 버튼을 컨테이너의 시작 부분에 정렬 */
    margin-top: 10px; /* 버튼과 입력 필드 사이의 간격 */
  }
  
  .input-group .email-group,
  .input-group .certification-group {
    flex-direction: row;
    align-items: center;
  }

  .input-group .email-group label,
  .input-group .certification-group label {
    flex-basis: 100%;
    align-self: center;
  }

  .input-group .email-group input,
  .input-group .certification-group input {
    flex: 1;
    margin-right: 10px;
  }

  .btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }

  .profile-image-selector,
  .bio-group {
    width: 100%;
  }

  /* ... 다른 스타일 ... */
</style>

  