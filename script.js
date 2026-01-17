// This code runs when the page is fully loaded
    function openTab(evt, tabName) {
      var i, tabcontent, tablinks;

  // Hide all elements with class="tab-content"
      tabcontent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
  }
// Remove the class "active" from all buttons
      tablinks = document.getElementsByClassName("tab-link");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the specific tab and mark the button as active
      const targetTab = document.getElementById(tabName);
      if (targetTab) {
          targetTab.style.display = "block";
          evt.currentTarget.className += " active";
  }
}  
// 2. Event Listeners: Runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');

    // Only add listener if the button exists on the page
    if (button) {
        button.addEventListener('click', () => {
            alert('You clicked the button!');
        });
    }
});
