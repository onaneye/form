$(document).ready(function() {
      // Show/hide fitness details input based on radio selection
      $('input[name="fitness"]').change(function() {
        if ($(this).val() === "yes") {
          $('#fitnessDetails').show();
        } else {
          $('#fitnessDetails').hide();
        }
      });
    
    // Display passport 
    const fileUploadInput = document.getElementById('file-upload');
    const imagePreview = document.getElementById('image-preview');
   fileUploadInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  const maxSize = 1048576; // 1MB

  if (file && file.size <= maxSize) {
    // Clear previous image preview
    imagePreview.innerHTML = '';

    // Create a new image element
    const img = document.createElement('img');
    img.classList.add('preview-image');
    img.file = file;
    imagePreview.appendChild(img);

    // Create a FileReader to read the image file
    const reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  } else {
    alert('Please select a file smaller than 1MB.');
    fileUploadInput.value = '';
    imagePreview.innerHTML = ''; // Clear image preview
  }
}

});

// Adding rows 
count = 2

$('#row-one').on("click", function() {
  
  var rowHTML = `
  <tr>
    <th scope="row">${count}</th>
    <td><input type="text" id="name-of-school-attended" class="form-control" name="school-attended"/></td>
    <td><input type="number" id="year-entry" class="form-control" name="year-entry"/></td>
    <td><input type="number" id="year-graduated" class="form-control" name="year-graduated"/></td>
    <td>
      <select class="form-control" id="school-qualification" name="school-qualification">
        <option value="">B.sc</option>
        <option value="">M.sc</option>
        <option value="">Phd</option>
        <option value="">N.C.E</option>
        <option value="">OND</option>
      </select>
    </td>
  </tr>
`;

  $('.tbody').append(rowHTML);
  count++
  console.log(count)
});


//  For employment row
countX = 2
$('#row-two').on("click", function() {
  
  var rowHTML = `
  <tr>
      <th scope="row">${countX}</th>
      <td><input type="text" id="name-of-employer" class="form-control"/></td>
      <td><input type="text" id="position-held" class="form-control"/></td>
      <td><input type="number" id="employment-date" class="form-control"/></td>
      <td><input type="number" class="form-control" id="employment-resign"/></td>
   </tr>
`;

  $('.tbody-employ').append(rowHTML);
  countX++
});