import React, { useState} from "react";
import { useForm } from "react-hook-form";

import "./Mensagem.scss";


function Mensagem() {
  const {register, handleSubmit} = useForm();

  const [estrela, setEstrela] = useState(0);

  const sublimit= (e) => {
    console.log(e, 'formulario')
   
  }
  console.log(setEstrela, "estrelas")



  return (
    <>
      <div className="container-mensagem">
        <div className="modal">
          <form
            onSubmit={handleSubmit(sublimit)}
            className=" mensagem-formulario">
            <label>
              {" "}
              Digite seu nome
              <input
                type="text"
                placeholder="Digite seu nome"
                className="mensagem-input"
                required
                {...register("nome")}
              />
            </label>
            <label htmlFor="">
              Cargo e onde trabalha
              <input
                type="text"
                placeholder="Digite seu Cargo"
                required
                {...register("cargo")}
              />
            </label>
            <label htmlFor="">
              Imagem
              <input
                type="imagem"
                placeholder="URL da imagem/Avatar"
                {...register("imagem")}
              />
            </label>
            <label htmlFor="">
              Mensagem
              <textarea
                className="messagem-usuario"
                placeholder="Digite sua mensagem"
                name="mensagem"
                {...register("mensagem")}
                required></textarea>
            </label>
            <h4>Avalie meu portifolio</h4>
            <label htmlFor="" required>
              <div class="estrelas">
                <div class="estrelas">
                  <input type="radio" id="cm_star-empty" name="fb" checked />
                  <label for="cm_star-1">
                    <i class="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-1"
                    name="fb"
                    value="1"
                    {...register("estrelas")}
                  />
                  <label for="cm_star-2">
                    <i class="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-2"
                    name="fb"
                    value="2"
                    {...register("estrelas")}
                  />
                  <label for="cm_star-3">
                    <i class="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-3"
                    name="fb"
                    value="3"
                    {...register("estrelas")}
                  />
                  <label for="cm_star-4">
                    <i class="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-4"
                    name="fb"
                    value="4"
                    {...register("estrelas")}
                  />
                  <label for="cm_star-5">
                    <i class="fa"></i>
                  </label>
                  <input
                    type="radio"
                    id="cm_star-5"
                    name="fb"
                    value="5"
                    {...register("estrelas")}
                  />
                </div>
              </div>
            </label>
            <p>Estrelas selecionadas: {estrela}</p>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mensagem;

/* //3 exemplo para mudar a cor do todo o codigo
export default AppWrap(
  MotionWrap(Contato, "app__footer"),
  "contato",
  "app__whitebg"
);
*/
