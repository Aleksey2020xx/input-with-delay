document.addEventListener('DOMContentLoaded', function() {
  let titleText = document.querySelector('.title');
  let inputTitle = document.querySelector('.input-title');

  function count() {
    let timerId = setTimeout(function titleAdd() {
        titleText.textContent = inputTitle.value;
    }, 2000)
  }
  inputTitle.addEventListener('input', count);
  return
})

//export default count;
