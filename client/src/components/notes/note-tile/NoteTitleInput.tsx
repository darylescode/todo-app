function NoteTitleInput({ text }: { text:string }) {
  return (
    <input
      value={text}
      className="text-lg font-semibold outline outline-gray-400 outline-1 w-full"
    />
  );
}

export default NoteTitleInput
