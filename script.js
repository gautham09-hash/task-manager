const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const taskCount = document.getElementById('task-count');
const clearBtn = document.getElementById('clear-btn');

let tasks = [
    { id: "1", text: "Debug the C++ matrix analysis logic for the ProCalculator application.", completed: false },
    { id: "2", text: "Configure the Qt cross-platform deployment scripts on the MacBook Air.", completed: false },
    { id: "3", text: "Boot up the Ubuntu virtual machine to test network utilities in the terminal.", completed: false },
    { id: "4", text: "Wire the Arduino Uno with the IR sensor and piezo buzzer for the automation loop.", completed: false },
    { id: "5", text: "Calibrate the light-dependent resistor (LDR) inputs on the breadboard.", completed: false },
    { id: "6", text: "Complete the first-year Electrical and Electronics Engineering circuit analysis assignment.", completed: false },
    { id: "7", text: "Record the video application script for the TinkerHub Coordinator role.", completed: false },
    { id: "8", text: "Review the submitted responses for the EESA Executive Board application.", completed: false },
    { id: "9", text: "Color grade the latest @PORTAL60AI YouTube Short footage in DaVinci Resolve.", completed: false },
    { id: "10", text: "Complete Day 2 of the weekly resistance training block at the gym.", completed: false }
];

let currentFilter = 'all';

function init() { 
    renderTasks(); 
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({ id: Date.now().toString(), text: text, completed: false });
        renderTasks(); 
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    const item = e.target.closest('.task-item');
    if (!item) return;
    const id = item.dataset.id;

    if (e.target.classList.contains('task-checkbox')) {
        const task = tasks.find(t => t.id === id);
        task.completed = !task.completed;
        renderTasks();
    }

    if (e.target.closest('.delete-btn')) {
        item.classList.add('fade-out');
        setTimeout(() => {
            tasks = tasks.filter(t => t.id !== id);
            renderTasks();
        }, 250);
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

clearBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    renderTasks();
});

function renderTasks() {
    let filteredTasks = tasks;
    if (currentFilter === 'pending') filteredTasks = tasks.filter(t => !t.completed);
    else if (currentFilter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    taskList.innerHTML = '';
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;
        
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" aria-label="Delete task">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;
        taskList.appendChild(li);
    });

    const pendingTasks = tasks.filter(t => !t.completed).length;
    taskCount.textContent = `${pendingTasks} ${pendingTasks === 1 ? 'task' : 'tasks'} remaining`;

    const hasCompleted = tasks.some(t => t.completed);
    if (hasCompleted) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
}

init();

// --- NEW INTERACTIVE BACKGROUND LOGIC ---
// This listens for mouse movement and shifts the contour lines away from the cursor
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty('--mouse-x', `${x}px`);
    document.body.style.setProperty('--mouse-y', `${y}px`);
});
