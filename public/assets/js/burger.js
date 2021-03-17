//copy of cats app will rework for burger app*****

// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const devourBurgBtn = document.querySelectorAll('.devour-burger');
  
    // Set up the event listener for the create button
    if (devourBurgBtn) {
      devourBurgBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newBurg = e.target.getAttribute('data-newdevour');
  
          const newBurgMenu = {
            devoured: newBurg,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newBurgMenu),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed devoured to: ${newBurg}`);
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
  
        // Grabs the value of the textarea that goes by the name, "burger"
        const newBurg = {
          name: document.getElementById('burg').value.trim(),
          // devour: document.getElementById('devour').checked,
        };
  
        // Send POST request to create a new burger
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
  
          // Reload the page so the user can see the new burger
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
  