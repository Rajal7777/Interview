import { useActionState } from "react";

async function updateName(prevState, formData) {
  console.log('prevState',prevState, formData);
  console.log(formData.get("name"));
  const res = await formData.get("name");
  return {
    message: res,
  };
}

export default function UseActionState() {
  const [state, formAction, isPending] = useActionState(updateName, null);
  return (
    <div>
      UseActionState
      <form action={formAction}>
        <input type="text" name="name" defaultValue="Enter Name" />
        <button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
      {state && <p>{state.message}</p>}
    </div>
  );
}
