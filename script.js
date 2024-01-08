 const sideMenu = document.getElementById("nav-items");
 const close = document.getElementById("close");
 const menu = document.getElementById("menu");


 const openMenu = () => {
    sideMenu.style.right="0";
 }

 const closeMenu = () => {
    sideMenu.style.right="-300px"
 }

 menu.addEventListener('click', () => {
    openMenu();
 } )

 close.addEventListener('click', () => {
    closeMenu();
 } )



 const scriptURL = 'https://script.google.com/macros/s/AKfycbxkpxFj64uyh-MsEvt2mYscry-PYgvrs2-DAcJlNyDDSMaA1MNRJg1ovTmCvwluxOeE/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        console.log('Success!', response);
        alert("Message Send Successfully")
      } )
      .catch(error => console.error('Error!', error.message))

        form.reset();
        return false;
  })