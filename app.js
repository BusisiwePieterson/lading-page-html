
const onSubmit = () => {
   const firstName  = document.getElementById("first-name")
   const lastName = document.getElementById("last-name")
   const email = document.getElementById("email")
   const password = document.getElementById("password")

   const inputs = [firstName, lastName, email, password]
   
   inputs.forEach((i) => {
    if (i.value === "") {
      i.classList.add("error")
    }
   })
   
}