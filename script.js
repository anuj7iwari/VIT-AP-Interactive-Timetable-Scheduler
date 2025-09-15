import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDguREMxNYeUnBysfIyB6cCaGp8k2ZypbY",
  authDomain: "vit-ap-easy-timetable.firebaseapp.com",
  projectId: "vit-ap-easy-timetable",
  storageBucket: "vit-ap-easy-timetable.appspot.com",
  messagingSenderId: "972609523565",
  appId: "1:972609523565:web:91259fb444d72d19979464",
  measurementId: "G-H24YMP7MRT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginContainer = document.getElementById('login-container');
const appContainer = document.getElementById('app-container');
const googleLoginBtn = document.getElementById('google-login-btn');
const userInfoContainer = document.getElementById('user-info');

googleLoginBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .catch((error) => {
      console.error("Authentication failed:", error);
    });
});

function handleSignOut() {
    signOut(auth).catch((error) => {
        console.error("Sign out error:", error);
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    
    loginContainer.style.display = 'none';
    appContainer.classList.remove('hidden');
    
    userInfoContainer.innerHTML = `
      <img src="${user.photoURL}" alt="${user.displayName}" referrerpolicy="no-referrer">
      <span class="font-semibold hidden md:inline">${user.displayName}</span>
      <button id="logout-btn" class="glass-button logout-button px-3 py-1 rounded-full text-sm">Logout</button>
    `;
    document.getElementById('logout-btn').addEventListener('click', handleSignOut);
    document.getElementById('welcome-message').textContent = `Welcome back, ${user.displayName.split(' ')[0]}!`;
    
    initializeAppLogic();
  } else {
    
    loginContainer.style.display = 'flex';
    appContainer.classList.add('hidden');
  }
});


