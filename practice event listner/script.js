
    // Click Event
    const clickButton = document.getElementById('click-btn');
    clickButton.addEventListener('click', () => {
      alert('Button Clicked!');
    });

    // Mouseover Event
    const hoverBox = document.getElementById('hover-box');
    hoverBox.addEventListener('mouseover', () => {
      hoverBox.style.backgroundColor = 'orange';
      hoverBox.textContent = 'You hovered over me!';
    });
    hoverBox.addEventListener('mouseout', () => {
      hoverBox.style.backgroundColor = 'lightblue';
      hoverBox.textContent = 'Hover over me!';
    });

    // Input Event
    const inputBox = document.getElementById('input-box');
    inputBox.addEventListener('input', (event) => {
      console.log('Input value:', event.target.value);
    });

    // Keydown Event
    const keypressOutput = document.getElementById('keypress-output');
    document.addEventListener('keydown', (event) => {
      keypressOutput.textContent = `You pressed the key: ${event.key}`;
    });

    // Double-click Event
    const colorBox = document.getElementById('color-box');
    colorBox.addEventListener('dblclick', () => {
      colorBox.style.backgroundColor = colorBox.style.backgroundColor === 'green' ? 'red' : 'green';
    });

    // Focus and Blur Events
    const focusBlurInput = document.getElementById('focus-blur-input');
    focusBlurInput.addEventListener('focus', () => {
      focusBlurInput.style.backgroundColor = 'lightyellow';
    });
    focusBlurInput.addEventListener('blur', () => {
      focusBlurInput.style.backgroundColor = '';
    });

    // Submit Event
    const myForm = document.getElementById('my-form');
    myForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission for demo
      alert('Form Submitted!');
    });

    // Resize Event
    window.addEventListener('resize', () => {
      const resizeBox = document.getElementById('resize-box');
      resizeBox.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
    });

    // Drag Event
    const dragBox = document.getElementById('drag-box');
    dragBox.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', 'Dragged Box');
    });

    // Drop Event
    const dropArea = document.getElementById('drop-area');
    dropArea.addEventListener('dragover', (event) => {
      event.preventDefault(); // Allow drop
    });
    dropArea.addEventListener('drop', (event) => {
      event.preventDefault();
      dropArea.textContent = 'Box Dropped!';
    });