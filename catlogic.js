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

const colors = {
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


function timeToMinutes(timeStr) {
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
     const [hours, minutes] = timeStr.split(':').map(Number);
     const d = new Date();
     d.setHours(hours, minutes);
     return formatTime12hr(d);
}

function getTimeOfDay(timeStr) {
    const [hours] = timeStr.split(':').map(Number);
    if (hours < 12) return 'Morning';
    if (hours < 17) return 'Afternoon';
    return 'Evening';
}

// --- Main Display Logic ---
function displayDay(selectedDay) {
    const timeline = document.getElementById('day-timeline');
    const totalHours = (21 - 8);
    timeline.style.height = `${totalHours * 60 * MINUTE_TO_PX}px`;
    timeline.innerHTML = '<div class="timeline-line"></div>';

    const classesForDay = schedule
        .filter(c => c.day === selectedDay)
        .sort((a, b) => a.startTime.localeCompare(b.startTime));

    const timeMarkers = new Set();
    for (let i = 8; i <= 20; i++) { timeMarkers.add(`${i}:00`); }
    classesForDay.forEach(cls => {
        if (cls.startTime.split(':')[1] !== '00') timeMarkers.add(cls.startTime);
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
        
        let top = (startMinutes - 8 * 60) * MINUTE_TO_PX;

        if(top < lastCardBottom) {
            top = lastCardBottom;
        }

        let height = (endMinutes - startMinutes) * MINUTE_TO_PX;
        if (height < MIN_CARD_HEIGHT) {
            height = MIN_CARD_HEIGHT;
        }

        const card = document.createElement('div');
        const colorInfo = colors[cls.courseName] || { bg: 'rgba(107, 114, 128, 0.1)', border: '#6B7280', text: '#4B5563' };
        card.className = 'class-card-timeline';
        card.style.top = `${top}px`;
        card.style.height = `${height - CARD_GAP}px`;
        card.style.backgroundColor = colorInfo.bg;
        card.style.borderColor = colorInfo.border;
        card.dataset.classIndex = schedule.indexOf(cls);
        card.innerHTML = `
            <div class="flex flex-col h-full justify-center">
                <p class="font-bold text-gray-800">${cls.courseName} (${cls.type})</p>
                <p class="text-sm text-gray-600 mt-1">${cls.instructor}</p>
                <p class="text-xs text-gray-500 mt-2">${cls.location}</p>
                <p class="text-xs font-semibold mt-2" style="color:${colorInfo.text};">${formatTimeStr12hr(cls.startTime)} - ${formatTimeStr12hr(cls.endTime)}</p>
            </div>
        `;
        card.addEventListener('click', () => showClassModal(schedule.indexOf(cls)));
        timeline.appendChild(card);
        lastCardBottom = top + height;
    });
}

// --- Modal & Clock Logic ---
const classModal = document.getElementById('class-modal');
const classModalContent = document.getElementById('class-modal-content');
const betaModal = document.getElementById('beta-modal');
const betaModalContent = document.getElementById('beta-modal-content');
const clockText = document.getElementById('clock-text');

function showClassModal(index) {
    const cls = schedule[index];
    const colorInfo = colors[cls.courseName] || { bg: 'rgba(107, 114, 128, 0.1)', border: '#6B7280' };
    classModalContent.innerHTML = `
        <button onclick="closeClassModal()" class="absolute top-4 right-6 text-3xl font-bold text-gray-400 hover:text-gray-800 transition">&times;</button>
        <div class="p-2">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full" style="background-color:${colorInfo.bg}; color:${colorInfo.border}; border: 1px solid ${colorInfo.border};">
                ${cls.type}
            </span>
            <h2 class="text-3xl font-bold text-gray-800 mt-3">${cls.courseName}</h2>
            <p class="text-md text-gray-500 mb-6">${cls.subjectCode}</p>
            <div class="space-y-4 text-gray-700">
                <p><strong>Instructor:</strong> ${cls.instructor}</p>
                <p><strong>Time:</strong> ${formatTimeStr12hr(cls.startTime)} - ${formatTimeStr12hr(cls.endTime)}</p>
                <p><strong>Location:</strong> ${cls.location}</p>
            </div>
        </div>
    `;
    classModal.classList.remove('hidden');
    setTimeout(() => { classModalContent.classList.remove('scale-95', 'opacity-0'); }, 10);
}

function closeClassModal() {
    classModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => { classModal.classList.add('hidden'); }, 200);
}
classModal.addEventListener('click', (e) => { if (e.target === classModal) closeClassModal(); });

function showBetaModal() {
    betaModal.classList.remove('hidden');
    setTimeout(() => { betaModalContent.classList.remove('scale-95', 'opacity-0'); }, 10);
}
function closeBetaModal() {
    betaModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => { betaModal.classList.add('hidden'); }, 200);
}
betaModal.addEventListener('click', (e) => { if (e.target === betaModal) closeBetaModal(); });


