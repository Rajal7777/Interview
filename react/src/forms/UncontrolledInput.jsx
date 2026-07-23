const ModernForm = () => {
  async function handleSubmitAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);
  }

  return (
    <form action={handleSubmitAction}>
      email
      <input type="email" name="email" defaultValue="" />
      password
      <input type="password" name="password" defaultValue="" />
      <button type="submit">submit</button>
    </form>
  );
};

export default ModernForm;
