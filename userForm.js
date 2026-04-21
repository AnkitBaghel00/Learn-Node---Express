function userForm(req, resp){
resp.write(`
      <form action="/submit" method="post">
        <input type="text" name="name" id="">
     <input type="text" name="email" id="">
     <button>Submit</button>
   </form>`)
}
module.exports = userForm;