const catPhrases = [ "VIT AP is lead by cats", "Cats are coming to destroy VIT AP", "May your class get canceled due to a sudden cat attack", "Porsche manufactures high-end cats", "A cat will eat you if you do not give a star this project on Git-Hub ", "Cats will reach Mars before humans", "No more funny catty things... just kidding", "This was made by my cats", "VIT AP lacks cats, held a protest", "VIT AP needs more cats", "cat cat cat fat cat cat cat", "Modi ji is also secretly a cat" ];

function updateClock() {
    const now = new Date();
    if (!clockText.dataset.isPhrase) {
        clockText.textContent = formatTime12hr(now);
    }
}

function showCatPhrase() {
    const now = new Date();
    const originalTime = formatTime12hr(now);
    const phrase = catPhrases[Math.floor(Math.random() * catPhrases.length)];
    
    clockText.textContent = phrase;
    clockText.dataset.isPhrase = "true";

    setTimeout(() => {
        if (clockText.textContent === phrase) {
            clockText.textContent = originalTime;
            delete clockText.dataset.isPhrase;
        }
    }, 10000);
}

function updateInfoCards() {
    const now = new Date();
    const firstClassCard = document.getElementById('first-class-card');
    const lastClassCard = document.getElementById('last-class-card');
    const nextClassCard = document.getElementById('next-class-card');
    
    const selectedDayButton = document.querySelector('.glass-button.active');
    if (!selectedDayButton) return;
    const selectedDay = selectedDayButton.textContent;

    const dayClasses = schedule.filter(c => c.day === selectedDay).sort((a,b) => a.startTime.localeCompare(b.startTime));
    if (dayClasses.length > 0) {
        const first = dayClasses[0];
        const last = dayClasses[dayClasses.length - 1];
        firstClassCard.innerHTML = `<p class="font-semibold text-gray-800">${first.courseName}</p><p><span class="font-semibold text-gray-500">${getTimeOfDay(first.startTime)}</span> at ${formatTimeStr12hr(first.startTime)}</p>`;
        lastClassCard.innerHTML = `<p class="font-semibold text-gray-800">${last.courseName}</p><p><span class="font-semibold text-gray-500">${getTimeOfDay(last.startTime)}</span> at ${formatTimeStr12hr(last.startTime)}</p>`;
    } else {
        const message = `<p class="text-lg font-semibold text-green-600">No classes scheduled.</p>`;
        firstClassCard.innerHTML = message;
        lastClassCard.innerHTML = message;
    }

    const currentDayIndex = now.getDay() - 1;
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
    let foundNext = false;
    
    if (currentDayIndex >= 0 && currentDayIndex <= 5) {
        const runningClass = schedule.find(c => c.day === days[currentDayIndex] && currentTimeInMinutes >= timeToMinutes(c.startTime) && currentTimeInMinutes < timeToMinutes(c.endTime));
        if (runningClass) {
            nextClassCard.innerHTML = `<p class="font-semibold text-yellow-600 text-lg">In Session</p><p class="font-semibold text-gray-800">${runningClass.courseName}</p><p>Ends at ${formatTimeStr12hr(runningClass.endTime)}</p>`;
            foundNext = true;
        }
        if (!foundNext) {
            const nextClassToday = schedule.filter(c => c.day === days[currentDayIndex] && timeToMinutes(c.startTime) > currentTimeInMinutes).sort((a,b)=>a.startTime.localeCompare(b.startTime))[0];
            if (nextClassToday) {
                nextClassCard.innerHTML = `<p class="font-semibold text-blue-600 text-lg">${nextClassToday.courseName}</p><p><strong>Today at ${formatTimeStr12hr(nextClassToday.startTime)}</strong></p><p class="text-sm">${nextClassToday.location}</p>`;
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
                    nextClassCard.innerHTML = `<p class="font-semibold text-blue-600 text-lg">${nextClass.courseName}</p><p><strong>${nextClass.day} at ${formatTimeStr12hr(nextClass.startTime)}</strong></p><p class="text-sm">${nextClass.location}</p>`;
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
    let legendHTML = '<h3 class="font-bold text-center mb-3 text-gray-700">Course Legend</h3><div class="flex flex-wrap justify-center gap-x-6 gap-y-2">';
    for (const courseName in colors) {
        const colorInfo = colors[courseName];
        legendHTML += `
            <div class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full" style="background-color: ${colorInfo.border};"></span>
                <span class="text-sm text-gray-600">${courseName}</span>
            </div>
        `;
    }
    legendHTML += '</div>';
    legendContainer.innerHTML = legendHTML;
}

function setupDaySelector() {
    const container = document.getElementById('day-selector');
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

document.addEventListener('DOMContentLoaded', () => {
    setupDaySelector();
    renderCourseLegend();
    setupThemeSwitcher();

    document.getElementById('beta-button').addEventListener('click', showBetaModal);

    const now = new Date();
    let currentDayIndex = now.getDay() - 1;
    
    if (currentDayIndex < 0 || currentDayIndex > 5) {
        currentDayIndex = 0; // Default to Monday
    }
    
    document.querySelectorAll('#day-selector button')[currentDayIndex].classList.add('active');
    displayDay(days[currentDayIndex]);
    updateInfoCards();
    
    updateClock();
    setInterval(updateClock, 1000);
    setInterval(showCatPhrase, 60000);
    setInterval(updateInfoCards, 60000);
});

