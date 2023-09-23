const MAX_FILE_SIZE_MB = 2;

const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input');
const imageInfo = document.getElementById('image-info');
const deleteButton = document.getElementById('delete-button');
const uploadedImage = document.getElementById('uploaded-image');

uploadButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    if (!selectedFile.type.startsWith('image/')) {
      alert('Пожалуйста, выберите изображение.');
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`Файл слишком большой. Максимальный размер: ${MAX_FILE_SIZE_MB} МБ.`);
      return;
    }

    imageInfo.textContent = `Выбрано изображение: ${selectedFile.name}`;
    imageInfo.style.display = 'block';
    deleteButton.style.display = 'block';
    uploadButton.style.display = 'none';

    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      //   uploadedImage.style.display = 'block';
    };
    reader.readAsDataURL(selectedFile);
  }
});

deleteButton.addEventListener('click', () => {
  fileInput.value = '';
  imageInfo.textContent = '';
  imageInfo.style.display = 'none';
  deleteButton.style.display = 'none';
  uploadButton.style.display = 'block';
  uploadedImage.style.display = 'none';

  uploadedImage.src = '';
});
