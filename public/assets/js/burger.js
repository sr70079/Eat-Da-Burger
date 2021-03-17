//copy of cats app will rework for burger app*****

// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeSleepBtns = document.querySelectorAll('.change-sleep');
  
    // Set up the event listener for the create button
    if (changeSleepBtns) {
      changeSleepBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newSleep = e.target.getAttribute('data-newsleep');
  
          const newSleepState = {
            sleepy: newSleep,
          };
  
          fetch(`/api/cats/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newSleepState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed sleep to: ${newSleep}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE - updated from cat to burger mostly
    const createBurgBtn = document.getElementById('create-form');
  
    if (createBurgBtn) {
      createBurgBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurg = {
          name: document.getElementById('burg').value.trim(),
          // devour: document.getElementById('devour').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // Make sure to serialize the JSON body
          body: JSON.stringify(newBurg),
        }).then(() => {
          // Empty the form
          document.getElementById('burg').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  });

  // DELETE - Devour
  // Get the button
  const devourBurgerBtns = document.querySelectorAll('.delburg')

  // Set up the event listeners for each delete button
  devourBurgerBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('burger-burgname')
      console.log("devour burger name", id)

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: 'DELETE',
      }).then(() => {
        console.log(`Deleted ID: ${id}`)

        // Reload the page
        location.reload()
      })
    })
  })
  