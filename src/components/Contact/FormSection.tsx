import { Button } from "../Global/Button"
import { Input } from "./Input"
import { TextArea } from "./TextArea"

export function FormSection() {
  return (
    <form className="mt-14 space-y-10">
      <div className="flex gap-8 max-w-[1008px]">
        <div className="flex-1">
          <Input type="text" id="name" placeholder="Digite seu nomenome">
            Nome
          </Input>
        </div>
        <div className="flex-1">
          <Input type="tel" id="phone" placeholder="(DDD)">
            Número
          </Input>
        </div>
      </div>
      <div className="flex gap-8 max-w-[1008px]">
        <div className="flex-1">
          <TextArea />
        </div>
        <div className="flex-1">
          <Input type="email" id="email" placeholder="Digite aqui o seu e-mail">
            E-mail
          </Input>
          <div className="mt-9 flex justify-end">
            <Button color="orange" size="base" url="/contato">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
