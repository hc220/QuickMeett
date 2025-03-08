document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const toggleButton = document.getElementById('darkModeToggle');
    const navbar = document.querySelector('.navbar');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
        toggleButton.classList.remove('btn-outline-secondary');
        toggleButton.classList.add('btn-outline-light');
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
        toggleButton.classList.remove('btn-outline-light');
        toggleButton.classList.add('btn-outline-secondary');
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
    }
});

document.getElementById('muteButton').addEventListener('click', () => {
    // Mute/unmute logic here
});

document.getElementById('videoToggleButton').addEventListener('click', () => {
    // Video on/off logic here
});

document.getElementById('endCallButton').addEventListener('click', () => {
    // End call logic here
});

document.getElementById('screenShareButton').addEventListener('click', () => {
    // Screen share logic here
});

document.getElementById('chatToggleButton').addEventListener('click', () => {
    const chatSection = document.querySelector('.chat-section');
    chatSection.classList.toggle('hidden');
});

document.querySelector('.invite-participant .btn').addEventListener('click', () => {
    // Invite participant logic here
});

const chatInput = document.querySelector('.chat-input');
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = chatInput.value;
        const chatMessages = document.querySelector('.chat-messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        chatInput.value = '';
    }
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)'; // Slightly larger on hover
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

function openMeetingPopup() {
    const modal = document.getElementById('meetingPopup');
    modal.style.display = 'block';
    generateQRCode();
}

function closeMeetingPopup() {
    const modal = document.getElementById('meetingPopup');
    modal.style.display = 'none';
}

function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrCode');
    const meetingLink = 'https://quickmeet.com/meeting/' + Math.random().toString(36).substr(2, 9);
    document.getElementById('meetingLink').innerText = meetingLink;
    qrCodeContainer.innerHTML = ''; // Clear previous QR code
    new QRCode(qrCodeContainer, meetingLink);
}

function copyMeetingLink() {
    const meetingLink = document.getElementById('meetingLink').innerText;
    navigator.clipboard.writeText(meetingLink).then(() => {
        alert('Meeting link copied to clipboard');
    });
}

function downloadQRCode() {
    const qrCodeContainer = document.getElementById('qrCode').querySelector('img');
    const link = document.createElement('a');
    link.href = qrCodeContainer.src;
    link.download = 'meeting_qr_code.png';
    link.click();
}

function shareMeetingLink() {
    const meetingLink = document.getElementById('meetingLink').innerText;
    if (navigator.share) {
        navigator.share({
            title: 'Join my QuickMeet meeting',
            text: 'Join my QuickMeet meeting using this link:',
            url: meetingLink
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Sharing not supported on this browser. Please copy the link manually.');
    }
}
