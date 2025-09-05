// 로그인 체크 함수
function checkLogin() {
    if (!localStorage.getItem('loggedIn')) {
        location.href = 'login.html';
    }
}

// 로그아웃 함수
function logout() {
    localStorage.removeItem('loggedIn');
    location.href = 'login.html';
}

// 로그인 함수
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '1234') {
        localStorage.setItem('loggedIn', 'true');
        location.href = 'index.html';
    } else {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
}

// 예매 버튼 관리
function initBookingButton() {
    const targetDate = new Date('2024-09-10T00:00:00');
    const btn = document.getElementById('bookingBtn');
    const countdown = document.getElementById('countdown');
    
    function updateButton() {
        const now = new Date();
        if (now >= targetDate) {
            btn.disabled = false;
            btn.textContent = '예매하기';
            countdown.textContent = '';
        } else {
            btn.disabled = true;
            btn.textContent = '예매 준비중';
            const diff = targetDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            countdown.textContent = `9월 10일까지 ${days}일 남음`;
        }
    }
    
    updateButton();
    setInterval(updateButton, 1000);
}

// 예매 페이지로 이동
function goToBooking() {
    if (!document.getElementById('bookingBtn').disabled) {
        location.href = 'booking.html';
    }
}

// 팝업 관리
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}