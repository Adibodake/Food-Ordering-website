function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
    let z = document.forms["myForm"]["phonenumber"].value;
    let w = document.forms["myForm"]["your_order"].value
    let v = document.forms["myForm"]["your_address"].value
  
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\d{10}$/;

    
  
    if (x.match(letters)) {
      console.log("done....")
    }
    else {
      alert("Name must be filled out properly");
      return false;
    }
    if (w.match(letters)) {
      console.log("done....")
    }
    else {
      alert("Order name must be filled out properly");
      return false;
    }
    if (v.match(letters)) {
      console.log("done....")
    }
    else {
      alert("Your address must be filled out properly");
      return false;
    }
  
    if (y.match(mailformat)) {
      console.log("done....")
  
  
    }
    else {
      alert("You have entered an invalid email address!");
      return false;
    }

    
    if(z.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Fill Correct Phone Number");
        return false;
        }

    
    
    
  }
  