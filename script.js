document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    
    // Toggle sidebar
    hamburger.addEventListener('click', function() {
        sidebar.classList.add('active');
    });
    
    // Close sidebar
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== hamburger) {
            sidebar.classList.remove('active');
        }
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Toggle icon between moon and sun
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
    
    // Close sidebar when a link is clicked (for mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    });
});
// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('theme', body.getAttribute('data-theme'));
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.getAttribute('data-theme') === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Chat Widget
const chatIcon = document.querySelector('.chat-icon');
const chatBox = document.querySelector('.chat-box');
const closeChat = document.querySelector('.close-chat');
const questionList = document.querySelector('.question-list');
const answersContainer = document.querySelector('.answers-container');

// Questions and Answers
const questions = [
    "आपके वीडियो एडिटिंग स्टाइल की खासियत क्या है?",
    "आप किन सॉफ्टवेयर्स में काम करते हैं?",
    "आपका सबसे चैलेंजिंग प्रोजेक्ट कौनसा था?",
    "आप कलर ग्रेडिंग को कैसे हैंडल करते हैं?",
    "आपकी एडिटिंग वर्कफ्लो प्रोसेस क्या है?",
    "आप ट्रेंडिंग रील्स/शॉर्ट्स कैसे एडिट करते हैं?",
    "आप किस तरह के प्रोजेक्ट्स पसंद करते हैं?",
    "आप डेडलाइन्स को कैसे मैनेज करते हैं?",
    "आपके पास कितना एक्सपीरियंस है?",
    "आप क्लाइंट फीडबैक को कैसे हैंडल करते हैं?"
];

const answers = [
    "मैं सिनेमैटिक एडिटिंग और डायनामिक ट्रांजिशन्स में स्पेशलाइज्ड हूं, स्टोरीटेलिंग पर फोकस करता हूं।",
    "Adobe Premiere Pro, After Effects, DaVinci Resolve और Final Cut Pro में काम करता हूं।",
    "50+ घंटे के रॉ फुटेज से 5-मिनट की डॉक्यूमेंट्री बनाना मेरा सबसे चैलेंजिंग प्रोजेक्ट था।",
    "DaVinci Resolve में LUTs यूज़ करता हूं, मैन्युअल कलर करेक्शन और मूड के हिसाब से ग्रेडिंग करता हूं।",
    "ब्रीफिंग → फुटेज लॉग → रफ कट → फाइनल एडिट → कलर ग्रेडिंग → साउंड डिज़ाइन → डिलीवरी।",
    "फास्ट-पेस्ड एडिट्स, बीट-सिंक्ड ट्रांजिशन्स और अटेंशन-ग्रैबिंग ओपनिंग पर फोकस करता हूं।",
    "मुझे क्रिएटिव स्टोरीटेलिंग और हाई-एनर्जी कमर्शियल दोनों प्रोजेक्ट्स पसंद हैं।",
    "प्रोजेक्ट को छोटे टास्क्स में बाँटकर टाइम मैनेजमेंट टूल्स का यूज़ करता हूं।",
    "3+ साल का एक्सपीरियंस, 50+ क्लाइंट प्रोजेक्ट्स कंप्लीट किए हैं।",
    "टाइमस्टैम्प्ड फीडबैक लेता हूं, 2 फ्री रिवीजन्स ऑफर करता हूं।"
];

// Populate questions
questions.forEach((question, index) => {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question-item');
    questionItem.textContent = question;
    questionItem.addEventListener('click', () => {
        showAnswer(index);
    });
    questionList.appendChild(questionItem);
});

function showAnswer(index) {
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create and show the selected answer
    const answerItem = document.createElement('div');
    answerItem.classList.add('answer-item', 'active');
    answerItem.textContent = answers[index];
    answersContainer.appendChild(answerItem);
    
    // Scroll to the answer
    answersContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Toggle chat box
chatIcon.addEventListener('click', () => {
    chatBox.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatBox.classList.remove('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced Chatbot Functionality
document.addEventListener('DOMContentLoaded', function() {
  const chatbotIcon = document.getElementById('chatbotIcon');
  const chatbotPopup = document.getElementById('chatbotPopup');
  const closeChatbot = document.getElementById('closeChatbot');
  
  // Toggle with better animation
  chatbotIcon.addEventListener('click', function() {
    if(chatbotPopup.classList.contains('active')) {
      chatbotPopup.classList.remove('active');
    } else {
      // Close any other open popups first
      document.querySelectorAll('.chatbot-popup.active').forEach(popup => {
        popup.classList.remove('active');
      });
      chatbotPopup.classList.add('active');
    }
  });
  
  // Smooth close
  closeChatbot.addEventListener('click', function() {
    chatbotPopup.classList.add('closing');
    setTimeout(() => {
      chatbotPopup.classList.remove('active', 'closing');
    }, 300);
  });
  
  // Better outside click handling
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.chatbot-widget')) {
      chatbotPopup.classList.add('closing');
      setTimeout(() => {
        chatbotPopup.classList.remove('active', 'closing');
      }, 300);
    }
  });
});
// Social Chatbot Functionality
document.addEventListener('DOMContentLoaded', function() {
  const socialChatbotIcon = document.getElementById('socialChatbotIcon');
  const socialChatbotPopup = document.getElementById('socialChatbotPopup');
  const closeSocialChatbot = document.getElementById('closeSocialChatbot');
  
  // Toggle social chatbot popup
  socialChatbotIcon.addEventListener('click', function() {
    socialChatbotPopup.classList.toggle('active');
  });
  
  // Close social chatbot popup
  closeSocialChatbot.addEventListener('click', function() {
    socialChatbotPopup.classList.remove('active');
  });
  
  // Close when clicking outside
  document.addEventListener('click', function(event) {
    if (!socialChatbotPopup.contains(event.target) && 
        event.target !== socialChatbotIcon &&
        !socialChatbotIcon.contains(event.target)) {
      socialChatbotPopup.classList.remove('active');
    }
  });
});