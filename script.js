{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue255;\red0\green0\blue0;
\red11\green90\blue180;\red0\green0\blue109;\red101\green76\blue29;\red144\green1\blue18;\red157\green0\blue210;
\red19\green118\blue70;\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c0;
\cssrgb\c0\c43922\c75686;\cssrgb\c0\c6275\c50196;\cssrgb\c47451\c36863\c14902;\cssrgb\c63922\c8235\c8235;\cssrgb\c68627\c0\c85882;
\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 taskForm\cf0 \strokec4  = \cf6 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 getElementById\cf0 \strokec4 (\cf8 \strokec8 'task-form'\cf0 \strokec4 );\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 taskInput\cf0 \strokec4  = \cf6 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 getElementById\cf0 \strokec4 (\cf8 \strokec8 'task-input'\cf0 \strokec4 );\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 taskList\cf0 \strokec4  = \cf6 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 getElementById\cf0 \strokec4 (\cf8 \strokec8 'task-list'\cf0 \strokec4 );\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 filterBtns\cf0 \strokec4  = \cf6 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 querySelectorAll\cf0 \strokec4 (\cf8 \strokec8 '.filter-btn'\cf0 \strokec4 );\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 taskCount\cf0 \strokec4  = \cf6 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 getElementById\cf0 \strokec4 (\cf8 \strokec8 'task-count'\cf0 \strokec4 );\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 clearBtn\cf0 \strokec4  = \cf6 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 getElementById\cf0 \strokec4 (\cf8 \strokec8 'clear-btn'\cf0 \strokec4 );\cb1 \
\
\cf2 \cb3 \strokec2 let\cf0 \strokec4  \cf6 \strokec6 tasks\cf0 \strokec4  = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "1"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Debug the C++ matrix analysis logic for the ProCalculator application."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "2"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Configure the Qt cross-platform deployment scripts on the MacBook Air."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "3"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Boot up the Ubuntu virtual machine to test network utilities in the terminal."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "4"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Wire the Arduino Uno with the IR sensor and piezo buzzer for the automation loop."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "5"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Calibrate the light-dependent resistor (LDR) inputs on the breadboard."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "6"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Complete the first-year Electrical and Electronics Engineering circuit analysis assignment."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "7"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Record the video application script for the TinkerHub Coordinator role."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "8"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Review the submitted responses for the EESA Executive Board application."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "9"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Color grade the latest @PORTAL60AI YouTube Short footage in DaVinci Resolve."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3     \{ \cf6 \strokec6 id:\cf0 \strokec4  \cf8 \strokec8 "10"\cf0 \strokec4 , \cf6 \strokec6 text:\cf0 \strokec4  \cf8 \strokec8 "Complete Day 2 of the weekly resistance training block at the gym."\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 let\cf0 \strokec4  \cf6 \strokec6 currentFilter\cf0 \strokec4  = \cf8 \strokec8 'all'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf7 \strokec7 init\cf0 \strokec4 () \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf7 \strokec7 renderTasks\cf0 \strokec4 (); \cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 taskForm\cf0 \strokec4 .\cf7 \strokec7 addEventListener\cf0 \strokec4 (\cf8 \strokec8 'submit'\cf0 \strokec4 , (\cf6 \strokec6 e\cf0 \strokec4 ) \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf6 \strokec6 e\cf0 \strokec4 .\cf7 \strokec7 preventDefault\cf0 \strokec4 ();\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 text\cf0 \strokec4  = \cf6 \strokec6 taskInput\cf0 \strokec4 .\cf6 \strokec6 value\cf0 \strokec4 .\cf7 \strokec7 trim\cf0 \strokec4 ();\cb1 \
\cb3     \cf9 \strokec9 if\cf0 \strokec4  (\cf6 \strokec6 text\cf0 \strokec4  !== \cf8 \strokec8 ''\cf0 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 push\cf0 \strokec4 (\{ \cf6 \strokec6 id:\cf0 \strokec4  \cf6 \strokec6 Date\cf0 \strokec4 .\cf7 \strokec7 now\cf0 \strokec4 ().\cf7 \strokec7 toString\cf0 \strokec4 (), \cf6 \strokec6 text:\cf0 \strokec4  \cf6 \strokec6 text\cf0 \strokec4 , \cf6 \strokec6 completed:\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4  \});\cb1 \
\cb3         \cf7 \strokec7 renderTasks\cf0 \strokec4 (); \cb1 \
\cb3         \cf6 \strokec6 taskInput\cf0 \strokec4 .\cf6 \strokec6 value\cf0 \strokec4  = \cf8 \strokec8 ''\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3 \});\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 taskList\cf0 \strokec4 .\cf7 \strokec7 addEventListener\cf0 \strokec4 (\cf8 \strokec8 'click'\cf0 \strokec4 , (\cf6 \strokec6 e\cf0 \strokec4 ) \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 item\cf0 \strokec4  = \cf6 \strokec6 e\cf0 \strokec4 .\cf6 \strokec6 target\cf0 \strokec4 .\cf7 \strokec7 closest\cf0 \strokec4 (\cf8 \strokec8 '.task-item'\cf0 \strokec4 );\cb1 \
\cb3     \cf9 \strokec9 if\cf0 \strokec4  (!\cf6 \strokec6 item\cf0 \strokec4 ) \cf9 \strokec9 return\cf0 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 id\cf0 \strokec4  = \cf6 \strokec6 item\cf0 \strokec4 .\cf6 \strokec6 dataset\cf0 \strokec4 .\cf6 \strokec6 id\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf9 \strokec9 if\cf0 \strokec4  (\cf6 \strokec6 e\cf0 \strokec4 .\cf6 \strokec6 target\cf0 \strokec4 .\cf6 \strokec6 classList\cf0 \strokec4 .\cf7 \strokec7 contains\cf0 \strokec4 (\cf8 \strokec8 'task-checkbox'\cf0 \strokec4 )) \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 task\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 find\cf0 \strokec4 (\cf6 \strokec6 t\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  \cf6 \strokec6 t\cf0 \strokec4 .\cf6 \strokec6 id\cf0 \strokec4  === \cf6 \strokec6 id\cf0 \strokec4 );\cb1 \
\cb3         \cf6 \strokec6 task\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4  = !\cf6 \strokec6 task\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4 ;\cb1 \
\cb3         \cf7 \strokec7 renderTasks\cf0 \strokec4 ();\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf9 \strokec9 if\cf0 \strokec4  (\cf6 \strokec6 e\cf0 \strokec4 .\cf6 \strokec6 target\cf0 \strokec4 .\cf7 \strokec7 closest\cf0 \strokec4 (\cf8 \strokec8 '.delete-btn'\cf0 \strokec4 )) \{\cb1 \
\cb3         \cf6 \strokec6 item\cf0 \strokec4 .\cf6 \strokec6 classList\cf0 \strokec4 .\cf7 \strokec7 add\cf0 \strokec4 (\cf8 \strokec8 'fade-out'\cf0 \strokec4 );\cb1 \
\cb3         \cf7 \strokec7 setTimeout\cf0 \strokec4 (() \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\cb3             \cf6 \strokec6 tasks\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 filter\cf0 \strokec4 (\cf6 \strokec6 t\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  \cf6 \strokec6 t\cf0 \strokec4 .\cf6 \strokec6 id\cf0 \strokec4  !== \cf6 \strokec6 id\cf0 \strokec4 );\cb1 \
\cb3             \cf7 \strokec7 renderTasks\cf0 \strokec4 ();\cb1 \
\cb3         \}, \cf10 \strokec10 250\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3 \});\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 filterBtns\cf0 \strokec4 .\cf7 \strokec7 forEach\cf0 \strokec4 (\cf6 \strokec6 btn\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf6 \strokec6 btn\cf0 \strokec4 .\cf7 \strokec7 addEventListener\cf0 \strokec4 (\cf8 \strokec8 'click'\cf0 \strokec4 , () \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\cb3         \cf6 \strokec6 filterBtns\cf0 \strokec4 .\cf7 \strokec7 forEach\cf0 \strokec4 (\cf6 \strokec6 b\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  \cf6 \strokec6 b\cf0 \strokec4 .\cf6 \strokec6 classList\cf0 \strokec4 .\cf7 \strokec7 remove\cf0 \strokec4 (\cf8 \strokec8 'active'\cf0 \strokec4 ));\cb1 \
\cb3         \cf6 \strokec6 btn\cf0 \strokec4 .\cf6 \strokec6 classList\cf0 \strokec4 .\cf7 \strokec7 add\cf0 \strokec4 (\cf8 \strokec8 'active'\cf0 \strokec4 );\cb1 \
\cb3         \cf6 \strokec6 currentFilter\cf0 \strokec4  = \cf6 \strokec6 btn\cf0 \strokec4 .\cf6 \strokec6 dataset\cf0 \strokec4 .\cf6 \strokec6 filter\cf0 \strokec4 ;\cb1 \
\cb3         \cf7 \strokec7 renderTasks\cf0 \strokec4 ();\cb1 \
\cb3     \});\cb1 \
\cb3 \});\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 clearBtn\cf0 \strokec4 .\cf7 \strokec7 addEventListener\cf0 \strokec4 (\cf8 \strokec8 'click'\cf0 \strokec4 , () \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf6 \strokec6 tasks\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 filter\cf0 \strokec4 (\cf6 \strokec6 t\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  !\cf6 \strokec6 t\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4 );\cb1 \
\cb3     \cf7 \strokec7 renderTasks\cf0 \strokec4 ();\cb1 \
\cb3 \});\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf7 \strokec7 renderTasks\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf2 \strokec2 let\cf0 \strokec4  \cf6 \strokec6 filteredTasks\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 ;\cb1 \
\cb3     \cf9 \strokec9 if\cf0 \strokec4  (\cf6 \strokec6 currentFilter\cf0 \strokec4  === \cf8 \strokec8 'pending'\cf0 \strokec4 ) \cf6 \strokec6 filteredTasks\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 filter\cf0 \strokec4 (\cf6 \strokec6 t\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  !\cf6 \strokec6 t\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4 );\cb1 \
\cb3     \cf9 \strokec9 else\cf0 \strokec4  \cf9 \strokec9 if\cf0 \strokec4  (\cf6 \strokec6 currentFilter\cf0 \strokec4  === \cf8 \strokec8 'completed'\cf0 \strokec4 ) \cf6 \strokec6 filteredTasks\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 filter\cf0 \strokec4 (\cf6 \strokec6 t\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  \cf6 \strokec6 t\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4 );\cb1 \
\
\cb3     \cf6 \strokec6 taskList\cf0 \strokec4 .\cf6 \strokec6 innerHTML\cf0 \strokec4  = \cf8 \strokec8 ''\cf0 \strokec4 ;\cb1 \
\cb3     \cf6 \strokec6 filteredTasks\cf0 \strokec4 .\cf7 \strokec7 forEach\cf0 \strokec4 (\cf6 \strokec6 task\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 li\cf0 \strokec4  = \cf6 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 createElement\cf0 \strokec4 (\cf8 \strokec8 'li'\cf0 \strokec4 );\cb1 \
\cb3         \cf6 \strokec6 li\cf0 \strokec4 .\cf6 \strokec6 className\cf0 \strokec4  = \cf8 \strokec8 `task-item \cf2 \strokec2 $\{\cf6 \strokec6 task\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4  ? \cf8 \strokec8 'completed'\cf0 \strokec4  : \cf8 \strokec8 ''\cf2 \strokec2 \}\cf8 \strokec8 `\cf0 \strokec4 ;\cb1 \
\cb3         \cf6 \strokec6 li\cf0 \strokec4 .\cf6 \strokec6 dataset\cf0 \strokec4 .\cf6 \strokec6 id\cf0 \strokec4  = \cf6 \strokec6 task\cf0 \strokec4 .\cf6 \strokec6 id\cf0 \strokec4 ;\cb1 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 li\cf0 \strokec4 .\cf6 \strokec6 innerHTML\cf0 \strokec4  = \cf8 \strokec8 `\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8             <input type="checkbox" class="task-checkbox" \cf2 \strokec2 $\{\cf6 \strokec6 task\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4  ? \cf8 \strokec8 'checked'\cf0 \strokec4  : \cf8 \strokec8 ''\cf2 \strokec2 \}\cf8 \strokec8 >\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8             <span class="task-text">\cf2 \strokec2 $\{\cf6 \strokec6 task\cf0 \strokec4 .\cf6 \strokec6 text\cf2 \strokec2 \}\cf8 \strokec8 </span>\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8             <button class="delete-btn" aria-label="Delete task">\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8                     <line x1="18" y1="6" x2="6" y2="18"></line>\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8                     <line x1="6" y1="6" x2="18" y2="18"></line>\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8                 </svg>\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8             </button>\cf0 \cb1 \strokec4 \
\cf8 \cb3 \strokec8         `\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3         \cf6 \strokec6 taskList\cf0 \strokec4 .\cf7 \strokec7 appendChild\cf0 \strokec4 (\cf6 \strokec6 li\cf0 \strokec4 );\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 pendingTasks\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 filter\cf0 \strokec4 (\cf6 \strokec6 t\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  !\cf6 \strokec6 t\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4 ).\cf6 \strokec6 length\cf0 \strokec4 ;\cb1 \
\cb3     \cf6 \strokec6 taskCount\cf0 \strokec4 .\cf6 \strokec6 textContent\cf0 \strokec4  = \cf8 \strokec8 `\cf2 \strokec2 $\{\cf6 \strokec6 pendingTasks\cf2 \strokec2 \}\cf8 \strokec8  \cf2 \strokec2 $\{\cf6 \strokec6 pendingTasks\cf0 \strokec4  === \cf10 \strokec10 1\cf0 \strokec4  ? \cf8 \strokec8 'task'\cf0 \strokec4  : \cf8 \strokec8 'tasks'\cf2 \strokec2 \}\cf8 \strokec8  remaining`\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 hasCompleted\cf0 \strokec4  = \cf6 \strokec6 tasks\cf0 \strokec4 .\cf7 \strokec7 some\cf0 \strokec4 (\cf6 \strokec6 t\cf0 \strokec4  \cf2 \strokec2 =>\cf0 \strokec4  \cf6 \strokec6 t\cf0 \strokec4 .\cf6 \strokec6 completed\cf0 \strokec4 );\cb1 \
\cb3     \cf9 \strokec9 if\cf0 \strokec4  (\cf6 \strokec6 hasCompleted\cf0 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 clearBtn\cf0 \strokec4 .\cf6 \strokec6 classList\cf0 \strokec4 .\cf7 \strokec7 remove\cf0 \strokec4 (\cf8 \strokec8 'hidden'\cf0 \strokec4 );\cb1 \
\cb3     \} \cf9 \strokec9 else\cf0 \strokec4  \{\cb1 \
\cb3         \cf6 \strokec6 clearBtn\cf0 \strokec4 .\cf6 \strokec6 classList\cf0 \strokec4 .\cf7 \strokec7 add\cf0 \strokec4 (\cf8 \strokec8 'hidden'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 init\cf0 \strokec4 ();\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf11 \cb3 \strokec11 // --- NEW INTERACTIVE BACKGROUND LOGIC ---\cf0 \cb1 \strokec4 \
\cf11 \cb3 \strokec11 // This listens for mouse movement and shifts the contour lines away from the cursor\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 document\cf0 \strokec4 .\cf7 \strokec7 addEventListener\cf0 \strokec4 (\cf8 \strokec8 'mousemove'\cf0 \strokec4 , (\cf6 \strokec6 e\cf0 \strokec4 ) \cf2 \strokec2 =>\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 x\cf0 \strokec4  = \cf6 \strokec6 e\cf0 \strokec4 .\cf6 \strokec6 clientX\cf0 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 y\cf0 \strokec4  = \cf6 \strokec6 e\cf0 \strokec4 .\cf6 \strokec6 clientY\cf0 \strokec4 ;\cb1 \
\cb3     \cf6 \strokec6 document\cf0 \strokec4 .\cf6 \strokec6 body\cf0 \strokec4 .\cf6 \strokec6 style\cf0 \strokec4 .\cf7 \strokec7 setProperty\cf0 \strokec4 (\cf8 \strokec8 '--mouse-x'\cf0 \strokec4 , \cf8 \strokec8 `\cf2 \strokec2 $\{\cf6 \strokec6 x\cf2 \strokec2 \}\cf8 \strokec8 px`\cf0 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 document\cf0 \strokec4 .\cf6 \strokec6 body\cf0 \strokec4 .\cf6 \strokec6 style\cf0 \strokec4 .\cf7 \strokec7 setProperty\cf0 \strokec4 (\cf8 \strokec8 '--mouse-y'\cf0 \strokec4 , \cf8 \strokec8 `\cf2 \strokec2 $\{\cf6 \strokec6 y\cf2 \strokec2 \}\cf8 \strokec8 px`\cf0 \strokec4 );\cb1 \
\cb3 \});\cb1 \
\
}