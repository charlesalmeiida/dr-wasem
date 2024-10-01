export function TextArea() {
  return (
    <div className="flex flex-col space-y-4">
      <label
        htmlFor="message"
        className="font-nunito font-bold text-lg text-gray-950"
      >
        Mensagem
      </label>
      <textarea
        placeholder="Digite sua mensagem"
        className="border-x rounded-lg h-36 border-gray-700 bg-gray-600 pl-6 py-4 max-w-[488px] focus:outline-none focus:border-2  focus:border-blue"
        name="message"
        id="message"
      ></textarea>
    </div>
  )
}
