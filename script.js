document.addEventListener('DOMContentLoaded', () => {
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const previewContainer = document.getElementById('previewContainer');
  const imagePreview = document.getElementById('imagePreview');
  const enhanceButton = document.getElementById('enhanceButton');
  const buttonText = enhanceButton.querySelector('.button-text');
  const spinner = enhanceButton.querySelector('.spinner');
  const videoContainer = document.getElementById('videoContainer');
  const videoIframe = videoContainer.querySelector('iframe');

  // Handle click on upload area
  uploadArea.addEventListener('click', () => {
    fileInput.click();
  });

  // Handle drag and drop
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#9333ea';
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#d1d5db';
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#d1d5db';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  });

  // Handle file selection
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  });

  // Handle enhance button click
  enhanceButton.addEventListener('click', () => {
    enhanceButton.disabled = true;
    buttonText.textContent = 'Enhancing...';
    spinner.classList.remove('hidden');

    setTimeout(() => {
      previewContainer.classList.add('hidden');
      videoContainer.classList.remove('hidden');
      videoIframe.src =
        'https://www.youtube.com/embed/dQw4w9WgXcQ?si=JYcHMHYsQSt26iGG&controls=0&autoplay=1';

      // Reset button state
      enhanceButton.disabled = false;
      buttonText.textContent = 'Enhance Image';
      spinner.classList.add('hidden');
    }, 3000);
  });

  function handleFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      previewContainer.classList.remove('hidden');
      videoContainer.classList.add('hidden');
      videoIframe.src = '';
    };
    reader.readAsDataURL(file);
  }
});