let appInitialized = false;
function initializeAppLogic() {
    if (appInitialized) return; 
    appInitialized = true;

  const schedule = [
      { day: 'Mon', startTime: '14:00', endTime: '14:50', courseName: 'Modern Physics', subjectCode: 'T2-PHY1008', instructor: 'SARONATH HALDER', location: 'Academic Block 2 (AB-2) - ETH-G06', type: 'Theory' },
      { day: 'Tue', startTime: '10:00', endTime: '11:40', courseName: 'Calculus for Engineers', subjectCode: 'MAT1001', instructor: 'Saikat Roy', location: 'Academic Block 1 (AB-1) - ELA-G22', type: 'Lab' },
      { day: 'Tue', startTime: '14:00', endTime: '14:50', courseName: 'Problem Solving using Python', subjectCode: 'F2-CSE1012', instructor: 'Ajay Dagar', location: 'Academic Block 1 (AB-1) - ETH-412', type: 'Theory' },
      { day: 'Tue', startTime: '15:00', endTime: '16:40', courseName: 'Modern Physics', subjectCode: 'A2-PHY1008', instructor: 'SARONATH HALDER', location: 'Academic Block 2 (AB-2) - ETH-G06', type: 'Theory' },
      { day: 'Tue', startTime: '17:30', endTime: '18:20', courseName: 'Calculus for Engineers', subjectCode: 'C2-MAT1001', instructor: 'Varunkumar Merugu', location: 'Academic Block 1 (AB-1) - ETH-134', type: 'Theory' },
      { day: 'Tue', startTime: '18:20', endTime: '19:00', courseName: 'Digital Logic Design', subjectCode: 'TDO2-ECE1003', instructor: 'Kharwar Vikas Vishnu', location: 'Academic Block 1 (AB-1) - ETH-420', type: 'Theory' },
      { day: 'Wed', startTime: '10:00', endTime: '11:40', courseName: 'Modern Physics', subjectCode: 'PHY1008', instructor: 'S Dasaradha Ramarao', location: 'CB Block - ELA-224', type: 'Lab' },
      { day: 'Wed', startTime: '14:00', endTime: '14:50', courseName: 'Digital Logic Design', subjectCode: 'D2-ECE1003', instructor: 'Kharwar Vikas Vishnu', location: 'Academic Block 1 (AB-1) - ETH-420', type: 'Theory' },
      { day: 'Wed', startTime: '15:00', endTime: '16:40', courseName: 'Problem Solving using Python', subjectCode: 'F2-CSE1012', instructor: 'Ajay Dagar', location: 'Academic Block 1 (AB-1) - ETH-416', type: 'Theory' },
      { day: 'Thu', startTime: '11:50', endTime: '13:30', courseName: 'Problem Solving using Python', subjectCode: 'CSE1012', instructor: 'Praveen Maurya', location: 'Academic Block 1 (AB-1) - ELA-G03', type: 'Lab' },
      { day: 'Thu', startTime: '15:00', endTime: '15:50', courseName: 'Calculus for Engineers', subjectCode: 'C2-MAT1001', instructor: 'Varunkumar Merugu', location: 'Academic Block 1 (AB-1) - ETH-134', type: 'Theory' },
      { day: 'Thu', startTime: '15:50', endTime: '17:30', courseName: 'Modern Physics', subjectCode: 'A2-PHY1008', instructor: 'SARONATH HALDER', location: 'Academic Block 2 (AB-2) - ETH-G06', type: 'Theory' },
      { day: 'Thu', startTime: '17:30', endTime: '18:20', courseName: 'Digital Logic Design', subjectCode: 'D2-ECE1003', instructor: 'Kharwar Vikas Vishnu', location: 'Academic Block 1 (AB-1) - ETH-420', type: 'Theory' },
      { day: 'Thu', startTime: '18:20', endTime: '19:00', courseName: 'Problem Solving using Python', subjectCode: 'TFF2-CSE1012', instructor: 'Ajay Dagar', location: 'Academic Block 1 (AB-1) - ETH-416', type: 'Theory' },
      { day: 'Fri', startTime: '10:00', endTime: '11:40', courseName: 'Digital Logic Design', subjectCode: 'ECE1003', instructor: 'Atul Shankar Mani Tripathi', location: 'Academic Block 1 (AB-1) - ELA-314', type: 'Lab' },
      { day: 'Fri', startTime: '14:00', endTime: '14:50', courseName: 'Calculus for Engineers', subjectCode: 'TC2-MAT1001', instructor: 'Varunkumar Merugu', location: 'Academic Block 1 (AB-1) - ETH-G06', type: 'Theory' },
      { day: 'Fri', startTime: '17:00', endTime: '18:40', courseName: 'Modern Physics', subjectCode: 'A2-PHY1008', instructor: 'SARONATH HALDER', location: 'Academic Block 2 (AB-2) - ETH-G06', type: 'Theory' },
      { day: 'Fri', startTime: '18:40', endTime: '20:00', courseName: 'Problem Solving using Python', subjectCode: 'TF2-CSE1012', instructor: 'Ajay Dagar', location: 'Academic Block 1 (AB-1) - ETH-416', type: 'Theory' },
      { day: 'Sat', startTime: '10:00', endTime: '13:20', courseName: 'Ethics and Values', subjectCode: 'MGT1001', instructor: 'Naveen Kumar Chenupally', location: 'Online - ONL', type: 'Lab' },
      { day: 'Sat', startTime: '14:00', endTime: '14:50', courseName: 'Digital Logic Design', subjectCode: 'TD2-ECE1003', instructor: 'Kharwar Vikas Vishnu', location: 'Academic Block 1 (AB-1) - ETH-420', type: 'Theory' },
      { day: 'Sat', startTime: '15:00', endTime: '16:40', courseName: 'Digital Logic Design', subjectCode: 'D2-ECE1003', instructor: 'Kharwar Vikas Vishnu', location: 'Academic Block 1 (AB-1) - ETH-420', type: 'Theory' },
      { day: 'Sat', startTime: '16:40', endTime: '17:30', courseName: 'Problem Solving using Python', subjectCode: 'F2-CSE1012', instructor: 'Ajay Dagar', location: 'Academic Block 1 (AB-1) - ETH-416', type: 'Theory' },
      { day: 'Sat', startTime: '17:30', endTime: '18:20', courseName: 'Calculus for Engineers', subjectCode: 'C2-MAT1001', instructor: 'Varunkumar Merugu', location: 'Academic Block 1 (AB-1) - ETH-134', type: 'Theory' },
  ];
  
  const userCourses = {
      'Problem Solving using Python': { bg: 'rgba(66, 133, 244, 0.1)', border: '#4285F4', text: '#2a56c8' },
      'Calculus for Engineers': { bg: 'rgba(155, 114, 203, 0.1)', border: '#9b72cb', text: '#6b439c' },
      'Modern Physics': { bg: 'rgba(52, 168, 83, 0.1)', border: '#34A853', text: '#1a7337' },
      'Digital Logic Design': { bg: 'rgba(234, 67, 53, 0.1)', border: '#EA4335', text: '#b3261e' },
      'Ethics and Values': { bg: 'rgba(251, 188, 5, 0.1)', border: '#FBBC05', text: '#e39a00' },
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MINUTE_TO_PX = 1.5;
  const CARD_GAP = 5;
  const MIN_CARD_HEIGHT = 110;
  let phraseIsActive = false;

  function timeToMinutes(timeStr) {
      if (!timeStr || !/^\d{2}:\d{2}$/.test(timeStr)) return 0;
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
  }

  function formatTime12hr(date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = String(minutes).padStart(2, '0');
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  function formatTimeStr12hr(timeStr) {
      if (!timeStr || !/^\d{2}:\d{2}$/.test(timeStr)) return "Invalid Time";
      const [hours, minutes] = timeStr.split(':').map(Number);
      const d = new Date();
      d.setHours(hours, minutes);
      return formatTime12hr(d);
  }

  function displayDay(selectedDay) {
      const timeline = document.getElementById('day-timeline');
      if (!timeline) return;
      
      const totalHours = (21 - 8);
      timeline.style.height = `${totalHours * 60 * MINUTE_TO_PX}px`;
      timeline.innerHTML = '<div class="timeline-line"></div>';

      const classesForDay = schedule
          .filter(c => c.day === selectedDay)
          .sort((a, b) => (a.startTime || "00:00").localeCompare(b.startTime || "00:00"));

      const timeMarkers = new Set();
      for (let i = 8; i <= 20; i++) { timeMarkers.add(`${i}:00`); }
      classesForDay.forEach(cls => {
          if (cls.startTime && /^\d{2}:\d{2}$/.test(cls.startTime) && cls.startTime.split(':')[1] !== '00') {
              timeMarkers.add(cls.startTime);
          }
      });

      timeMarkers.forEach(timeStr => {
          const marker = document.createElement('div');
          marker.className = 'time-marker';
          marker.textContent = formatTimeStr12hr(timeStr);
          const position = (timeToMinutes(timeStr) - 8 * 60) * MINUTE_TO_PX;
          marker.style.top = `${position}px`;
          timeline.appendChild(marker);
      });

      let lastCardBottom = -1;

      classesForDay.forEach((cls) => {
          const startMinutes = timeToMinutes(cls.startTime);
          const endMinutes = timeToMinutes(cls.endTime);

          if (isNaN(startMinutes) || isNaN(endMinutes) || startMinutes >= endMinutes) return;

          let top = (startMinutes - 8 * 60) * MINUTE_TO_PX;
          if (top < lastCardBottom) {
              top = lastCardBottom;
          }

          let height = (endMinutes - startMinutes) * MINUTE_TO_PX;
          if (height < MIN_CARD_HEIGHT) {
              height = MIN_CARD_HEIGHT;
          }

          const card = document.createElement('div');
          const colorInfo = userCourses[cls.courseName] || { bg: 'rgba(107, 114, 128, 0.1)', border: '#6B7280', text: '#4B5563' };
          card.className = 'class-card-timeline';
          card.style.top = `${top}px`;
          card.style.height = `${height - CARD_GAP}px`;
          card.style.backgroundColor = colorInfo.bg;
          card.style.borderColor = colorInfo.border;
          card.innerHTML = `
              <div class="flex flex-col h-full justify-center">
                  <p class="font-bold" style="color: var(--text-color)">${cls.courseName || 'N/A'} (${cls.type || 'N/A'})</p>
                  <p class="text-sm mt-1" style="color: var(--text-color-light)">${cls.instructor || 'N/A'}</p>
                  <p class="text-xs mt-2" style="color: var(--text-color-light)">${cls.location || 'N/A'}</p>
                  <p class="text-xs font-semibold mt-2" style="color:${colorInfo.border};">${formatTimeStr12hr(cls.startTime)} - ${formatTimeStr12hr(cls.endTime)}</p>
              </div>
          `;
          card.addEventListener('click', () => showClassModal(cls));
          timeline.appendChild(card);
          lastCardBottom = top + height;
      });
  }

  function showClassModal(cls) {
      const colorInfo = userCourses[cls.courseName] || { bg: 'rgba(107, 114, 128, 0.1)', border: '#6B7280' };
      const classModalContent = document.getElementById('class-modal-content');
      classModalContent.innerHTML = `
          <button id="close-class-modal" class="absolute top-4 right-6 text-3xl font-bold" style="color: var(--text-color-light)">&times;</button>
          <div class="p-2">
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full" style="background-color:${colorInfo.bg}; color:${colorInfo.border}; border: 1px solid ${colorInfo.border};">
                  ${cls.type}
              </span>
              <h2 class="text-3xl font-bold mt-3" style="color: var(--text-color)">${cls.courseName}</h2>
              <p class="text-md mb-6" style="color: var(--text-color-light)">${cls.subjectCode || ''}</p>
              <div class="space-y-4" style="color: var(--text-color)">
                  <p><strong>Instructor:</strong> ${cls.instructor}</p>
                  <p><strong>Time:</strong> ${formatTimeStr12hr(cls.startTime)} - ${formatTimeStr12hr(cls.endTime)}</p>
                  <p><strong>Location:</strong> ${cls.location}</p>
              </div>
          </div>
      `;
      document.getElementById('class-modal').classList.remove('hidden');
      setTimeout(() => { classModalContent.classList.remove('scale-95', 'opacity-0'); }, 10);
      document.getElementById('close-class-modal').addEventListener('click', closeClassModal);
  }

  function closeClassModal() {
      const classModalContent = document.getElementById('class-modal-content');
      classModalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => { document.getElementById('class-modal').classList.add('hidden'); }, 200);
  }

  function showBetaModal() {
      document.getElementById('beta-modal').classList.remove('hidden');
      setTimeout(() => { document.getElementById('beta-modal-content').classList.remove('scale-95', 'opacity-0'); }, 10);
  }
  function closeBetaModal() {
      document.getElementById('beta-modal-content').classList.add('scale-95', 'opacity-0');
      setTimeout(() => { document.getElementById('beta-modal').classList.add('hidden'); }, 200);
  }
  
  const catPhrases = [ "VIT AP is lead by cats", "Cats are coming to destroy VIT AP", "May your class get canceled due to a sudden cat attack", "Porsche manufactures high-end cats", "A cat will eat you if you don't star this project", "Cats will reach Mars before humans", "No more funny catty things... just kidding", "This was made by my cats", "VIT AP lacks cats, held a protest", "VIT AP needs more cats", "cat cat cat fat cat cat cat", "Modi ji is also secretly a cat" ];

  function updateClock() {
      if (phraseIsActive) return; // If a phrase is active, don't update the clock
      const now = new Date();
      const clockText = document.getElementById('clock-text');
      if (clockText) {
          clockText.textContent = formatTime12hr(now);
      }
  }

  function showCatPhrase() {
      phraseIsActive = true;
      const phrase = catPhrases[Math.floor(Math.random() * catPhrases.length)];
      const clockText = document.getElementById('clock-text');
      if(clockText) {
          clockText.textContent = phrase;
          setTimeout(() => {
              phraseIsActive = false;
              updateClock(); 
          }, 10000);
      }
  }

  function getTimeOfDay(timeStr) {
       const hour = parseInt(timeStr.split(':')[0]);
       if (hour < 12) return 'Morning';
       if (hour < 17) return 'Afternoon';
       return 'Evening';
  }

  function updateInfoCards() {
      const now = new Date();
      const firstClassCard = document.getElementById('first-class-card');
      const lastClassCard = document.getElementById('last-class-card');
      const nextClassCard = document.getElementById('next-class-card');

      if (!firstClassCard || !lastClassCard || !nextClassCard) return;

      const selectedDayButton = document.querySelector('#day-selector .glass-button.active');
      if (!selectedDayButton) return;
      const selectedDay = selectedDayButton.textContent;
      
      const dayClasses = schedule.filter(c => c.day === selectedDay).sort((a,b) => (a.startTime || "").localeCompare(b.startTime || ""));
      if (dayClasses.length > 0) {
          const first = dayClasses[0];
          const last = dayClasses[dayClasses.length - 1];
          firstClassCard.innerHTML = `<p class="font-semibold">${first.courseName}</p><p class="text-sm" style="color: var(--text-color-light)"><span class="font-semibold">${getTimeOfDay(first.startTime)}</span> at ${formatTimeStr12hr(first.startTime)}</p>`;
          lastClassCard.innerHTML = `<p class="font-semibold">${last.courseName}</p><p class="text-sm" style="color: var(--text-color-light)"><span class="font-semibold">${getTimeOfDay(last.startTime)}</span> at ${formatTimeStr12hr(last.startTime)}</p>`;
      } else {
          const message = `<p class="font-semibold text-green-600">No classes scheduled.</p>`;
          firstClassCard.innerHTML = message;
          lastClassCard.innerHTML = message;
      }

      const currentDayIndex = (now.getDay() + 6) % 7; // Monday is 0
      const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
      let foundNext = false;

      if (currentDayIndex < days.length) {
          const runningClass = schedule.find(c => c.day === days[currentDayIndex] && currentTimeInMinutes >= timeToMinutes(c.startTime) && currentTimeInMinutes < timeToMinutes(c.endTime));
          if (runningClass) {
              nextClassCard.innerHTML = `<p class="font-semibold text-yellow-600 text-lg">In Session</p><p class="font-semibold">${runningClass.courseName}</p><p class="text-sm" style="color: var(--text-color-light)">Ends at ${formatTimeStr12hr(runningClass.endTime)}</p>`;
              foundNext = true;
          }
          if (!foundNext) {
              const nextClassToday = schedule.filter(c => c.day === days[currentDayIndex] && timeToMinutes(c.startTime) > currentTimeInMinutes).sort((a,b)=>a.startTime.localeCompare(b.startTime))[0];
              if (nextClassToday) {
                  nextClassCard.innerHTML = `<p class="font-semibold text-blue-600 text-lg">${nextClassToday.courseName}</p><p><strong>Today at ${formatTimeStr12hr(nextClassToday.startTime)}</strong></p><p class="text-sm" style="color: var(--text-color-light)">${nextClassToday.location}</p>`;
                  foundNext = true;
              }
          }
      }

      if (!foundNext) {
          for (let i = 1; i <= 7; i++) {
              const nextDayIndex = (currentDayIndex + i) % 7;
              const nextDayStr = days[nextDayIndex];
              if(nextDayStr){
                  const nextClass = schedule.filter(c => c.day === nextDayStr).sort((a,b)=>a.startTime.localeCompare(b.startTime))[0];
                  if (nextClass) {
                      nextClassCard.innerHTML = `<p class="font-semibold text-blue-600 text-lg">${nextClass.courseName}</p><p><strong>${nextClass.day} at ${formatTimeStr12hr(nextClass.startTime)}</strong></p><p class="text-sm" style="color: var(--text-color-light)">${nextClass.location}</p>`;
                      foundNext = true;
                      break;
                  }
              }
          }
      }
      
      if (!foundNext) {
          nextClassCard.innerHTML = `<p class="text-lg font-semibold text-green-600">All classes are finished for the week!</p>`;
      }
  }

  function renderCourseLegend() {
      const legendContainer = document.getElementById('course-legend');
      let legendHTML = `<h3 class="font-bold text-center mb-3">Course Legend</h3><div class="flex flex-wrap justify-center gap-x-6 gap-y-2">`;
      for (const courseName in userCourses) {
          const colorInfo = userCourses[courseName];
          legendHTML += `
              <div class="flex items-center gap-2">
                  <span class="w-4 h-4 rounded-full" style="background-color: ${colorInfo.border};"></span>
                  <span class="text-sm" style="color: var(--text-color-light)">${courseName}</span>
              </div>
          `;
      }
      legendHTML += '</div>';
      legendContainer.innerHTML = legendHTML;
  }

  function setupDaySelector() {
      const container = document.getElementById('day-selector');
      container.innerHTML = '';
      days.forEach(day => {
          const button = document.createElement('button');
          button.className = 'glass-button px-4 py-2 rounded-full font-semibold';
          button.textContent = day;
          button.onclick = () => {
              document.querySelectorAll('#day-selector button').forEach(btn => btn.classList.remove('active'));
              button.classList.add('active');
              displayDay(day);
              updateInfoCards();
          };
          container.appendChild(button);
      });
  }

  function setupThemeSwitcher() {
      const themeSelect = document.getElementById('theme-select');
      const savedTheme = localStorage.getItem('timetableTheme') || 'theme-light';
      
      document.documentElement.className = savedTheme;
      themeSelect.value = savedTheme;

      themeSelect.addEventListener('change', (e) => {
          const newTheme = e.target.value;
          document.documentElement.className = newTheme;
          localStorage.setItem('timetableTheme', newTheme);
      });
  }
  
  // --- App Initialization ---
  setupDaySelector();
  renderCourseLegend();
  setupThemeSwitcher();
  
  document.getElementById('beta-button').addEventListener('click', showBetaModal);
  document.getElementById('class-modal').addEventListener('click', (e) => { if (e.target === document.getElementById('class-modal')) closeClassModal(); });
  document.getElementById('beta-modal').addEventListener('click', (e) => { if (e.target === document.getElementById('beta-modal')) closeBetaModal(); });

  const now = new Date();
  let currentDayIndex = now.getDay() - 1; // Monday = 0, Sunday = -1
  if (currentDayIndex < 0 || currentDayIndex >= days.length) {
      currentDayIndex = 0; 
  }
  
  const dayButtons = document.querySelectorAll('#day-selector button');
  if (dayButtons.length > currentDayIndex) {
      dayButtons[currentDayIndex].click(); // Simulate a click to set the day and update cards
  }
  
  updateInfoCards();
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(showCatPhrase, 60000);
  setInterval(updateInfoCards, 60000);
}

